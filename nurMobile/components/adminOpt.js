import React from 'react';
import { Button, View} from 'react-native';

export default function adminView({ navigation }) {
    return (
        <View>
            <Button
                title='Recoger una donación'
                onPress={() => navigation.navigate('Recogida')
                } />
            <Button
                title='Dar mantenimiento a una donación'
                onPress={() => navigation.navigate('Mantenimientos')
                } />
            <Button
                title='Entregar una donación'
                onPress={() => navigation.navigate('Entrega')
                } />
            <Button
                title='Ver mapa de donaciones'
                onPress={() => navigation.navigate('Mapa')
                } />
        </View>
    )
}