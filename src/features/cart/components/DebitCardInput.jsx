import React from 'react';
import createStripe from 'stripe-client';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { tokenRequest } from '../../../services/cart/cartService.js';

const DebitCardInput = ({ name, onSuccess, onFailure }) => {
	const onChange = async formData => {
		const { status, values } = formData;
		const isIncomplete = Object.values(status).includes('incomplete');
		const card = {
			name,
			number: values.number,
			exp_month: values.expiry.split('/')[0],
			exp_year: values.expiry.split('/')[1],
			cvc: values.cvc
		};

		if (!isIncomplete) {
			try {
				const token = await tokenRequest(card);

				onSuccess(token);
			} catch (error) {
				console.log(error);
				onFailure();
			};
		};
	};

	return <LiteCreditCardInput onChange={onChange} />;
};

export default DebitCardInput;