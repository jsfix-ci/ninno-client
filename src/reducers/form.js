import * as actions from '../actions';

const defaultState = {
    'validate-ssn': '09058049805',
    'generate-ssn': new Date(),
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.UPDATE_INPUTVALUE:
            return {
                ...state,
                [action.name]: action.value,
            };
        default:
            return state;
    }
};
