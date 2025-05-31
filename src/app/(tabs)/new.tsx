import { View, TextInput, Pressable, Text } from 'react-native';
import { useState } from 'react';
import ImagePickerPreview from '@/src/components/ImagePickerPreview';
import Button from '@/src/components/Button';

export default function CreatePost() {
	const [caption, setCaption] = useState('');
	const [image, setImage] = useState<string | null>(null);

	return (
		<View className="p-3 items-center flex-1 bg-white">
			<ImagePickerPreview
				image={image}
				onImagePick={setImage}
				variant="square"
				size={408}
				aspectRatio={[4, 3]}
			/>
			<TextInput
				value={caption}
				onChangeText={setCaption}
				placeholder="Write a caption..."
				className="border border-gray-300 rounded-md p-3 w-full"
			/>
			<View className="w-full mt-auto"></View>
			<Button title="Share" />
		</View>
	);
}
