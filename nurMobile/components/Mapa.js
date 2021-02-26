/*import React, { Component,uses } from 'react'
import { View, Text, Dimensions } from 'react-native'
import MapView from 'react-native-maps'

const { width, height } = Dimensions.get('window')


export default function Mapa(){
    const [location, setLocation] = useState(null);
        /*constructor() {
            super()
            this.state = {
                region: {
                    latitude: null,
                    longitude: null,
                    latitudeDelta: null,
                    longitudeDelta: null,
                }
            }
        }
    
        calDelta(lat, lon, accu) {
            const oneDegreeOfLongitudInMeters = 111.32;
            const circunference = (40075 / 360);
    
            const latDelta = accu * (1 / (Math.cos(lat) * circunference));
            const lonDelta = (circunference / oneDegreeOfLongitudInMeters);
    
            this.setState({
                region: {
                    latitude: lat,
                    longitude: lon,
                    latitudeDelta: latDelta,
                    longitudeDelta: lonDelta,
                }
            })
        }
    
        componentDidMount() {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const accu = position.coords.accuracy;
    
                    this.calDelta(lat, lon, accu)
                })
        }
        {this.state.region.latitude ? <MapView
                        style={styles.container}
                        initialRegion={this.state.region}>
    
                    </MapView> : null}
    
    */


/*return (
    <View>
        <Text>Hola</Text>
    </View>)
 
 
}
/*const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF'
},
map: {
flex: 1,
width: width
}
})*/
/*import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Button, PermissionsAndroid } from 'react-native';
import MapView, { Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


const [width, heigth] = Dimensions.get('window')

export default function Mapa() {
  //obtenerLocalización()
  //if (ubicación.isLoaded) {
    return (
      /*<View style={styles.container}>
        {ubicación.isLoaded ? <MapView style={styles.map}
          initialRegion={ubicación}>
          <MapView.Marker
            coordinate={marker()}
            title='Estoy aquí' />
        </MapView> : null}
      </View>*/
/* <View>
   <Text>No hay sistema</Text>
 </View>)
/*}

/*let ubicación = {
latitude: -0.2259055,
longitude: -79.4877518,
latitudeDelta: 26.979195213551716,
longitudeDelta: 26.293568091987066,
isLoaded: false
}

const obtenerLocalización = () => {
try {
Geolocation.getCurrentPosition(
 (position) => {
   console.log(position)
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const accu = position.coords.accuracy;
   calcDelta(lat, lon, accu)
   //console.log(position)
 }
);
}
catch (error) { console.warn(error) }
}

function calcDelta(lat, lon, accu) {
const oneDegreeOfLongitudInMeters = 111.32;
const circumference = (40075 / 360);

const latDelta = accu * (1 / (Math.cos(lat) * circumference));
const lonDelta = (accu / oneDegreeOfLongitudInMeters);

ubicación = {
latitude: lat,
longitude: lon,
longitudeDelta: lonDelta,
latitudeDelta: latDelta,
isLoaded: true

}
console.log(this.state.region)
let infoApi = JSON.stringify({ nombre: 'Matilde', latitud: this.state.region.latitude, longitud: this.state.region.longitude })
fetch('http://192.168.1.110:8000/api/donante-create', {
method: 'POST', body: infoApi,
headers: {
 "Content-type": "application/json; charset=UTF-8"
}
}).then((response) => response.json()).then((responseJson) => { console.log('hola', responseJson) })
.catch(err => console.error(err))
}

const marker = () => {
let latitude = ubicación.latitude
let longitude = ubicación.longitude
return {
latitude: latitude,
longitude: longitude,
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
map: {
height: heigth,
width: width
}
});
*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Button, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key.toString(), jsonValue)
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

export default function Mapa() {
  let [ubicación, setUbicación] = useState(
    {
      puntos: null,
      latitude: null,
      longitude: null,
      longitudeDelta: null,
      latitudeDelta: null,
      isLoaded: false,
    });

  let [ubi, setUbi] = useState({
    latitude: null,
    longitude: null,
    longitudeDelta: null,
    latitudeDelta: null,
  })

  //const [load, setLoad] = useState(Boolean)
  const traerUbicaciones = async () => {
    getData('mapa').then((data) => {
      console.log((data))
      
      getData('ubic').then((ubi) => {
        console.log(ubi)
        setUbicación(ubicación = {
          puntos: (data),
          latitude: ubi.latitude,
          longitude: ubi.longitude,
          longitudeDelta: ubi.longitudeDelta,
          latitudeDelta: ubi.latitudeDelta,
          isLoaded: true,
        })
      })

    }
    )
  }

  const obtenerLocalización = async () => {
    Geolocation.getCurrentPosition(
      (position) => {
        JSON.stringify(position)
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const accu = position.coords.accuracy;
        const oneDegreeOfLongitudInMeters = 111.32;
        const circumference = (40075 / 360);

        const latDelta = accu * (1 / (Math.cos(lat) * circumference));
        const lonDelta = (accu / oneDegreeOfLongitudInMeters);

        setUbi(ubi = {
          latitude: lat,
          longitude: lon,
          longitudeDelta: lonDelta,
          latitudeDelta: latDelta,
        })

        storeData(ubi, 'ubic')

        fetch('http://192.168.1.110:8080/api/donations', {
          method: 'GET',
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Accept": "application/json; charset=UTF-8"
          }
        }).then((response) =>
          response.json()
        ).then(json => {
          //removeValue('mapa')
          storeData(ubi, 'ubic')
          setUbicación(ubicación = {
            puntos: json.data,
            latitude: ubi.latitude,
            longitude: ubi.longitude,
            longitudeDelta: ubi.longitudeDelta,
            latitudeDelta: ubi.latitudeDelta,
            isLoaded: true,
          })
          storeData(json.data, 'mapa')
          console.log(json.data)
        }
        ).catch(err => {
          storeData(ubi, 'ubic')
          console.log(err)
          getData('mapa').then((data) => {
            console.log((data) + 98)
            
            setUbicación(ubicación = {
              puntos: (data),
              latitude: lat,
              longitude: lon,
              longitudeDelta: lonDelta,
              latitudeDelta: latDelta,
              isLoaded: true,
            })
          }
          )
        }
        )
        /*fetch('http://192.168.1.110:8080/api/donante-create', {
          method: 'POST', body: JSON.stringify({ nombre: 'Kakaroto', latitud: ubicación.latitude, longitud: ubicación.longitude }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then((response) => response.json()).then((r) => {
          console.log('Felicidades')
        }).catch(err => {console.error(err)
          })*/
      }
    );
  }

  useEffect(() => {
  })
  return (
    <View style={styles.container}>
      {ubicación.isLoaded ? <MapView style={styles.map}
        initialRegion={
          ubicación
        }>
        {ubicación.puntos.map((marker, index) => {
          console.log(marker.latitude);
          return (<Marker
            key={index}
            coordinate={{ latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude) }}
            title={marker.nombre}
            description={'Hola'}
          />)
        })}
      </MapView> :
        <View>
          <Button title={'Ver las ubicaciones actuales'} onPress={obtenerLocalización}></Button>
          <Button title={'Ver las ultimas localizaciones'} onPress={traerUbicaciones}></Button>
        </View>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '100%',
    width: '100%'
  }
})

