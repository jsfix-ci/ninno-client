import { put, take, select } from 'redux-saga/effects';

import * as actions from '../actions';

const getFormState = state => state.form;

/* eslint-disable no-constant-condition */
function* dispatch() {
    while (true) {
        yield take([actions.UPDATE_INPUTVALUE]);
        const formState = yield select(getFormState);
        yield put(actions.ssnValidate(formState['validate-ssn']));
    }
}
/* eslint-enable no-constant-condition */

export default dispatch;
