import { Pressable, Text } from 'react-native';

interface ButtonProps {
	onPress?: () => void;
	title: string;
}

export default function Button({ onPress, title }: ButtonProps) {
	return (
		<Pressable
			className="bg-blue-500 rounded-md p-3 w-full mt-5"
			onPress={onPress}
		>
			<Text className="text-white text-center font-semibold">{title}</Text>
		</Pressable>
	);
}
