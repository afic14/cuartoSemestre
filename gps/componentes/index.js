import React from 'react';
import { Button, View } from 'react-native';

export default class Home extends React.Component{
    static navigationOptions={
        title: 'Home Screen'
    }
    render(){
        return(
            <View>
                <Button 
                title='Acceder a la ubicación'
                onPress={() => this.props.navigation.navigate('Mapa')}/>
            </View>
        )
    }
}