import React, { Component } from 'react'
import {Image, StyleSheet, View, ImageBackground} from 'react-native'
import { Container, Button,  Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import imgBackground from '../../assets/img/profileBackground.png'

class MyProfile extends Component {
     static navigationOptions = ({navigation}) => ({
    drawerIcon: ({tintColor}) => (
      <Icon name='md-user' style={styles.icon}/>
    )
  })

  render() {
    return (
    <ImageBackground 
      source={imgBackground} 
      style={{width: "100%", height: "100%"}}>
        <Content style={styles.container}>
          <ListItem icon>
            <Left>
                <Button 
                  style={{ backgroundColor: "#1b1837" }}>
                <Icon active name="contact" />
              </Button>
              </Left>
            <Body><Text>Share Profile To Public</Text></Body>
            <Right><Switch value={true} /></Right>
          </ListItem>
          <ListItem icon>
            <Left>
                <Button 
                  style={{ backgroundColor: "#0374f5" }}>
                <Icon active name="notifications-outline" />
              </Button>
              </Left>
            <Body><Text>Notifications</Text></Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
                <Button 
                  style={{ backgroundColor: "#8ca1b9" }}>
                <Icon active name="paper" />
              </Button>
              </Left>
            <Body><Text>Posts</Text></Body>
            <Right><Switch value={true} /></Right>
          </ListItem>
          <ListItem icon>
            <Left>
                <Button 
                  style={{ backgroundColor: "#10151a" }}>
                <Icon active name="list-box" />
              </Button>
              </Left>
            <Body><Text>Edit Profile</Text></Body>
            <Right><Icon name='arrow-forward' style={{color: 'black'}}/></Right>
          </ListItem>
          <ListItem icon>
            <Left>
                <Button 
                  style={{ backgroundColor: "#0374f5" }}>
                <Icon active name="people" />
              </Button>
              </Left>
            <Body><Text>Friends</Text></Body>
            <Right><Icon name='arrow-forward' style={{color: 'black'}}/></Right>
          </ListItem>
          <ListItem icon>
            <Left>
                <Button 
                  style={{ backgroundColor: "#f86560" }}>
                <Icon active name="swap" />
              </Button>
              </Left>
            <Body><Text>Switch Acoount</Text></Body>
            <Right>
              <Text>Robin</Text>
              <Icon name='arrow-forward' style={{color: 'black'}}/></Right>
          </ListItem>
        </Content>
    </ImageBackground>
     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 50
  },
  icon: {
    backgroundColor: 'yellow',
    width: 20
  }

})

export default MyProfile