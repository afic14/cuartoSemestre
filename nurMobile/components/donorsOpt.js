import React from 'react';
import { Button, View} from 'react-native';

export default function donorView({navigation}) {
  return (
    <View>
      <Button
        title='Hacer una donación'
        onPress={() => navigation.navigate('Donaciones')
        } />
    </View>)
}