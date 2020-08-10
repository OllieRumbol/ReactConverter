import React, { useState } from 'react';
import Error from './Error.js'
import {isValidNumber, isValidBinaryNumber, isValidHexNumber, isValidOctNumber} from '../Logic/Validation.js'

export default function ValueInput(props){
    const [displayNoInputErrorMessage, setDisplayNoInputErrorMessage] = useState(false);
    const [displayNumberErrorMessage, setDisplayNumberErrorMessage] = useState(false);
    const [displayBinaryErrorMessage, setDisplayBinaryErrorMessage] = useState(false);
    const [displayHexErrorMessage, setDisplayHexErrorMessage] = useState(false);
    const [displayOctErrorMessage, setDisplayOctErrorMessage] = useState(false);
    
    function convert(){
        if(props.searchTerm === ""){
            setDisplayNoInputErrorMessage(true)
        }
        else if(props.searchCategory === "number"){
            if(isValidNumber(props.searchTerm)){
                props.convertNum();
            }
            else{
                setDisplayNumberErrorMessage(true);
            }
        }
        else if(props.searchCategory === "binary"){
            if(isValidBinaryNumber(props.searchTerm)){
                props.convertBin();
            }
            else{
                setDisplayBinaryErrorMessage(true);
            }
        }
        else if(props.searchCategory === "hexadecimal"){
            if(isValidHexNumber(props.searchTerm)){
                props.convertHex();
            }
            else{
                setDisplayHexErrorMessage(true);
            }
        }
        else if(props.searchCategory === "octal"){
            if(isValidOctNumber(props.searchTerm)){
                props.convertOct();
            }
            else{
                setDisplayOctErrorMessage(true);
            }
        }
    }   
    
    function clear(){
        setDisplayNumberErrorMessage(false);
        setDisplayBinaryErrorMessage(false);
        setDisplayHexErrorMessage(false);
        setDisplayOctErrorMessage(false);
        setDisplayNoInputErrorMessage(false);
        props.clearAll();
    }

    return(
        <div className="container">
            <h4 className="h4 display-4">Input</h4>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <select id="dropDownBox" data-testid="dropDownBox" onChange={props.searchCategoryChange}>
                        <option value="number">Numbers:</option>
                        <option data-testid="binarySelect" value="binary">Binary:</option>
                        <option data-testid="octalSelect" value="octal">Octal:</option>
                        <option data-testid="hexSelect" value="hexadecimal">Hexadecimal:</option>
                    </select>
                </div>
                <input 
                    data-testid="numberToConvert"
                    type="text" 
                    className="form-control" 
                    placeholder="Any whole number" 
                    aria-label="Username" 
                    value={props.searchTerm}
                    onChange={props.searchTermChange}
                />
            </div>
            {displayNoInputErrorMessage === true ? <Error message="No input to convert" id="noInputErrorMessage"/> : null}
            {displayNumberErrorMessage === true ? <Error message="Invalid number" id="numberErrorMessage"/> : null}
            {displayBinaryErrorMessage === true ? <Error message="Invalid binary number!" id="binaryErrorMessage"/> : null}
            {displayHexErrorMessage === true ? <Error message="Invalid hexadecimal number!"  id="hexErrorMessage"/> : null}
            {displayOctErrorMessage === true ? <Error message="Invalid octal number!"  id="octalErrorMessage"/> : null}
            <div className="btn-toolbar mb-2" role="toolbar">
                <button 
                    data-testid="convertButton"
                    type="button" 
                    className="btn btn-success mr-2"
                    onClick={convert}>
                    Convert
                </button>
                <button
                    data-testid="clearButton"
                    type="button"
                    className="btn btn-danger"
                    onClick={clear}>
                    Clear
                </button>
            </div>
        </div>
    );
}