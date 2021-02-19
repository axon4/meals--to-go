import React, { useState, useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { AuthenticationBackGround, AuthenticationCover, SectionTitle, AuthenticationContainer, AuthenticationInPut, ErrorContainer, AuthenticationButton } from '../components/AuthenticationStyles.jsx';
import Text from '../../../components/Text.jsx';
import { AuthenticationConText } from '../../../services/authentication/AuthenticationConText.jsx';

const LogInScreen = ({ navigation }) => {
	const [ eMail, setEMail ] = useState('');
	const [ passWord, setPassWord ] = useState('');

	const { onLogIn, isLoading, error } = useContext(AuthenticationConText);

	return (
		<AuthenticationBackGround>
			<AuthenticationCover />
			<SectionTitle>Log-In</SectionTitle>
			<AuthenticationContainer>
				<AuthenticationInPut
					label='EMail'
					value={eMail}
					textContentType='emailAddress'
					keyboardType='email-address'
					autocapitalize='none'
					onChangeText={userEMail => {setEMail(userEMail)}}
				/>
				<AuthenticationInPut
					label='PassWord'
					value={passWord}
					textContentType='password'
					secureTextEntry
					autocapitalize='none'
					onChangeText={userPassWord => {setPassWord(userPassWord)}}
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
						onPress={() => {onLogIn(eMail, passWord)}}
					>
						Log-In
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
				onPress={() => {navigation.goBack()}}
			>
				Back
			</AuthenticationButton>
		</AuthenticationBackGround>
	);
};

export default LogInScreen;