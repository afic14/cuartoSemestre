import React from 'react';
import { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function deliveries() {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  return (
    <View>
      <TextInput placeholder='Ingrese el nombre de la persona que recibió la donacion'
        value={nombre} onChangeText={(nom) => setNombre(nom)}>
      </TextInput>
      <TextInput placeholder='Ingrese el apellido de la persona que recibió la donacion'
        value={apellido} onChangeText={(ape) => setApellido(ape)}>
      </TextInput>
      <Button title='Guardar'></Button>
    </View>)
}