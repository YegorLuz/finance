import * as React from 'react';
import { IProps } from '../models/components/ModalHeader';

const ModalHeader = (props: IProps) => <header>
    <span>Edit ({props.date})</span>
    <div className='close-btn' onClick={props.onClickOutside}>&#10006;</div>
</header>;

export default ModalHeader;