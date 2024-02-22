import { calculateInvestmentResults, formatter } from "../util/investment";
function Results({ userInput }) {
  const newObj = {
    initialInvestment: userInput["INITIAL_INVESTMENT"],
    annualInvestment: userInput["ANNUAL_INVESTMENT"],
    expectedReturn: userInput["EXPECTED_RETURN"],
    duration: userInput["DURATION"],
  };
  const outptResults = calculateInvestmentResults(newObj);
  console.log(outptResults);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {outptResults.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            userInput.INITIAL_INVESTMENT;
          const totalAmmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Results;
