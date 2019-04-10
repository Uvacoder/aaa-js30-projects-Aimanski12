
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

export const addToListItem = (id, listItem) => {
  return {
    type: 'ADD_TO_LIST_ITEM',
    payload: listItem,
    id: id
  }
}

export const deleteTodoList = (listId, todoId) => {
  return {
    type: 'DELETE_TODO_LIST',
    listId,
    todoId
  }
}

export const isDone = (indicator, mainId, todoId) => {
  return {
    type: 'LIST_IS_DONE',
    indicator: indicator,
    mainId: mainId,
    todoId: todoId
  }
}