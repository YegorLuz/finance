import { MONEY, SAVE } from '../constants';
import { combineReducers } from 'redux';
import { Map, List, fromJS } from 'immutable';
import { IAction } from '../models/reducers';

const defaultState = Map({
    money: List([]),
});

const home = (state = defaultState, action: IAction) => {
    const { type, payload } = action;

    switch (type) {
        case MONEY + SAVE: {
            return state.set('money', fromJS(payload.money));
        }

        default: {
            return state;
        }
    }
}

export default combineReducers({
    home,
});