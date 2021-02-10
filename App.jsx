import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/infrastructure/theme/theme.js';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen.jsx';

function App() {
	const [latoLoaded] = useLato({Lato_400Regular});
	const [oswaldLoaded] = useOswald({Oswald_400Regular});

	return (
		<>
			<StatusBar style='auto' />
			<ThemeProvider theme={theme}>
				<RestaurantsScreen />
			</ThemeProvider>
		</>
	);
};

export default App;