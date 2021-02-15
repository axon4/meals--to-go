module.exports.getPay = (request, response, stripeClient) => {
	const body = JSON.parse(request.body);
	const { token, amount } = body;

	stripeClient.paymentIntents.create({
		amount,
		currency: 'GBP',
		payment_method_types: ['card'],
		payment_method_data: {
			type: 'card',
			card: {
				token
			}
		},
		confirm: true
	})
		.then(paymentIntent => response.json(paymentIntent))
		.catch(error => {
			response.status(400);
			
			return response.send(error);
		});

	response.send('WHERE\'S THE MONEYYYYYYYYYY?');
};