import React, { Component } from 'react'
import {StyleSheet, ImageBackground} from 'react-native'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import imgBackground from '../../assets/img/messages.jpg'
import one from '../../assets/img/01.jpg'
import two from '../../assets/img/02.jpg'
import three from '../../assets/img/03.jpg'
import four from '../../assets/img/04.jpg'
import five from '../../assets/img/05.jpg'

class MyProfile extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
  <Container>
    <ImageBackground source={imgBackground} style={{width: "100%", height: "100%"}}>
       <Content>
          <List>
            <ListItem thumbnail>
              <Left><Thumbnail square source={one} /></Left>
              <Body>
                <Text>Batman</Text>
                <Text note numberOfLines={1} style={styles.text}>Where are you now . . </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={two} />
              </Left>
              <Body>
                <Text>Hulk</Text>
                <Text note numberOfLines={2} style={styles.text}>This is the time to make a difference in our society . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={three} />
              </Left>
              <Body>
                <Text>Joker</Text>
                <Text note numberOfLines={1} style={styles.text}>We have lots of things . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={four} />
              </Left>
              <Body>
                <Text>Ironman</Text>
                <Text note numberOfLines={2} style={styles.text}>You should eat something that is really healthy . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={five} />
              </Left>
              <Body>
                <Text>Thanos</Text>
                <Text note numberOfLines={2} style={styles.text}>We have all the rings and we are now the most powerful . . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
    </ImageBackground>
  </Container>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "#3e4d73"
  }

})

export default MyProfile