import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

class Mapa extends React.Component {

  constructor() {
    super()
    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null,
      },
    }
  }

  calcDelta(lat, lon, accu) {
    const oneDegreeOfLongitudInMeters = 111.32;
    const circumference = (40075 / 360);

    const latDelta = accu * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accu / oneDegreeOfLongitudInMeters);

    this.setState({
      region: {
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta,
      }
    })
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const accu = position.coords.accuracy;
        this.calcDelta(lat, lon, accu)
        console.log(position)
      }
    );
  };

  marker(){
    let latitude= this.state.region.latitude
    let longitude= this.state.region.longitude
    return{
      latitude: latitude,
      longitude: longitude,
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.region.latitude ? <MapView 
        style={styles.map}
        initialRegion={this.state.region}>
          <MapView.Marker
            coordinate = {this.marker()}
            title = 'Estoy aquí'
            description = 'Casa'/>
        </MapView> : null}
        
      </View>)
  }
}

Mapa.propTypes = {
  provider: ProviderPropType,

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
});

export default Mapa
