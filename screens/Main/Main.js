


import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';


import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  List,
  ListItem,
  Left, Right
} from 'native-base';

import image from '../assets/background.jpg'

export default class App extends Component {

  state={
    listName: ''
  }


  render() {
    return (
      <Container >

        <Content style={styles.content}>
          <Item regular style={styles.item}>
            <Input 
              placeholder='Enter List'
              style={styles.input}
              onChangeText={(val)=>this.setState({listName: val})}
              value={this.state.listName}/>
            <Icon 
              active 
              name='md-add' 
              style={styles.icon}
              onPress={()=>console.log('sdfg')}/>
          </Item>

          <List  style={styles.list}>
            <ListItem style={styles.listItems}>
              <Left>
                <Icon name="trash" style={styles.listIconTrash}/>
                <Text style={styles.text}>Grocery List</Text>
              </Left>
              <Right style={styles.right}>
                <Icon name="arrow-forward" style={styles.listIconCont}/>
              </Right>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Left>
                <Icon name="trash" style={styles.listIconTrash}/>
                <Text style={styles.text}>Simon Mignolet Add This Into Your File And See How It Looks</Text>
              </Left>
              <Right style={styles.right}>
                <Icon name="arrow-forward" style={styles.listIconCont}/>
              </Right>
            </ListItem>
            <ListItem style={styles.listItems}>
              <Left>
                <Icon name="trash" style={styles.listIconTrash}/>
                <Text style={styles.text}>Things to do</Text>
              </Left>
              <Right style={styles.right}>
                <Icon name="arrow-forward" style={styles.listIconCont}/>
              </Right>
            </ListItem>
          </List>


        </Content>
          {/* </ImageBackground> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#c9c9c9',
    paddingTop: '5%'
  },
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
  text: {
    color: '#353fbf',
    fontSize: 15
  },
  listIconTrash: {
    color: '#c12222',
    alignSelf: 'flex-start'
  },
  listIconCont: {
    color: '#353fbf',
    alignSelf: 'flex-end'
  }



});
