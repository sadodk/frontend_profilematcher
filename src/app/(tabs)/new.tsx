import { Link } from 'expo-router';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Pressable,
} from 'react-native';
import { useState } from 'react';

export default function CreatePost() {
	const [caption, setCaption] = useState('');
	return (
		<View className="p-3 items-center flex-1 bg-white">
			{/* Image Picker */}
			<Image
				source={{
					uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
				}}
				className="w-52 aspect-[3/4] rounded-lg mb-4 shadow-md"
			/>
			<Text className="text-blue-500 font-semibold m-5">Change</Text>
			{/* Text Input for caption */}
			<TextInput
				value={caption}
				onChangeText={(newValue) => setCaption(newValue)}
				placeholder="Write a caption..."
				className="border border-gray-300 rounded-md p-3 w-full"
			/>
			{/* Button to create post */}
			<View className="w-full mt-auto">
				<Pressable
					className="bg-blue-500 rounded-md p-3 w-full mt-5"
					onPress={() => {}}
				>
					<Text className="text-white text-center font-semibold">
						Create Post
					</Text>
				</Pressable>
			</View>
		</View>
	);
}
