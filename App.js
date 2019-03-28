import React, {Component} from 'react'
import {StyleSheet, ScrollView, Image} from 'react-native'
import Main from './screens/Main/Main'
import Profile from './screens/Profile/Profile'
import Post from './screens/Post/Post'

// import MyProfile from './screens/Profile/MyProfile'
// import NewPost from './screens/Post/PostNew'

import {createDrawerNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation'
import img from './assets/img/myProfile.jpeg'

import {DrawerItems, SafeAreaView} from 'react-navigation'
import {Container, Header, Body, Content, Text} from 'native-base'

// import CustomDrawer from './screens/DrawerProfile/DrawerProfile'

class App extends Component {
  render(){
    return(
      <AppContainer />
    )
  }
}





const CustomDrawerContentComponent = (props) => (
  //make sure to use the react-native Image 
  // so that you can render the Image
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        {/* <Text>safd</Text> */}
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
  // Profile: {screen: MyProfile},
  // Post: {screen: NewPost}
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
