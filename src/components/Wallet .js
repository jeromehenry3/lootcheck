import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Wallet extends Component {
    state = {
        balance: undefined
    };

    handleWalletInput = event => this.setState({ balance: parseInt(event.target.value, 10) });

    render() {
        return (
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
                <br />
                <input className='input-wallet' onChange={this.handleWalletInput} />
            </div>
        );
    }
};

export default connect(state => { return { balance: state }} , null)(Wallet);