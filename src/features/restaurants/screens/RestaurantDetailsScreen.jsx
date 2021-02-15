import React, { useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import { CartContext } from '../../../services/cart/CartContext.jsx';
import { List } from 'react-native-paper';
import SafeArea from '../../../components/SafeArea.jsx';
import OrderButton from '../components/OrderButtonStyles.jsx';
import RestaurantCard from '../components/RestaurantCard.jsx';

const RestaurantDetailsScreen = ({ navigation, route }) => {
	const [ breakfastExpanded, setBreakfastExpanded ] = useState(false);
	const [ lunchExpanded, setLunchExpanded ] = useState(false);
	const [ dinnerExpanded, setDinnerExpanded ] = useState(false);
	const [ extrasExpanded, setExtrasExpanded ] = useState(false);

	const { restaurant } = route.params;
	const { addToCart } = useContext(CartContext);

	return (
		<SafeArea>
			<RestaurantCard restaurant={restaurant} />
			<ScrollView>
				<List.Accordion
					title='Breakfast'
					left={props => <List.Icon icon='bread-slice' {...props} />}
					expanded={breakfastExpanded}
					onPress={() => setBreakfastExpanded(!breakfastExpanded)}
				>
					<List.Item title='Shakshuka' />
					<List.Item title='Full English' />
					<List.Item title='Porridge and Honey' />
					<List.Item title='Tea' />
				</List.Accordion>
				<List.Accordion
					title='Lunch'
					left={props => <List.Icon icon='hamburger' {...props} />}
					expanded={lunchExpanded}
					onPress={() => setLunchExpanded(!lunchExpanded)}
				>
					<List.Item title='Beef Burger and Chips' />
					<List.Item title='Döner Kebab' />
					<List.Item title='Chicken Club Sandwich' />
					<List.Item title='Sun Exotic' />
				</List.Accordion>
				<List.Accordion
					title='Dinner'
					left={props => <List.Icon icon='food-variant' {...props} />}
					expanded={dinnerExpanded}
					onPress={() => setDinnerExpanded(!dinnerExpanded)}
				>
					<List.Item title='Lamb Biryani' />
					<List.Item title='Pepperoni Pizza' />
					<List.Item title='Salmon Spaghetti' />
					<List.Item title='Grape Juice' />
				</List.Accordion>
				<List.Accordion
					title='Extras'
					left={props => <List.Icon icon='cup' {...props} />}
					expanded={extrasExpanded}
					onPress={() => setExtrasExpanded(!extrasExpanded)}
				>
					<List.Item title='Ketchup' />
					<List.Item title='Cheesecake' />
					<List.Item title='Canned Drink' />
					<List.Item title='Water' />
				</List.Accordion>
				<OrderButton
					icon='cash'
					mode='contained'
					onPress={() => {
						addToCart(restaurant, {item: 'Chef\'s Special', price: 1199});
						navigation.navigate('Cart');
					}}
				>
					Order the Special: £11.99!
				</OrderButton>
			</ScrollView>
		</SafeArea>
	);
};

export default RestaurantDetailsScreen;