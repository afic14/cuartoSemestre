
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  PermissionsAndroid
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation'
import { useEffect } from 'react';
import { useState } from 'react';
import {
  launchCamera,
  launchImageLibrary,
  ImagePicker
} from 'react-native-image-picker';


const json = { jose: 'sdasdsa', carlitos: 'sadsdf' }

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem((value.nombre + value.apellido).toString(), jsonValue)
  } catch (e) {
    console.warn(e)
  }
}

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key.toString())
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn(e)
  }
}

const getAllKeys = async () => {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch (e) {
    console.error(e)
  }
  console.log(keys)
  return keys
}

const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.error(e)
  }
  console.log('Done.')
}

let keys

getAllKeys().then(response => { return keys = response })

console.log(keys + 'as')


let localización = {
  latitud: null,
  longitud: null
}


/*function buttonBorrar() {
  getAllKeys().then(response => {
    keys = response
    console.log(keys.length + ' vaselina')
    for (let i = 0; i < keys.length; i++) {
      removeValue(keys[i])
    }
  })
}*/
let nombre = ''

export default function formsApp() {
  const [nombre, setNombre] = useState()
  const [apellido, setApellido] = useState()
  const [filePath, setFilePath] = useState({});
  const [imgBase64, setImgBase64] = useState();

  const changeNombre = (nombreU) => {
    setNombre(nombreU)
  }
  
  const changeApellido = (apellidoU) => {
    setApellido(apellidoU)
  }
  const buttonPressed = () => {
    if (nombre && apellido) {
      alert(nombre + ' ' + apellido);
      console.log('Aleluya')
      let user = { nombre: nombre, apellido: apellido, imagenBase64: imgBase64 }
      storeData(user)
      console.log(nombre + ' ' + apellido)
    } else {
      alert('Por favor llene todos los campos')
    }
  }

  const buttonPressed2 = () => {
    if (nombre && apellido) {
      alert('Estos son sus datos ' + nombre + ' ' + apellido);
      console.log('Aleluya')
    }

    let info = JSON.stringify({ nombre: nombre, latitud: localización.latitud, longitud: localización.longitud })
    try {
      fetch('http://192.168.1.110:8000/api/donante-create', {
        method: 'POST', body: info,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then((response) => response.json()).then((r) => {
        console.log(r, 'Felicidades')
      }).catch(err => console.error(err + ' eje ' + info))
    }
    catch (e) { console.error(e) }
    console.log(nombre + ' ' + apellido)
    let mensajes = 0;
    getAllKeys().then(response => {
      keys = response
      console.log(keys.length + ' vaselina')
      for (let i = 0; i < keys.length; i++) {
        getData(keys[i]).then(response => {
          fetch('http://192.168.1.110:8000/api/usuario-create', {
            method: 'POST', body: JSON.stringify(response),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(() => {
              removeValue(keys[i])
            })
            .catch(err => {
              console.error(err)
              if (mensajes <= 1) {
                alert('Hubo un error al momento de subir los datos')
                mensajes++
              }
            })
        })
      }
    })
  }

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Permiso para acceder a la camara',
            message: 'La aplicación requiere su permiso para acceder a la camara',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Permiso para acceder al almacenamiento externo',
            message: 'La aplicación requiere su permiso para acceder al almacenamiento externo/tarjeta SD',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('El usuario canceló el acceso a la camara');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('La camara no está disponible en el dispositivo');
        return;
      } else if (response.errorCode == 'permission') {
        alert('El permiso no fue dado por el usuario');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('response -> ', response)
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setImgBase64(response.base64)
      setFilePath(response);
    });
  };

  useEffect(() => {
    try {
      Geolocation.getCurrentPosition((position) => {
        localización = {
          latitud: position.coords.latitude,
          longitud: position.coords.longitude
        }
        console.log(localización)
      })
    }
    catch (e) {
      console.error(e)
    }
  }
  )

  return (<View style={style.container}>
    <Text style={style.title}>Formulario de Registro</Text>
    <TextInput
      style={style.input}
      placeholder='Nombre'
      onChangeText={(nombreU) => changeNombre(nombreU)}
      value={nombre} />

    <TextInput
      style={style.input}
      placeholder='Apellido'
      onChangeText={(apellidoU) => changeApellido(apellidoU)}
      value={apellido} />

    <Image
      source={{ uri: filePath.uri }}
      style={style.image}
    />
    <Button
      style={style.button}
      onPress={buttonPressed}
      title='Guardar'></Button>

    <Button
      style={style.button}
      onPress={buttonPressed2}
      title='Subir'></Button>

    <Button
      style={style.button}
      onPress={() => chooseFile('photo')}
      title='Seleccionar Imagen'></Button>
  </View>)
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15

  },
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15
  },

  textButton: {
    textAlign: 'center',
    color: 'white'

  },

  title: {

    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20
  },
  texArea: {
    height: 60
  },
  image: {
    width: 50,
    height: 50,
    margin: 2,
  },
});

AppRegistry.registerComponent('formsApp', () => formsApp);