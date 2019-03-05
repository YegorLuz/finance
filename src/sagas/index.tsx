import { MONEY, ALL, GET, ADD, REMOVE } from '../constants';
import { takeLatest } from 'redux-saga/effects';
import { getMoneyRecords, createMoneyRecords, removeMoneyRecord } from './db';

export function* watcher () {
    yield takeLatest(MONEY + GET, getMoneyRecords);
    yield takeLatest(MONEY + REMOVE, removeMoneyRecord);
    yield takeLatest(MONEY + ALL + ADD, createMoneyRecords);
}
