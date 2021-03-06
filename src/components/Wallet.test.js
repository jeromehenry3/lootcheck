import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet ';

describe('<Wallet />', () => {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();
    const props = {
        balance: 20,
        deposit: mockDeposit,
        withdraw: mockWithdraw
    };
    const wallet = shallow(<Wallet {...props} />);

    it('renders properly', () => {
        expect(wallet.debug()).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });

    it('creates an input to deposit or withdraw', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('if the user forgets to type into the input', () => {
        describe('and wants to make a deposit', () => {
            beforeEach(() => wallet.find('.btn-deposit').simulate('click'));
            it('does not dispatch the `deposit()` received from the props', () => {
                expect(mockDeposit).toHaveBeenCalledTimes(0);
            });
        });
        describe('and wants to make a withdrawal', () => {
            wallet.find('.btn-withdraw').simulate('click');
            it('does not dispatch the `withdraw()` received from props', () => {
                expect(mockWithdraw).toHaveBeenCalledTimes(0);
            })
        })
    });

    describe('when the user types into the wallet input', () => {
        const userBalance = '25';
        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', { target: { value: userBalance } });
        });
        /**Obsolète, state supprimé, et il semblerait que useState ne se teste pas... */
        // it('updates the local balance in `state` and converts it to a number', () => {
        //     expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        // });

        describe('and the user wants to make a deposit', () => {
            beforeEach(() => wallet.find('.btn-deposit').simulate('click'));
            it('dispatches the `deposit()` it receives from props with local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });
        });

        describe('and the user wants to make a withdrawal', () => {
            beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));
            it('dispatches the `withdraw()` it receives from props with local balance', () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        });
    });


})