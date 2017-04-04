import * as actions from '../actions';

export const copySsn = ssn =>
    dispatch => dispatch(actions.copySsn(ssn));

export const generateSsns = date =>
    dispatch => dispatch(actions.generateSsns(date));
