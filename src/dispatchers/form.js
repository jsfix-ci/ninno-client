import * as actions from '../actions';

/* eslint-disable import/prefer-default-export */
export const updateInputValue = (name, value) =>
    dispatch => dispatch(actions.updateInputValue(name, value));
/* eslint-enable import/prefer-default-export */
