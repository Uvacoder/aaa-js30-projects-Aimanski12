import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {Item, Input, Icon} from 'native-base'
import {connect} from 'react-redux'

import {addToListItem} from '../../../store/actions/index'


class InputText extends Component {

  state ={
    listVal : ''
  }

  addItem = () => {
    const list = {
      listId: Math.random(),
      listName: this.state.listVal,
      isDone: false
    }
    this.props.addToMain(list, this.props.todoId)
    this.setState({listVal: ''})
  }
  render() {

    return (
    <View>
      <Item regular style={styles.item}>
        <Input 
          placeholder={this.props.placeHolderName}
          style={styles.input}
          onChangeText={(val)=>this.setState({listVal: val})}
          value={this.state.listVal}/>
        <Icon 
          active 
          name='md-add' 
          style={styles.icon}
          onPress={this.addItem}/>
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
    borderColor: '#353fbf',
    borderRadius: 5,
    textDecorationLine: 'none'
  },
  input: {
    paddingLeft: 18,
    color: '#353fbf'
  },
  icon: {
    paddingRight: 18,
    color:  '#353fbf'
  },
})


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToMain: (list, id) => { dispatch(addToListItem(list, id)) }
  }
}

export default connect(null, mapDispatchToProps)(InputText)
