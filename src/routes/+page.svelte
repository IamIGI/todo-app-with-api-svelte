<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import SearchForm from '$lib/components/SearchForm.svelte';
	import ToDoList from '$lib/components/ToDoList.svelte';

	export let data: PageData;

	$: console.log(data.todo);
	$: todo = data.todo;

	let todoString = '';

	onMount(() => {
		todoString = JSON.stringify(todo);
	});
</script>

<SearchForm />
<ToDoList />
