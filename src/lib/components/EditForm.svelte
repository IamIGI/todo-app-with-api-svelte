<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Button from './Button.svelte';
	import type { CloseEventModal, EditModal } from '../../interfaces/todo.interface';
	import { createEventDispatcher } from 'svelte';

	export let item: EditModal;
	let placeholderText = '';

	const dispatchClose = createEventDispatcher<{ closeModal: CloseEventModal }>();

	const editItemForm: SubmitFunction = async ({ cancel }) => {
		if (item.title.length === 0) {
			placeholderText = 'Provide task text';
			cancel();
		}

		return async ({ result }) => {
			placeholderText = '';
			await applyAction(result);
			dispatchClose('closeModal', {
				display: false
			});
		};
	};

	const closeModal = async () => {
		dispatchClose('closeModal', {
			display: false
		});
	};
</script>

<form method="POST" action="/todo?/editItem" use:enhance={editItemForm}>
	<input hidden name="id" value={item.id} />
	<input
		type="text"
		class="input"
		name="title"
		placeholder={placeholderText}
		bind:value={item.title}
	/>
	<div class="buttons">
		<Button appearance="edit" type="submit">Save</Button>
		<Button appearance="edit" type="button" on:click={closeModal}>Close</Button>
	</div>
</form>

<style lang="scss">
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;

		input {
			padding: 5px 3px 5px 5px;
			border-radius: 3px;
			border: none;
			-webkit-box-shadow: 0px 0px 4px 0px rgba(66, 68, 90, 1);
			-moz-box-shadow: 0px 0px 4px 0px rgba(66, 68, 90, 1);
			box-shadow: 0px 0px 4px 0px rgba(66, 68, 90, 1);
			outline: none;
		}
		.buttons {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 10px;
		}
	}
</style>
