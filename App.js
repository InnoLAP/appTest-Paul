import React, { useState } from 'react';
import { View, Button } from 'react-native';
import styles from './src/css/_app.scss';
import TestComp1 from './src/components/testComp1.js';
import TestComp2 from './src/components/testComp2.js';

export default function App() {

	const [variable, setVariable] = useState(true);

	return (
		<View style={styles.container}>
			{variable ? (
				<TestComp1 />
			) : (
				<TestComp2 />
			)}
			<Button 
				title='Change loaded Component!'
				onPress={() => {
					setVariable(!variable);
				}}
			/>
		</View>
	);
}
