import { List } from 'immutable';
import { IIMoneyRecord } from '../data/immutable';

export interface IProps {
    money: List<IIMoneyRecord>,
    hideEmptyDays: boolean,
    monthId: number,
    selectedWeekDay: number | null,
    onClickEdit: (date: string) => void,
}

export interface IState {
    column: number,
    asc: boolean,
}