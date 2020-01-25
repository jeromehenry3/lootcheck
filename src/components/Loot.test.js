import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot'; // import non default pour ne pas récupérer la version connectée du composant

describe('<Loot /> (unconnected)', () => {
    const mockFetchBitcoin = jest.fn();
    const props = {
        balance: 10,
        bitcoin: {},
    };

    let loot = shallow(<Loot {...props} />);

    it('renders properly', () => {
        expect(loot.debug()).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            props.fetchBitcoin = mockFetchBitcoin;
            loot = mount(<Loot {...props} />);
        });

        it('dispatches the `fetchBitcoin()` received from props', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        })
    });
});
