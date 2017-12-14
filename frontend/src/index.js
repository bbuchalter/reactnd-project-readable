import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import posts from './Posts/reducers';
import { Provider } from 'react-redux';
import postsSaga from './Posts/sagas';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({posts}),
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(postsSaga);

const ThemedApp = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);


ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
