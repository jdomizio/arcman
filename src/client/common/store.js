import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import * as reducers from 'reducers';
import rootSaga from '../rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({ ...reducers }),
    undefined, // initial store state
    applyMiddleware(
        thunkMiddleware,
        sagaMiddleware,
    )
);

sagaMiddleware.run(rootSaga);