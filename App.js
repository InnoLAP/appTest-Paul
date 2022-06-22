import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/css/_app.scss';

export default function App() {

	return (
		<View style={styles.container}>
			<Text>Hello!</Text>
			<StatusBar />
		</View>
	);
}
