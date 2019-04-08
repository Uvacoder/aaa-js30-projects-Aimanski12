


import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {
  Container,
  Content,
} from 'native-base';

import InputText from '../components/Input/InputForIndividual'
import ListItems from '../components/List/ListIndivual'

export default class App extends Component {

static navigationOptions = ({navigation}) =>{
  return {
    title: navigation.getParam('todoName')
  }
};

  render() {
    return (
      <Container >
        <Content style={styles.content}>
          <InputText 
            placeHolderName='Enter List'
            todoId={this.props.navigation.getParam('todoId')}/>
          <ListItems 
            todoId={this.props.navigation.getParam('todoId')}
            todoName={this.props.navigation.getParam('todoName')} />
        </Content>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#c9c9c9',
    paddingTop: '5%'
  }
})
