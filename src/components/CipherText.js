import React, { Component } from 'react';
import styles from './CipherText.module.css';

class CipherText extends Component {
	render() {
		const toRender = [];
		for (const share of Object.values(this.props.shares)) {
			// need to covert to normal array so map function will work with JSX (I think)
			const arr = Array.from(share) 
			console.log(toRender.lenth)
			toRender.push(
				<p>
					<span className={styles.shareLabel}>Share {toRender.length+1 } </span> 
					{arr.map((num)=><span>{num} </span>)}
				</p>) 
		}
		return (
			<div>
				{toRender}
			</div>
		);
	}
}

export default CipherText;