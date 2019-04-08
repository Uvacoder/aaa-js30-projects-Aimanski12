import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {Item, Input, Icon} from 'native-base'
import {connect} from 'react-redux'

import {addToMainList} from '../../../store/actions/index'


class InputText extends Component {

  state = {
    itemVal: ''
  }

  addList = () => {
    const todo = {
      todoId: Math.random(),
      todoName: this.state.itemVal
    }
    this.props.addToMainList(todo)
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
        <Icon 
          active 
          name='md-add' 
          style={styles.icon}
          onPress={this.addList}/>
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
    addToMainList: (list) => { dispatch(addToMainList(list)) }
  }
}

export default connect(null, mapDispatchToProps)(InputText)
