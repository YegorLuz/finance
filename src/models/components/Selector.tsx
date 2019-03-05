import { List } from 'immutable';

export interface IProps {
    value: number | null,
    data: List<string>,
    defaultValue: boolean,
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void,
}