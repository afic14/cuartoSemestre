import React from 'react';
import { useState } from 'react';
import { Button, View, TextInput} from 'react-native';

export default function loginDonors({navigation}) {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const login = async() => {
    let credentials = JSON.stringify({email: user, password: pass})

    /*fetch('http://192.168.1.110:8000/api/login', {
      method: 'POST',
      body: credentials,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })*/
  }
  return (
    <View>
      <TextInput placeholder='Usuario'
        value={user} onChangeText={(userName) => { setUser(userName) }}>
      </TextInput>
      <TextInput placeholder='Contraseña'
        value={pass} onChangeText={(password) => { setPass(password) }}>
      </TextInput>
      <Button
        title='Iniciar sesión'
        onPress={() => navigation.navigate('Donante')
        } />
    </View>)
}