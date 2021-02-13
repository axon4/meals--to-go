import React, { useState, useContext } from 'react';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext.jsx';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { AuthenticationBackground, AuthenticationCover, SectionTitle, AuthenticationContainer, AuthenticationInput, ErrorContainer, AuthenticationButton } from '../components/AuthenticationStyles.jsx';
import Text from '../../../components/Text.jsx';

const LogInScreen = ({ navigation }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const { onLogIn, isLoading, error } = useContext(AuthenticationContext);

	return (
		<AuthenticationBackground>
			<AuthenticationCover />
			<SectionTitle>Log In</SectionTitle>
			<AuthenticationContainer>
				<AuthenticationInput
					label='Email'
					value={email}
					textContentType='emailAddress'
					keyboardType='email-address'
					autocapitalize='none'
					onChangeText={userEmail => setEmail(userEmail)}
				/>
				<AuthenticationInput
					label='Password'
					value={password}
					textContentType='password'
					secureTextEntry
					autocapitalize='none'
					onChangeText={userPassword => setPassword(userPassword)}
				/>
				{error ? (
					<ErrorContainer>
						<Text variant='error'>{error}</Text>
					</ErrorContainer>
				) : null}
				{!isLoading ? (
					<AuthenticationButton
						icon='lock-open-outline'
						mode='contained'
						onPress={() => onLogIn(email, password)}
					>
						Log IN
					</AuthenticationButton>
				) : (
					<ActivityIndicator
						color={Colors.blue300}
						animating={true}
					/>
				)}
			</AuthenticationContainer>
			<AuthenticationButton
				mode='contained'
				onPress={() => navigation.goBack()}
			>
				Back
			</AuthenticationButton>
		</AuthenticationBackground>
	);
};

export default LogInScreen;