// Import React
import React, { useState } from 'react';
// Import de tailwind
import tailwind from 'tailwind-rn';
// Import componentes necesario 
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
  PermissionsAndroid,
  Button
} from 'react-native';
// import ImagePicker from 'react-native-image-picker'; importacion para la imagen y libretias necesarias
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

const App = () => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [ci, setCi] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState();


  const changeName = (nameU) => {
    setName(nameU)
  }

  const changeLastname = (lastnameU) => {
    setLastname(lastnameU)
  }
  const changeCi = (ciU) => {
    setCi(ciU)
  }

  const changeUsername = (usernameU) => {
    setUsername(usernameU)
  }
  const changePassword = (passwordU) => {
    setPassword(passwordU)
  }
  const uploadData = (mensaje) => {
    console.log(mensaje)
    if(name && lastname && ci && username && password && image){
      fetch('http://192.168.1.110:8080/api/donors', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        ci: ci,
        username: username,
        password: password,
        image: image
      })
    }).then(res => res.json())
      .then(resData => {
        alert(resData.message);
        console.log(resData);
        console.log('bonice')
        alert('Felicidades ya estas registrado');
      })
    }else{
      alert('Llene todos los campos')
    }
    
  }




  const [filePath, setFilePath] = useState({});

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
      setImage(response.base64);
      setFilePath(response);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.titleText}>
          REGISTRO DONANTE
        </Text>
        <View style={styles.imgContainer}>
          {<Image
            source={{
              uri: 'data:image/jpeg;base64,' + filePath.data,

            }}
            value={image} onChangeText={(value) => setImage(value)}
            style={styles.imageStyle}
          />}
          <Image
            source={{ uri: filePath.uri }}
            style={styles.img}
            value={image} onChangeText={(value) => setImage(value)}

          />
          <View style={tailwind(' w-full p-6 rounded-lg items-center')}>

            <Text style={styles.textinput} >Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder='nombre' value={name} onChangeText={(nameU) => changeName(nameU)}
            />
            <Text style={styles.textinput}>Apellido</Text>
            <TextInput
              style={styles.input}
              placeholder='apellido' value={lastname} onChangeText={(lastnameU) => changeLastname(lastnameU)}

            />
            <Text style={styles.textinput}>Cedula de Identidad</Text>
            <TextInput
              style={styles.input}
              placeholder='cedula' value={ci} onChangeText={(ciU) => changeCi(ciU)}
            />
            <Text style={styles.textinput}>Nombre Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder='usuario' value={username} onChangeText={(usernameU) => changeUsername(usernameU)}
            />
            <Text style={styles.textinput}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder='password' value={password} onChangeText={(passwordU) => changePassword(passwordU)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => chooseFile('photo')}>
            <Text style={styles.textStyle}>Subir Imagen</Text>
          </TouchableOpacity>
          <Button
            style={{ width: '100%' }}
            onPress={() => uploadData('En proceso')}
            title='Registrarse'></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  titleText: {
    color: '#DDDDDD',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: '#f0f8ff',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#5f9ea0',
    marginVertical: 2,
    width: 100
  },
  imgContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  img: {
    width: 100,
    height: 100,
    borderColor: 'black',
    borderWidth: 1
  },
  subcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {

    borderWidth: 1,
    borderColor: '#DDDDDD',
    height: 35,
    width: '100%',
    paddingHorizontal: 10,
    color: '#DDDDDD',

  },
  textinput: {
    color: '#DDDDDD',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#FFF',
    height: 45,
    width: '100%',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
