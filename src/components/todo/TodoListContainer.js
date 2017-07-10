import React from 'react';
import TodoActions from '../../actions/todoActions';
import TodoStore from '../../stores/todoStore';
import TodoList from './TodoList';

export default class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('container',TodoStore.getAllTodos())
    this.state = {
      todos: TodoStore.getAllTodos()
    }
  }

  componentWillMount = () => {
    TodoStore.addChangeListener(this._onChange);
  }


// Cleanup when this component is unmounted.
  componentWillUnmount = () =>  {
    TodoStore.addChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState({ todos: TodoStore.getAllTodos() });
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

// TodoListContainer.propTypes = {
// };
