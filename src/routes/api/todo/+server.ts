import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('http://localhost:5000/todolist/all');
	const responseJSON = await response.json();
	return json(responseJSON);
};
