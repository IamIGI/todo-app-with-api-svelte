import { BASE_URL } from '$env/static/private';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	addItem: async ({ request, fetch }) => {
		const data = await request.formData();
		const title = data.get('title');

		const res = await fetch(`${BASE_URL}/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify({
				userName: 'sveltekit',
				title
			})
		});

		if (!res.ok) console.error(`Status: ${res.status}`, 'Could not add item');

		throw redirect(303, `/`);
	},
	editItem: async ({ request, fetch }) => {
		const data = await request.formData();
		const id = data.get('id');
		const title = data.get('title');

		const res = await fetch(`${BASE_URL}/edit`, {
			method: 'PATCH',
			body: JSON.stringify({
				id,
				userName: 'sveltekit',
				title
			})
		});

		if (!res.ok) console.error(`Status: ${res.status}`, 'Could not edit item');

		throw redirect(303, '/');
	},
	deleteItem: async ({ params, fetch }) => {
		const id = params.id;

		const res = await fetch(`${BASE_URL}/delete/${id}`, {
			method: 'DELETE'
		});

		if (!res.ok) console.error(`Status: ${res.status}`, 'Could not delete item');

		throw redirect(303, '/');
	},
	editIsDone: async ({ request, fetch }) => {
		const data = await request.formData();
		const id = data.get('id');

		const res = await fetch(`${BASE_URL}/isDoneEdit`, {
			method: 'PATCH',
			body: JSON.stringify({
				id
			})
		});

		if (!res.ok) console.error(`Status: ${res.status}`, 'Could not edit item');

		throw redirect(303, '/');
	}
};
