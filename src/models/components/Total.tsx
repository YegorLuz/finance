import { List } from 'immutable';
import { IIMoneyRecord } from '../data/immutable';

export interface IProps {
    money: List<IIMoneyRecord>,
    monthId: number,
}