import * as React from 'react';
import { IIMoneyRecord } from '../models/data/immutable';
import { IProps } from '../models/containers/Modal';

const Modal = (props: IProps) => (
    <>
        <div className='modal-overlay' onClick={props.onClickOutside} />
        <div className='modal'>
            <header>
                <span>Редактировать ({props.date})</span>
                <div className='close-btn' onClick={props.onClickOutside}>&#10006;</div>
            </header>
            <div className='body'>
                {props.data.map((record: IIMoneyRecord, index: number) =>
                    <div key={`${record.get('id')}_${index}`} className='modal-row'>
                        <div className='amount'>
                            <input
                                type='text'
                                value={record.get('amount')}
                                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => props.onChangeData(index, 'amount', value)}
                            />
                        </div>
                        <div className='cause'>
                            <textarea
                                rows={1}
                                value={record.get('forWhat')}
                                onChange={({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => props.onChangeData(index, 'forWhat', value)}
                            />
                        </div>
                        <div key={'remove'} className='remove'>
                            <div className='remove-btn' onClick={() => props.onRemoveRecord(index)}>&#10006;</div>
                        </div>
                    </div>
                )}
                <div className='modal-row -end'>
                    <div className='add-row' onClick={props.onAddRecord}>Добавить запись</div>
                </div>
            </div>
            <footer>
                <div className='cancel-btn' onClick={props.onClickOutside}>Отмена</div>
                <div className='save-btn' onClick={props.onSaveChanges}>Ок</div>
            </footer>
        </div>
    </>
);

export default Modal;