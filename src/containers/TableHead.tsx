import * as React from 'react';
import Row from '../components/Row';
import { IProps } from '../models/components/TableHead';

const TableHead = (props: IProps) => <Row>
    <th>ID</th>
    <th>Date</th>
    <th>Week day</th>
    <th>Outlay</th>
    <th>&#9998;</th>
    <th>Total amount</th>
    {props.displayLast ? <th>Weekly amount</th> : null}
</Row>;

export default TableHead;