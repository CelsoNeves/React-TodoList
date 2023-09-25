import React from "react";
import Todo from './Todo';

const TodoList = ({todos, filteredTodos, setTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                <Todo key={todo.id}  text={todo.text} todos={todos} filteredTodos={filteredTodos} todo={todo} setTodos={setTodos}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;