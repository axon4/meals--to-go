import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
	flex: 1;
	margin-top: ${StatusBar.currentHeight ?? 0}px
`;

export default SafeArea;