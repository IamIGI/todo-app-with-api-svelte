<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: console.log(data.todo);
	$: todo = data.todo;

	let todoString = '';

	onMount(() => {
		todoString = JSON.stringify(todo);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{todoString}</p>
