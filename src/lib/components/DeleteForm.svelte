<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Button from './Button.svelte';
	import type { CloseEventModal, DeleteModal } from '../../interfaces/todo.interface';
	import { createEventDispatcher } from 'svelte';

	export let item: DeleteModal;

	const dispatchClose = createEventDispatcher<{ closeModal: CloseEventModal }>();

	const editDeleteForm: SubmitFunction = async () => {
		return async ({ result }) => {
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

<form method="POST" action="/todo?/deleteItem" use:enhance={editDeleteForm}>
	<input hidden name="id" value={item.id} />
	<p>Potwierdź decyzję</p>
	<div class="buttons">
		<Button autofocus appearance="edit" type="submit">Tak</Button>
		<Button appearance="edit" type="button" on:click={closeModal}>Nie</Button>
	</div>
</form>

<style lang="scss">
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;

		p {
			margin: 0;
			font-size: var(--font-l);
		}

		.buttons {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 10px;
		}
	}
</style>
