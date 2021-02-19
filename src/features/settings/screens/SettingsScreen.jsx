import React, { useState, useContext } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import SafeArea from '../../../components/SafeArea.jsx';
import Text from '../../../components/Text.jsx';
import { AuthenticationConText } from '../../../services/authentication/AuthenticationConText.jsx';
import { colours } from '../../../infrastructure/theme/aspects/colours.js';

const SettingsScreen = ({ navigation }) => {
	const [ photo, setPhoto ] = useState(null);

	const { user, onLogOut } = useContext(AuthenticationConText);

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
				<TouchableOpacity onPress={() => {navigation.navigate('Camera')}}>
					{!photo ? (
						<Avatar.Icon size={180} icon='camera' backgroundColor={colours.brand.secondary} />
					) : (
						<Avatar.Image size={180} source={{uri: photo}} />
					)}
				</TouchableOpacity>
				<Text variant='label'>{user.email}</Text>
			</AvatarContainer>
			<ScrollView>
				<List.Section>
					<SettingsItem
						title='Favourites'
						description='View your Saved Favourites'
						left={props => <List.Icon icon='heart' color={colours.UI.secondary} {...props} />}
						onPress={() => {navigation.navigate('Favourites')}}
					/>
					<SettingsItem
						title='Orders'
						description='Examine your Order History'
						left={props => <List.Icon icon='history' color={colours.UI.secondary} {...props} />}
						onPress={() => null}
					/>
					<SettingsItem
						title='Payment'
						description='Manage your Payments'
						left={props => <List.Icon icon='cash-multiple' color={colours.UI.secondary} {...props} />}
						onPress={() => null}
					/>
					<SettingsItem
						title='Log-Out'
						description='Securely Log-Out'
						left={props => <List.Icon icon='door' color={colours.UI.secondary} {...props} />}
						onPress={onLogOut}
					/>
				</List.Section>
			</ScrollView>
		</SafeArea>
	);
};

const SettingsBackground = styled.ImageBackground.attrs({
	source: require('../../../assets/background.png')
})`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const TransparentSafeArea = styled(SafeArea)`
	background-color: transparent;
`;

const AvatarContainer = styled.View`
	align-items: center;
	margin: ${props => props.theme.spacing[3]};
`;

const SettingsItem = styled(List.Item)`
	margin: ${props => props.theme.spacing[1]};
	padding: ${props => props.theme.spacing[3]};
	background-color: rgba(255, 255, 255, 0.4);
`;

export default SettingsScreen;