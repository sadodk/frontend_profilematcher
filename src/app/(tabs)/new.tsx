import { View, TextInput, useColorScheme } from 'react-native';
import { useState } from 'react';
import ImagePickerPreview from '@/src/components/ImagePickerPreview';
import Button from '@/src/components/Button';

export default function CreatePost() {
	const [caption, setCaption] = useState('');
	const [image, setImage] = useState<string | null>(null);
	const isDark = useColorScheme() === 'dark';

	return (
		<View
			className={`p-3 items-center flex-1 ${
				isDark ? 'bg-gray-900' : 'bg-white'
			}`}
		>
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
				className={`border rounded-md p-3 w-full ${
					isDark
						? 'border-gray-600 text-white bg-gray-800'
						: 'border-gray-300 text-gray-900 bg-white'
				}`}
				placeholderTextColor={isDark ? '#9CA3AF' : '#6B7280'}
			/>
			<View className="w-full mt-auto">
				<Button title="Share" onPress={() => console.log('Share pressed')} />
			</View>
		</View>
	);
}
