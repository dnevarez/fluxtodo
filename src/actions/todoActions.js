import Dispatcher from '../dispatcher/todoDispatcher';
import ActionTypes from '../constants/actionTypes';
import TodoApi from '../api/todoApi';




const TodoActions = {
  addTodo: (todo) => {
    var newTodo = TodoApi.saveTodo(todo); // In an actual call with ajax you would need to handle this asyncronously. ie: .then() etc

    // Hey dispatcher, go tell all the stores that a todo was added.
    Dispatcher.dispatch({
        actionType: ActionTypes.ADD_TODO,
        todo: newTodo
    });
  },

  removeTodo: (id) => {
    TodoApi.deleteTodo(id);
    console.log('action', id)
    Dispatcher.dispatch({
        actionType: ActionTypes.REMOVE_TODO,
        id: id
    })
  }

}

export default TodoActions;
