import React, { useState, useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { AuthenticationBackGround, AuthenticationCover, SectionTitle, AuthenticationContainer, AuthenticationInPut, ErrorContainer, AuthenticationButton } from '../components/AuthenticationStyles.jsx';
import Text from '../../../components/Text.jsx';
import { AuthenticationConText } from '../../../services/authentication/AuthenticationConText.jsx';

const RegistrationScreen = ({ navigation }) => {
	const [ eMail, setEMail ] = useState('');
	const [ passWord, setPassWord ] = useState('');
	const [ repeatedPassWord, setRepeatedPassWord ] = useState('');

	const { onRegistration, isLoading, error } = useContext(AuthenticationConText);

	return (
		<AuthenticationBackGround>
			<AuthenticationCover />
			<SectionTitle>Register</SectionTitle>
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
				<AuthenticationInPut
					label='Repeat PassWord'
					value={repeatedPassWord}
					textContentType='password'
					secureTextEntry
					autocapitalize='none'
					onChangeText={userRepeatedPassWord => {setRepeatedPassWord(userRepeatedPassWord)}}
				/>
				{error ? (
					<ErrorContainer>
						<Text variant='error'>{error}</Text>
					</ErrorContainer>
				) : null}
				{!isLoading ? (
					<AuthenticationButton
						icon='email'
						mode='contained'
						onPress={() => {onRegistration(eMail, passWord, repeatedPassWord)}}
					>
						Register
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

export default RegistrationScreen;