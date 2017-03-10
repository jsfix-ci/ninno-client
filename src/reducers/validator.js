import * as actions from '../actions';

const validate = (ssn) => {
    if (ssn.length !== 11) {
        return {
            invalid: false,
        };
    }
    const day = Number(ssn.substring(0, 2));
    const month = Number(ssn.substring(2, 4));
    const year = Number(`19${ssn.substring(4, 6)}`);

    return {
        day,
        month,
        year,
    };
};

const defaultState = { result: validate('09058049805') };

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.VALIDATE_SSN:
            return {
                ...state,
                result: validate(action.ssn),
            };
        default:
            return state;
    }
};
