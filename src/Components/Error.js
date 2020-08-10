import React from 'react';

export default function Error(props){
    return(
        <div data-testid={props.id} className="alert alert-danger" role="alert">
            {props.message}
        </div>
    )
}