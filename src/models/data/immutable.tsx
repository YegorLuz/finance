import { List } from 'immutable';
import { IMonth, IDay, IMoneyRecord } from './index';

export interface IIDay extends Map<string, any>, IDay {
    money: Array<IMoneyRecord> & List<IMoneyRecord>,
};

export interface IIMonth extends Map<string, any>, IMonth {
    id: string,
    name: string,
    days: Array<IDay> & List<IDay>,
};

export interface IIMoneyRecord extends Map<string, any>{};

export interface IIMoney extends List<IIMoneyRecord>{};