import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="/RegisterScreen" options={{ title: "Register" }} />
      <Stack.Screen name="HomeScreen" options={{ title: "Home" }} />
    </Stack>
  );
}
