import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import BottomTabNavigator from "../components/navigation/BottomTabNavigator";
import { CustomButton, IconButton, CustomInput } from '../components/CustomComponents'; // Ajusta la ruta según tu estructura

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.buttonContainer}>
          <CustomButton title="Iniciar Sesión" onPress={() => { /* Tu lógica aquí */ }} />
          <CustomButton title="Registrar" onPress={() => { /* Tu lógica aquí */ }} />
        </View>

        <View style={styles.inputContainer}>
          <CustomInput placeholder="Escribe aquí..." />
        </View>

        <View style={styles.iconContainer}>
          <IconButton iconName="arrowleft" onPress={() => { /* Tu lógica aquí */ }} />
          <IconButton iconName="arrowright" onPress={() => { /* Tu lógica aquí */ }} />
          <IconButton iconName="google" onPress={() => { /* Tu lógica aquí */ }} />
          <IconButton iconName="twiter" onPress={() => { /* Tu lógica aquí */ }} />
        </View>
        
        
      </ScrollView>
      {<BottomTabNavigator />}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454242',
  },
  scrollContent: {
    flexGrow: 1,
    marginVertical : 40
  },
  buttonContainer: {
    marginBottom: 16,
    marginHorizontal: 40
  },
  inputContainer: {
    marginBottom: 16,
    marginHorizontal: 40
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal: 40
    
  },
  content: {
    marginBottom: 16,
  },
});