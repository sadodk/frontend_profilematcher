import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
	return (
		<View>
			<Text>Tabs profile page</Text>
			<Text>
				This is the profile page inside tabs folder <Link href="/">Home</Link>
			</Text>
		</View>
	);
}
