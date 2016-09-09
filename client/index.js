import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ChatTheme from './styles/base-theme';

import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
);

// Note: passing enhancer as the last argument requires redux@>=3.1.0
const store = createStore(reducer, enhancer);

import App from './App';

// Note: At the moment injectTapEventPlugin can only be called once. Put it at the top level of your application, just before you call ReactDOM.render. For more detail go to this site: https://github.com/zilverline/react-tap-event-plugin/issues/47
injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(ChatTheme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
document.getElementById('app'));
