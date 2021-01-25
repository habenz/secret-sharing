import React, { Component } from 'react';
import styles from './ExplainerModal.module.css';

class ExplainerModal extends Component {
	render() {
		return (
			<div className={styles["modal-container"]}>
				<div className={styles.modal}> 
					I'm a modal!
					<button onClick={this.props.close}>Start Encrypting!</button>
				</div>
			</div>
		);
	}
}

export default ExplainerModal;
