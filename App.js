import React, {Component} from 'react'
import {StyleSheet, Image} from 'react-native'
import Main from './screens/Main/Main'
import Profile from './screens/Profile/Profile'
import Post from './screens/Post/Post'

import {createDrawerNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation'
import img from './assets/img/myProfile.jpeg'

import {DrawerItems} from 'react-navigation'
import {Container, Header, Body, Content} from 'native-base'


class App extends Component {
  render(){
    return(
      <AppContainer />
    )
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={img} />
      </Body>
    </Header> 
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)

const AppDrawers = createDrawerNavigator({
  Profile: {screen: Profile},
  Post: {screen: Post}
},{
  drawerPosition: 'left',
  initialRouteName: 'Profile',
  contentComponent: CustomDrawerContentComponent
})


const AppStack = createSwitchNavigator({
  Main: {screen: Main},
  AppDrawers: {screen: AppDrawers},
})

const AppContainer = createAppContainer(AppStack)


const styles = StyleSheet.create({
  drawerImage:{
    width: 150,
    height: 150,
    borderRadius: 75,
    marginLeft: 50
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
})

export default App
