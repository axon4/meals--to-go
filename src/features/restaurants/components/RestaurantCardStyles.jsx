import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

export const CardBase = styled(Card)`
	align-self: center;
	width: 95%;
	margin-bottom: ${props => props.theme.spacing[3]};
	background-color: ${props => props.theme.colours.background.primary}
`;

export const CardCover = styled(Card.Cover)`
	padding: ${props => props.theme.spacing[3]};
	background-color: ${props => props.theme.colours.background.primary}
`;

export const CardDetails = styled.View`
	padding: ${props => props.theme.spacing[3]}
`;

export const IconsContainer = styled.View`
	flex-direction: row;
	align-items: center
`;

export const Rating = styled.View`
	flex-direction: row;
	margin-right: auto;
	padding-top: ${props => props.theme.spacing[2]};
	padding-bottom: ${props => props.theme.spacing[2]}
`;

export const Open = styled(SvgXml)`
	margin-left: 16px
`;

export const Icon = styled.Image`
	width: 16px;
	height: 16px;
	margin-left: 16px
`;

export const Address = styled.Text`
	font-family: ${props => props.theme.fonts.body};
	font-size: ${props => props.theme.fontSizes.caption}
`;