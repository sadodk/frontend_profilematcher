import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function CreatePost() {
	const [caption, setCaption] = useState('');
	const [image, setImage] = useState<string | null>(null);

	const pickImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	useEffect(() => {
		if (!image) pickImage();
	}, [image]);

	const ImageComponent = image ? (
		<Image
			source={{ uri: image }}
			className="w-52 aspect-[3/4] rounded-lg mb-4 shadow-md"
		/>
	) : (
		<View className="w-52 aspect-[3/4] rounded-lg mb-4 bg-gray-200 items-center justify-center" />
	);

	return (
		<View className="p-3 items-center flex-1 bg-white">
			{ImageComponent}
			<Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
				Change
			</Text>
			<TextInput
				value={caption}
				onChangeText={setCaption}
				placeholder="Write a caption..."
				className="border border-gray-300 rounded-md p-3 w-full"
			/>
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
