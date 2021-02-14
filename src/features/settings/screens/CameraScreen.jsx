import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext.jsx';
import Text from '../../../components/Text.jsx';

const CameraScreen = ({ navigation }) => {
	const [ hasPermission, setHasPermission ] = useState(null);
	
	const { user } = useContext(AuthenticationContext);

	const cameraRef = useRef();

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();

			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	};

	if (hasPermission === false) {
		return <Text>Camera Permissions Denied</Text>;
	};

	const snap = async () => {
		if (cameraRef) {
			const photo = await cameraRef.current.takePictureAsync();

			AsyncStorage.setItem(`@photo-${user.uid}`, photo.uri);
			navigation.goBack();
		};
	};

	return (
		<ProfileCamera
			type={Camera.Constants.Type.front}
			ref={camera => cameraRef.current = camera}
		>
			<TouchableOpacity onPress={snap}>
				<SnapView />
			</TouchableOpacity>
		</ProfileCamera>
	);
};

const ProfileCamera = styled(Camera)`
	flex: 1;
	width: 100%;
	height: 100%
`;

const SnapView = styled.View`
	z-index: 777;
	width: 100%;
	height: 100%
`;

export default CameraScreen;