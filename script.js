console.log ('hello')
// selectors
let updateBudgetButton = document.querySelector('#update_budget_button'); //this line grabs the bones-element of the 'update button button' and saves it as a variable
let addExpenseButton = document.querySelector ('#add_expense_button');
let monthlyBudget = document.querySelector('#monthly_budget');
let incomeInput = document.querySelector('#income_input');
let remainingBalance = document.querySelector('#remaining_balance');
let amountInput = document.querySelector('#amount_input')
let nameInput = document.querySelector('#name_input');
let expenseList = document.querySelector('#expense-list');
let totalExpenses = document.querySelector('#total_expenses');

//events

updateBudgetButton.onclick = updateBudget;
addExpenseButton.onclick = addExpense; //grabbing the button selector, making it equal to the function

//variables

let monthlyIncome = 0;
let expenses = []; 
let expenseTotal= 0;
let balance = 0;

//functions
function updateBudget(event) {
    event.preventDefault() ;
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = "$" + monthlyIncome;
    updateBalance () ;
}
//test updateBudget function

function updateBalance () {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0) {
        remainingBalance.classList.remove('green');
        remainingBalance.classList.add('red');
    } else {
        remainingBalance.classList.remove('red');
        remainingBalance.classList.add('green');
    }
}
// test our updateBalance Function

function addExpense(event) {
    event.preventDefault ();
    let expense = {
        name: nameInput.value,
        amount: amountInput.value
    };
    let newExpense = document.createElement('p');
    newExpense.innerText = expense.name + " $" + expense.amount;
    expenseList.appendChild(newExpense);
    let expenseAmount = parseInt(amountInput.value); // takes a string converts to a number
    expenses.push(expenseAmount);
    updateExpenseTotal();
}
// test addExpense function
function updateExpenseTotal () {
    expenseTotal = 0;
    for (let i = 0; i < expenses.length; i++) { //for loop. i = index
        expenseTotal = expenseTotal + expenses[i];
       }
       totalExpenses.innerText = "$" + expenseTotal;
       updateBalance();
}
//test the app!