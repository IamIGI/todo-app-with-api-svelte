<script lang="ts">
	import type { EditEventModal, TodoItem } from '../../interfaces/todo.interface';
	import { Pencil, Trash2 } from 'lucide-svelte';
	import Button from './Button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let item: TodoItem;

	const dispatch = createEventDispatcher<EditEventModal>();

	const openEditModal = (id: string) => {
		if (!id) console.error(`Given item do not have id: ${id}`);
		dispatch('openEditModal', {
			display: true,
			id
		});
	};
</script>

<div class="wrapper">
	<div class="left">
		<input type="checkbox" value={item.isDone} />
		<p>{item.title}</p>
	</div>
	<div class="buttons">
		<Button appearance="edit" on:click={() => openEditModal(item._id ?? '')}><Pencil /></Button>
		<!-- <button on:click={() => (display = !display)}>elo</button> -->
		<Button appearance="delete"><Trash2 /></Button>
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
