import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet ';

describe('<Wallet />', () => {
    const props = { balance: 20 };
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

    describe('when the user types int the wallet input', () => {
        const userBalance = '25';
        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', { target: { value: userBalance } });
        });
        it('updates the local balance in `state` and converts it to a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        })
    })
})