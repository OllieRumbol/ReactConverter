import React from "react";
import Output from '../../Components/Output';
const testingLibrary = require("@testing-library/react");

describe('Rendering the output component', () => {
    test('should ', () => {
        const { container } = testingLibrary.render(<Output title='Hello World' result={9 + 9} id="testOutput"/>);
        const res = testingLibrary.getByTestId(container, "testOutput");
        expect(res.textContent).toBe("Hello World : 18")
    })  
})
