import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    console.log('Root Saga');
    yield all([]);
}