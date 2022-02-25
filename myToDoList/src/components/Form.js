import React, { useState } from "react";

function Form(props) {
	const [name, setName] = useState('')

	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (name === '') {
			return;
		}

		props.addTask(name);
		setName('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input value={name} onChange={handleChange} type="text" />
			<button type="submit">Add task</button>
		</form>
	)
}

export default Form;

