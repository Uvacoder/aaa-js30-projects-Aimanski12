import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import {List, ListItem, Left, Icon, Text, Right, Body} from 'native-base'
import {connect} from 'react-redux'
import {deleteMainList} from '../../../store/actions/index'

class ListMain extends Component {

  goToIndividual = (id, name) => {
    this.props.navigation.navigate('IndividualList', {
      todoId: id,
      todoName: name,
    })
  }

  render() {

let listComponent = <Body style={styles.body}>
                      <Text style={styles.textEmpty}>Your Todolist is empty</Text>
                    </Body>

  if(this.props.todos.length >= 1){
    listComponent = this.props.todos.map(todo => {
      return (
      <ListItem 
        style={styles.listItems}
        key={todo.todoId}>
        <Left>
          <Text style={styles.text}>{todo.todoName}</Text>
        </Left>
        <Right>
          <View style={styles.iconsContainer}>
            <View style={styles.deleteHandler}>
              <Icon 
                name="trash" 
                style={styles.listIconTrash}
                onPress={()=>this.props.deleteList(todo.todoId)}/>
            </View>
            <View>
              <Icon 
                name="arrow-forward" 
                style={styles.listIconCont}
                onPress={()=>this.goToIndividual(todo.todoId, todo.todoName)}/>
            </View>
          </View>
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
  iconsContainer: {
    width: 40,
    flex: 1,
    flexDirection: 'row'
  },
  deleteHandler: {
    width: 30
  },
  listIconTrash: {
    color: '#c12222',
  },
  listIconCont: {
    color: '#353fbf',
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteList: (id) => { dispatch(deleteMainList(id)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListMain)