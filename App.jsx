import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme/theme.js';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen.jsx';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import SafeArea from './src/components/SafeArea.jsx';

const MapScreen = () => <SafeArea><Text>MAP</Text></SafeArea>
const SettingsScreen = () => <SafeArea><Text>SETTINGS</Text></SafeArea>

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings'
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];

	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		)
	};
};

const Tab = createBottomTabNavigator();

function App() {
	const [latoLoaded] = useLato({Lato_400Regular});
	const [oswaldLoaded] = useOswald({Oswald_400Regular});

	return (
		<>
			<StatusBar style='auto' />
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={createScreenOptions}
						tabBarOptions={{
							activeTintColor: 'tomato',
							inactiveTintColor: 'gray'
						}}	
					>
						<Tab.Screen name='Restaurants' component={RestaurantsScreen} />
						<Tab.Screen name='Map' component={MapScreen} />
						<Tab.Screen name='Settings' component={SettingsScreen} />
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</>
	);
};

export default App;