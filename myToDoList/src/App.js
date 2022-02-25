import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App(props) {
	const [tasks, setTasks] = useState(props.tasks);

	function addTask(name) {
		const newTask = {
			id: "todo-" + tasks.length,
			name: name
		}

		setTasks([...tasks, newTask])
	}

	function editTask(id, newName) {
		const editedTasks = tasks.map(task => {
			if (id === task.id) {
				return { ...task, name: newName }
			}
			return task;
		})

		setTasks(editedTasks);
	}

	function deleteTask(id) {
		const remainingTasks = tasks.filter(task => id !== task.id)
		setTasks(remainingTasks);
	}

	const tasksList = tasks.map(task => (
		<Todo
			key={task.id}
			name={task.name}
			id={task.id}
			deleteTask={deleteTask}
			editTask={editTask}
		/>
	));
	return (
		<div className="App">
			<h2>My ToDoList</h2>
			<Form addTask={addTask} />
			<ul className="todo-list">
				{tasksList}
			</ul>
		</div>
	);
}

export default App;
