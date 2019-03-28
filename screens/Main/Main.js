import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, Button, ImageBackground} from 'react-native'
import image from '../../assets/img/main.jpg'

class Main extends Component {

  static navigationOptions = {
    header: null
  }
  render() {

    return (
      <ImageBackground source={image} style={styles.img}>
        <View style={styles.container}>
          <Text style={styles.text}>Login</Text>
          <View style={styles.textInputHandler}>
            <TextInput 
              style={styles.textInput}
              placeholder='Enter Email'
              type='text'/>
          </View>
          <View style={styles.textInputHandler}>
            <TextInput 
              style={styles.textInput}
              secureTextEntry={true}
              placeholder='Enter Password'/>
          </View>
          <View
            style={styles.btn}>
            <Button 
              title='Login'
              onPress={()=>this.props.navigation.navigate('Profile')}
              />
          </View>
        </View>
      </ImageBackground>
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
  img: {
    width: "100%",
    height: "100%"
  },
  text:{
    color: '#e5e5ef',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8
  },
  textInputHandler: {
    width: '65%',
    opacity: 0.8,
    height: 45,
    marginBottom: 7
  },
  textInput: {
    backgroundColor: 'white',
    opacity: 0.8,
    width: "100%",
    borderRadius: 5,
    paddingLeft: 20,
    fontSize: 15,
    color: 'black'
  }, 
  btn: {
    width: "42%",
    backgroundColor: 'red',
  }
})

export default Main