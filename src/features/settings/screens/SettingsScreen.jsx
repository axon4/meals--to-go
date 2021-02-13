import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { List, Avatar } from 'react-native-paper';
import SafeArea from '../../../components/SafeArea.jsx';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';
import Text from '../../../components/Text.jsx';

const SettingsScreen = ({ navigation }) => {
	const { user, onLogOut } = useContext(AuthenticationContext);
	
	return (
		<SafeArea>
			<AvatarContainer>
				<Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
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
	margin: 16px
`;

const SettingsItem = styled(List.Item)`
	padding: ${props => props.theme.spacing[3]}
`;

export default SettingsScreen;