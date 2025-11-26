
Mortgage Calculator React App
Overview
This project is a user-friendly mortgage calculator built with React. It helps users estimate their monthly mortgage payments based on loan amount, interest rate, and loan term. The app is designed with simplicity, clarity, and accessibility in mind to provide a pleasant user experience.

Features
Input fields for loan amount, annual interest rate, and loan term in years

Calculates monthly mortgage payment using standard amortization formula

Displays errors for invalid or missing inputs

Responsive design with clean and modern UI

Clear buttons to calculate and reset inputs

Instant update of results after calculation

Technologies Used
React (Functional Components and Hooks)

JavaScript (ES6+)

CSS for styling and responsive layout

ReactDOM for rendering

How It Works
User Inputs:
Users enter values in three input fields:

Loan amount in pounds (£)

Annual interest rate (percentage)

Loan term in years

State Management:
React useState hooks store user inputs (loanAmount, interestRate, loanTerm), as well as the calculated monthly payment (monthlyPayment) and any validation error messages (error).

Calculation Logic:
On form submission:

The app validates that all inputs are positive numbers.

It uses the mortgage payment formula:

M
=
P
×
r
×
(
1
+
r
)
n
(
1
+
r
)
n
−
1
M=P×r× 
(1+r) 
n
 −1
(1+r) 
n
 
 
Where:

M
M = monthly payment

P
P = principal loan amount

r
r = monthly interest rate (annual rate / 12 / 100)

n
n = number of total monthly payments (loan term in years × 12)

If the interest rate is zero, it divides the principal evenly over the months.

The calculated monthly payment is saved to state and displayed.

User Feedback:

If inputs are invalid or missing, an error message is shown below the form.

Users can clear all inputs and results using the Clear button.

Rendering:

The root ReactDOM renders the <App /> component inside the HTML element with id root.

The app layout uses CSS grid and flex for responsive positioning.

Styling ensures inputs, buttons, results, and error messages are visually distinct and accessible.

Project Structure
index.js: Starting point of the app, renders <App /> into the root DOM element.

App.js: Main component containing all UI, state, and logic for the mortgage calculator.

index.css: Base styling for body and root container.

App.css: Styles relating specifically to the mortgage calculator layout, form, buttons, and results.

How to Run
Install Node.js and npm if not already installed.

Open a terminal and run:

text
npx create-react-app mortgage-calculator
cd mortgage-calculator
Replace the generated App.js, App.css, index.js, and index.css files with the provided source.

Run:

text
npm start
