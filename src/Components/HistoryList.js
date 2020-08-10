import React from 'react';
import HistoryItem from './HistoryItem'

export default function HistoryList(props){
    return(
        <div className="container">
            <div>
                <h4 className="h4 display-4">History</h4>
            </div>
            <span>
                {props.valueList.map((val, index) => {
                    return <HistoryItem key={index} value={val.search} results={val.results}/>
                })}
            </span>
        </div>
    )
}

