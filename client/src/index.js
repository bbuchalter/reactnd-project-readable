import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import posts from './Posts/reducers';
import comments from './Comments/reducers';
import categories from './Categories/reducers';
import { Provider } from 'react-redux';
import postsSaga from './Posts/sagas';
import commentsSaga from './Comments/sagas';
import categoriesSaga from './Categories/sagas';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({posts, comments, categories}),
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(postsSaga);
sagaMiddleware.run(commentsSaga);
sagaMiddleware.run(categoriesSaga);

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
