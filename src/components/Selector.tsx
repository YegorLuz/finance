import * as React from 'react';
import { IProps } from '../models/components/Selector';

const Selector = (props: IProps) => (
    <select
        value={props.value}
        onChange={props.onChange}
    >
        {props.defaultValue ? <option value='-1' key={'default'}>--- Any ---</option> : null}
        {props.data.map((item: string, index: number) => <option value={index} key={item}>{item}</option>)}
    </select>
);

export default Selector;