import stripe from '../../lib/stripe/stripe.js';
import { host } from '../../utils/env.js';

export const tokenRequest = card => stripe.createToken({ card });

export const payRequest = (token, name, amount) => {
	return fetch(`${host}/pay`, {
		method: 'POST',
		body: JSON.stringify({
			token,
			name,
			amount
		})
	})
		.then(response => response.json())
		.catch(error => console.log(error));
};