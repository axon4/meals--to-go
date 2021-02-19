import React from 'react';
import styled from 'styled-components/native';
import { Button, TextInput, ActivityIndicator, Avatar, Colors } from 'react-native-paper';
import Text from '../../../components/Text.jsx';
import { colours } from '../../../infrastructure/theme/aspects/colours.js';

export const CartIconContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
	size: 128
})`
	margin-bottom: ${props => props.theme.spacing[3]};
	background-color: ${props => props.background || props.theme.colours.brand.primary};
`;

export const PaymentProcessingIndicator = styled(ActivityIndicator).attrs({
	size: 128,
	color: Colors.blue300,
	animating: true
})`
	z-index: 777;
	position: absolute;
	top: 50%;
	left: 35%;
`;

export const Heading = styled(Text)`
	margin: ${props => props.theme.spacing[2]};
`;

export const NameInPut = styled(TextInput)`
	margin: ${props => props.theme.spacing[3]};
	margin-bottom: ${props => props.theme.spacing[4]};
`;

export const PayButton = styled(Button).attrs({
	color: colours.brand.primary
})`
	align-self: center;
	width: 83%;
	margin: ${props => props.theme.spacing[2]};
	margin-top: ${props => props.theme.spacing[5]};
	padding: ${props => props.theme.spacing[2]};
`;

export const ClearButton = styled(Button).attrs({
	color: colours.UI.error
})`
	align-self: center;
	width: 83%;
	margin: ${props => props.theme.spacing[2]};
	padding: ${props => props.theme.spacing[2]};
`;