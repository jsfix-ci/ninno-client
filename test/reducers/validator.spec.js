import reducer from '../../src/reducers/validator';
import * as actions from '../../src/actions';

const action = value => actions.ssnValidate(value);
const getState = ssn => reducer(undefined, action(ssn)).result;

describe('validator reducer', () => {
    it('finds date of birth for 1900-1999', () => {
        const state = getState('09058049805');

        expect(state.day).to.be(9);
        expect(state.month).to.be(5);
        expect(state.year).to.be(1980);
    });
});
