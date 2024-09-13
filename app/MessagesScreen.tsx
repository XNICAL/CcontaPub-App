import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import BottomTabNavigator from "../components/navigation/BottomTabNavigator";

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      {}
      <View style={styles.content}>
        <Text>Messages Screen</Text>
      </View>
      
      {}
      <BottomTabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});