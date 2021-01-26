import React, { Component } from 'react';
import LabeledTextInput from './LabeledTextInput';
import CipherText from './CipherText';
import styles from './MakeSecret.module.css';

import { split } from 'shamir';
const crypto = require('crypto');
// import {randomBytes} from 'crypto'
// crypto is deprecated and there's a built in node.js module now

// XX comments come from example code from 
class MakeSecret extends Component {
	state = {
		secret: '',
		shares: '',
		output: ''
	}

	doIt = (secret, shares) => {
	    // XX: you can use any polyfill to covert string to Uint8Array
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
			<div className={styles.wrapper}>
				<LabeledTextInput name="secret" size="large"
								value={this.state.secret}
								changeFunc={this.handleInput}
				/>

				<div className={styles.smallInput}>
					<label htmlFor="shares"> Number of Shares</label>
					<input type="number" 
						name="shares" id="shares" 
						value={this.state.shares} 
						onChange={this.handleInput}/>
				</div>
				<button onClick={this.encrypt} className={styles.encryptBtn}>Encrypt Secret</button>

				{this.state.output? <CipherText shares={this.state.output}/> : ''}
			</div>
			)
	}
}


export default MakeSecret;