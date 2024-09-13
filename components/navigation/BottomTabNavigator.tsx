// BottomTabNavigator.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, usePathname } from "expo-router";

export default function BottomTabNavigator() {
  const pathname = usePathname(); // Obtener la ruta actual

  return (
    <View style={styles.tabBar}>
      <Link href="./ProfileScreen" style={styles.icon}>
        <Ionicons
          name="person-outline"
          size={24}
          color={pathname === "/ProfileScreen" ? "white" : "gray"} // Cambiar color si es la ruta activa
        />
      </Link>
      <Link href="./MessagesScreen" style={styles.icon}>
        <Ionicons
          name="chatbox-outline"
          size={24}
          color={pathname === "/MessagesScreen" ? "white" : "gray"} // Cambiar color si es la ruta activa
        />
      </Link>
      <Link href="/HomeScreen" style={styles.icon}>
        <Ionicons
          name="home-outline"
          size={24}
          color={pathname === "/HomeScreen" ? "white" : "gray"} // Cambiar color si es la ruta activa
        />
      </Link>
      <Link href="./NotificationsScreen" style={styles.icon}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={pathname === "/NotificationsScreen" ? "white" : "gray"} // Cambiar color si es la ruta activa
        />
      </Link>
      <Link href="./SettingsScreen" style={styles.icon}>
        <Ionicons
          name="settings-outline"
          size={24}
          color={pathname === "/SettingsScreen" ? "white" : "gray"} // Cambiar color si es la ruta activa
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  icon: {
    padding: 10,
  },
});
