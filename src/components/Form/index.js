import React, { Component } from 'react';

const Form = ({ data, handleInputChange, handleSubmitInput }) => {
	return (
		<div>
			<input value={data} onChange={handleInputChange} type='text' />
			<button onClick={handleSubmitInput}>Submit</button>
		</div>
	);
};

export default Form;
