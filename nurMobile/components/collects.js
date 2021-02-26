import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function collects() {
  const [description, setDescription] = useState();
  const [observation, setObservation] = useState();

  return (
    <View>
      <TextInput placeholder='Ingrese una descripción del mantenimiento'
        value={description} onChangeText={(desc) => setDescription(desc)}>
      </TextInput>
      <TextInput placeholder='Ingrese una observación sobre el equipo'
        value={observation} onChangeText={(obser) => setObservation(obser)}>
      </TextInput>
    </View>)
}