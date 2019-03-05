import * as React from 'react';
import ModalHeader from '../components/ModalHeader';
import ModalBody from '../components/ModalBody';
import ModalFooter from '../components/ModalFooter';
import { IProps } from '../models/containers/Modal';

const Modal = (props: IProps) => (
    <>
        <div className='modal-overlay' onClick={props.onClickOutside} />
        <div className='modal'>
            <ModalHeader
                date={props.date}
                onClickOutside={props.onClickOutside}
            />
            <ModalBody
                data={props.data}
                onChangeData={props.onChangeData}
                onRemoveRecord={props.onRemoveRecord}
                onAddRecord={props.onAddRecord}
            />
            <ModalFooter
                onClickOutside={props.onClickOutside}
                onSaveChanges={props.onSaveChanges}
            />
        </div>
    </>
);

export default Modal;