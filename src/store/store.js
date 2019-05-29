import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import { currentMonthIndex, currentYear, getMonthInfo } from '../helpers';
// import { saga } from '../sagas/saga';



const state = {
    currentMonthIndex,
    currentYear,
    daysInCurrentMonth: getMonthInfo(currentYear, currentMonthIndex).daysInCurrentMonth,
    firstMonthDayInWeek: getMonthInfo(currentYear, currentMonthIndex).firstMonthDayInWeek,
};

const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools && dev ? devtools : compose;
// const sagaMiddleware = createSagaMiddleware();

export default createStore(
    reducer,
    state,
    composeEnhancers()
    // composeEnhancers(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run(saga);