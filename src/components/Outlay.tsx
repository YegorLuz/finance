import * as React from 'react';
import Row from '../components/Row';
import Cell from '../components/Cell';
import { IProps } from '../models/components/Outlay';
import { IIMoneyRecord } from '../models/data/immutable';
import { formatPrice } from '../utils';

class Outlay extends React.Component<IProps> {
    render () {
        const { data } = this.props;

        return (
            <table className='outlay'>
                <tbody>
                    {data.map((outlay: IIMoneyRecord) => <Row key={outlay.get('id')}>
                        <Cell>{formatPrice(parseFloat(outlay.get('amount')))}</Cell>
                        <Cell>{outlay.get('forWhat')}</Cell>
                    </Row>)}
                </tbody>
            </table>
        );
    }
}

export default Outlay;