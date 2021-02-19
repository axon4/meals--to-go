import React from 'react';
import createStripe from 'stripe-client';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { tokenReQuest } from '../../../services/cart/cartService.js';

const DebitCardInPut = ({ name, onSuccess, onFailure }) => {
	const onChange = async formData => {
		const { status, values } = formData;
		const isInComplete = Object.values(status).includes('incomplete');
		const card = {
			name,
			number: values.number,
			exp_month: values.expiry.split('/')[0],
			exp_year: values.expiry.split('/')[1],
			cvc: values.cvc
		};

		if (!isInComplete) {
			try {
				const token = await tokenReQuest(card);

				onSuccess(token);
			} catch (error) {
				console.error(error);
				onFailure();
			};
		};
	};

	return <LiteCreditCardInput onChange={onChange} />;
};

export default DebitCardInPut;