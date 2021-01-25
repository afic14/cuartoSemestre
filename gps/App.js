import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from './componentes/index';
import Mapa from './componentes/Mapa';

const AppNavigator = createStackNavigator({
  Home:{screen:Home},
  Mapa: {screen: Mapa}
})

export default createAppContainer(AppNavigator)