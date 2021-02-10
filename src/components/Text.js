import styled from 'styled-components/native';

export const Text = styled.Text`
	${({ theme }) => defaultTextStyles(theme)};
	${({ type, theme }) => types[type](theme)}
`;

Text.defaultProps = {
	type: 'body'
};

const defaultTextStyles = theme => `
	flex-wrap: wrap;
	margin-top: 0px;
	margin-bottom: 0px;
	font-weight: ${theme.fontWeights.regular};
	font-family: ${theme.fonts.body};
	color: ${theme.colours.text.primary}
`;

const body = theme => `
	font-size: ${theme.fontSizes.body};
`;

const label = (theme) => `
	font-size: ${theme.fontSizes.body};
	font-weight: ${theme.fontWeights.medium};
	font-family: ${theme.fonts.heading}
`;

const caption = theme => `
	font-size: ${theme.fontSizes.caption};
	font-weight: ${theme.fontWeights.bold}
`;

const hint = theme => `
	font-size: ${theme.fontSizes.body}
`;

const error = theme => `
	color: ${theme.colours.text.error}
`;

const types = {
	body,
	label,
	caption,
	hint,
	error
};