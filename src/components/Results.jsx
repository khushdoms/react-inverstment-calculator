import { calculateInverstmentResults, formatter } from "../util/investment";
export default function Result({ input }) {
  const resultData = calculateInverstmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>year</th>
          <th>Invest Value</th>
          <th>Interest year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterestValue =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
            const totalInvestedAmount = yearData.valueEndOfYear - totalInterestValue;
          return ( 
            <tr key={yearData.year}>
              <td> {yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)} </td>
              <td> {formatter.format(yearData.interest)}</td>
              <td> {formatter.format(totalInterestValue)}</td>
              <td> {formatter.format(totalInvestedAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
