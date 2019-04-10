import React, { Component } from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {Item, Input, Icon, Text} from 'native-base'
import {connect} from 'react-redux'

import {addToMainList, addToListItem} from '../../../store/actions/index'


class InputText extends Component {

  state = {
    itemVal: ''
  }

  addList = () => {
    const todo = {
      key: Math.random().toString(),
      todoName: this.state.itemVal,
      isDone: false
    }
    if(this.props.indicator === 'ListOfTodos'){
      this.props.addToMainList(todo)
    } else {
      this.props.addToLists(this.props.todoId, todo)
    }
    this.setState({ itemVal: '' })
  }

render() {

  return (
    <View>
      <Item regular style={styles.item}>
        <Input 
          placeholder={this.props.placeHolderName}
          style={styles.input}
          onChangeText={(val)=>this.setState({itemVal: val})}
          value={this.state.itemVal}/>
        <TouchableOpacity
          onPress={this.addList} >
          <Icon 
            active 
            name='md-add' 
            style={styles.icon}
            />
        </TouchableOpacity>
      </Item>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    marginLeft: '4%',
    width: '92%',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#250632',
    borderRadius: 5,
    textDecorationLine: 'none'
  },
  input: {
    paddingLeft: 18,
    color: '#250632',
    textDecorationLine: 'none'
  },
  icon: {
    paddingRight: 18,
    color:  '#250632'
  }
})


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToMainList: (todo) => { dispatch(addToMainList(todo)) },
    addToLists: (todoId, list) => {dispatch(addToListItem(todoId, list))}
  }
}

export default connect(null, mapDispatchToProps)(InputText)
