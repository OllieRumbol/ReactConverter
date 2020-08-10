import React from "react";
import ReactDOM from "react-dom";
import Error from '../../Components/Error'

describe('Loads Error component', () => {   
  test('should render without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Error />, div);
    ReactDOM.unmountComponentAtNode(div);
  })  
})
