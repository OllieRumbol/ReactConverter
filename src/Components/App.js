import React, {
  useState
} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ValueInput from './ValueInput.js';
import OutputList from './OutputList';
import HistoryList from './HistoryList';
import {
  convertDecimalToBinary,
  convertDecimalToHex,
  convertDecimalToOct,
  convertBinaryToDecimal,
  convertHexToDecimal,
  convertOctToDecimal
} from '../Logic/Calculations.js';

export default function App() {
  //React hocks
  const [numberToConvert, setNumberToConvert] = useState(0);
  const [searchCategory, setSearchCategory] = useState("number");
  const [binaryResult, setBinaryResult] = useState(0);
  const [hexadecimalResult, setHexadecimalResult] = useState(0);
  const [octalResult, setOctalResult] = useState(0);
  const [decimalResult, setDecimalResult] = useState(0);
  const [historyList, setHistoryList] = useState([{search:"Num : 12", results:["Bin : 1100","Hex : C","Oct : 14"]}]);

  //Handle the change of the number to be converted 
  function handleNumberChange(e) {
    setNumberToConvert(e.target.value);
  }

  //Handle the change of the search category (Decimal, Binary, Octal and Hexadecimal)
  function handleSearchCategoryChange(e) {
    setSearchCategory(e.target.value);
  }

  //convert the decimal input to binary, octal, hexadecimal
  function convertFromNumber() {
    const binRes = convertDecimalToBinary(numberToConvert);
    setBinaryResult(binRes);
    const hexRes = convertDecimalToHex(numberToConvert);
    setHexadecimalResult(hexRes);
    const octRes = convertDecimalToOct(numberToConvert);
    setOctalResult(octRes);
    setHistoryList([{search:"Num : " + numberToConvert, results:["Bin : " + binRes, "Oct : " + octRes, "Hex : " + hexRes]}, ...historyList]);
  }

  //Convert the binary number to decimal, octal and hexadecimal 
  function convertFromBinary() {
    const decRes = convertBinaryToDecimal(numberToConvert);
    setDecimalResult(decRes);
    const octRes = convertDecimalToOct(decRes)
    setOctalResult(octRes);
    const hexRes = convertDecimalToHex(decRes);
    setHexadecimalResult(hexRes);
    setHistoryList([{search:"Bin : " + numberToConvert, results:["Dec : " + decRes, "Oct : " + octRes, "Hex : " + hexRes]}, ...historyList]);
  }

  //Convert the hexadecimal number to decimal, binary and octal
  function convertFromHex() {
    var decRes = convertHexToDecimal(numberToConvert);
    setDecimalResult(decRes);
    const binRes = convertDecimalToBinary(decRes);
    setBinaryResult(binRes);
    const octRes = convertDecimalToOct(decRes);
    setOctalResult(octRes);    
    setHistoryList([{search:"Hex : " + numberToConvert, results:["Dec : " + decRes, "Bin : " + binRes, "Oct : " + octRes]}, ...historyList]);
  }

  //Convert the octal number to decimal, binary and hexadecimal
  function convertFromOct() {
    var decRes = convertOctToDecimal(numberToConvert);
    setDecimalResult(decRes);
    const binRes = convertDecimalToBinary(decRes);
    setBinaryResult(binRes);
    const hexRes = convertDecimalToHex(decRes);
    setHexadecimalResult(hexRes);
    setHistoryList([{search:"Oct : " + numberToConvert, results:["Dec : " + decRes, "Bin : " + binRes, "Hex : " + hexRes]}, ...historyList]);
  }

  //Clear results and inputs 
  function clear() {
    setNumberToConvert(0);
    setBinaryResult(0);
    setHexadecimalResult(0);
    setOctalResult(0);
    setDecimalResult(0)
  }

  //Return JSX
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-1">Converter</h1>
        <p className="lead">This application carry's out the conversion between decimal, binary, hexadecimal and octal number.</p>
      </div>
      <ValueInput 
        searchTerm={numberToConvert} 
        searchTermChange={handleNumberChange} 
        searchCategory={searchCategory}
        searchCategoryChange={handleSearchCategoryChange}
        convertNum={convertFromNumber}
        convertBin={convertFromBinary}
        convertHex={convertFromHex}
        convertOct={convertFromOct}
        clearAll={clear}
      />       
      <OutputList
        searchCategory={searchCategory}
        decimalResult={decimalResult}
        binaryResult={binaryResult}
        octalResult={octalResult}
        hexadecimalResult={hexadecimalResult}
      />    
      <HistoryList valueList={historyList}/>
    </div>
  );
}
