import React from 'react';

const TodoList = ({ todos, handleDeletTodo }) => {
	return (
		<div>
			{todos.map((todo, i) => (
				<div className='todo'>
					<span>{todo}</span>
					<button onClick={() => handleDeletTodo(i)}>X</button>
				</div>
			))}
		</div>
	);
};

export default TodoList;
