import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA_MAP = [
	{
		id: "todo-0",
		name: "Eat"
	},
	{
		id: "todo-1",
		name: "Sleep"
	},
	{
		id: "todo-2",
		name: "Repeat"
	},
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA_MAP}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
