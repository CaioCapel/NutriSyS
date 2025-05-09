document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var modal = document.getElementById('myModal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModal = document.getElementsByClassName('close')[0];

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // Visualização padrão em telas grandes
        locale: 'pt-br',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listMonth'  // Adicionando a visualização de lista
        },
        events: [
            {
                title: 'Consulta: João Silva',
                start: '2025-05-13T09:00:00',
                end: '2025-05-13T10:00:00'
            },
            {
                title: 'Consulta: Ana Oliveira',
                start: '2025-05-14T14:30:00'
            }
        ],
        windowResize: function () {
            var width = window.innerWidth;
            // Detectando a largura da tela para alternar entre a visualização de lista e a de grade
            if (width < 768) {
                calendar.changeView('listMonth');  // Exibe os eventos como uma lista no formato de mês
            } else {
                calendar.changeView('dayGridMonth');  // Exibe o calendário no formato de grade (por padrão)
            }
        }
    });

    calendar.render();

    // Abrir o modal ao clicar no botão
    openModalBtn.onclick = function () {
        modal.style.display = "block";
    }

    // Fechar o modal quando clicar no "X"
    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    // Fechar o modal ao clicar fora do modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Função para adicionar evento ao calendário
    document.getElementById('addEventForm').addEventListener('submit', function (e) {
        e.preventDefault();

        var title = document.getElementById('title').value;
        var startDate = document.getElementById('startDate').value;
        var endDate = document.getElementById('endDate').value;

        if (title && startDate && endDate) {
            // Adiciona o evento ao calendário
            calendar.addEvent({
                title: title,
                start: startDate,
                end: endDate
            });

            // Fecha o modal após adicionar o evento
            modal.style.display = "none";

            // Limpa o formulário após adicionar
            document.getElementById('addEventForm').reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});


  