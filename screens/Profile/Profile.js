
import React from 'react'
import {
    createBottomTabNavigator, 
    createStackNavigator, 
    createAppContainer
} from 'react-navigation'
import {Icon} from 'native-base'

import MyProfile from './MyProfile'
import SettingProfile from './SettingProfile'


const ProfileStack = createBottomTabNavigator({
  Profile: {
    screen: MyProfile,
    navigationOptions: {
      title: 'My Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon 
          name='person'
          size={27}
          color={tintColor}/>
      )}
  },
  Settings: {
    screen: SettingProfile,
    navigationOptions: {
      title: 'Profile Settings',
      tabBarIcon: ({tintColor}) => (
        <Icon 
          name='settings'
          size={27}
          color={tintColor}/>
      )}
  }
}, {
  navigationOptions: ({navigation}) => {
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

const ProfileSets = createStackNavigator({
  ProfileSets: {
    screen: ProfileStack,
    
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
        ),
        drawerIcon: ({tintColor}) => (
        <Icon name='md-home' style={styles.icon}/>
      )
      };
    },
    
  }
  )


export default  Profile = createAppContainer(ProfileSets)