export const UPDATE_INPUTVALUE = 'UPDATE_INPUTVALUE';
export const updateInputValue = (name, value) => ({
    type: UPDATE_INPUTVALUE,
    name,
    value,
});
