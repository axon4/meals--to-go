import React, { useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';
import SafeArea from '../../../components/SafeArea.jsx';
import RestaurantCard from '../components/RestaurantCard.jsx';
import OrderButton from '../components/OrderButtonStyles.jsx';
import { CartConText } from '../../../services/cart/CartConText.jsx';

const RestaurantDeTailsScreen = ({ navigation, route }) => {
	const [ breakFastExpanded, setBreakFastExpanded ] = useState(false);
	const [ lunchExpanded, setLunchExpanded ] = useState(false);
	const [ dinnerExpanded, setDinnerExpanded ] = useState(false);
	const [ extrasExpanded, setExtrasExpanded ] = useState(false);

	const { restaurant } = route.params;

	const { addToCart } = useContext(CartConText);

	return (
		<SafeArea>
			<RestaurantCard restaurant={restaurant} />
			<ScrollView>
				<List.Accordion
					title='BreakFast'
					left={props => <List.Icon icon='bread-slice' {...props} />}
					expanded={breakFastExpanded}
					onPress={() => {setBreakFastExpanded(!breakFastExpanded)}}
				>
					<List.Item title='ShakShuka' />
					<Divider />
					<List.Item title='Full-English' />
					<Divider />
					<List.Item title='Porridge and Honey' />
					<Divider />
					<List.Item title='Tea' />
				</List.Accordion>
				<Divider />
				<List.Accordion
					title='Lunch'
					left={props => <List.Icon icon='hamburger' {...props} />}
					expanded={lunchExpanded}
					onPress={() => {setLunchExpanded(!lunchExpanded)}}
				>
					<List.Item title='Beef-Burger and Chips' />
					<Divider />
					<List.Item title='Döner-Kebab' />
					<Divider />
					<List.Item title='Chicken Club-Sandwich' />
					<Divider />
					<List.Item title='StrawBerry MilkShake' />
				</List.Accordion>
				<Divider />
				<List.Accordion
					title='Dinner'
					left={props => <List.Icon icon='food-variant' {...props} />}
					expanded={dinnerExpanded}
					onPress={() => {setDinnerExpanded(!dinnerExpanded)}}
				>
					<List.Item title='Lamb Biryani' />
					<Divider />
					<List.Item title='Pepperoni Pizza' />
					<Divider />
					<List.Item title='Salmon Spaghetti' />
					<Divider />
					<List.Item title='Grape-Juice' />
				</List.Accordion>
				<Divider />
				<List.Accordion
					title='Extras'
					left={props => <List.Icon icon='cup' {...props} />}
					expanded={extrasExpanded}
					onPress={() => {setExtrasExpanded(!extrasExpanded)}}
				>
					<List.Item title='Ketchup' />
					<Divider />
					<List.Item title='CheeseCake' />
					<Divider />
					<List.Item title='Olives' />
					<Divider />
					<List.Item title='Water' />
				</List.Accordion>
				<Divider />
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

export default RestaurantDeTailsScreen;