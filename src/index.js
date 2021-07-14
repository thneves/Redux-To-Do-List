import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
