import React, { Component } from 'react';
import { join } from 'shamir'

class GetSecret extends Component {
	state = {
		inputs: {"input1":'', input2:''},
		count: 2,
		decrypted: ''
	}

	handleInput = (event) => {
		const newInputs = this.state.inputs;
		newInputs[event.target.id] = event.target.value;
		this.setState({inputs: newInputs});
	}

	addInput = () => {
		const key = `input${this.state.count+1}`
		console.log(key)
		this.setState({
			inputs: {...this.state.inputs, [key]:''},
			count: this.state.count + 1
		});
	}

	removeInput = (key) => {
		const newInputs = this.state.inputs;
		delete newInputs[key];
		this.setState({inputs: newInputs});
	}

	decrypt = () => {
	    // you can use any polyfill to covert string to Uint8Array
	    const utf8Decoder = new TextDecoder();
	    // parts is a object whose keys are the part number and values are an Uint8Array
	    const parts = {};
	    for (const [key,value] of Object.entries(this.state.inputs)){
	    	const intArray = value.split(/\s+/).filter(item => item != false).map(item=>Number(item));
	    	parts[key[key.length-1]] = intArray;
	    }
	    this.setState({decrypted: utf8Decoder.decode(join(parts))});
	}

	render() {
		return (
			<div >
				<p>I'm getting a secret rn <button onClick={this.addInput}>+</button></p>

				{Object.entries(this.state.inputs).map(([key,value],i)=>{
					const uid = key.match(/\d+/);
					return(
						<div>
						<label htmlFor={key}>Key Share {i+1}:</label>
						<input key={uid} type="text" value={this.state.inputs.key} name={key} id={key} onChange={this.handleInput}/>
						<button onClick={() => this.removeInput(key)}>-</button>
						</div>
						)
				})}

				<button onClick={this.decrypt}>Decode</button>

				{this.state.decrypted? <div> {this.state.decrypted} </div>: ''}
			</div>
			)
	}
}

export default GetSecret;