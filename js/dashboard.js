// Inicializa o gráfico
var ctx = document.getElementById('graficoPacientes').getContext('2d');
var graficoPacientes = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
      label: 'N° de Pacientes',
      data: [12, 19, 3, 5, 2, 3, 7, 10, 4, 6, 8, 9],
      backgroundColor: '#2a9d8f',
      borderColor: '#2a9d8f',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Lógica de alternância de Dark Mode
const toggleButton = document.getElementById('toggleDarkMode');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
