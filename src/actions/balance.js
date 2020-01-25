import * as constants from './constants';

export const setBalance = balance => {
    return {
        type: constants.SET_BALANCE,
        balance
    };
};

export const deposit = depositValue => {
    return {
        type: constants.DEPOSIT,
        deposit: depositValue,
    };
};

export const withdraw = withdraw => {
    return {
        type: constants.WITHDRAW,
        withdraw,
    }
}