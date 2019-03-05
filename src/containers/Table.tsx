import * as React from 'react';
import * as moment from 'moment';
import classNames from 'classnames';
import { IProps, IState } from '../models/containers/Table';
import { IIMoneyRecord } from '../models/data/immutable';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Outlay from '../components/Outlay';
import { calcTotalOutlay, formatPrice } from '../utils';
import TableHead from './TableHead';

class Table extends React.Component<IProps> {
    state: IState;

    constructor(props: IProps) {
        super(props);

        this.state = {
            column: 0,
            asc: true,
        };

        this.renderBody = this.renderBody.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
    }

    onClickEdit (date: string) {
        const currentDate = moment(date);

        if (currentDate <= moment()) {
            this.props.onClickEdit(date);
        }
    }

    renderBody () {
        const { money, monthId, selectedWeekDay, hideEmptyDays } = this.props;
        const now = moment().set({ month: monthId, date: 1 });
        const monthDays = now.daysInMonth();

        return new Array(monthDays).fill(1).reduce((acc: Array<React.ReactElement>, value: number, index: number) => {
            const dateNumber = index + 1;
            const currentDate = now.date(dateNumber);
            const date = currentDate.format('YYYY-MM-DD');
            const weekday = currentDate.weekday();
            const moneyRecord = money.filter((record: IIMoneyRecord) => record.get('date') === date);
            const daysLeft = monthDays - dateNumber + 1;

            if ((!hideEmptyDays || moneyRecord.size) && (selectedWeekDay < 0 || weekday === selectedWeekDay)) {
                const rowspan = !weekday ? daysLeft < 7 ? daysLeft : 7 : (!index ? 7 - weekday : 0);
                const rowClassName = classNames(
                    { 'week-end': !((weekday + 1) % 7) },
                    { 'gray-row': !!(acc.length % 2) },
                    { empty: !moneyRecord.size },
                    { 'today': moment().date() === currentDate.date() }
                );

                acc.push(
                    <Row
                        key={`${dateNumber}_${weekday}`}
                        className={rowClassName}
                    >
                        <Cell>
                            {dateNumber}
                        </Cell>
                        <Cell>
                            {date}
                        </Cell>
                        <Cell>
                            {currentDate.format('dddd')}
                        </Cell>
                        <Cell className='wide'>
                            <Outlay data={moneyRecord} />
                        </Cell>
                        <Cell className='tight'>
                            <div className={classNames('edit-btn', { disabled: currentDate > moment() })} onClick={() => this.onClickEdit(date)}>&#9998;</div>
                        </Cell>
                        <Cell>
                            {formatPrice(calcTotalOutlay(moneyRecord))}
                        </Cell>
                        {rowspan && selectedWeekDay < 0 ? <Cell rowspan={rowspan} className={classNames('week-total', { 'week-end': daysLeft >= 7 })}>
                            {formatPrice(calcTotalOutlay(
                                money.filter((record: IIMoneyRecord) => {
                                    const curr = moment(record.get('date'));
                                    return curr.month() === monthId && curr.week() === currentDate.week();
                                })
                            ))}
                        </Cell> : null}
                    </Row>
                );
            }

            return acc;
        }, []);
    }

    render () {
        const { selectedWeekDay } = this.props;

        return (
            <table className='table'>
                <thead>
                    <TableHead displayLast={selectedWeekDay < 0} />
                </thead>
                <tbody>
                    {this.renderBody()}
                </tbody>
            </table>
        );
    }
}

export default Table;