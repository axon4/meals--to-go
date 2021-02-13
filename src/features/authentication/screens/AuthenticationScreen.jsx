import React from 'react';
import LottieView from 'lottie-react-native';
import { AuthenticationBackground, AuthenticationCover, AnimationContainer, SectionTitle, AuthenticationContainer, AuthenticationButton } from '../components/AuthenticationStyles.jsx';

const AuthenticationScreen = ({ navigation }) => {
	return (
		<AuthenticationBackground>
			<AuthenticationCover />
			<AnimationContainer>
				<LottieView
					key='animation'
					autoPlay
					loop
					resizeMode='cover'
					source={require('../../../assets/watermelon.json')}
				/>
			</AnimationContainer>
			<SectionTitle>Meals To Go</SectionTitle>
			<AuthenticationContainer>
				<AuthenticationButton
					icon='lock-open-outline'
					mode='contained'
					onPress={() => navigation.navigate('LogIn')}
				>
					Log In
				</AuthenticationButton>
				<AuthenticationButton
					icon='email'
					mode='contained'
					onPress={() => navigation.navigate('Registration')}
				>
					Register
				</AuthenticationButton>
			</AuthenticationContainer>
		</AuthenticationBackground>
	);
};

export default AuthenticationScreen;