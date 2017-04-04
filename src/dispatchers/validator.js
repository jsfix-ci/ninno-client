import * as actions from '../actions';

/* eslint-disable import/prefer-default-export */
export const validateSsn = ssn =>
    dispatch => dispatch(actions.validateSsn(ssn));
/* eslint-enable import/prefer-default-export */
