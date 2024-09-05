import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function RegistrationScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} keyboardType="email-address" />
      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} secureTextEntry />
      <Button title="Register" onPress={() => router.push("/HomeScreen")} />
      <Text style={styles.link} onPress={() => router.push("/")}>
        Already have an account? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  link: {
    marginTop: 16,
    color: "blue",
    textAlign: "center",
  },
});
