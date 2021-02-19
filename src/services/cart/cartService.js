import stripe from '../../lib/stripe/stripe.js';
import { host } from '../../utilities/environment.js';

export const tokenReQuest = card => stripe.createToken({ card });

export const payReQuest = (token, name, amount) => {
	return fetch(`${host}/pay`, {
		method: 'POST',
		body: JSON.stringify({ token, name, amount })
	})
		.then(response => response.json())
		.catch(error => {console.error(error)});
};