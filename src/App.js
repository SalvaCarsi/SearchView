'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import searchBarReducer from './containers/search-bar/reducer';
import SearchBar from './containers/search-bar/SearchBar';

import BodyWrapper from './components/styled/BodyWrapper';

/**
 * First configure the connection with the dev tools server
 * Then combines the reducers
 * @returns {Store<S>}
 */
function configureStore() {
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    port: 8000 ,
    hostname: 'localhost'
  });
  const appReducers = combineReducers({searchBarReducer});
  return createStore(
    appReducers,
    composeEnhancers()
  )
}

export default class App extends Component {

  render = () => {
    return (
      <Provider store={configureStore()}>
        <BodyWrapper>
          <SearchBar />
        </BodyWrapper>
      </Provider>
    );
  }
}
