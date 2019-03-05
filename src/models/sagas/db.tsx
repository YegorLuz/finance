import { List } from 'immutable';
import { IIMoneyRecord } from "../data/immutable";

export interface IPostMoneyRecordsAction {
    type: string,
    payload: {
        date: string,
        dataToSave: List<IIMoneyRecord>,
    }
}

export interface IRemoveMoneyAction {
    type: string,
    payload: {
        id: number,
    },
};