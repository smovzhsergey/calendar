import { createStore } from 'redux';

import reducer from './reducer';

const state = {};

export default createStore(
    reducer,
    state,
);
