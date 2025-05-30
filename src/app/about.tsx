import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View> 
        <Text>About</Text>
        <Text>This is about page, go back to homepage: <Link href="/">Home</Link></Text>
    </View>
  );
}