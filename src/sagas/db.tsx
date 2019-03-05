import axios, { AxiosTransformer } from 'axios';
import { URI } from '../constants';
import { call, put } from 'redux-saga/effects';
import { IPostMoneyRecordsAction, IRemoveMoneyAction } from '../models/sagas/db';
import { IMoneyRecord } from '../models/data';
import { saveMoney } from '../actions';
import { IIMoneyRecord } from '../models/data/immutable';


/* COMMON */
function* request (fn: AxiosTransformer, url: string, params?: object) {
    try {
        const response = yield call(fn, url, params);
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}


/* GET */
export function* getMoneyRecords () {
    const money: Array<IMoneyRecord> = yield call(request, axios.get, URI);
    yield put(saveMoney(money));
}

/* POST */
export function* createMoneyRecords (action: IPostMoneyRecordsAction) {
    const { payload: { date, dataToSave } } = action;

    const calls = dataToSave.reduce((acc, record: IIMoneyRecord) => {
        const data = { date, amount: record.get('amount'), forWhat: record.get('forWhat') };
        if (!record.get('id')) {
            acc.push(call(axios.post, URI, data));
        } else {
            acc.push(call(axios.put, `${URI}/${record.get('id')}`, data));
        }
        return acc;
    }, []);

    for (let i = 0; i < calls.length; i++) {
        yield calls[i];
    }

    yield call(getMoneyRecords);
}


/* REMOVE */
export function* removeMoneyRecord (action: IRemoveMoneyAction) {
    const { payload: { id } } = action;
    yield call(request, axios.delete, `${URI}/${id}`);
    yield call(getMoneyRecords);
}