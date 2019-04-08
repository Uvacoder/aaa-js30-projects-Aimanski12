
export const addToMainList = (list) => {
  return {
    type: 'ADD_MAIN_LIST',
    payload: {
      ...list,
      todoLists: []
    }
  }
}

export const deleteMainList = (id) => {
  return {
    type: 'DELETE_MAIN_LIST',
    id: id
  }
}

export const addToListItem = (listItem, id) => {
  return {
    type: 'ADD_TO_LIST_ITEM',
    payload: listItem,
    id: id
  }
}

export const deleteTodoList = (todoId, listId) => {
  return {
    type: 'DELETE_TODO_LIST',
    todoId,
    listId
  }
}

export const isDone = (todoId, listId) => {
  return {
    type: 'LIST_IS_DONE',
    todoId, 
    listId
  }
}