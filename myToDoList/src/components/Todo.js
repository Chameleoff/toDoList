import React, { useState } from "react";

function Todo(props) {
	const [isEditing, setIsEditing] = useState(false);
	const [newName, setNewName] = useState('');

	function handleChange(e) {
		setNewName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (newName === '') {
			setIsEditing(false);
			return
		}

		props.editTask(props.id, newName);
		setNewName('');
		setIsEditing(false);
	}

	const editableTasks = (
		<div className="list-wrapper">
			<span className="task-text">{props.name}</span>
			<button
				className="edit-button"
				onClick={() => setIsEditing(true)}
			>
				Edit
			</button>
			<button
				className="delete-button"
				onClick={() => props.deleteTask(props.id)}
			>
				Delete
			</button>
		</div>
	);

	const changedTasks = (
		<form className="list-wrapper" onSubmit={handleSubmit}>
			<input className="task-text" value={newName} onChange={handleChange} />
			<button className="edit-button" type="submit">OK</button>
			<button
				className="edit-button"
				onClick={() => setIsEditing(false)}
			>
				Cancel
			</button>
			<button
				className="delete-button"
				onClick={() => props.deleteTask(props.id)}
			>
				Delete
			</button>
		</form>
	)

	return (
		<li className="task" id={props.id}>
			{isEditing ? changedTasks : editableTasks}
		</li>
	)
}

export default Todo; 