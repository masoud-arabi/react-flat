import React from 'react';
import flats from '../../data/flats';

export default setFlats = ()=>{
    return {
        type: 'SET_FLATS',
        payload: flats,
    }
};