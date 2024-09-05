import { View, Text, StyleSheet } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab One Content</Text>
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
