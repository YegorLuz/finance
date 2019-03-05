import * as React from 'react';
import { IProps } from '../models/components/ModalFooter';

const ModalFooter = (props: IProps) => <footer>
    <div className='cancel-btn' onClick={props.onClickOutside}>Cancel</div>
    <div className='save-btn' onClick={props.onSaveChanges}>Ok</div>
</footer>;

export default ModalFooter;