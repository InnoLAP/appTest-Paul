import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './src/css/global.scss';

export default function App() {

	return (
		<View style={styles.container}>
			<Text>Open upawd App.js to stahgvrt working on your app!</Text>
			<StatusBar />
		</View>
	);
}
