import React, { useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { List, Avatar } from 'react-native-paper';
import SafeArea from '../../../components/SafeArea.jsx';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';
import Text from '../../../components/Text.jsx';

const SettingsScreen = ({ navigation }) => {
	const [ photo, setPhoto ] = useState(null);

	const { user, onLogOut } = useContext(AuthenticationContext);

	useFocusEffect(() => {
		getProfilePicture(user);
	}, [user]);

	const getProfilePicture = async currentUser => {
		const photoURI = await AsyncStorage.getItem(`@photo-${currentUser.uid}`);

		setPhoto(photoURI);
	};

	return (
		<SafeArea>
			<AvatarContainer>
				<TouchableOpacity onPress={() => navigation.navigate('Camera')}>
					{!photo ? (
						<Avatar.Icon size={180} icon='camera' backgroundColor='#2182BD' />
					) : (
						<Avatar.Image size={180} source={{uri: photo}} backgroundColor='#2182BD' />
					)}
				</TouchableOpacity>
				<Text variant='label'>{user.email}</Text>
			</AvatarContainer>
			<List.Section>
				<SettingsItem
					title='Favourites'
					description='View your Saved Favourites'
					left={props => <List.Icon icon='heart' color='black' {...props} />}
					onPress={() => navigation.navigate('Favourites')}
				/>
				<SettingsItem
					title='Log Out'
					description='Securely Log Out'
					left={props => <List.Icon icon='door' color='black' {...props} />}
					onPress={onLogOut}
				/>
			</List.Section>
		</SafeArea>
	);
};

const AvatarContainer = styled.View`
	align-items: center;
	margin: ${props => props.theme.spacing[3]}
`;

const SettingsItem = styled(List.Item)`
	padding: ${props => props.theme.spacing[3]}
`;

export default SettingsScreen;