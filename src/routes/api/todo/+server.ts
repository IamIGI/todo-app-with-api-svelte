import { json, redirect, type RequestHandler } from '@sveltejs/kit';
import { BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch(`${BASE_URL}/all`);
	const responseJSON = await response.json();
	return json(responseJSON);
};

export const PATCH: RequestHandler = async ({ request, fetch }) => {
	const data = await request.json();
	const { id } = data;

	const res = await fetch(`${BASE_URL}/isdoneedit`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			id
		})
	});

	if (!res.ok) console.error(`Status: ${res.status}`, 'Could not edit item');

	throw redirect(303, '/');
};
