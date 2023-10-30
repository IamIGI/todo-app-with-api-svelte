<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import SearchForm from '$lib/components/SearchForm.svelte';
	import ToDoList from '$lib/components/ToDoList.svelte';

	export let data: PageData;

	$: todo = data.todo;

	let todoString = '';

	onMount(() => {
		todoString = JSON.stringify(todo);
	});
</script>

<div class="app-wrapper">
	<h1 class="title">Todo App</h1>
	<SearchForm />
	<ToDoList items={todo} />
</div>

<style lang="scss">
	.app-wrapper {
		background-color: var(--bg-tile-color);
		border-radius: 5px;
		-webkit-box-shadow: 0px 0px 10px -3px rgba(66, 68, 90, 1);
		-moz-box-shadow: 0px 0px 10px -3px rgba(66, 68, 90, 1);
		box-shadow: 0px 0px 10px -3px rgba(66, 68, 90, 1);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
		width: 450px;
		padding: 20px 15px;

		.title {
			width: 100%;
			text-align: left;
			padding-left: 20px;
			margin: 0;
			font-size: var(--font-xxl);
		}
	}
</style>
