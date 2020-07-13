import {Todo, FetchTodosAction} from '../actions'
import {ActionsTypes} from '../actions/types'

export const todosReducer = (
  state: Todo[] = [],
  action: FetchTodosAction
) => {
  switch(action.type) {
    case ActionsTypes.fetchTodos:
      return action.payload
    default:
      return state;
  }
};