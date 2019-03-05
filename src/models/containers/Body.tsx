import { List } from 'immutable';
import { IIMoneyRecord } from '../data/immutable';

export interface IState {
    hideEmptyDays: boolean,
    selectedMonth: number,
    selectedWeekDay: number | null,
    selectedDate: string,
    showModal: boolean,
    dataToSave: List<Map<string, any>>,
}

export interface IStateToProps extends Map<string, any> {
    home: Map<string, any>,
}

export interface IProps {
    money: List<IIMoneyRecord>,
}

export interface IActions {
    getMoneyRecords?: () => void,
    addMoneyRecords?: (date: string, dataToSave: List<IIMoneyRecord>) => void,
    removeMoneyRecord?: (id: number) => void,
}