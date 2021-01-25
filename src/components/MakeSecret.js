import React, { Component } from 'react';
import styles from './MakeSecret.module.css';
import ExplainerModal from './ExplainerModal';

import { split } from 'shamir';
const crypto = require('crypto');
// import {randomBytes} from 'crypto'
// crypto is deprecated and there's a built in node.js module now


class MakeSecret extends Component {
	state = {
		// enteredSecret: false,
		secret: '',
		shares: '',
		output: '',
		explainerModal: true
		// decrypted: ''
	}
	closeModal = () => {
		this.setState({explainerModal:false});
	}

	doIt = (secret, shares) => {
	    // you can use any polyfill to covert string to Uint8Array
	    const utf8Encoder = new TextEncoder();
	    const secretBytes = utf8Encoder.encode(secret);
	    // parts is a object whose keys are the part number and values are an Uint8Array
	    // const parts = split(crypto.randomBytes, PARTS, QUORUM, secretBytes);
	    const parts = split(crypto.randomBytes, shares, shares, secretBytes);
	    console.table(parts);
	    return parts;
	}

	handleInput = (event) => {
		this.setState({[event.target.id]: event.target.value});
	}

	encrypt = () => {
		if (!(this.state.secret && this.state.shares)){
			alert('Need values for both the secret and the number of shares to split it into');
		} else {
			const keys = this.doIt(this.state.secret, Number(this.state.shares));
			console.log(keys)
			this.setState({output: keys});
		}
	}
	render() {
		return (
			<div >
				{this.state.explainerModal? <ExplainerModal close={this.closeModal}/>: ''}
				<label htmlFor="secret">Enter Your Secret Here!</label> 
				<input type="text" 
						name="secret" id="secret" 
						value={this.state.secret} 
						onChange={this.handleInput}/>

				<label htmlFor="shares"> Number of Shares</label>
				<input type="number" 
						name="shares" id="shares" 
						value={this.state.shares} 
						onChange={this.handleInput}/>

				<button onClick={this.encrypt}>Encode Secret</button>

				{this.state.output? <CipherText shares={this.state.output}/> : ''}
			</div>
			)
	}
}

class CipherText extends Component {
	render() {
		const toRender = [];
		for (const share of Object.values(this.props.shares)) {
			// need to covert to normal array so map function will work with JSX (I think)
			const arr = Array.from(share) 
			toRender.push(<p>{arr.map((num)=><span>{num} </span>)}</p>) 
		}
		return (
			<div>
				{toRender}
			</div>
		);
	}
}


export default MakeSecret;