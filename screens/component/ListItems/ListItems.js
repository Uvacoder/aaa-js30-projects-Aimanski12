import React, { Component } from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import EmptyHeader from '../EmptyHeader/EmptyHeader'
import List from '../List/List'

class ListItems extends Component {

  render() {
    let listComponent = <EmptyHeader indicator={this.props.indicator}/>
    if(this.props.items.length >= 1) {
      listComponent = <FlatList 
      data={this.props.items}
      renderItem={(info) => (
        <List 
          key={info.item.key}
          isDone={info.item.isDone}
          todoId={info.item.key}
          mainId={this.props.todoId}
          todoName={info.item.todoName}
          indicator={this.props.indicator}
          navigation={this.props.navigation}/>
        )}
      />
    }
    return (
      <View style={styles.list}>
          {listComponent}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    width: '90%',
    marginLeft: '5%',
    marginTop: 10
  },
})
export default ListItems