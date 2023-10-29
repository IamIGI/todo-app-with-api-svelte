import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const todoList = await fetch('api/todo');
	const todoJSON = await todoList.json();
	console.log(todoJSON);
	return {
		todo: todoJSON
	};
};
