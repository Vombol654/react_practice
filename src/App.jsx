import { useState } from "react";
import Header from "./components/Header";
import InvestmentCalculator from "./components/InvestmentCalculator";
import Results from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    INITIAL_INVESTMENT: 1000000,
    ANNUAL_INVESTMENT: 100000,
    EXPECTED_RETURN: 11,
    DURATION: 3,
  });
  const inputIsValid = userInput.DURATION >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <InvestmentCalculator
        onChangeInput={handleChange}
        userInput={userInput}
      />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than 0</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
