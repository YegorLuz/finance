import * as React from 'react';
import { IProps } from '../models/containers/Container';

const Container = (props: IProps) => (
    <div className='container'>
        {props.children}
    </div>
);

export default Container;