<script lang="ts">
	import { Plus } from 'lucide-svelte';
	import Button from './Button.svelte';
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	let inputText: string = '';
	let placeholderText = 'Add task';

	const addItemForm: SubmitFunction = async ({ cancel }) => {
		if (inputText.length === 0) {
			placeholderText = 'Provide task text';
			cancel();
		}

		return async ({ result }) => {
			inputText = '';
			placeholderText = 'Add task';
			await applyAction(result);
		};
	};
</script>

<form method="POST" action="/todo?/addItem" use:enhance={addItemForm}>
	<input
		type="text"
		class="input"
		name="title"
		placeholder={placeholderText}
		bind:value={inputText}
	/>
	<Button appearance="edit" type="submit"><Plus /></Button>
</form>

<style lang="scss">
	form {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 10px;

		input {
			flex: 1;
			padding-left: 10px;
		}
	}
</style>
