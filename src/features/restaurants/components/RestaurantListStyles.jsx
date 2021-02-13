import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const RestaurantsList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16
	}
})``;

export default RestaurantsList;