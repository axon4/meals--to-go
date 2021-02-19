import styled from 'styled-components/native';
import { TextInput, Button } from 'react-native-paper';
import Text from '../../../components/Text.jsx';
import { colours } from '../../../infrastructure/theme/aspects/colours.js';

export const AuthenticationBackGround = styled.ImageBackground.attrs({
	source: require('../../../assets/backGround.png')
})`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const AuthenticationCover = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.3);
`;

export const AnimationContainer = styled.View`
	position: absolute;
	top: 30px;
	width: 100%;
	height: 40%;
	padding: ${props => props.theme.spacing[2]};
`;

export const SectionTitle = styled(Text)`
	font-size: 30px;
`;

export const AuthenticationContainer = styled.View`
	margin: ${props => props.theme.spacing[2]};
	padding: ${props => props.theme.spacing[4]};
	background-color: rgba(255, 255, 255, 0.7);
`;

export const AuthenticationInPut = styled(TextInput)`
	margin: 8px;
	width: 300px;
`;

export const ErrorContainer = styled.View`
	align-items: center;
	align-self: center;
	max-width: 300px;
	margin-top: ${props => props.theme.spacing[2]};
	margin-bottom: ${props => props.theme.spacing[2]};
`;

export const AuthenticationButton = styled(Button).attrs({
	color: colours.brand.primary
})`
	margin: 8px;
	padding: ${props => props.theme.spacing[2]};
`;