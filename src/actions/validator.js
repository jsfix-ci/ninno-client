export const VALIDATE_SSN = 'VALIDATE_SSN';
export const validateSsn = ssn => ({
    type: VALIDATE_SSN,
    ssn,
});
