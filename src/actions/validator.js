export const VALIDATE_SSN = 'VALIDATE_SSN';
export const ssnValidate = ssn => ({
    type: VALIDATE_SSN,
    ssn,
});
