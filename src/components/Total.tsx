import * as React from 'react';
import * as moment from 'moment';
import { IProps } from '../models/components/Total';
import { calcTotalOutlay, formatPrice } from '../utils';
import { IIMoneyRecord } from '../models/data/immutable';

const Total = (props: IProps) => {
    const { money, monthId } = props;
    const data = money.filter((record: IIMoneyRecord) => moment(record.get('date')).month() === monthId);

    return <div className="total">
        Total: <span>{formatPrice(calcTotalOutlay(data))}</span>
    </div>;
};

export default Total;