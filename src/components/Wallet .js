import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export const Wallet = props => {
    // state = {
    //     balance: undefined
    // };
    const [balance, setBalance] = useState(undefined)

    const handleWalletInput = event => setBalance(parseInt(event.target.value, 10));

    const deposit = () => balance !== undefined && props.deposit(balance);
    const withdraw = () => balance !== undefined && props.withdraw(balance);


    return (
        <div>
            <h3 className='balance'>Wallet balance: {props.balance}</h3>
            <br />
            <input className='input-wallet' onChange={handleWalletInput} />
            <button className='btn-deposit' onClick={deposit}>Dépôt</button>
            <button className='btn-withdraw' onClick={withdraw}>Retrait</button>
        </div>
    );
};

export default connect(state => { return { balance: state.balance } } , { deposit, withdraw })(Wallet);