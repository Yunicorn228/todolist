import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import footerLink from './constant/footerLinks';
import Form from './components/Form/';
import TodoList from './components/TodoList';

class App extends Component {
	state = {
		data: '',
		todos: ['haha', 'xixi', 'hehe'],
	};
	handleInputChange = e => {
		this.setState({
			data: e.target.value,
		});
	};
	handleSubmitInput = () => {
		const todos = this.state.todos;
		todos.push(this.state.data);
		this.setState({
			todos: todos,
			data: '',
		});
	};
	handleDeletTodo = i => {
		const todos = this.state.todos;
		todos.splice(i, 1);
		this.setState({
			todos: todos,
		});
	};
	render() {
		return (
			<div className='app'>
				<TodoList
					handleDeletTodo={this.handleDeletTodo}
					todos={this.state.todos}
				/>
				<Form
					handleSubmitInput={this.handleSubmitInput}
					handleInputChange={this.handleInputChange}
					data={this.state.data}
				/>
			</div>
		);
	}
}

export default App;
