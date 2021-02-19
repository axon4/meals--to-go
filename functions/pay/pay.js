module.exports.getPay = (request, response, StripeClient) => {
	const body = JSON.parse(request.body);
	const { token, amount } = body;

	StripeClient.paymentIntents.create({
		amount,
		currency: 'GBP',
		payment_method_types: ['card'],
		payment_method_data: {
			type: 'card',
			card: { token }
		},
		confirm: true
	})
		.then(paymentInTent => response.json(paymentInTent))
		.catch(error => {
			response.status(400);

			return response.send(error);
		});

	response.send('WHERE\'S THE MONEYYYYYYYYYY?');
};