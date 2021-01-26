import React from 'react';
import styles from './LabeledTextInput.module.css';

const LabeledTextInput = (props) => {
  return (
    <div className={[styles[props.size],styles.wrapper].join(' ')}>
		<label htmlFor={props.name} className={styles.label}>Enter Your Secret Here!</label> 
		<input type="text" 
				name={props.name} id={props.name}
				value={props.value} 
				onChange={props.changeFunc}
				className={styles.input}
		/>
    </div>
  )
}

export default LabeledTextInput;