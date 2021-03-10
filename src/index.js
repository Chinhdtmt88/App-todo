import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TodoApp from "./components/TodoApp";
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();