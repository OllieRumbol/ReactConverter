export {
    convertDecimalToBinary,
    convertDecimalToHex,
    convertDecimalToOct,
    convertBinaryToDecimal,
    convertHexToDecimal,
    convertOctToDecimal
}

function convertDecimalToBinary(testNumber) {
    var result = "";
    while (testNumber !== 0) {
        result = testNumber % 2 + result;
        testNumber = Math.floor(testNumber / 2)
    }
    return result;
}

function convertDecimalToOct(numberToConvert) {
    var result = "";
    while (numberToConvert !== 0) {
        result = numberToConvert % 8 + result;
        numberToConvert = Math.floor(numberToConvert / 8)
    }
    return result;
}

var dict = [];
dict.push("0");
dict.push("1");
dict.push("2");
dict.push("3");
dict.push("4");
dict.push("5");
dict.push("6");
dict.push("7");
dict.push("8");
dict.push("9");
dict.push("A");
dict.push("B");
dict.push("C");
dict.push("D");
dict.push("E");
dict.push("F");

function convertDecimalToHex(numberToConvert) {
    var result = "";
    while (numberToConvert !== 0) {
        var val = numberToConvert % 16;
        result = dict[val] + result;
        numberToConvert = Math.floor(numberToConvert / 16)
    }
    return result;
}

function convertBinaryToDecimal(binaryNumber) {
    var result = 0;
    for (var i = binaryNumber.length - 1; i >= 0; i--) {
        var number = Math.pow(2, i)
        if (binaryNumber[0] === '1') {
            result = result + number;
        }
        binaryNumber = binaryNumber.substring(1);
    }
    return result;
}

function convertHexToDecimal(hexNumber) {
    var result = 0;
    for (var i = hexNumber.length - 1; i >= 0; i--) {
        var number = Math.pow(16, i);
        var v = 0;
        if (hexNumber[0] === "A") {
            v = 10;
        } else if (hexNumber[0] === "B") {
            v = 11;
        } else if (hexNumber[0] === "C") {
            v = 12;
        } else if (hexNumber[0] === "D") {
            v = 13;
        } else if (hexNumber[0] === "E") {
            v = 14;
        } else if (hexNumber[0] === "F") {
            v = 15;
        } else {
            v = Number.parseInt(hexNumber[0]);
        }
        var res = number * v;
        result = result + res
        hexNumber = hexNumber.substring(1);
    }
    return result;
}

function convertOctToDecimal(octNumber) {
    var result = 0;
    for (var i = octNumber.length - 1; i >= 0; i--) {
        var number = Math.pow(8, i)
        var value = number * Number.parseInt(octNumber[0]);
        result = result + value;
        octNumber = octNumber.substring(1);
    }
    return result;
}