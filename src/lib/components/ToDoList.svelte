<script lang="ts">
	import type { TodoItem } from '../../interfaces/todo.interface';
	import ListItem from './ListItem.svelte';

	export let items: TodoItem[];
</script>

<ul>
	{#each items as item}
		<li><ListItem {item} /></li>
	{/each}
</ul>

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
