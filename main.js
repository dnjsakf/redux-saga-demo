import "@babel/polyfill"

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './app';
import rootReducer from './app/store';
import rootSaga from './app/Counter/reducer/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
