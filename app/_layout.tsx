
import { View, StyleSheet } from 'react-native';
import { Stack } from "expo-router";
import TopBar from "@/components/TopBar";

import React from 'react';


// Custom header component
function CustomHeader() {
  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
}



export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Hola",
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="/RegisterScreen"
        options={{
          title: "Register",
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        options={{
          header: () => <CustomHeader />,
          
          headerShown:false,
          
        }}
      />
      <Stack.Screen
        name="SettingsScreen"
        options={{
          header: () => <CustomHeader />,
          headerShown:false,
        }}
      />
      <Stack.Screen
        name="MessagesScreen"
        options={{
          header: () => <CustomHeader />,
          headerShown:false,
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        options={{
          header: () => <CustomHeader />,
          headerShown:false,
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        options={{
          header: () => <CustomHeader />,
          headerShown:false,
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {

  }
});