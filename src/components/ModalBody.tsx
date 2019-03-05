import * as React from 'react';
import { IProps } from '../models/components/ModalBody';
import { IIMoneyRecord } from '../models/data/immutable';

const ModalBody = (props: IProps) => <div className='body'>
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
        <div className='add-row' onClick={props.onAddRecord}>Add record</div>
    </div>
</div>

export default ModalBody;