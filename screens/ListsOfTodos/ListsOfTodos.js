import React, {Component} from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {connect} from 'react-redux'

import {
  Container,
  Content,
} from 'native-base';

import InputText from '../component/Input/Input'
import ListItems from '../component/ListItems/ListItems'
import img from '../assets/background.jpg'

class ListsOfTodos extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
    <Container style={{height: '100%'}}>
      <ImageBackground
        source={img}
        style={styles.imgBackground}
        >
        <Content style={styles.content}>
          <InputText 
            indicator={'ListOfTodos'}
            placeHolderName='Enter Todolist'/>
          <ListItems
            navigation={this.props.navigation}
            items={this.props.todos}
            indicator={'ListOfTodos'} />
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
    height: '100%'
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(ListsOfTodos)

