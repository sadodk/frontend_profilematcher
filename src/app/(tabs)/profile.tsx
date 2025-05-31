import { View, Text, TextInput, useColorScheme } from 'react-native';
import { useState } from 'react';
import ImagePickerPreview from '@/src/components/ImagePickerPreview';
import Button from '@/src/components/Button';

export default function ProfileScreen() {
	const [avatar, setAvatar] = useState<string | null>(null);
	const [username, setUsername] = useState('');
	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

	return (
		<View className={`p-3 flex-1 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
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
			<Text
				className={`font-semibold mb-2 ${
					isDark ? 'text-gray-300' : 'text-gray-500'
				}`}
			>
				Username
			</Text>
			<TextInput
				placeholder="Username"
				className={`border rounded-md p-3 w-full mb-4 ${
					isDark
						? 'border-gray-600 text-white bg-gray-800'
						: 'border-gray-300 text-gray-900 bg-white'
				}`}
				value={username}
				onChangeText={setUsername}
				placeholderTextColor={isDark ? '#9CA3AF' : '#6B7280'}
			/>
			<View className="gap-2 mt-auto">
				<Button title="Update profile" />
				<Button
					title="Sign out"
					variant="secondary"
					onPress={() => console.log('Logout pressed')}
				/>
			</View>
		</View>
	);
}
