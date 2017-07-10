import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoContainer from './components/todo/TodoListContainer';
import registerServiceWorker from './registerServiceWorker';

import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

ReactDOM.render(<TodoContainer />, document.getElementById('root'));
registerServiceWorker();
