import React from 'react';

export default function Todo(props){

        if(!props.completed) //onClick={() => props.clicked(props.id)}
        return(
            <p onClick={() => props.dispatch({type: "COMPLETE", payload: props.id})}>{props.task}</p>
        )
        
        else if(props.completed)
        return(
            <p style={{textDecoration:'line-through'}} onClick={() => props.dispatch({type: "UNCOMPLETE", payload: props.id})}>{props.task}</p>
        )
        
}