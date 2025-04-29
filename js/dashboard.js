const ctx = document.getElementById('pacientesChart').getContext('2d');
const pacientesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [{
            label: 'Pacientes Atendidos',
            data: [2, 3, 1, 4, 5, 2, 3, 6, 4, 2, 5, 3, 1, 2, 4, 5, 2, 3, 4, 5, 3, 1, 2, 4, 3, 2, 5, 4, 3, 2, 1],
            fill: false,
            borderColor: '#388e3c',
            backgroundColor: '#66bb6a',
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Pacientes'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Dias do Mês'
                }
            }
        }
    }
});
