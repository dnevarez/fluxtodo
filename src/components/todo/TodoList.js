import React from 'react';
import Todo from './Todo';
import TodoActions from '../../actions/todoActions';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  removeTodo(id) {
    console.log('what')
    TodoActions.removeTodo(id);
  }
  render() {
    return (
      // map over array of todos from props.
      <div>
          <table className="table">
            <thead>
              <th>To Do</th>
            </thead>
            <tbody>
              {this.props.todos.map((todo) =>
                <Todo key={todo.id}
                      remove={this.removeTodo}
                      todo={todo} />
                  )}
            </tbody>
          </table>
      </div>
    )};
}

export default TodoList;
