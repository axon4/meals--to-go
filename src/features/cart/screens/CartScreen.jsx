import React, { useState, useEffect, useContext } from 'react';
import { ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';
import styled from 'styled-components/native';
import { CartConText } from '../../../services/cart/CartConText.jsx';
import SafeArea from '../../../components/SafeArea.jsx';
import { CartIconContainer, CartIcon, PaymentProcessingIndicator, Heading, NameInPut, PayButton, ClearButton } from '../components/CartScreenStyles.jsx';
import Text from '../../../components/Text.jsx';
import RestaurantCard from '../../restaurants/components/RestaurantCard.jsx';
import DebitCardInPut from '../components/DebitCardInPut.jsx';
import { payReQuest } from '../../../services/cart/cartService.js';

const CartScreen = ({ navigation }) => {
	const [ name, setName ] = useState('');
	const [ card, setCard ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);
	const { restaurant, cart, total, clearCart } = useContext(CartConText);

	const onPay = () => {
		if (!card || !card.id) {
			navigation.navigate('CartFailure', {error: 'Enter Valid Card'});

			return;
		};

		setIsLoading(true);
		payReQuest(card.id, name, total)
			.then(() => {
				setIsLoading(false);
				clearCart();
				navigation.navigate('CartSuccess');
			})
			.catch(error => {
				setIsLoading(false);
				console.error(error);
				navigation.navigate('CartFailure', { error });
			});
	};

	if (!restaurant || !cart.length) {
		return (
			<SafeArea>
				<CartIconContainer>
					<CartIcon icon='cart-off' />
					<Text>Cart Empty</Text>
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
					{cart.map(({ item, price }, index) => <List.Item key={index} title={`• ${item}: £${price / 100}`} />)}
				</List.Section>
				<Heading>Total: £{total / 100}</Heading>
				<Divider />
				<NameInPut label='Name' value={name} onChangeText={input => {setName(input)}} />
				{name ? (
					<DebitCardInPut
						name={name}
						onSuccess={card => {setCard(card)}}
						onFailure={() => navigation.navigate('CartFailure', {error: 'Error Processing Card'})}
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