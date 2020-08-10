import React from 'react';

export default function Output(props){
    return(
        <div className="container">
            <h3><span data-testid={props.id} className="badge badge-primary">
                {props.title} : {props.result}
            </span></h3>
        </div>
    )
}


