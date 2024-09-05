import { View, Text, StyleSheet } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab Two Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});