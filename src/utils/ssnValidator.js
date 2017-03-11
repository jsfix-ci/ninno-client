export const K1_FACTORS = [3, 7, 6, 1, 8, 9, 4, 5, 2];
export const K2_FACTORS = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

export const getChecksumDigit = (ssn, factors) => {
    const sum = 11 - (Array
        .from(ssn.substring(0, factors.length))
        .reduce((_sum, digit, i) => _sum + (Number(digit) * factors[i]), 0) % 11);
    return (sum === 11 ? 0 : sum);
};

export default (ssn) => {
    if (ssn.length !== 11) {
        return false;
    }

    if (Number(ssn.charAt(9)) !== getChecksumDigit(ssn, K1_FACTORS)) {
        return false;
    }

    if (Number(ssn.charAt(10)) !== getChecksumDigit(ssn, K2_FACTORS)) {
        return false;
    }

    return true;
};
