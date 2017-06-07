export const DECREASE_MONTH = 'DECREASE_MONTH';
export const decreaseMonth = () => ({
    type: DECREASE_MONTH,
});

export const DECREASE_YEAR = 'DECREASE_YEAR';
export const decreaseYear = () => ({
    type: DECREASE_YEAR,
});

export const INCREASE_MONTH = 'INCREASE_MONTH';
export const increaseMonth = () => ({
    type: INCREASE_MONTH,
});

export const INCREASE_YEAR = 'INCREASE_YEAR';
export const increaseYear = () => ({
    type: INCREASE_YEAR,
});

export const SET_AGE = 'SET_AGE';
export const setAge = age => ({
    type: SET_AGE,
    age,
});

export const SET_DAY = 'SET_DAY';
export const setDay = day => ({
    type: SET_DAY,
    day,
});

export const SET_MONTH = 'SET_MONTH';
export const setMonth = month => ({
    type: SET_MONTH,
    month,
});

export const SET_YEAR = 'SET_YEAR';
export const setYear = year => ({
    type: SET_YEAR,
    year,
});
