import types from './actionTypes';

export default function reducer (state, { type, payload }) {

    switch (type) {
        
        case types.START:
            console.log('Start');
            break;

        default:
            return state;
    }
}