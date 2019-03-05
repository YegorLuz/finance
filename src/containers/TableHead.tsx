import * as React from 'react';
import Row from '../components/Row';
import { IProps } from '../models/components/TableHead';

const TableHead = (props: IProps) => <Row>
    <th>ID</th>
    <th>Дата</th>
    <th>День недели</th>
    <th>Растраты</th>
    <th>&#9998;</th>
    <th>Общая сумма</th>
    {props.displayLast ? <th>Недельная сумма</th> : null}
</Row>;

export default TableHead;