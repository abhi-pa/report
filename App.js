import React, { useState } from "react";
import "./App.css";

function App() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();
    setError("");

    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(loanTerm);

    if (!principal || !annualRate || !years) {
      setError("Please enter all values (loan amount, interest rate, term).");
      setMonthlyPayment(null);
      return;
    }

    // Mortgage formula: M = P * r * (1+r)^n / ((1+r)^n - 1)
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    if (monthlyRate === 0) {
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment);
      return;
    }

    const numerator =
      principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
    const payment = numerator / denominator;

    setMonthlyPayment(payment);
  };

  const handleReset = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm("");
    setMonthlyPayment(null);
    setError("");
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mortgage Calculator</h1>
        <p>
          Enter your loan details to estimate your monthly mortgage payment.
        </p>
      </header>

      <main className="card">
        <form className="form" onSubmit={handleCalculate}>
          <div className="form-group">
            <label htmlFor="loanAmount">Loan amount (£)</label>
            <input
              id="loanAmount"
              type="number"
              min="0"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="e.g. 200000"
            />
          </div>

          <div className="form-group">
            <label htmlFor="interestRate">Interest rate (% per year)</label>
            <input
              id="interestRate"
              type="number"
              min="0"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="e.g. 5"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loanTerm">Loan term (years)</label>
            <input
              id="loanTerm"
              type="number"
              min="1"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="e.g. 25"
            />
          </div>

          {error && <div className="error">{error}</div>}

          <div className="button-row">
            <button type="submit" className="btn primary">
              Calculate
            </button>
            <button type="button" className="btn secondary" onClick={handleReset}>
              Clear
            </button>
          </div>
        </form>

        <section className="result">
          <h2>Monthly payment</h2>
          {monthlyPayment !== null ? (
            <p className="payment">
              £{monthlyPayment.toFixed(2)}
            </p>
          ) : (
            <p className="placeholder">
              Your result will appear here after you calculate.
            </p>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Designed with simplicity, clarity, and accessibility in mind.
        </p>
      </footer>
    </div>
  );
}

export default App;
