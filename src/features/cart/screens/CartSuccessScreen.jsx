import React from 'react';
import SafeArea from '../../../components/SafeArea.jsx';
import { CartIconContainer, CartIcon } from '../components/CartScreenStyles.jsx';
import Text from '../../../components/Text.jsx';

const CartSuccessScreen = () => {
	return (
		<SafeArea>
			<CartIconContainer>
				<CartIcon icon='check-bold' />
				<Text variant='label'>Success</Text>
			</CartIconContainer>
		</SafeArea>
	);
};

export default CartSuccessScreen;