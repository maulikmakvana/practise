let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {

    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;
    let amount = Number(document.getElementById("amount").value);

    if (date == "" || description == "" || amount <= 0) {
        alert("Please enter valid details");
        return;
    }

    expenses.push({
        date: date,
        description: description,
        amount: amount
    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    showExpenses();

    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}


function showExpenses() {

    let list = "";
    let total = 0;

    expenses.forEach(function(expense, index) {

        total += expense.amount;

        list += `
            <tr>
                <td>${expense.date}</td>
                <td>${expense.description}</td>
                <td>₹${expense.amount}</td>
                <td>
                    <button onclick="deleteExpense(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById("list").innerHTML = list;
    document.getElementById("total").innerText = total;
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    showExpenses();
}


function clearAll() {

    expenses = [];

    localStorage.removeItem("expenses");

    showExpenses();
}


showExpenses();