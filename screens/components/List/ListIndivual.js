import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {List, ListItem, Left, Icon, Text, Right, Body} from 'native-base'
import {connect} from 'react-redux'
import {deleteTodoList, isDone} from '../../../store/actions/index'

class ListMain extends Component {

  render() {

  let listComponent = 
    <Body style={styles.body}>
      <Text style={styles.textEmpty}>Your {this.props.todoName} list is empty</Text>
    </Body>

  const todo = this.props.todos.filter(todo => {
    return todo.todoId === this.props.todoId
  })
  
  

  if(todo[0].todoLists.length >= 1){
    listComponent = todo[0].todoLists.map(list => {
      return (
      <ListItem 
        style={styles.listItems}
        key={list.listId}>
        <Left >
          <View >
            <Text 
              onPress={()=>this.props.isDone(todo[0].todoId, list.listId)} 
              style={styles.text}>{list.listName}</Text>
          </View>
        </Left>
        <Right>
          <Icon 
            name="trash" 
            style={styles.listIconTrash}
            onPress={()=>this.props.deleteTodoList(todo[0].todoId, list.listId)}/>
        </Right> 
      </ListItem>
      )
    })
  }

  return (
    <View>
      <List  style={styles.list}>
        {listComponent}
      </List>
    </View>
  )}
}

const styles = StyleSheet.create({
  list: {
    width: '90%',
    marginLeft: '5%',
    marginTop: 10
  },
  listItems: {
    width: '100%',
    marginLeft: 0,
    height: 50,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: '#353fbf'
  },
  body: {
    marginTop: 15,
  },
  textEmpty: {
    color: '#353fbf',
    fontSize: 20
  },
  text: {
    color: '#353fbf',
    fontSize: 20
  },
  listIconTrash: {
    color: '#c12222',
  },
})

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteTodoList: (todoId, listId) => { dispatch(deleteTodoList(todoId, listId)) },
    isDone: (todoId, listId) => { dispatch(isDone(todoId, listId))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListMain)