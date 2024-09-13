import React from 'react';
import { TouchableOpacity, Text, TextInput, StyleSheet, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: object;
};

type IconButtonProps = {
  iconName: string;
  onPress: () => void;
  style?: object;
};

// Botón reutilizable
export const CustomButton = ({ title, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Botón con icono reutilizable
export const IconButton = ({ iconName, onPress, style }: IconButtonProps) => {
    return (
      <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
        <AntDesign name={iconName as keyof typeof AntDesign.glyphMap} size={24} color="white" />
      </TouchableOpacity>
    );
  };

// Caja de texto reutilizable
export const CustomInput = () => {
  return <TextInput style={styles.input} placeholder="Escribe aquí..." />;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ADD8E6', // Azul claro
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#D3D3D3', // Color plomo claro
    padding: 10,
    borderRadius: 25,
    marginVertical: 10,
  },
  iconButton: {
    backgroundColor: '#ADD8E6', // Azul claro
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    margin: 10,
  },
});
