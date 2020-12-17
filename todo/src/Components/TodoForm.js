import React, {useState} from 'react';

export default function TodoForm(props){
    const [newTodo, setNewTodo] = useState('');
    return(
        <div>
            <input placeholder="Add Todo" onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
            <button onClick={() => props.dispatch({type: "ADD", payload: newTodo})}>Add</button> 
            <button >Remove Finished</button>
        </div>
    )
}