
import React from 'react';
import Todo from './Todo';
export default function TodoList(props) {
    function mapTodos(){
        return(
            props.todos.map((todo) => (
                <Todo key={todo.id} task={todo.item} id={todo.id} completed={todo.completed} dispatch={props.dispatch}/>
            ))
        )
    }
    return (
      <div>
        <h1>Todos:</h1>
        {
          mapTodos()
        }
      </div>
    );
}