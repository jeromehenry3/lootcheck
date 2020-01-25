import balanceReducer from './balance';
import * as constants from '../actions/constants';
import * as actions from '../actions/balance';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;

        expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
    });

    it('creates an action to deposit into the balance', () => {
        const deposit = 10;

        const expectedAction = { type: constants.DEPOSIT, deposit };

        expect(actions.deposit(deposit)).toEqual(expectedAction);
    });

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit }))
            .toEqual(initialState + deposit);
    });

    it('creates an action to withdraw from the balance', () => {
        const withdrawal = 4;

        const expectedAction = { type: constants.WITHDRAW, withdrawal };

        expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
    });

    it('withdraws from the balance', () => {
        const withdrawal = 4;
        const initialState = 12;

        expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdrawal }))
            .toEqual(initialState - withdrawal);
    })
})