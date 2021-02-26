import React from 'react';
import { Button, View} from 'react-native';

export default function home({navigation}) {
    return(
    <View>
      <Button title='Iniciar sesión como administrador'
      onPress={() => {}}></Button>
      <Button title='Iniciar sesión como donante'></Button>
      <Button title='Registrarse como donante'></Button>
    </View>)
  }