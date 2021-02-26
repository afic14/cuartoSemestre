import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';

const Stack = createStackNavigator();

export default function Home({navigation}) {
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>           
            <Image style={styles.image}
            source={require('./assets/home2.jpg')}/>
            <Button
                title='Acceder al formulario de registro para donantes'
                onPress= {() => navigation.navigate('DonanteForm')
            }/>
            <Image style={styles.image}
            source={require('./assets/home3.jpg')}/>
            <Button
                title='Acceder al login para donates'
                onPress= {() => navigation.navigate('Login para donantes')
            }/>
            <Image style={styles.image}
            source={require('./assets/home1.png')}/>
            <Button
                title='Acceder al login para administradores'
                onPress= {() => navigation.navigate('Login para administradores')
            }/>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      marginBottom: 5
  
    },
    botton: {
      textAlign: 'center',
      justifyContent: "center",
      marginTop: 20,
      width: 100,
      height: 50,
      backgroundColor: '#ff5202',
      padding: 5,
      alignItems: 'center',
      borderRadius: 5,
  
    },
    input: {
      height: 40,
      borderColor: 'rgb(255, 99, 71)',
      borderWidth: 2,
      marginBottom: 10,
  
    },
    titleText: {
      color: '#000000',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 20,
    },
    container: {
      flex: 1,
      backgroundColor: '#e6e6fa',
      paddingVertical: 10,
      paddingHorizontal: 100,
    },
  
    text: {
      justifyContent: 'center',
      backgroundColor: '#f5deb3',
      marginTop: 10,
      alignItems: 'center',
      borderRadius: 5,
  
  
    },
    button: {
      fontSize: 15,
      color: '#fff'
    },
    margin: {
      marginTop: 20,
      width: 150,
      height: 50,
      backgroundColor: '#4b0082',
      padding: 10,
      alignItems: 'center',
      borderRadius: 5
    },
    image:{
      width: 160,
      height: 130,
       },
  });