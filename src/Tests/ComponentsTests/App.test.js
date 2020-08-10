import React from "react";
import App from '../../Components/App';
const testingLibrary = require("@testing-library/react");

describe('Testing initial state of hocks', () => {
    test('should load with an initial state of 0 for the numberToConvert hock', () => {
        const { container } = testingLibrary.render(<App />);
        const searchTerm = testingLibrary.getByTestId(container, "numberToConvert");
        expect(searchTerm.value).toBe("0");
    })
    test('load with an initial state of number for the searchCategory hock', () => {
        const { container } = testingLibrary.render(<App />);
        const searchValue = testingLibrary.getByTestId(container, "dropDownBox");
        expect(searchValue.value).toBe("number");
    })
})

describe('Tests for checking validation', () => {
    test('should validate invalid value and display an error message', async () => {
        const { container } = testingLibrary.render(<App />); 
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        testingLibrary.fireEvent.change(inputBox, { target: { value: "abc" } });
        testingLibrary.fireEvent.click(convertButton);
        const numberErrorMessage = await testingLibrary.waitForElement(() =>
            testingLibrary.getByTestId(container, 'numberErrorMessage')
        );
        expect(numberErrorMessage.textContent).toBe("Invalid number");
    }) 
    test('should validate invalid binary value and display an error message', async () => {
        //Render components
        const { container } = testingLibrary.render(<App />); 
        //Get elements
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        //Perform  actions 
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "binary" }});
        testingLibrary.fireEvent.change(inputBox, { target: { value: "123" } });
        testingLibrary.fireEvent.click(convertButton);
        const binaryErrorMessage = await testingLibrary.waitForElement(() =>
            testingLibrary.getByTestId(container, 'binaryErrorMessage')
        );
        //Assertion
        expect(binaryErrorMessage.textContent).toBe("Invalid binary number!");
    })   
    test('should validate invalid octal value and display an error message', async () => {
        //Render components
        const { container } = testingLibrary.render(<App />); 
        //Get elements
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        //Perform  actions 
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "octal" }});
        testingLibrary.fireEvent.change(inputBox, { target: { value: "88" } });
        testingLibrary.fireEvent.click(convertButton);
        const octalErrorMessage = await testingLibrary.waitForElement(() =>
            testingLibrary.getByTestId(container, 'octalErrorMessage')
        );
        //Assertion
        expect(octalErrorMessage.textContent).toBe("Invalid octal number!");
    })   
    test('should validate invalid hexadecimal value and display an error message', async () => {
        //Render components
        const { container } = testingLibrary.render(<App />); 
        //Get elements
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        //Perform  actions 
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "hexadecimal" }});
        testingLibrary.fireEvent.change(inputBox, { target: { value: "xyz" } });
        testingLibrary.fireEvent.click(convertButton);
        const hexErrorMessage = await testingLibrary.waitForElement(() =>
            testingLibrary.getByTestId(container, 'hexErrorMessage')
        );
        //Assertion
        expect(hexErrorMessage.textContent).toBe("Invalid hexadecimal number!");
    })  
})

describe('Tests for resetting values ', () => {
    test('should clear input values', () => {
        const { container } = testingLibrary.render(<App />); 
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert"); 
        const clearButton = testingLibrary.getByTestId(container, "clearButton");
        testingLibrary.fireEvent.change(inputBox, { target: { value: "abc" } });
        testingLibrary.fireEvent.click(clearButton);
        expect(inputBox.value).toBe("0");
    })  
    test('should clear all output values', () => {
        //Render component to load html
        const { container } = testingLibrary.render(<App />); 
        //Get components to change and expect
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert"); 
        const clearButton = testingLibrary.getByTestId(container, "clearButton");
        const binaryOutput = testingLibrary.getByTestId(container, "binaryOutput");
        const hexadecimalOutput = testingLibrary.getByTestId(container, "hexadecimalOutput");
        const octalOutput = testingLibrary.getByTestId(container, "octalOutput");
        //Perform actions 
        testingLibrary.fireEvent.change(inputBox, { target: { value: "abc" } });
        testingLibrary.fireEvent.click(clearButton);
        //Assertion 
        expect(binaryOutput.textContent).toBe("Binary : 0");
        expect(hexadecimalOutput.textContent).toBe("Hexadecimal : 0");
        expect(octalOutput.textContent).toBe("Octal : 0");
    })      
})

describe('Tests for inputting a decimal value and check binary, hexadecimal and octal results', () => {
    test('should input a decimal number into the input box', () => {
        const { container } = testingLibrary.render(<App />);        
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        testingLibrary.fireEvent.change(inputBox, { target: { value: "23" } })
        expect(inputBox.value).toBe("23");
    })    
    test('should convert decimal input into binary 1100 output', () => {
        const { container } = testingLibrary.render(<App />);        
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        const binaryOutput = testingLibrary.getByTestId(container, "binaryOutput");
        testingLibrary.fireEvent.change(inputBox, { target: { value: "12" } });
        testingLibrary.fireEvent.click(convertButton);
        expect(binaryOutput.textContent).toBe("Binary : 1100");
    })    
    test('should convert decimal input into hexadecimal C output', () => {
        const { container } = testingLibrary.render(<App />);        
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        const hexadecimalOutput = testingLibrary.getByTestId(container, "hexadecimalOutput");
        testingLibrary.fireEvent.change(inputBox, { target: { value: "12" } });
        testingLibrary.fireEvent.click(convertButton);
        expect(hexadecimalOutput.textContent).toBe("Hexadecimal : C");
    })
    test('should convert decimal input into octal 14 output', () => {
        const { container } = testingLibrary.render(<App />);        
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        const octalOutput = testingLibrary.getByTestId(container, "octalOutput");
        testingLibrary.fireEvent.change(inputBox, { target: { value: "12" } });
        testingLibrary.fireEvent.click(convertButton);
        expect(octalOutput.textContent).toBe("Octal : 14");
    })    
})

describe('Tests for inputting a binary value and check decimal, hexadecimal and octal results', () => {
    test('should be able to input a binary value ', () => {
        const { container } = testingLibrary.render(<App />);        
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "binary" }});
        testingLibrary.fireEvent.change(inputBox, { target: { value: "1101" } })
        expect(inputBox.value).toBe("1101");
        expect(dropDownBox.value).toBe("binary");
    })    
    test('should convert binary to decimal', () => {
        const { container } = testingLibrary.render(<App />)
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "binary" } });
        testingLibrary.fireEvent.change(inputBox, { target: { value: "1010101" } });
        const decimalOutput = testingLibrary.getByTestId(container, "decimalOutput");
        testingLibrary.fireEvent.click(convertButton);
        expect(decimalOutput.textContent).toBe("Decimal : 85");
    })
    test('should convert binary to octal', () => {
        const { container } = testingLibrary.render(<App />)
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "binary" } });
        testingLibrary.fireEvent.change(inputBox, { target: { value: "1101" } });
        const octalOutput = testingLibrary.getByTestId(container, "octalOutput");
        testingLibrary.fireEvent.click(convertButton);
        expect(octalOutput.textContent).toBe("Octal : 15");
    })   
    test('should convert binary to hexadecimal', () => {
        const { container } = testingLibrary.render(<App />)
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "binary" } });
        testingLibrary.fireEvent.change(inputBox, { target: { value: "100111010" } });
        const hexOutput = testingLibrary.getByTestId(container, "hexadecimalOutput");
        testingLibrary.fireEvent.click(convertButton);
        expect(hexOutput.textContent).toBe("Hexadecimal : 13A");
    })     
})

describe('Tests for inputting octal numbers and getting the decimal, binary and hexadecimal results', () => {
    test('should convert octal to decimal', () => {
        //Render components 
        const { container } = testingLibrary.render(<App />)
        //Get elements
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        //Perform actions
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "octal" } });
        testingLibrary.fireEvent.change(inputBox, { target: { value: "76" } });
        const decimalOutput = testingLibrary.getByTestId(container, "decimalOutput");
        testingLibrary.fireEvent.click(convertButton);
        //Assertion
        expect(decimalOutput.textContent).toBe("Decimal : 62");
    })
    test('should convert octal to binary', () => {
        //Render components 
        const { container } = testingLibrary.render(<App />)
        //Get elements
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        //Perform actions
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "octal" } });
        testingLibrary.fireEvent.change(inputBox, { target: { value: "753" } });
        const binaryOutput = testingLibrary.getByTestId(container, "binaryOutput");
        testingLibrary.fireEvent.click(convertButton);
        //Assertion
        expect(binaryOutput.textContent).toBe("Binary : 111101011");
    })
    test('should convert octal to hexadecimal', () => {
        //Render components 
        const { container } = testingLibrary.render(<App />)
        //Get elements
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        //Perform actions
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "octal" } });
        testingLibrary.fireEvent.change(inputBox, { target: { value: "1247" } });
        const hexOutput = testingLibrary.getByTestId(container, "hexadecimalOutput");
        testingLibrary.fireEvent.click(convertButton);
        //Assertion
        expect(hexOutput.textContent).toBe("Hexadecimal : 2A7");
    })
})

describe('Tests for inputting octal numbers and getting the decimal, binary and hexadecimal results', () => {
    test('should convert hexadecimal to decimal', () => {
        //Render components 
        const { container } = testingLibrary.render(<App />)
        //Get elements
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        //Perform actions
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "hexadecimal" } });
        testingLibrary.fireEvent.change(inputBox, { target: { value: "ABC" } });
        const decimalOutput = testingLibrary.getByTestId(container, "decimalOutput");
        testingLibrary.fireEvent.click(convertButton);
        //Assertion
        expect(decimalOutput.textContent).toBe("Decimal : 2748");
    })
    test('should convert hexadecimal to binary', () => {
        //Render components 
        const { container } = testingLibrary.render(<App />)
        //Get elements
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        //Perform actions
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "hexadecimal" } });
        testingLibrary.fireEvent.change(inputBox, { target: { value: "DEF" } });
        const binaryOutput = testingLibrary.getByTestId(container, "binaryOutput");
        testingLibrary.fireEvent.click(convertButton);
        //Assertion
        expect(binaryOutput.textContent).toBe("Binary : 110111101111");
    })
    test('should convert hexadecimal to octal', () => {
        //Render components 
        const { container } = testingLibrary.render(<App />)
        //Get elements
        const inputBox = testingLibrary.getByTestId(container, "numberToConvert");
        const dropDownBox = testingLibrary.getByTestId(container, "dropDownBox");
        const convertButton = testingLibrary.getByTestId(container, "convertButton");
        //Perform actions
        testingLibrary.fireEvent.change(dropDownBox, { target: { value: "hexadecimal" } });
        testingLibrary.fireEvent.change(inputBox, { target: { value: "ACE" } });
        const octalOutput = testingLibrary.getByTestId(container, "octalOutput");
        testingLibrary.fireEvent.click(convertButton);
        //Assertion
        expect(octalOutput.textContent).toBe("Octal : 5316");
    })
}) 
