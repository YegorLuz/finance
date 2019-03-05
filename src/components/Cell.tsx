import * as React from 'react';
import { IChildren } from '../models/components';

const Cell = (props: IChildren & { className?: string, rowspan?: number }) => (
    <td className={props.className} rowSpan={props.rowspan}>
        {props.children}
    </td>
);

export default Cell;