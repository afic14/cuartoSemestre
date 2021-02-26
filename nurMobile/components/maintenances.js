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
import Textarea from 'react-native-textarea';
import { useEffect } from 'react';

const App = () => {
    const [mantenancedate, setMantenancedate] = useState();
    const [observation, setObservation] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();

    const changeMantenancedate = (mantenancedateU) => {
        setMantenancedate(mantenancedateU)
    }
    const changeObservation = (observationU) => {
        setObservation(observationU)
    }

    const changeDescription = (descriptionU) => {
        setDescription(descriptionU)
    }

    const myfun = async () => {
        let fecha = new Date()

        fetch('http://192.168.0.105:8081/api/maintenances', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: '1',
                mantenancedate: mantenancedate,
                observation: observation,
                description: description,
                image: image
            })
        }).then(res => res.json())
            .then(resData => {
                alert(resData.message);
                console.log(resData);
            })
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

    useEffect(() => {
        let fecha = new Date()
        let year = fecha.getFullYear()
        let month = fecha.getMonth()
        month = month + 1
        let day = fecha.getDate()
        let date = year + '/' + month + '/' + day
        setMantenancedate(date)
        console.log(date)
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.titleText}>
                    Mantenimiento
        </Text>
                <View style={tailwind(' w-full p-6 rounded-lg items-center')}>
                    <Text style={styles.textinput}>Observacion</Text>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        placeholder='observacion' value={observation} onChangeText={(observationU) => changeObservation(observationU)}

                    />
                    <Text style={styles.textinput}>Descripcion</Text>
                    <Textarea
                        containerStyle={styles.textareaContainer}
                        placeholder='descripcion' value={description} onChangeText={(descriptionU) => changeDescription(descriptionU)}
                    />
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
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={() => chooseFile('photo')}>
                        <Text style={styles.textStyle}>Subir Imagen</Text>
                    </TouchableOpacity>
                    <Button
                        style={{ width: '100%' }}
                        onPress={myfun}
                        title='Guardar'></Button>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#778899',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    titleText: {
        color: '#000000',
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
        backgroundColor: '#F5FCFF',
        height: 35,
        width: '100%',
        paddingHorizontal: 10,
        color: '#000000',

    },
    textinput: {
        color: '#000000',
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
    textareaContainer: {
        height: 100,
        padding: 5,
        backgroundColor: '#F5FCFF',

    },
});