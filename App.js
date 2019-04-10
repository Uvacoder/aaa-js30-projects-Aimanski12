

import {createAppContainer, createStackNavigator} from 'react-navigation'

import ListsOfTodos from './screens/ListsOfTodos/ListsOfTodos'
import TodoLists from './screens/TodoLists/TodoLists'

const AppStack = createStackNavigator({
  ListOfTodos: ListsOfTodos,
  TodoLists: TodoLists
})

const AppContainer = createAppContainer(AppStack)

export default AppContainer