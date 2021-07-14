import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import './index.css'

import { Provider } from 'react-redux';
import store from './redux/store';

const RootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    RootElement
)
