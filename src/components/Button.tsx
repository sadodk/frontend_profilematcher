import { Pressable, Text } from 'react-native';
import { useColorScheme } from 'react-native';

interface ButtonProps {
	onPress?: () => void;
	title: string;
	variant?: 'primary' | 'secondary';
}

export default function Button({
	onPress,
	title,
	variant = 'primary',
}: ButtonProps) {
	const isDark = useColorScheme() === 'dark';

	const baseClasses = 'rounded-md p-3 w-full';
	const variantClasses = {
		primary: isDark ? 'bg-blue-600' : 'bg-blue-500',
		secondary: isDark ? 'bg-gray-700' : 'bg-gray-200',
	};

	const textClasses = {
		primary: 'text-white',
		secondary: isDark ? 'text-gray-300' : 'text-gray-800',
	};

	return (
		<Pressable
			className={`${baseClasses} ${variantClasses[variant]}`}
			onPress={onPress}
		>
			<Text className={`text-center font-semibold ${textClasses[variant]}`}>
				{title}
			</Text>
		</Pressable>
	);
}
