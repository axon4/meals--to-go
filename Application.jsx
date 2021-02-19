import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import AuthenticationConTextProvider from './src/services/authentication/AuthenticationConText.jsx';
import { theme } from './src/infrastructure/theme/theme.js';
import Navigation from './src/infrastructure/navigation/Navigation.jsx';

function Application() {
	const [ latoLoaded ] = useLato({ Lato_400Regular });
	const [ oswaldLoaded ] = useOswald({ Oswald_400Regular });

	return (
		<>
			<StatusBar style='auto' />
			<ThemeProvider theme={theme}>
				<AuthenticationConTextProvider>
					<Navigation />
				</AuthenticationConTextProvider>
			</ThemeProvider>
		</>
	);
};

export default Application;