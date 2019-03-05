import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as moment from 'moment';
import { IState, IStateToProps, IProps, IActions } from '../models/containers/Body';
import Container from './Container';
import Table from './Table';
import Total from '../components/Total';
import Filters from './Filters';
import Modal from './Modal';
import { getMoneyRecords, addMoneyRecords, removeMoneyRecord } from '../actions';
import { fromJS, List } from 'immutable';
import { IIMoneyRecord } from '../models/data/immutable';

class Body extends React.Component<IProps & IActions> {
    state: IState;
    _timer: null | number;

    constructor (props: IProps & IActions) {
        super(props);

        this.state = {
            hideEmptyDays: false,
            selectedMonth: moment().month(),
            selectedWeekDay: -1,
            selectedDate: '',
            showModal: false,
            dataToSave: List([]),
        };

        this._timer = null;

        this.toggleEmptyDays = this.toggleEmptyDays.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onChangeWeekDay = this.onChangeWeekDay.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickOutsideModal = this.onClickOutsideModal.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
        this.onSaveChanges = this.onSaveChanges.bind(this);
        this.onAddRecord = this.onAddRecord.bind(this);
        this.onRemoveRecord = this.onRemoveRecord.bind(this);
    }

    componentDidMount () {
        this._timer = setTimeout(() => {
            this.props.getMoneyRecords();
        }, 500);
    }

    componentWillUnmount () {
        clearTimeout(this._timer);
        this._timer = null;
    }

    toggleEmptyDays () {
        this.setState((state: IState) => ({
            hideEmptyDays: !state.hideEmptyDays
        }));
    }

    onChangeMonth (event: React.FormEvent<HTMLSelectElement>) {
        const value : string = event.currentTarget.value;
        const monthId = parseInt(value);
        this.props.getMoneyRecords();
        this.setState(() => ({
            selectedMonth: monthId,
        }));
    }

    onChangeWeekDay (event: React.FormEvent<HTMLSelectElement>) {
        const value : string = event.currentTarget.value;
        this.setState(() => ({
            selectedWeekDay: parseInt(value),
        }));
    }

    onClickEdit (date: string) {
        const { money } = this.props;

        this.setState({
            showModal: true,
            selectedDate: date,
            dataToSave: money.filter((record: IIMoneyRecord) => record.get('date') === date),
        });
    }

    onClickOutsideModal () {
        this.setState({
            showModal: false,
            selectedDate: '',
            dataToSave: List([]),
        });
    }

    onAddRecord () {
        const { selectedDate } = this.state;
        this.setState((state: IState) => ({
            dataToSave: state.dataToSave.push(fromJS({ date: selectedDate, amount: 0, forWhat: '' })),
        }));
    }

    onRemoveRecord (index: number) {
        const { dataToSave } = this.state;
        const currentRecordId = dataToSave.getIn([index, 'id']);

        if (currentRecordId) {
            this.props.removeMoneyRecord(currentRecordId);
        }

        this.setState((state: IState) => ({
            dataToSave: state.dataToSave.remove(index),
        }));
    }

    onChangeData (index: number, key: string, value: string) {
        this.setState((state: IState) => ({
            dataToSave: state.dataToSave.setIn([index, key], value),
        }));
    }

    onSaveChanges () {
        const { selectedDate, dataToSave } = this.state;

        this.props.addMoneyRecords(selectedDate, dataToSave);

        this.setState(() => ({
            showModal: false,
            selectedDate: '',
            dataToSave: List([]),
        }));
    }

    renderModal () : React.ReactElement | null {
        const { showModal, selectedDate, dataToSave } = this.state;

        if (showModal) {
            return <Modal
                data={dataToSave}
                date={selectedDate}
                onClickOutside={this.onClickOutsideModal}
                onChangeData={this.onChangeData}
                onSaveChanges={this.onSaveChanges}
                onAddRecord={this.onAddRecord}
                onRemoveRecord={this.onRemoveRecord}
            />;
        }

        return null;
    }

    render () {
        const { money } = this.props;
        const { hideEmptyDays, selectedMonth, selectedWeekDay } = this.state;

        return (
            <main>
                <Container>
                    <Filters
                        hideEmptyDays={hideEmptyDays}
                        selectedMonth={selectedMonth}
                        selectedWeekDay={selectedWeekDay}
                        onChangeMonth={this.onChangeMonth}
                        onChangeWeekDay={this.onChangeWeekDay}
                        toggleEmptyDays={this.toggleEmptyDays}
                    />
                    <Table
                        monthId={selectedMonth}
                        selectedWeekDay={selectedWeekDay}
                        hideEmptyDays={hideEmptyDays}
                        money={money}
                        onClickEdit={this.onClickEdit}
                    />
                    <Total
                        money={money}
                        monthId={selectedMonth}
                    />
                </Container>
                {this.renderModal()}
            </main>
        );
    }
}

const mapStateToProps = (state: IStateToProps) : IProps => ({
    money: state.home.get('money'),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) : IActions => ({
    getMoneyRecords: () => dispatch(getMoneyRecords()),
    addMoneyRecords: (date: string, dataToSave: List<IIMoneyRecord>) => dispatch(addMoneyRecords(date, dataToSave)),
    removeMoneyRecord: (id: number) => dispatch(removeMoneyRecord(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);