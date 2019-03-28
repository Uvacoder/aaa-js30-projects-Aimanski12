

import React from 'react'
import {
    createBottomTabNavigator, 
    createStackNavigator, 
    createAppContainer
} from 'react-navigation'
import {Icon} from 'native-base'

import PostNew from './PostNew'
import PostOld from './PostOld'


const PostStack = createBottomTabNavigator({
  PostNew: {
    screen: PostNew,
    navigationOptions: {
      title: 'New Posts',
      tabBarIcon: ({tintColor}) => (
        <Icon 
          name='paper'
          size={27}
          color={tintColor}/>
      )}
  },
  PostOld: {
    screen: PostOld,
    navigationOptions: {
      title: 'Old Posts',
      tabBarIcon: ({tintColor}) => (
        <Icon 
          name='document'
          size={27}
          color={tintColor}/>
      )}
  }
}, {
  navigationOptions: ({navigation}) => {
    // get the route name and set it to the header
    // console.log(navigation)
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    }
  },
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'green',
    inactiveTintColor: "blue",
    inactiveBackgroundColor: 'pink'
  }
})

const PostSets = createStackNavigator({
  PostSets: {
    screen: PostStack,
    
}},
{
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 20, color: '#0a3296' }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
  )


export default  Profile = createAppContainer(PostSets)