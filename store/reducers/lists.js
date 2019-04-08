

const initialState = {
  todos: []
}

const lists = (state = initialState, action) => {
  switch (action.type){

    case 'ADD_MAIN_LIST':
      return{
        ...state,
        todos: state.todos.concat(action.payload)
      }
    case 'DELETE_MAIN_LIST':
      const todo = state.todos.filter(todo => {
        return todo.todoId !== action.id
      })
      return{
        ...state,
        todos: todo
      }
    case 'ADD_TO_LIST_ITEM':
      let newList = state.todos.map(todo => {
        return todo.todoId === action.id ? {
          ...todo,
          todoLists: todo.todoLists.concat(action.payload)
        } :  todo
      })  
      return {
        ...state,
        todos: newList
      }
    case 'DELETE_TODO_LIST': 
      let lists = state.todos.map(todo => {
        return todo.todoId === action.todoId ? {
          ...todo,
          todoLists: todo.todoLists.filter(todoList => {
            return todoList.listId !== action.listId
          })
        } : todo
      })
      return {
        ...state,
        todos: lists
      }

    case 'LIST_IS_DONE':
      let list = state.todos.map(todo => {
        return todo.todoId === action.todoId ? {
          ...todo,
          todoLists: todo.todoLists.map(todoList => {
            return todoList.listId === action.listId ? {
              ...todoList,
              isDone: !todoList.isDone
            } : todoList
          })
        } : todo
      })
      return {
        ...state,
        todos: list
      }
    default: return state
  }
}

export default lists;