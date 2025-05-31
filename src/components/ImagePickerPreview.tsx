import { View, Image, Text, Pressable, useColorScheme } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';

interface ImagePickerPreviewProps {
	image: string | null;
	onImagePick: (uri: string) => void;
	className?: string;
	autoPickOnMount?: boolean;
	aspectRatio?: [number, number];
	variant?: 'square' | 'round';
	size?: number;
}

export default function ImagePickerPreview({
	image,
	onImagePick,
	className = '',
	autoPickOnMount = false,
	aspectRatio = [4, 3],
	variant = 'square',
	size = 208, // default size (w-52 = 13rem = 208px)
}: ImagePickerPreviewProps) {
	const isDark = useColorScheme() === 'dark';

	const pickImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: aspectRatio,
			quality: 1,
		});

		if (!result.canceled) {
			onImagePick(result.assets[0].uri);
		}
	};

	useEffect(() => {
		if (autoPickOnMount && !image) pickImage();
	}, []);

	// Dynamic styles based on variant
	const imageStyles = {
		width: size,
		height: variant === 'square' ? size : size,
		borderRadius: variant === 'round' ? size / 2 : 8,
	};

	const placeholderStyles = {
		width: size,
		height: variant === 'square' ? size : size,
		borderRadius: variant === 'round' ? size / 2 : 8,
		backgroundColor: isDark ? '#374151' : '#e5e7eb', // dark:gray-700 / gray-200
	};

	const ImageComponent = image ? (
		<Pressable onPress={pickImage}>
			<Image
				source={{ uri: image }}
				style={imageStyles}
				className="mb-4 shadow-md"
			/>
		</Pressable>
	) : (
		<Pressable
			onPress={pickImage}
			style={placeholderStyles}
			className="mb-4 items-center justify-center"
		>
			<Text className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
				Tap to select image
			</Text>
		</Pressable>
	);

	return (
		<View className={className}>
			{ImageComponent}
			<Pressable onPress={pickImage}>
				<Text
					className={`font-semibold m-5 self-center ${
						isDark ? 'text-blue-400' : 'text-blue-500'
					}`}
				>
					Change
				</Text>
			</Pressable>
		</View>
	);
}
