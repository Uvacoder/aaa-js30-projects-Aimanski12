
import React, { Component } from 'react'
import Fragment from '../../../utils/Fragment'
import List from '../../../components/Dashboards/Lists/List'
import {isEmpty} from '../../../utils/Validation'


class Lists extends Component {


render() {

  let lists = <h1 className="display-4 None">No lists.</h1>

  if(!isEmpty(this.props.lists)){
    lists = this.props.lists.map(list => {
      return <List 
              dashId={this.props.dashId}
              key={list._id}
              status={list.status}
              list={list.list}
              listId={list._id}
              listDate={list.date}/>
    })
  }

  return (
    <Fragment>
      <ul className="list-group ListGroup">
        {lists}
      </ul>
    </Fragment>
  )}
}

export default Lists