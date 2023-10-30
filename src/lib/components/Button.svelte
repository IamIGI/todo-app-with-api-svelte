<script lang="ts">
	export let appearance: 'edit' | 'delete';

	let node: HTMLButtonElement;
</script>

<svelte:element
	this="button"
	bind:this={node}
	class:edit={appearance === 'edit'}
	class:delete={appearance === 'delete'}
	{...$$restProps}
>
	<slot />
</svelte:element>

<!-- <button class:edit={appearance === 'edit'} class:delete={appearance === 'delete'}>
	<slot />
</button> -->

<style lang="scss">
	button {
		text-align: center;
		height: 40px;
		width: 40px;
		border-radius: 3px;
		border: none;
		cursor: pointer;
		color: white;
		&:hover {
			filter: brightness(85%);
		}
	}
	.edit {
		background-color: var(--bg-button-edit);
	}
	.delete {
		background-color: var(--bg-button-delete);
	}
</style>
