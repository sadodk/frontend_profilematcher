import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function TabsIndex() {
  return (
    <View> 
        <Text>Tabs index page</Text>
        <Text>This is the index page inside tabs folder <Link href="/">Home</Link></Text>
    </View>
  );
}