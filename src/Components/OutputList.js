import React from 'react';
import Output from './Output.js';

export default function OutputList(props){
    return(
        <div>
          <div className="container">
            <h4 className="h4 display-4">Results</h4>
          </div>   
          {props.searchCategory !== "number" ? <Output title='Decimal' result={props.decimalResult} id="decimalOutput"/> : null}        
          {props.searchCategory !== "binary" ? <Output title='Binary' result={props.binaryResult} id="binaryOutput"/> : null}     
          {props.searchCategory !== "hexadecimal" ? <Output title='Hexadecimal' result={props.hexadecimalResult} id="hexadecimalOutput"/> : null}     
          {props.searchCategory !== "octal" ?  <Output title='Octal' result={props.octalResult} id="octalOutput"/> : null}  
        </div>
    )
}



