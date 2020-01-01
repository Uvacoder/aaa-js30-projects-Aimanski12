import React, { useState } from 'react';
import uuid from 'uuid';
import {ListGroup, Form, Button, Container, InputGroup, FormControl} from 'react-bootstrap'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const TodoList = () => {

  // items state
  const [items, setItems] = useState([]);

  // text state
  const [text, inputText] = useState('')

  // add list
  const addList = () => {
    const r = 255
    const g = 164
    const b = 0

    const gRange = Math.floor((245 - g) / (items.length+1))
    const bRange = Math.floor((227 - b) / (items.length+1))

    let gre = gRange
    let blu = bRange


    if(items.length === 0){
      setNewItem(items, true, r, g, b, gre, blu)
    }

    if(items.length > 0){
      let newList = items.map((item, i) => {
        let nColor = `${r}, ${gre + g}, ${blu + b}`
          gre += gRange
          blu += bRange
            return {
              id: item.id,
              text: item.text,
              color: nColor
            }
      })
      setNewItem(newList, true, r, g, b, gre, blu)
    }
  }

  // set a new list
  const setNewItem = (newList, hasNew, r, g, b, gre, blu) => {
      setItems(items =>[
        ...newList,
        hasNew ? newItem(r, g, b, gre, blu) : null
      ])
  }

  // new items
  const newItem = (r, g, b, gre, blu) => {
    return {
      id: uuid(),
      text,
      color: `${r}, ${gre + g}, ${blu + b}`
    }
  }

  // remove list
  const removeList = async (listId) => {
    const r = 255
      const g = 164
        const b = 0
    const gRange = Math.floor((245 - g) / (items.length-1))
      const bRange = Math.floor((227 - b) / (items.length-1))
    let gre = gRange
      let blu = bRange

    if(items.length === 0)  return

    if(items.length >= 1){
      let newList = await items.filter((item, i) => item.id !== listId )
      let lis = newList.map(item => {
        let nColor = `${r}, ${gre + g}, ${blu + b}`
          gre += gRange
          blu += bRange
            return {
              id: item.id,
              text: item.text,
              color: nColor
            }
      })
      await setItems(items =>[ ...lis ])
    }
  }
  
  const list = (text, id, color) =>{
    return (
      <ListGroup.Item 
        className='list' 
        style={{background: `rgb(${color})`}}
        >{text}
        <Button 
        className="close"
        onClick={()=> { removeList(id) }}>
          <span aria-hidden="true">&times;</span></Button>
      </ListGroup.Item>    
    )
  }

  return (
    <div className="App">
      <div className="app_container">
        <Container className="formContent">
          <Form>
            <Form.Label className="label">Animated Form</Form.Label>
            <InputGroup className="mb-3 inputItem">
              <FormControl
                className="inputArea hover"
                placeholder="What's in your mind ?"
                value={text}
                onChange={(e)=> inputText(e.target.value)} />
              <InputGroup.Append>
                <InputGroup.Text
                  id="basic-addon2" 
                  className="inputAppend hover"
                  onClick={()=> {
                    if(text === ' ' || text === '') {
                      return 
                    } else {
                      addList()
                      inputText('')
                    }
                  }}><i className="fas fa-plus"></i></InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
              {/* <Form.Control className="inputArea hover options" as="select">
                <option>Choose your favorite color...</option>
                <option>Red</option>
                <option>Green</option>
              </Form.Control> */}
          </Form>

          <ListGroup>
            <TransitionGroup>
              {items.map(({id, text, color}) => (
                <CSSTransition
                  key={id}
                  in={true}
                  appear={true}
                  timeout={500}
                  classNames='item' >
                    {list(text, id, color)}
                  </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>

        </Container>

      </div>
     </div>
  );
}

export default TodoList
