import reducer from '../../src/reducers/validator';
import * as actions from '../../src/actions';

const action = value => actions.ssnValidate(value);
const getState = ssn => reducer(undefined, action(ssn));

describe('validator reducer', () => {
    describe('valid checksum', () => {
        it('returns invalid if the length is wrong', () => {
            const state = getState('0905804980');

            expect(state.valid).to.be(false);
        });

        it('returns invalid if the checksum is wrong', () => {
            expect(getState('0905804981').valid).to.be(false);
            expect(getState('0905804990').valid).to.be(false);
        });

        it('validates checksum for regular ssn', () => {
            const state = getState('09058049805');

            expect(state.valid).to.be(true);
        });

        it('handles garbage input', () => {
            const state = getState('abcdefghijk');

            expect(state.valid).to.be(false);
        });

        describe('when birth date falls outside 1854-2039', () => {
            it('indicates that ssn might not be valid for person born 1940-1999', () => {
                const state = getState('12114898803');

                expect(state.valid).to.be(true);
                expect(state.year).to.be(1948);
                expect(state.alternateYears).to.contain(2048);
            });

            it('indicates that ssn might not be valid for person born 1854-1899', () => {
                const state = getState('07066073321');

                expect(state.valid).to.be(true);
                expect(state.year).to.be(1860);
                expect(state.alternateYears).to.contain(2060);
            });
        });
    });

    describe('date of birth', () => {
        it('finds date of birth for 1900-1999', () => {
            const state = getState('09058049805');

            expect(state.day).to.be(9);
            expect(state.month).to.be(5);
            expect(state.year).to.be(1980);
        });

        it('finds date of birth for 2000-2039', () => {
            const state = getState('22013786651');

            expect(state.day).to.be(22);
            expect(state.month).to.be(1);
            expect(state.year).to.be(2037);
        });

        it('finds date of birth for 1854-1899', () => {
            const state = getState('31126974321');

            expect(state.day).to.be(31);
            expect(state.month).to.be(12);
            expect(state.year).to.be(1869);
        });

        it('finds date of birth for person born in 2029', () => {
            const state = getState('01122950006');

            expect(state.day).to.be(1);
            expect(state.month).to.be(12);
            expect(state.year).to.be(2029);
        });

        it('does not indicate person is born after 2039', () => {
            const state = getState('01125572800');

            expect(state.day).to.be(1);
            expect(state.month).to.be(12);
            expect(state.year).to.be(1855);
        });
    });
});
