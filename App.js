import {createAppContainer, createStackNavigator} from 'react-navigation'
import AnimatedMarker from './screens/AnimatedMarker'
import MultiMarker from './screens/MultiMarker'
import Polygons from './screens/Polygons'
import PolyLines from './screens/PolyLines'
import Main from './screens/Main'

const AppStack = createStackNavigator({
  Main: Main,
  AnimatedMarker: AnimatedMarker,
  MultiMarker: MultiMarker,
  Polygons: Polygons,
  PolyLines: PolyLines
})

export default AppContainer = createAppContainer(AppStack)
