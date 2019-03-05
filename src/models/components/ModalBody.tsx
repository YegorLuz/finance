import { IIMoney } from '../data/immutable';

export interface IProps {
    data: IIMoney,
    onChangeData: (index: number, key: string, value: string) => void,
    onAddRecord: () => void,
    onRemoveRecord: (index: number) => void,
}