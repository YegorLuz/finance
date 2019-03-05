import * as React from 'react';
import classNames from 'classnames';
import Filter from '../components/Filter';
import Selector from '../components/Selector';
import { IProps } from '../models/containers/Filters';
import { months, weekDays } from '../data/filters';

class Filters extends React.Component<IProps> {
    emptyEvent = () : null => null;

    render () {
        const { hideEmptyDays, selectedMonth, selectedWeekDay } = this.props;

        return (
            <div className='filters'>
                <Filter onClick={this.props.toggleEmptyDays}>
                    <div className='custom-checkbox'>
                        <div className={classNames('checkbox', { '-checked': hideEmptyDays })} />
                        <div className='label'>Пустые спрятаны</div>
                    </div>
                </Filter>
                <Filter>
                    <Selector
                        defaultValue={false}
                        value={selectedMonth}
                        data={months}
                        onChange={this.props.onChangeMonth}
                    />
                </Filter>
                <Filter>
                    <Selector
                        defaultValue={true}
                        value={selectedWeekDay}
                        data={weekDays}
                        onChange={this.props.onChangeWeekDay}
                    />
                </Filter>
            </div>
        );
    }
}

export default Filters;