import reducer from '../../src/reducers/generator';
import * as actions from '../../src/actions';

import { ssnValidator, GENDERS } from '../../src/utils';

const generateAction = date => actions.generateSsns(date);
const copyAction = ssn => actions.copySsn(ssn);
const getState = (action, state) => reducer(state, action);

describe('generator reducer', () => {
    it('generates ssns', () => {
        const state = getState(generateAction(new Date(1990, 1, 1)));

        expect(state.ssns.length).to.be.above(0);
    });

    it('generates only valid ssns', () => {
        const state = getState(generateAction(new Date(1990, 1, 1)));

        state.ssns.forEach(ssn =>
            expect(ssnValidator(ssn.ssn)).to.be(true),
        );
    });

    it('does not stray from 000-499 century indicator for 1900-1999', () => {
        const state = getState(generateAction(new Date(1939, 3, 4)));

        state.ssns.forEach((ssn) => {
            const indicator = Number(ssn.ssn.substring(6, 9));

            expect(indicator).to.be.below(500);
        });
    });

    it('does not stray from 500-749 century indicator for 1854-1899', () => {
        const state = getState(generateAction(new Date(1860, 6, 7)));

        state.ssns.forEach((ssn) => {
            const indicator = Number(ssn.ssn.substring(6, 9));

            expect(indicator).to.be.within(500, 750);
        });
    });

    it('does not stray from 500-999 century indicator for 2000-2039', () => {
        const state = getState(generateAction(new Date(2037, 11, 12)));

        state.ssns.forEach((ssn) => {
            const indicator = Number(ssn.ssn.substring(6, 9));

            expect(indicator).to.be.within(500, 1000);
        });
    });

    it('does not stray from 900-999 century indicator for 1940-1999', () => {
        const state = getState(generateAction(new Date(1948, 11, 12)));

        state.ssns.forEach((ssn) => {
            const indicator = Number(ssn.ssn.substring(6, 9));

            expect(indicator).to.be.within(900, 999);
        });
    });

    it('uses correct date', () => {
        const state = getState(generateAction(new Date(1980, 4, 9)));

        state.ssns.forEach((ssn) => {
            const date = ssn.ssn.substring(2, 4);

            expect(date).to.be('05');
        });
    });

    it('marks copied ssn', () => {
        let state = getState(generateAction(new Date(1990, 1, 1)));
        const copySsn = state.ssns[0].ssn;
        state = getState(copyAction(copySsn), state);

        const stateSsn = state.ssns.find(
            ({ ssn }) => ssn === copySsn,
        );

        expect(stateSsn.copied).to.be(true);
    });

    it('indicates gender', () => {
        const state = getState(generateAction(new Date(1990, 11, 1)));

        const totalLength = state.ssns.length;
        const maleLength = state.ssns.filter(ssn => ssn.gender === GENDERS.M).length;
        const femaleLength = state.ssns.filter(ssn => ssn.gender === GENDERS.F).length;

        expect(maleLength).to.be.above(0);
        expect(maleLength).to.be.below(totalLength);

        expect(femaleLength).to.be.above(0);
        expect(femaleLength).to.be.below(totalLength);
    });

    describe('century range collisions', () => {
        it('does not generate ssns within 900-999 range for persons born after 2000', () => {
            const state = getState(generateAction(new Date(2001, 0, 0)));

            state.ssns.forEach((ssn) => {
                const indicator = Number(ssn.ssn.substring(6, 9));

                expect(indicator).not.to.be.within(900, 999);
            });
        });

        it('does not generate ssns within 500-749 range for persons born after 2000', () => {
            const state = getState(generateAction(new Date(2014, 2, 7)));

            state.ssns.forEach((ssn) => {
                const indicator = Number(ssn.ssn.substring(6, 9));

                expect(indicator).not.to.be.within(500, 750);
            });
        });

        it('does generate ssns outside collision ranges for persons born after 2000', () => {
            const state = getState(generateAction(new Date(2020, 8, 1)));

            expect(state.ssns.length).to.be.above(0);
        });
    });
});
