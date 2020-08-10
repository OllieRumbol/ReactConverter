const calculates = require("../../Logic/Calculations");

describe('Convert decimal to binary', () => {
    test('should return 1010', () => {
        const input = "10"
        const res = calculates.convertDecimalToBinary(input);
        expect(res).toEqual("1010");
    })
    test('should return 0', () => {
        const input = "0"
        const res = calculates.convertDecimalToBinary(input);
        expect(res).toEqual("0");
    })
    test('should return 10100100', () => {
        const input = 164
        const res = calculates.convertDecimalToBinary(input);
        expect(res).toEqual("10100100");
    })
})
