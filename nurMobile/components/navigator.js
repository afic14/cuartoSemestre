
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './index'
import Mapa from './Mapa'
import formsApp from './formulario'
import adminView from './adminOpt'
import collects from './collects'
import deliveries from './deliveries'
import donations from './donations'
import donorView from './donorsOpt'
import loginAdmin from './loginAdmins'
import loginDonors from './loginDonors'
import maintenances from './maintenances'
import registerForm from './registerForm'


const Stack = createStackNavigator();


export default function Navigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Index'
                component={Home} />
            <Stack.Screen name='Formulario'
                component={formsApp}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen name='Mapa'
                component={Mapa} />
            <Stack.Screen name='Admin'
                component={adminView}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen name='Recogida'
                component={collects}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen name='Entrega'
                component={deliveries}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen name='Donaciones'
                component={donations}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen name='Donante'
                component={donorView}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen name='Login para administradores'
                component={loginAdmin}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen name='Login para donantes'
                component={loginDonors}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen name='Mantenimientos'
                component={maintenances}
                options={{ title: 'Bienvenido' }}
            />
            <Stack.Screen name='DonanteForm'
                component={registerForm}
                options={{ title: 'Bienvenido' }}
            />
        </Stack.Navigator>
    )
}

