import React from 'react';
import { useState } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
  launchImageLibrary
} from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation'
import { useEffect } from 'react';

export default function donations() {
  const [description, setDescription] = useState()
  const [filePath, setFilePath] = useState({});
  const [imgBase64, setImgBase64] = useState();
  const [ubicación, setUbicación] = useState();

  useEffect(() => {
    Geolocation.getCurrentPosition((position) => {
      setUbicación({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  })
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Permiso de cámara',
            message: 'La aplicación necesita permiso para acceder a la cámara',
          },
        );
        // Si se concede el permiso de CAMERA 
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
            title: 'Permiso de almacenamiento externo',
            message: 'La aplicación necesita permiso',
          },
        );
        // Despues de conceder el permiso
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Error de permiso', err);
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
        alert('Camara cancelada por el usuario');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Cámara no disponible en el dispositivo');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permiso no concedido');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('name -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setImgBase64(response.base64);
      setFilePath(response);
    });
  };

  const uploadData = async (mensaje) => {
    console.log(mensaje)
    let data = JSON.stringify({latitude: ubicación.latitude, longitude: ubicación.longitude, collected: false, image: imgBase64, donor_id: 1})
    fetch('http://192.168.1.110:8080/api/donations', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    }).then((res) => {
      console.log(res.message)
      console.log('exito')})
    .catch((err) => {console.log(err)})
  }
  return (
    <View>
      <Image source={{ uri: filePath.uri }}/>
      <TextInput placeholder='Descripción'
        value={description} onChangeText={(desc) => { setDescription(desc) }}>
      </TextInput>
      <Button title='Escoger Imagen' onPress={() => chooseFile('photo')}>
      </Button>
      <Button title='Guardar' onPress={() => uploadData('En proceso')}>
      </Button>
    </View>)
}