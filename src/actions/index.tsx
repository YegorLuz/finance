import { MONEY, SAVE, GET, ADD, ALL, REMOVE } from '../constants';
import { List } from 'immutable';
import { IMoneyRecord } from '../models/data';
import { IIMoneyRecord } from '../models/data/immutable';

/* GET */
export function getMoneyRecords () {
    return {
        type: MONEY + GET,
    };
}


/* CREATE */
export function addMoneyRecords (date: string, dataToSave: List<IIMoneyRecord>) {
    return {
        type: MONEY + ALL + ADD,
        payload: {
            date,
            dataToSave,
        },
    };
}


/* SAVE */
export function saveMoney (money: Array<IMoneyRecord>) {
    return {
        type: MONEY + SAVE,
        payload: {
            money,
        },
    };
}


/* REMOVE */
export function removeMoneyRecord (id: number) {
    return {
        type: MONEY + REMOVE,
        payload: {
            id,
        },
    };
}