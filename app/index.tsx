import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./screens/Home";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />    
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding:20,
  },
});
