import React, { Component } from 'react'
import {Image, StyleSheet, View, ImageBackground} from 'react-native'
// import { List, ListItem, Left, Body, Text }  from 'native-base'
import {Icon, Body, Button, Title, Container, Header, Content, Left, Text} from 'native-base'
import img from '../../assets/img/myProfile.png'
import imgBackground from '../../assets/img/profileBackground.png'




class MyProfile extends Component {

  //  static navigationOptions = ({navigation}) => ({
  //   drawerIcon: ({tintColor}) => (
  //     <Icon name='md-user' style={styles.icon}/>
  //   )
  // })

  render() {
    return (


      <Container>
        {/* <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} /> */}
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
        <Content 
          contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10}}>
          <View style={styles.imageWrapper}>
            <Image source={img} style={styles.image}/>
          </View>
          <View>
           <Text>Hi! My Name is Aimanski12.</Text>
         </View>
         <View style={styles.textWrapper}>
           <Text style={styles.textHeader}>Profile</Text>
           <Text note style={styles.textContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex voluptate, omnis animi cum facilis excepturi officia commodi accusamus aspernatur asperiores atque eius dignissimos vel eveniet autem soluta incidunt aliquid corporis. Maiores pariatur.</Text>
         </View>
         <View style={styles.textWrapper}>
           <Text style={styles.textHeader}>Skills and Hobbies</Text>
           <Text note style={styles.textContent}>Iste consectetur sint, maxime libero earum distinctio quia veniam provident tempore minus officia sit sed, labore cupiditate tempora vitae sequi nesciunt non obcaecati saepe placeat. Quo, odit. Recusandae unde at quae, minima aut id dolor.</Text>
         </View>
          {/* <Text>Home Screen</Text> */}
        </Content>
        </ImageBackground>
      </Container>


    // <ImageBackground source={imgBackground} style={{width: "100%", height: "100%"}}>
    //   <View style={styles.container}>
    //     <View style={styles.imageWrapper}>
    //       <Image source={img} style={styles.image}/>
    //     </View>
    //     <View>
    //       <Text>Hi! My Name is John Smith.</Text>
    //     </View>
    //     <View style={styles.textWrapper}>
    //       <Text style={styles.textHeader}>Profile</Text>
    //       <Text note style={styles.textContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex voluptate, omnis animi cum facilis excepturi officia commodi accusamus aspernatur asperiores atque eius dignissimos vel eveniet autem soluta incidunt aliquid corporis. Maiores pariatur.</Text>
    //     </View>
    //     <View style={styles.textWrapper}>
    //       <Text style={styles.textHeader}>Skills and Hobbies</Text>
    //       <Text note style={styles.textContent}>Iste consectetur sint, maxime libero earum distinctio quia veniam provident tempore minus officia sit sed, labore cupiditate tempora vitae sequi nesciunt non obcaecati saepe placeat. Quo, odit. Recusandae unde at quae, minima aut id dolor.</Text>
    //     </View>
    //   </View>
    // </ImageBackground>
     
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
  imageWrapper: {
    width: 200,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
  },
  textWrapper: {
    width: "80%",
  },
  textHeader: {
    // paddingLeft: 5,
    color: "#494192",
    fontWeight: 'bold'
  },
  textContent: {
    width: "90%",
    marginLeft: "10%",
    textAlign: 'justify',
    color: "#1a1548"
  }

})

export default MyProfile