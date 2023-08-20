var expense = [
  // { expenseName: "Safari", cost: "240", amount: "1" },
  // { expenseName: "Villa", cost: "240", amount: 1 },
  // { expenseName: "Baniyan", cost: "110", amount: "3" },
];

var targetExpenseName = document.getElementById("expenseName");
var targetExpenseCost = document.getElementById("expenseCost");
var targetExpenseAmount = document.getElementById("expenseAmount");

document
  .getElementById("addExpense")
  .addEventListener("click", addExpenseToArray);

function addExpenseToArray() {
  var expenseName = targetExpenseName.value;
  var expenseCost = targetExpenseCost.value;
  var expenseAmount = targetExpenseAmount.value;
  var oldExpenseString = localStorage.getItem("ExpenseStore");
  var oldExpense = JSON.parse(oldExpenseString);

  if (expenseName && expenseCost && expenseAmount) {
    // expense.push();
    expense = [
      ...oldExpense,
      { expenseName, cost: expenseCost, amount: expenseAmount },
    ];
    localStorage.setItem("ExpenseStore", JSON.stringify(expense));
  }

  hello();
}

function deleteExpense(index) {
  const history = localStorage.getItem("ExpenseStore");
  const expenseHistory = JSON.parse(history);

  const newArray = expenseHistory.splice(index, 1);
  localStorage.setItem("ExpenseStore", JSON.stringify(newArray));
  hello();
}

function hello() {
  var history = localStorage.getItem("ExpenseStore");
  var expenseHistory = JSON.parse(history);

  var str = "";
  var totalAmountSpent = 0;
  expenseHistory.map((item, index) => {
    str += `<li><span><b>${item.expenseName}</b></span> <span><b>Amount - </b>${
      item.amount
    }</span> <span><b>Rs - </b>${item.cost}</span> <button onclick='${() =>
      deleteExpense(index)}'>Delete</button></li>`;
    totalAmountSpent += `+${item.cost}* ${item.amount}`;
  });

  const totalMoney = eval(totalAmountSpent);
  document.getElementById("totalAmountSpent").innerText = totalMoney;
  document.getElementById("listOfExpense").innerHTML = str;

  targetExpenseName.value = "";
  targetExpenseCost.value = "";
  targetExpenseAmount.value = "";
}

hello();

// localStorage.setItem(1, JSON.stringify(expense));
