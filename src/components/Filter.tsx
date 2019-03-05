import * as React from 'react';
import { IChildren, IEmptyMethods } from '../models/components';

const Filter = (props: IChildren & IEmptyMethods) => (
    <div className='filter' onClick={props.onClick}>
        {props.children}
    </div>
);

Filter.defaultProps = {
    onClick: () : null => null,
};

export default Filter;