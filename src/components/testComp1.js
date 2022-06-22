import React from 'react';
import { Text, View } from 'react-native';
import styles from './../css/_app.scss';

export default function testComp1() {

	return (
		<View style={styles.container}>
			<Text>I am component 1</Text>
		</View>
	);
}
