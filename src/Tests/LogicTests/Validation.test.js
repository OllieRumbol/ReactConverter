const validation = require("../../Logic/Validation");

describe('Decimal number validation', () => {
    test('should return 4', () => {
        expect(2 + 2).toEqual(4);
    })
    test('should return 156', () => {
        expect(100 + 56).toEqual(156);
    })
    test('should return true due to valid number', () => {
        const value = "12";
        const res = validation.isValidNumber(value);
        expect(res).toEqual(true);
    })
    test('should return false due to invalid number', () => {
        const value = "4.5";
        const res = validation.isValidNumber(value);
        expect(res).toEqual(false);
    })
    test('should return false due to invalid number', () => {
        const value = "ab";
        const res = validation.isValidNumber(value);
        expect(res).toEqual(false);
    })
    test('should return false due to invalid number', () => {
        const value = "*^!";
        const res = validation.isValidNumber(value);
        expect(res).toEqual(false);
    })
    test('should return false due to invalid number', () => {
        const value = "3ab";
        const res = validation.isValidNumber(value);
        expect(res).toEqual(false);
    })
    test('should return true due to valid number', () => {
        const value = 12;
        const res = validation.isValidNumber(value);
        expect(res).toEqual(true);
    })
})

describe('Binary number validation tests', () => {
    test('should return true due to valid binary number', () => {
        const value = "1101";
        const res = validation.isValidBinaryNumber(value);
        expect(res).toEqual(true);
    })
    test('should return false due to invalid binary number', () => {
        const value = "110a";
        const res = validation.isValidBinaryNumber(value);
        expect(res).toEqual(false);
    })
    test('should return false due to invalid number', () => {
        const value = "££$$%%^^&&";
        const res = validation.isValidBinaryNumber(value);
        expect(res).toEqual(false);
    })
})

describe('Octal number validation tests', () => {
    test('should validate valid octal number and return true', () => {
        const value = "753";
        const res = validation.isValidOctNumber(value);
        expect(res).toBe(true);

    })
    test('should validate invalid octal number and return false', () => {
        const value = "999";
        const res = validation.isValidOctNumber(value);
        expect(res).toBe(false);
    })
    test('should validate invalid octal number and return false', () => {
        const value = "abc";
        const res = validation.isValidOctNumber(value);
        expect(res).toBe(false);
    })
    test('should validate invalid octal number and return false', () => {
        const value = "!£$%";
        const res = validation.isValidOctNumber(value);
        expect(res).toBe(false);
    })
})

describe('Hexadecimal number validation tests', () => {
    test('should validate valid hexadecimal number and return true', () => {
        const listOfValidValues = ["123", "ABC", "DEF", "1537"];
        listOfValidValues.forEach(v => {
            expect(validation.isValidHexNumber(v)).toBe(true);
        });
    })
    test('should validate invalid hexadecimal number and return false', () => {
        const listOfInvalidValues = ["XYZ", "!£$", "1GH4"];
        listOfInvalidValues.forEach(v => {
            expect(validation.isValidHexNumber(v)).toBe(false);
        });
    })
})
