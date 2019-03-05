import { List } from 'immutable';
import { IMonth, IDay, IMoneyRecord } from '../data';

export interface IAction {
    type: string,
    payload: {
        months: List<IMonth>,
        month: IMonth,
        days: List<IDay>,
        day: IDay,
        money: List<IMoneyRecord>,
        moneyRecord: IMoneyRecord,
        monthId: string,
        dayId: string,
    },
}