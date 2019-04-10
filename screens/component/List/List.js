import React, { Component } from 'react'
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native'
import {ListItem, Left, Text, Right, Icon} from 'native-base'
import {connect} from 'react-redux'
import {deleteMainList, deleteTodoList} from '../../../store/actions/index'
import TextItems from '../Text/Text'

class List extends Component {

  state = {
    fadeInAnim: new Animated.Value(0),
    fadeOutAnim: new Animated.Value(1)
  }

  componentDidMount(){
    Animated.timing(
      this.state.fadeInAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }
    ).start()
  }

  deleteList = (id) => {
    Animated.timing(
      this.state.fadeOutAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }
    ).start(() => {
        if(this.props.indicator === 'ListOfTodos'){
          this.props.deleteList(id)
        } else {
          this.props.deleteTodo(id, this.props.mainId)
        }

    })
  }

  goToIndividual = (todoId, todoName) => {
    this.props.navigation.navigate('TodoLists', {
      todoId: todoId,
      todoName: todoName
    })
  }


  render() {
    let {fadeInAnim} = this.state
    const fade_In = this.state.fadeInAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [75, 0],
    })
    const fade_Out = this.state.fadeOutAnim.interpolate({
        inputRange: [0, 0.10, 1],
        outputRange: [500, 50, 0]
    })
    
    const navigateIcon = 
        <TouchableOpacity
          onPress={()=>this.goToIndividual(this.props.todoId, this.props.todoName)} >
          <Icon 
            name="arrow-forward" 
            style={styles.listIconCont} />
        </TouchableOpacity>

    return (
    <Animated.View
      style={{
        opacity: fadeInAnim,
        translateY: fade_In,
        translateX: fade_Out
      }}>

      <ListItem 
          style={styles.listItems} >
          <Left>
            <TextItems 
              todoId={this.props.todoId}
              mainId={this.props.mainId}
              isDone={this.props.isDone}
              indicator={this.props.indicator}
              name={this.props.todoName}/>
          </Left>
          <Right>
            <View style={[styles.iconsContainer, this.props.indicator !== 'ListOfTodos' ? styles.listsOnly : null]}>
              <TouchableOpacity 
                style={styles.deleteHandler}
                onPress={()=>this.deleteList(this.props.todoId)} >
                <Icon 
                  name="trash" 
                  style={styles.listIconTrash} />
              </TouchableOpacity>
              {this.props.indicator === 'ListOfTodos' ? navigateIcon : null }
            </View>
          </Right> 
        </ListItem>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  listItems: {
    width: '100%',
    marginLeft: 0,
    height: 50,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: '#250632'
  },
  
  iconsContainer: {
    width: 40,
    flex: 1,
    flexDirection: 'row'
  },
  deleteHandler: {
    width: 30
  },
  listsOnly: {
    width: 10,
  },
  listIconTrash: {
    color: '#c12222',
  },
  listIconCont: {
    color: '#353fbf',
  }
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteList: (id) => { dispatch(deleteMainList(id)) },
    deleteTodo: (id, mainId) => { dispatch(deleteTodoList(id, mainId)) }
  }
}

export default connect(null, mapDispatchToProps)(List)