<script lang="ts">
	import type {
		CloseEventModal,
		DeleteEventModal,
		DeleteModal,
		EditEventModal,
		EditModal,
		TodoItem
	} from '../../interfaces/todo.interface';
	import DeleteForm from './DeleteForm.svelte';
	import EditForm from './EditForm.svelte';
	import ListItem from './ListItem.svelte';
	import Modal from './Modal.svelte';

	export let items: TodoItem[];

	let displayEditModal = false;
	let displayDeleteModal = false;
	let editModalObject: EditModal;
	let deleteModalObject: DeleteModal;

	function openEditModal(e: CustomEvent<EditEventModal>) {
		const { display, id, title } = e.detail;
		editModalObject = { id, title };
		displayEditModal = display;
	}

	function openDeleteModal(e: CustomEvent<DeleteEventModal>) {
		const { display, id } = e.detail;
		deleteModalObject = { id };
		displayDeleteModal = display;
	}

	function closeModal(e: CustomEvent<CloseEventModal>) {
		const { display } = e.detail;
		displayEditModal = display;
		displayDeleteModal = display;
	}
</script>

<ul>
	{#each items as item}
		<li>
			<ListItem {item} on:openEditModal={openEditModal} on:openDeleteModal={openDeleteModal} />
		</li>
	{/each}
</ul>
{#if displayEditModal}
	<Modal on:closeModal={closeModal}>
		<EditForm item={editModalObject} on:closeModal={closeModal} />
	</Modal>
{/if}
{#if displayDeleteModal}
	<Modal on:closeModal={closeModal}>
		<DeleteForm item={deleteModalObject} on:closeModal={closeModal} />
	</Modal>
{/if}

<style lang="scss">
	ul {
		text-align: left;
		padding: 0;
		margin: 0;
		list-style: none;
		width: 100%;
		max-height: 400px;
		overflow: auto;
		&::-webkit-scrollbar {
			display: none;
		}

		li {
			padding: 0;
			width: 100%;
			&:not(:last-child) {
				margin-bottom: 6px;
			}
		}
	}
</style>
