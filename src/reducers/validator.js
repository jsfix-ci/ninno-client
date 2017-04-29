import * as actions from '../actions';
import { ssnValidator } from '../utils';

const validate = (ssn) => {
    if (!ssnValidator(ssn)) {
        return {
            invalid: true,
        };
    }

    const centuryIndicator = Number(ssn.substring(6, 9));

    let century;
    const year = Number(ssn.substring(4, 6));
    const alternativeCenturies = [];
    if (centuryIndicator < 500) {
        century = 19;
    } else if (centuryIndicator >= 500) {
        century = 20;
        // Because ranges overlap each other there are several different
        // possible centuries that this ssn can belong to but they can't
        // be born after 2039.
        if (centuryIndicator >= 900 && centuryIndicator) {
            century = 19;
            alternativeCenturies.push(20);
        } else if (centuryIndicator < 750 && year > 39) {
            century = 18;
            alternativeCenturies.push(20);
        }
    }

    const day = Number(ssn.substring(0, 2));
    const month = Number(ssn.substring(2, 4));
    // TODO: this screams for a good refactoring
    const alternateYears = alternativeCenturies.map(a => Number(String(a) + year));

    const genderMarker = Number(ssn.substring(8, 9));
    const gender = genderMarker % 2 === 0 ? 'F' : 'M';

    return {
        alternateYears,
        day,
        gender,
        month,
        invalid: false,
        year: Number(`${century}${year}`),
    };
};

const defaultState = {
    result: {
        invalid: true,
    },
};

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
