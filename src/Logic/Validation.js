export {
    isValidNumber,
    isValidBinaryNumber,
    isValidHexNumber,
    isValidOctNumber
}

function isValidNumber(input) {
    if (isNaN(input)) {
        return false;
    } else if (!Number.isInteger(parseFloat(input))) {
        return false;
    }
    return true;
}

function isValidBinaryNumber(input) {
    for (var i = 0; i < input.length; i++) {
        var h = input.charAt(i);
        if (h !== "1" && h !== "0") {
            return false;
        }
    }
    return true;
}

function isValidHexNumber(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== 'F' && input[i] !== 'E' && input[i] !== 'D' && input[i] !== 'C' && input[i] !== 'B' && input[i] !== 'A' && input[i] !== '9' && input[i] !== '8' && input[i] !== '7' && input[i] !== '6' && input[i] !== '5' && input[i] !== '4' && input[i] !== '3' && input[i] !== '2' && input[i] !== '1' && input[i] !== '0') {
            return false;
        }
    }
    return true;
}

function isValidOctNumber(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== "7" && input[i] !== "6" && input[i] !== "5" && input[i] !== "4" && input[i] !== "3" && input[i] !== "2" && input[i] !== "1" && input[i] !== "0") {
            return false;
        }
    }
    return true;
}
