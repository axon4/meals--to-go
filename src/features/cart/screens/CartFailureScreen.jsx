import React from 'react';
import SafeArea from '../../../components/SafeArea.jsx';
import { CartIconContainer, CartIcon } from '../components/CartScreenStyles.jsx';
import Text from '../../../components/Text.jsx';

const CartFailureScreen = ({ route, theme }) => {
	const { error = '' } = route.params;

	return (
		<SafeArea>
			<CartIconContainer>
				<CartIcon icon='close' background={theme.colours.UI.error} />
				<Text variant='label'>Failure!</Text>
				<Text variant='label'>{error}</Text>
			</CartIconContainer>
		</SafeArea>
	);
};

export default CartFailureScreen;