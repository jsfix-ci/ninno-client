import getDay from 'date-fns/get_date';
import getMonth from 'date-fns/get_month';
import getYear from 'date-fns/get_year';

import * as actions from '../actions';

const now = new Date();

const defaultState = {
    day: getDay(now),
    month: getMonth(now),
    year: getYear(now),
};

const decreaseMonth = state => ({ ...state, month: state.month - 1 });
const decreaseYear = state => ({ ...state, year: state.year - 1 });
const increaseMonth = state => ({ ...state, month: state.month + 1 });
const increaseYear = state => ({ ...state, year: state.year + 1 });
const setDay = (state, { day }) => ({ ...state, day });
const setMonth = (state, { month }) => ({ ...state, month });
const setYear = (state, { year }) => ({ ...state, year });

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.DECREASE_MONTH:
            return decreaseMonth(state);
        case actions.DECREASE_YEAR:
            return decreaseYear(state);
        case actions.INCREASE_MONTH:
            return increaseMonth(state);
        case actions.INCREASE_YEAR:
            return increaseYear(state);
        case actions.SET_DAY:
            return setDay(state, action);
        case actions.SET_MONTH:
            return setMonth(state, action);
        case actions.SET_YEAR:
            return setYear(state, action);
        default:
            return state;
    }
};
