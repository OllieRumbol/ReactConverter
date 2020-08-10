import React from 'react';

  export default function HistoryItem(props){    
    return(
        <span>
            <div className="badge badge-pill badge-primary p-4 m-3">
                <h5>{props.value}</h5>
                <hr className="bg-light"/>
                {props.results.map((value, index) => {
                    return <h6 key={index}>{value}</h6>
                })}
            </div>
        </span>
    )
}