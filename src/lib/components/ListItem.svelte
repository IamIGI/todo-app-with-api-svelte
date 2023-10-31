<script lang="ts">
	import type { DeleteEventModal, EditEventModal, TodoItem } from '../../interfaces/todo.interface';
	import { Pencil, Trash2 } from 'lucide-svelte';
	import Button from './Button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let item: TodoItem;

	const dispatchEdit = createEventDispatcher<{ openEditModal: EditEventModal }>();
	const dispatchDelete = createEventDispatcher<{ openDeleteModal: DeleteEventModal }>();

	const openEditModal = (id: string, title: string) => {
		if (!id) console.error(`Given item do not have id: ${id}`);
		dispatchEdit('openEditModal', {
			display: true,
			id,
			title
		});
	};

	const openDeleteModal = (id: string) => {
		if (!id) console.error(`Given item do not have id: ${id}`);
		dispatchDelete('openDeleteModal', {
			display: true,
			id
		});
	};

	const editIsDone = async (id: string) => {
		const response = await fetch('/api/todo', {
			method: 'PATCH',
			body: JSON.stringify({ id }),
			headers: {
				'content-type': 'application/json'
			}
		});
	};
</script>

<div class="wrapper">
	<div class="left">
		<input type="checkbox" bind:checked={item.isDone} on:click={() => editIsDone(item._id ?? '')} />
		<p>{item.title}</p>
	</div>
	<div class="buttons">
		<Button appearance="edit" on:click={() => openEditModal(item._id ?? '', item.title)}
			><Pencil /></Button
		>
		<Button appearance="delete" on:click={() => openDeleteModal(item._id ?? '')}><Trash2 /></Button>
	</div>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		background-color: var(--bg-list-item);
		color: var(--tile-font-color);

		padding: 2px 10px;
		border-radius: 5px;
		font-size: var(--font-l);

		.left {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			gap: 10px;
			align-items: center;
		}

		.buttons {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			gap: 10px;
			align-items: center;
		}
	}

	input {
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
</style>
