import { json, type RequestHandler } from '@sveltejs/kit';
import { BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch(`${BASE_URL}/all`);
	const responseJSON = await response.json();
	return json(responseJSON);
};
