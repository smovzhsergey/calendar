import types from './actionTypes';

export default function reducer (state, { type, payload }) {

    switch (type) {
        
        case types.CHANGE_CURRENT_DATE:console.log(payload);
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
}