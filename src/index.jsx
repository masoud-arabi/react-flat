import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';
import '../assets/stylesheets/application.scss';
import App from './components/App';
import flatsReducers from './reducers/flatsReducer';


    const reducers = combineReducers({
        flats: flatsReducers
    });
// render an instance of the component in the DOM
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
, document.querySelector('#root'));
