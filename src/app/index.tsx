import { Link, Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
    return <Redirect href="/(tabs)" />; // Redirect to the home page under the tabs layout

    //   return (
//     <View style={styles.container}>
//       <View style={styles.main}> 
//         <Link href="/about">About page</Link>
//         <Text style={styles.subtitle}>The is the home page, click above to go to the about page</Text>
//       </View>
//     </View>
//   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    color: "#38434D"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
