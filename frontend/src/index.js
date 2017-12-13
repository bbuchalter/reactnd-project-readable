import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, combineReducers } from 'redux';
import posts from './Posts/reducers';
import { Provider } from 'react-redux'

const store = createStore(
  combineReducers({posts}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ThemedApp = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);


ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
