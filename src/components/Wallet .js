import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
    state = {
        balance: undefined
    };

    handleWalletInput = event => this.setState({ balance: parseInt(event.target.value, 10) });

    deposit = () => this.state.balance !== undefined && this.props.deposit(this.state.balance);
    withdraw = () => this.state.balance !== undefined && this.props.withdraw(this.state.balance);

    render() {
        return (
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
                <br />
                <input className='input-wallet' onChange={this.handleWalletInput} />
                <button className='btn-deposit' onClick={this.deposit}>Dépôt</button>
                <button className='btn-withdraw' onClick={this.withdraw}>Retrait</button>

            </div>
        );
    }
};

export default connect(state => { return { balance: state }} , { deposit, withdraw })(Wallet);