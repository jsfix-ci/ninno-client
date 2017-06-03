import * as actions from '../actions';

export const increaseYear = () =>
    dispatch => dispatch(actions.increaseYear());

export const decreaseYear = () =>
    dispatch => dispatch(actions.decreaseYear());

export const setYear = year =>
    dispatch => dispatch(actions.setYear(year));

export const increaseMonth = () =>
    dispatch => dispatch(actions.increaseMonth());

export const decreaseMonth = () =>
    dispatch => dispatch(actions.decreaseMonth());

export const setDay = day =>
    dispatch => dispatch(actions.setDay(day));

export const setMonth = month =>
    dispatch => dispatch(actions.setMonth(month));
