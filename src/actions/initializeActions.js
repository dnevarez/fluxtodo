import Dispatcher from '../dispatcher/todoDispatcher';
var ActionTypes = require('../constants/actionTypes');
var TodoApi = require('../api/todoApi');

var InitializeActions = {
  initApp: function(){
    let todos = TodoApi.getTodos();
    console.log(todos)
    Dispatcher.dispatch({
      actionType: ActionTypes.INITILIZE,
      initialData: {
        todos: TodoApi.getTodos()
      }
    });
  }
};

export default InitializeActions;
