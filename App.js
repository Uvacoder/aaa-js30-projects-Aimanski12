import {createAppContainer, createStackNavigator} from 'react-navigation'

import ImageCollection from './screens/ImageCollection/ImageCollection'
import Camera from './screens/Camera/Camera'

const AppStack = createStackNavigator({
  ImageCollection: ImageCollection,
  Camera: Camera
})

export default AppContainer = createAppContainer(AppStack)