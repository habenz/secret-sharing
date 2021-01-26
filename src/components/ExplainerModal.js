import React, { Component } from 'react';
import styles from './ExplainerModal.module.css';

class ExplainerModal extends Component {
	render() {
		return (
			<div className={styles["modal-container"]}>
				<div className={styles.modal}> 
					Here should go an explantion of Shamir Secret Sharing.
					<br/>
					For now the wikipedia explanation is pretty great:
					<br/>
					<a href="https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing#High-level_explanation"> Shamir Secret Sharing</a>
					<br/><br/>
					<button onClick={this.props.close}>Start Encrypting!</button>
				</div>
			</div>
		);
	}
}

export default ExplainerModal;
