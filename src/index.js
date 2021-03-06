import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import postReducer from './store/reducers/posts';
import { watchPosts } from './store/sagas/index';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  posts: postReducer,
})
const sagaMiddleware = createSagaMiddleware();
const store=createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchPosts)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
