import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import ImagePickerPreview from '@/src/components/ImagePickerPreview';
import Button from '@/src/components/Button';

export default function ProfileScreen() {
	const [avatar, setAvatar] = useState<string | null>(null);
	const [username, setUsername] = useState('');

	return (
		<View className="p-3 flex-1 bg-white">
			{/* Avater image picker */}
			<ImagePickerPreview
				image={avatar}
				onImagePick={setAvatar}
				variant="round"
				size={300}
				aspectRatio={[1, 1]}
				className="items-center"
			/>
			{/* Form */}
			<Text className="text-gray-500 font-semibold mb-2">Username</Text>
			<TextInput
				placeholder="Username"
				className="border border-gray-300 rounded-md p-3 w-full mb-4"
				value={username}
				onChangeText={setUsername}
			/>
			<View className="gap-2 mt-auto">
				<Button title="Update profile" />
				<Button
					title="Sign out"
					onPress={() => console.log('Logout pressed')}
				/>
			</View>
		</View>
	);
}
