<script lang="ts">
	import type { CloseEventModal, EditEventModal, TodoItem } from '../../interfaces/todo.interface';
	import ListItem from './ListItem.svelte';
	import Modal from './Modal.svelte';

	export let items: TodoItem[];

	let displayEditModal = false;
	let displayDeleteModal = false;

	function openEditModal(e: CustomEvent<EditEventModal>) {
		const { display, id } = e.detail;
		displayEditModal = display;
		console.log(id);
	}

	function closeModal(e: CustomEvent<CloseEventModal>) {
		const { display } = e.detail;
		displayEditModal = display;
		displayDeleteModal = display;
	}
</script>

<ul>
	{#each items as item}
		<li><ListItem {item} on:openEditModal={openEditModal} /></li>
	{/each}
</ul>
{#if displayEditModal}
	<Modal on:closeModal={closeModal}>Elo</Modal>
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
