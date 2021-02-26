import React from 'react';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key.toString(), jsonValue)
  } catch (e) {
    console.warn(e)
  }
}

export default function loginAdmin({ navigation }) {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const login = async(process) => {
    console.log(process)
    let credentials = JSON.stringify({email: user, password: pass})
    fetch('http://192.168.1.110:8000/api/login', {
      method: 'POST',
      body: JSON.stringify({email: user, password: pass}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if(res.status == 201){
        return res.json()
      }
      })
    .then((r) => {console.log(r.token)
    storeData({token: r.token}, 'token')
  })
    .catch((err) => {
      console.log(err)
    })
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
        onPress={() => navigation.navigate('Admin')//navigation.navigate('Admin')
        } />
    </View>)
}