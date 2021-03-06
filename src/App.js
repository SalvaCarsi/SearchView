'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';

import searchBarReducer from './containers/search-bar/reducer';
import searchResultsReducer from './containers/search-results/reducer';
import SearchBar from './containers/search-bar/SearchBar';
import SearchResults from './containers/search-results/SearchResults';
import QuestionResult from './containers/question-result/QuestionResult';

import BodyWrapper from './components/styled/BodyWrapper';

function configureStore() {
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    port: 8080 ,
    hostname: 'localhost'
  });
  const appReducers = combineReducers({searchBarReducer, searchResultsReducer});
  return createStore(
    appReducers,
    composeEnhancers(applyMiddleware(thunk))
  )
}

const SearchPage = () => <BodyWrapper><SearchBar/><SearchResults/></BodyWrapper>;
const QuestionDetailPage = () => <BodyWrapper><QuestionResult/></BodyWrapper>;

export default class App extends Component {

  render = () => {
    return (
      <Provider store={configureStore()}>
        <Router history={browserHistory}>
          <Route path='/' component={SearchPage} />
          <Route path='/question' component={QuestionDetailPage} />
        </Router>
      </Provider>
    );
  }
}
