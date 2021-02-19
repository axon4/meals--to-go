import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { colours } from '../../../infrastructure/theme/aspects/colours.js';

const OrderButton = styled(Button).attrs({
	color: colours.brand.primary
})`
	align-self: center;
	width: 83%;
	margin: ${props => props.theme.spacing[3]};
	padding: ${props => props.theme.spacing[2]};
`;

export default OrderButton;