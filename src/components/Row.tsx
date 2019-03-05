import * as React from 'react';
import { IChildren } from '../models/components';

const Row = (props: IChildren & { className: string }) => (
    <tr className={props.className}>
        {props.children}
    </tr>
)

Row.defaultProps = {
    className: '',
}

export default Row;