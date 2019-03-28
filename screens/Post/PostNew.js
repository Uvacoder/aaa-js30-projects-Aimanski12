import React, { Component } from 'react'
import {Image, StyleSheet, View, ImageBackground} from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title } from 'native-base';
import imgBackground from '../../assets/img/messages.jpg'
import trees from '../../assets/img/trees.jpg'
import mountain from '../../assets/img/mountain.jpg'


class MyProfile extends Component {

  static navigationOptions = ({navigation}) => ({
    drawerIcon: ({tintColor}) => (
      <Icon name='md-paper' style={styles.icon}/>
    )
  })

  render() {
    return (
  <Container>
    <ImageBackground source={imgBackground} style={{width: "100%", height: "100%"}}>
       {/* <Header>
          <Left>
            <Icon 
              name="ios-menu" 
              onPress={() => this.props.navigation.openDrawer()} />
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
        </Header> */}
      <Content >
          <Card  style={styles.bkg}>
            <CardItem>
              <Left />
            </CardItem>
            <CardItem>
              <Body>
                <Image source={trees} style={{height: 290, width: 360, flex: 1}}/>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatem ex, libero eveniet repellendus iusto nisi animi recusandae quisquam esse officia ipsa doloremque veritatis tenetur vero accusantium aspernatur. Consectetur sit deserunt eum dolorem veniam, saepe culpa, illo velit sapiente ea repudiandae ab earum in, vitae enim quam? Quo, unde maiores.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="thumbs-down"  style={{color: 'gray'}}/>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="thumbs-up" />
                  <Text>View More</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card  style={styles.bkg}>
            <CardItem>
              <Left />
            </CardItem>
            <CardItem>
              <Body>
                <Image source={mountain} style={{height: 290, width: 360, flex: 1}}/>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatem ex, libero eveniet repellendus iusto nisi animi recusandae quisquam esse officia ipsa doloremque veritatis tenetur vero accusantium aspernatur. Consectetur sit deserunt eum dolorem veniam, saepe culpa, illo velit sapiente ea repudiandae ab earum in, vitae enim quam? Quo, unde maiores.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="thumbs-down"  style={{color: 'gray'}}/>
                </Button>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="thumbs-up" />
                  <Text>View More</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>

    </ImageBackground>
  </Container>
     
    )
  }
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
  },
  bkg: {
    backgroundColor: 'transparent',
    opacity: 0.9
  }

})

export default MyProfile