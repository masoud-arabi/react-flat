import React from 'react';

export default  flatsReducers = (state, action)=>{
    
    switch (action.type){

        case 'SET_FLATS':
            return action.payload;

        default:
            return state;
    }
};
