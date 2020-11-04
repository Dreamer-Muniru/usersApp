import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./Router";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/mainReducer';
import { getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore'; 
import firebase from './firebase/config';
import thunk from 'redux-thunk';


const store = createStore(
  reducer, 
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebase),
  reduxReactFirebase(firebase)
));




ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
