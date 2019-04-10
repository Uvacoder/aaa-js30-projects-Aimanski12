import React, { Component } from 'react'
import {View, Text, Animated, StyleSheet} from 'react-native'
import {isDone} from '../../../store/actions/index'
import {connect} from 'react-redux'

class TextItem extends Component {

  state = {
    isDone: new Animated.Value(0),
  }

  listIsDone = (isdone) => {
    if(!isdone){
      Animated.timing(this.state.isDone,{
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start(()=>this.changeDone())
    } else {
      Animated.timing(this.state.isDone,{
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start(()=>this.changeDone())
    }
  }
  
  changeDone = () => {
    if(this.props.indicator === 'ListOfTodos'){
      this.props.listDone(this.props.indicator, this.props.todoId)
    } else {
      this.props.listDone(this.props.indicator, this.props.mainId, this.props.todoId)
    }
  }

  render() {
    const done = this.state.isDone.interpolate({
        inputRange: [0, 0.1, 0.95, 1],
        outputRange: [1, 1.40, 0.6, 1]
    })
    return (
      <Animated.View
        style={{
          textDecorationLine: 'line-through',
          transform: [{ scale: done}],
        }}>
        <View>
          <Text 
            onPress={()=>this.listIsDone(this.props.isDone)}
            style={[styles.text, this.props.isDone ? {textDecorationLine: 'line-through'}: null]}>{this.props.name}</Text>
        </View>
      </Animated.View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    listDone: (indicator, mainId, todoId) => { dispatch( isDone(indicator, mainId, todoId)) }
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#250632',
    fontSize: 20,
    paddingLeft: 8
  }
})

export default connect(null, mapDispatchToProps)(TextItem)