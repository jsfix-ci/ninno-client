export const COPY_SSN = 'COPY_SSN';
export const copySsn = ssn => ({
    type: COPY_SSN,
    ssn,
});

export const GENERATE_SSNS = 'GENERATE_SSNS';
export const generateSsns = date => ({
    type: GENERATE_SSNS,
    date,
});
