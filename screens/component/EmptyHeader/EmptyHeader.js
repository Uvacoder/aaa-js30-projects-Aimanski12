import React from 'react'
import {StyleSheet, Animated} from 'react-native'
import {Body, Text} from 'native-base'

class EmptyHeader extends React.Component{

  state ={
    fadeIn: new Animated.Value(0)
  }

  componentDidMount(){
    Animated.timing(
      this.state.fadeIn, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start()
  }

  render(){

  return (
    <Animated.View
      style={{
        opacity: this.state.fadeIn,
        transform: [{
          scale: this.state.fadeIn.interpolate({
            inputRange: [0, 0.95, 1],
            outputRange: [1.35, 0.75, 1]
          })
        }]
      }}>
      <Body style={styles.body}>
        <Text style={styles.textEmpty}>
          Your {this.props.indicator === 'ListOfTodos' ? 'todolist' : this.props.indicator } is empty</Text>
      </Body>
    </Animated.View>
  )}
}

const styles = StyleSheet.create({
  body: {
    marginTop: 15,
  },
  textEmpty: {
    color: '#250632',
    fontSize: 20
  }
})
export default EmptyHeader