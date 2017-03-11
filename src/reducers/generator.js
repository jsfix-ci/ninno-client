import getDate from 'date-fns/get_date';
import getMonth from 'date-fns/get_month';
import getYear from 'date-fns/get_year';

import {
    K1_FACTORS,
    K2_FACTORS,
    getChecksumDigit,
} from '../utils/ssnValidator';

import * as actions from '../actions';

const range = (a, b) =>
    Array.from(Array(b - a), (_, i) => i + a);

const defaultState = [];

const generateSsns = (date) => {
    const day = String(getDate(date)).padStart(2, '0');
    const month = String(getMonth(date)).padStart(2, '0');
    const year = getYear(date);

    const datePart = day + month + String(year).substring(2, 4);

    let rangeStart = 0;
    let rangeStop = 1000;
    let skip = [];

    if (year >= 1940 && year < 2000) {
        rangeStart = 900;
        rangeStop = 1000;
    } else if (year <= 1999 && year > 1900) {
        rangeStart = 0;
        rangeStop = 499;
    } else if (year >= 1854 && year < 1900) {
        rangeStart = 500;
        rangeStop = 750;
    } else if (year >= 2000) {
        rangeStart = 500;
        rangeStop = 1000;
        skip = range(500, 751).concat(range(900, 1000));
    }

    const ssns = [];
    /* eslint-disable no-continue */
    for (let i = rangeStart; i < rangeStop; i += 1) {
        if (skip.includes(i)) {
            continue;
        }
        const bareSsn = datePart + String(i).padStart(3, '0');
        const k1 = getChecksumDigit(bareSsn, K1_FACTORS);
        if (k1 === 10) {
            continue;
        }
        const k2 = getChecksumDigit(bareSsn + k1, K2_FACTORS);
        if (k2 === 10) {
            continue;
        }
        ssns.push(bareSsn + k1 + k2);
    }
    /* eslint-enable no-continue */

    return ssns;
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.GENERATE_SSNS:
            return {
                ...state,
                ssns: generateSsns(action.date),
            };
        default:
            return state;
    }
};

