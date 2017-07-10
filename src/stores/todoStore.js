import Dispatcher from '../dispatcher/todoDispatcher';
import ActionTypes from '../constants/actionTypes';
import EventEmitter from 'events';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let todos = [];


class TodoStore extends EventEmitter {
  constructor() {
    super();

    this.dispatchToken = Dispatcher.register(this.dispatcherCallback.bind(this))

  }

  addChangeListener(cb) {
      this.on(CHANGE_EVENT, cb);
  }

  removeChangeLister(cb) {
      this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange() {
      this.emit(CHANGE_EVENT);
  }

  getAllTodos() {
      return todos;
  }

  getTodoById(id) {
      return _.find(todos, {id: id})
  }

  dispatcherCallback(action) {
    switch (action.actionType) {
      case ActionTypes.INITILIZE:
         console.log('firing')
         todos = action.initialData.todos;
         this.emitChange();
         break;
      case ActionTypes.ADD_TODO:
         todos.push(action.todo)
         this.emitChange();
         break;
      case ActionTypes.REMOVE_TODO:
        _.remove(todos, function(todo){
            console.log('store',todo, action)
             return action.id === todo.id;
        });
        this.emitChange();
        break;
      default:
        // no op
    }
};
};

// Dispatcher.register((action)=>{
//   switch (action.actionType) {
//     case ActionTypes.INITILIZE:
//       console.log('firing')
//        todos = action.initialData.todos;
//        TodoStore.emitChange();
//        break;
//     case ActionTypes.ADD_TODO:
//        todos.push(action.todo)
//        TodoStore.emitChange();
//        break;
//     case ActionTypes.REMOVE_TODO:
//       _.remove(todos, function(todo){
//            return action.id === todo.id;
//       });
//       TodoStore.emitChange();
//       break;
//     default:
//       // no op
//   }
// });

// TodoStore.dispatchToken = null;

export default new TodoStore();
