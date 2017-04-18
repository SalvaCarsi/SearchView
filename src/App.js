'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import searchBarReducer from './containers/search-bar/reducer';
import SearchBar from './containers/search-bar/SearchBar';
import SearchResults from './containers/search-results/SearchResults';

import BodyWrapper from './components/styled/BodyWrapper';

function configureStore() {
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    port: 8080 ,
    hostname: 'localhost'
  });
  const appReducers = combineReducers({searchBarReducer});
  return createStore(
    appReducers,
    composeEnhancers(applyMiddleware(thunk))
  )
}

export default class App extends Component {

  render = () => {
    return (
      <Provider store={configureStore()}>
        <BodyWrapper>
          <SearchBar />
          <SearchResults />
        </BodyWrapper>
      </Provider>
    );
  }
}
