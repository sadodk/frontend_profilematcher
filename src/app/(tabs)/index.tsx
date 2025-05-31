import posts from '@/assets/data/posts.json';
import PostListItem from '@/src/components/PostListItem';
import { FlatList, useColorScheme, View } from 'react-native';

export default function FeedScreen() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

	return (
		<View className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
			<FlatList
				data={posts}
				renderItem={({ item }) => <PostListItem post={item} />}
				contentContainerStyle={{
					gap: 20,
					maxWidth: 600,
					width: '100%',
					alignSelf: 'center',
					paddingVertical: 10,
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
