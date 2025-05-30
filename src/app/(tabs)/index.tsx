import posts from '@/assets/data/posts.json';
import PostListItem from '@/src/components/PostListItem';
import { FlatList } from 'react-native';

const post1 = posts[0];

export default function FeedScreen() {
	return (
		<FlatList
			data={posts}
			renderItem={({ item }) => <PostListItem post={item} />}
			contentContainerStyle={{
				gap: 20,
			}}
			showsVerticalScrollIndicator={false}
		/>
	);
}
