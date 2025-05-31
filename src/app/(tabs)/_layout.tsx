import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from 'react-native';

export default function TabsLayout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#e91e63',
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: isDark ? '#111827' : '#ffffff',
					borderTopColor: isDark ? '#374151' : '#e5e7eb',
				},
				headerStyle: {
					backgroundColor: isDark ? '#111827' : '#ffffff',
					borderBottomWidth: 1,
					borderBottomColor: isDark ? '#374151' : '#e5e7eb',
				},
				headerTintColor: isDark ? '#ffffff' : '#000000',
			}}
		>
			{/* Define your tab screens here */}
			{/* Example: */}
			{/* <Tabs.Screen name="index" options={{ title: "Home" }} /> */}
			{/* <Tabs.Screen name="about" options={{ title: "About" }} /> */}
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home Feed',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="home" size={26} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="new"
				options={{
					title: 'Create post',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="plus-square-o" size={26} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => (
						<FontAwesome name="user" size={26} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
