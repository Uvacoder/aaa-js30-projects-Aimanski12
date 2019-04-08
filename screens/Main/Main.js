


import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {connect} from 'react-redux'

import {
  Container,
  Content,
} from 'native-base';

import InputText from '../components/Input/InputForGroup'
import ListItems from '../components/List/ListGroup'
import image from '../assets/background.jpg'

class App extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Container >

        <Content style={styles.content}>
          <InputText 
            placeHolderName='Enter Todolist'/>
          <ListItems 
            navigation={this.props.navigation}/>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToMain: (list) => { dispatch(addToMainList(list)) }
  }
}

export default connect(null, mapDispatchToProps)(App)

