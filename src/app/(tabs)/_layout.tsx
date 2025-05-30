import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#e91e63',
				tabBarShowLabel: false,
			}}
		>
			{/* Define your tab screens here */}
			{/* Example: */}
			{/* <Tabs.Screen name="index" options={{ title: "Home" }} /> */}
			{/* <Tabs.Screen name="about" options={{ title: "About" }} /> */}
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home (for you)',
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
