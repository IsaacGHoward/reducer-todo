import React from 'react';

export default function Todo(props){

        if(!props.completed)
        return(
            <p onClick={() => props.clicked(props.id)}>{props.task}</p>
        )
        else if(props.completed)
        return(
            <p style={{textDecoration:'line-through'}} onClick={() => props.clicked(props.id)}>{props.task}</p>
        )
}