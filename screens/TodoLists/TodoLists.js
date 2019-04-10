


import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import {
  Container,
  Content,
} from 'native-base';
import {connect} from 'react-redux'

import InputText from '../component/Input/Input'
import ListItems from '../component/ListItems/ListItems'
import img from '../assets/background.jpg'
class TodoLists extends Component {

static navigationOptions = ({navigation}) =>{
  return {
    title: navigation.getParam('todoName')
  }
};

  render() {
    const items = this.props.todos.filter((todo) => {
      return todo.key === this.props.navigation.getParam('todoId') ? todo.todoLists : null
    })

    return (
    <Container style={{height: '100%'}}>
      <ImageBackground
        source={img}
        style={styles.imgBackground}
        >
        <Content style={styles.content}>
          <InputText 
            placeHolderName='Enter List'
            indicator={'ListItems'}
            todoId={this.props.navigation.getParam('todoId')}/>
          <ListItems 
            items={items[0].todoLists}
            indicator={this.props.navigation.getParam('todoName')}
            todoId={this.props.navigation.getParam('todoId')}
            todoName={this.props.navigation.getParam('todoName')} />
        </Content>
      </ImageBackground>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: '5%'
  },
   imgBackground: {
     width: '100%',
     height: '100%',
     
   }
})

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoLists)