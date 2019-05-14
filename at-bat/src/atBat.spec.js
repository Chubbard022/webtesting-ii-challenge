import React from "react"
import {render, fireEvent} from "react-testing-library"
import 'react-testing-library/cleanup-after-each';
import Dashboard from "./dashboard/Dashboard"
import Display from "./display/Display"
import App from "./App"

describe("<Display/> and <Dashboard/> within App.js", () => {
    it("should increase by one when the button is clicked", () => {
      const { getByText } = render(<App/>);
        
      const button = getByText(/Update strikes/i)
      fireEvent.click(button)
      getByText(/strikes:1/i)
    });
    it("should increase by one when the button is clicked", () => {
        const { getByText } = render(<App/>);
          
        const button = getByText(/Update strikes/i)
        fireEvent.click(button)
        getByText(/strikes:2/i)
      });
//------------------------------------------------------------------
    it("should return balls increased by one",()=>{
        const {getByText} = render(<App/>)
        const button = getByText(/Update balls/i)

        fireEvent.click(button)
        getByText(/balls:1/i)

    })
    it("should return balls increased by two",()=>{
        const {getByText} = render(<App/>)
        const button = getByText(/Update balls/i)

        fireEvent.click(button)
        getByText(/balls:2/i)
    })
//------------------------------------------------------------------
it("should return strike increased by one",()=>{
    const {getByText} = render(<App/>)
    const button = getByText(/Update fouls/i)

    fireEvent.click(button)
    getByText(/strikes:1/i)
})
//------------------------------------------------------------------
it("should return strikes and balls to zero",()=>{
    const {getByText} = render(<App/>)
    const button = getByText(/Update Hit/i)

    fireEvent.click(button)
    getByText(/strikes:0/i)
    getByText(/balls:0/i)

})
  });