'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import ShapesHeader from './containers/ShapesHeader';
import ShapesForm from './containers/shapes-form/ShapesForm';
import shapeReducer from './containers/shapes-form/reducer';
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
  const appReducers = combineReducers({shapeReducer});
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
          <ShapesHeader />
          <ShapesForm />
        </BodyWrapper>
      </Provider>
    );
  }
}
