import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

function App() {
	return (
		<>
			<ExpoStatusBar style='auto' />
			<SafeAreaView style={styles.container}>
				<View style={styles.search}>
					<Text>SEARCH</Text>
				</View>
				<View style={styles.list}>
					<Text>LIST</Text>
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: StatusBar.currentHeight
	},
	search: {
		padding: 16,
		backgroundColor: 'green'
	},
	list: {
		flex: 1,
		padding: 16,
		backgroundColor: 'blue'
	}
});

export default App;