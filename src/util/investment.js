export function calculateInverstmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  for (let i = 0; i < duration; i++) {
    const intrestEarnedInyear = investmentValue * (expectedReturn / 100);
    investmentValue += intrestEarnedInyear + annualInvestment;
    annualData.push({
      year: i + 1,
      interest: intrestEarnedInyear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    });
  }
  return annualData;
}

export const formatter = new Intl.NumberFormat({
  style: "currency",
  currency: "USD",
  minimumFraction: 0,
  maxmumFraction: 0,
});
