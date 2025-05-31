import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export default function PostListItem({ post }: any) {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

	return (
		<View className={isDark ? 'bg-gray-800' : 'bg-white'}>
			{/* Header */}
			<View className="p-3 flex-row items-center gap-2">
				<Image
					source={{ uri: post.user.image_url }}
					className="w-10 aspect-square rounded-full"
				/>
				<Text
					className={isDark ? 'text-white' : 'text-black'}
					style={{ fontWeight: '600' }}
				>
					{post.user.username}
				</Text>
			</View>
			<Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
			{/* Footer */}
			{/* Icons */}
			<View className="flex-row gap-3 p-3">
				<AntDesign name="hearto" size={20} color={isDark ? '#fff' : '#000'} />
				<Ionicons
					name="chatbubble-outline"
					size={20}
					color={isDark ? '#fff' : '#000'}
				/>
				<Feather name="send" size={20} color={isDark ? '#fff' : '#000'} />
				<Feather
					name="bookmark"
					size={20}
					color={isDark ? '#fff' : '#000'}
					className="ml-auto"
				/>
			</View>
		</View>
	);
}
