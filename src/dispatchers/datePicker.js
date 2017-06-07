import * as actions from '../actions';

export const decreaseMonth = () =>
    dispatch => dispatch(actions.decreaseMonth());

export const decreaseYear = () =>
    dispatch => dispatch(actions.decreaseYear());

export const increaseMonth = () =>
    dispatch => dispatch(actions.increaseMonth());

export const increaseYear = () =>
    dispatch => dispatch(actions.increaseYear());

export const setAge = age =>
    dispatch => dispatch(actions.setAge(age));

export const setDay = day =>
    dispatch => dispatch(actions.setDay(day));

export const setMonth = month =>
    dispatch => dispatch(actions.setMonth(month));

export const setYear = year =>
    dispatch => dispatch(actions.setYear(year));

