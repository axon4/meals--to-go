import React, { useState, useEffect, useContext } from 'react';
import { ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';
import styled from 'styled-components/native';
import { CartContext } from '../../../services/cart/CartContext.jsx';
import SafeArea from '../../../components/SafeArea.jsx';
import { CartIconContainer, CartIcon, PaymentProcessingIndicator, Heading, NameInput, PayButton, ClearButton } from '../components/CartScreenStyles.jsx';
import Text from '../../../components/Text.jsx';
import RestaurantCard from '../../restaurants/components/RestaurantCard.jsx';
import DebitCardInput from '../components/DebitCardInput.jsx';
import { payRequest } from '../../../services/cart/cartService.js';

const CartScreen = ({ navigation }) => {
	const [ name, setName ] = useState('');
	const [ card, setCard ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);
	const { restaurant, cart, total, clearCart } = useContext(CartContext);

	const onPay = () => {
		if (!card || !card.id) {
			navigation.navigate('CartFailure', { error: 'Enter Valid Card' });

			return;
		};

		setIsLoading(true);
		payRequest(card.id, name, total)
			.then(x => {
				setIsLoading(false);
				clearCart();
				navigation.navigate('CartSuccess');
			})
			.catch(error => {
				setIsLoading(false);
				console.log(error);
				navigation.navigate('CartFailure', { error });
			});
	};

	if (!restaurant || !cart.length) {
		return (
			<SafeArea>
				<CartIconContainer>
					<CartIcon icon='cart-off' />
					<Text>Your Cart Is Empty!</Text>
				</CartIconContainer>
			</SafeArea>
		);
	};

	return (
		<SafeArea>
			<RestaurantCard restaurant={restaurant} />
			<ScrollView>
				<Heading>Your Order</Heading>
				<List.Section>
					{cart.map(({ item, price }, i) => {
						return <List.Item key={i} title={`• ${item}: £${price / 100}`} />
					})}
				</List.Section>
				<Heading>Total: £{total / 100}</Heading>
				<Divider />
				<NameInput label='Name' value={name} onChangeText={input => setName(input)} />
				{name ? (
					<DebitCardInput
						name={name}
						onSuccess={card => setCard(card)}
						onFailure={() => navigation.navigate('CartFailure', {
							error: 'Error Processing Card'
						})}
					/>
				 ) : null}
				<PayButton
					icon='cash-register'
					mode='contained'
					onPress={onPay}
					disabled={isLoading}
				>
					Pay
				</PayButton>
				<ClearButton
					icon='cart-remove'
					mode='contained'
					onPress={clearCart}
					disabled={isLoading}
				>
					Clear Cart
				</ClearButton>
			</ScrollView>
		</SafeArea>
	);
};

export default CartScreen;