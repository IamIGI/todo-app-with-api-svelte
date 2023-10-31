<script lang="ts">
	import { X } from 'lucide-svelte';
	import type { CloseEventModal } from '../../interfaces/todo.interface';
	import { createEventDispatcher } from 'svelte';

	const dispatchClose = createEventDispatcher<{ closeModal: CloseEventModal }>();

	const closeModal = () => {
		dispatchClose('closeModal', {
			display: false
		});
	};
</script>

<div class="modal">
	<div class="modal-content">
		<div class="header">
			<button on:click={closeModal}><X /></button>
		</div>
		<slot />
	</div>
</div>

<style lang="scss">
	.header {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		padding-bottom: 10px;

		button {
			border: none;
			background-color: rgba(0, 0, 0, 0);
			border-radius: 25%;
			cursor: pointer;

			&:hover {
				background-color: var(--bg-list-item);
			}
		}
	}
	.modal {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0, 0, 0); /* Fallback color */
		background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-content {
		background-color: var(--bg-tile-color);
		height: 130px;
		width: 300px;
		padding: 10px;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>
