import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from 'src/css/global.scss';

export default function App() {
	return (
		<View>
			<Text style={styles.testStyle}>Open up App.js to stahgvrt working on your app!</Text>
			<StatusBar />
		</View>
	);
}
