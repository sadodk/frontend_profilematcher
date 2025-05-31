import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import '../../global.css';

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: isDark ? '#111827' : '#ffffff',
				},
				headerTintColor: isDark ? '#ffffff' : '#000000',
				contentStyle: {
					backgroundColor: isDark ? '#111827' : '#ffffff',
				},
				headerShown: false, // Hide the header for all screens
			}}
		/>
	);
}
