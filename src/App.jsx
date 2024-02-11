import { useState } from "react"

import Header from "./components/Header.jsx";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  const inputIsValid = userInput.duration >= 1;
  return (
    <>

      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && (<p className="center">Please enter duration that is more than zero!</p>)}
      { inputIsValid && <ResultsTable input={userInput} />}
      
    </>
  );
}

export default App
