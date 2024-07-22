document.addEventListener('DOMContentLoaded', () => {
    // Goal Progress Chart
    const ctx1 = document.getElementById('goalProgressChart').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                label: 'Goal Progress',
                data: [75, 25],
                backgroundColor: ['#4CAF50', '#FFC107'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
            }
        }
    });

    // Monthly Savings Chart
    const ctx2 = document.getElementById('monthlySavingsChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Monthly Savings',
                data: [200, 150, 300, 250, 400, 350, 500],
                backgroundColor: '#4CAF50',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                },
            }
        }
    });

    // Investment Growth Chart
    const ctx3 = document.getElementById('investmentGrowthChart').getContext('2d');
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Investment Growth',
                data: [1000, 1100, 1200, 1300, 1250, 1400, 1500],
                borderColor: '#4CAF50',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                },
            }
        }
    });
});