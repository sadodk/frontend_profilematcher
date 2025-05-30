import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function CreatePost() {
	return (
		<View>
			<Text>Tabs - CreatePost page</Text>
			<Text>
				This is the create post page inside tabs folder{' '}
				<Link href="/">Home</Link>
			</Text>
		</View>
	);
}
