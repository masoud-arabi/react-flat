import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import '../assets/stylesheets/application.scss';
import App from './components/App';
import flatReducer from './reducers/flatReducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';
import { logger } from 'redux-logger';


const reducers = combineReducers({
    flats: flatReducer,
    selectedFlat: selectedFlatReducer 
});
// render an instance of the component in the DOM

const middlewares = applyMiddleware(logger);

ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
        <App />
    </Provider>
, document.querySelector('#root'));
