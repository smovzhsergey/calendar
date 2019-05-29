import types from './actionTypes';

export default Object.freeze({
    changeCurrentDate: (date) => ({
        type: types.CHANGE_CURRENT_DATE,
        payload: date
    }),
})