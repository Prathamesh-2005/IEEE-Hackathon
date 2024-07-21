document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('budget-form');
    const budgetItems = document.getElementById('budget-items');
    const progressBars = document.getElementById('progress-bars');

    let budgets = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const category = document.getElementById('category').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (category && !isNaN(amount)) {
            // Add new budget
            budgets.push({ category, amount, spent: 0 });
            updateBudgetList();
            updateProgressBars();

            // Clear form
            form.reset();
        }
    });

    function updateBudgetList() {
        budgetItems.innerHTML = '';
        budgets.forEach((budget, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${budget.category}: $${budget.amount.toFixed(2)}</span>
                <button onclick="addExpense(${index})">Add Expense</button>
            `;
            budgetItems.appendChild(listItem);
        });
    }

    function updateProgressBars() {
        progressBars.innerHTML = '';
        budgets.forEach(budget => {
            const progressBar = document.createElement('div');
            progressBar.classList.add('progress-bar');

            const percentage = (budget.spent / budget.amount) * 100;
            progressBar.innerHTML = `
                <span style="width: ${percentage.toFixed(2)}%">${percentage.toFixed(2)}%</span>
            `;

            progressBars.appendChild(progressBar);
        });
    }

    window.addExpense = function (index) {
        const amount = parseFloat(prompt('Enter expense amount:'));
        if (!isNaN(amount) && amount > 0) {
            budgets[index].spent += amount;
            updateBudgetList();
            updateProgressBars();
        }
    }
});
