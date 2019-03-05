import { IIMoney } from '../data/immutable';

export interface IProps {
    data: IIMoney,
    date: string,
    onClickOutside: () => void,
    onSaveChanges: () => void,
    onChangeData: (index: number, key: string, value: string) => void,
    onAddRecord: () => void,
    onRemoveRecord: (index: number) => void,
}