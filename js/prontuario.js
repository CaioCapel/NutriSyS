// Função para gerar e baixar o PDF
document.getElementById('downloadPdfBtn').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Adicionando conteúdo, com controle de páginas
    let yPosition = 20; // Posição inicial de Y (vertical)

    // Função para adicionar texto com controle de múltiplas páginas
    function addTextWithPagination(text, x, y) {
        const pageHeight = doc.internal.pageSize.height; // Altura da página
        if (y > pageHeight - 20) { // Se o conteúdo ultrapassar a altura da página
            doc.addPage(); // Adiciona uma nova página
            y = 20; // Reinicia a posição de Y na nova página
        }
        doc.text(text, x, y);
        return y + 10; // Retorna a nova posição de Y
    }

    // Adicionar título
    yPosition = addTextWithPagination('Prontuário do Paciente', 20, yPosition);

    // Adicionar Informações Pessoais
    yPosition = addTextWithPagination('Informações Pessoais', 20, yPosition);
    yPosition = addTextWithPagination('Nome: João Silva', 20, yPosition);
    yPosition = addTextWithPagination('Data de Nascimento: 01/01/1995', 20, yPosition);
    yPosition = addTextWithPagination('Idade: 30 anos', 20, yPosition);
    yPosition = addTextWithPagination('Gênero: Masculino', 20, yPosition);
    yPosition = addTextWithPagination('Peso: 75 kg', 20, yPosition);
    yPosition = addTextWithPagination('Altura: 1.75 m', 20, yPosition);
    yPosition = addTextWithPagination('Objetivo da Consulta: Emagrecimento', 20, yPosition);

    // Adicionar Histórico Clínico
    yPosition = addTextWithPagination('Histórico Clínico', 20, yPosition);
    yPosition = addTextWithPagination('Diabetes: Não', 20, yPosition);
    yPosition = addTextWithPagination('Distenção Abdominal: Não', 20, yPosition);
    yPosition = addTextWithPagination('Hipertensão: Não', 20, yPosition);
    yPosition = addTextWithPagination('Pirose: Não', 20, yPosition);
    yPosition = addTextWithPagination('Gastrite: Sim', 20, yPosition);
    yPosition = addTextWithPagination('Flatulência: Sim', 20, yPosition);
    yPosition = addTextWithPagination('Dislipidemia: Não', 20, yPosition);
    yPosition = addTextWithPagination('Constipação: Não', 20, yPosition);
    yPosition = addTextWithPagination('Hipotireoidismo: Não', 20, yPosition);
    yPosition = addTextWithPagination('Possui alguma outra patologia? Não', 20, yPosition);
    yPosition = addTextWithPagination('Teve perda ou ganho de peso recente? Não', 20, yPosition);
    yPosition = addTextWithPagination('Fuma ou já fumou? Não', 20, yPosition);
    yPosition = addTextWithPagination('Faz uso de bebida alcoólica? Não', 20, yPosition);
    yPosition = addTextWithPagination('Pratica atividade física? Não', 20, yPosition);
    yPosition = addTextWithPagination('Como é a qualidade do seu sono? Dorme quantas horas? Boa, 7 Horas por dia', 20, yPosition);
    yPosition = addTextWithPagination('Faz uso de medicamentos? Ou suplemento? Não', 20, yPosition);

    // Adicionar Padrão Alimentar
    yPosition = addTextWithPagination('Padrão Alimentar', 20, yPosition);
    yPosition = addTextWithPagination('Possui alergia a algum alimento? Não', 20, yPosition);
    yPosition = addTextWithPagination('Quais alimentos tem aversão? Não', 20, yPosition);
    yPosition = addTextWithPagination('Alimentos de preferência? Não', 20, yPosition);
    yPosition = addTextWithPagination('Quantas refeições faz no dia? E qual delas come em maior quantidade? Não', 20, yPosition);
    yPosition = addTextWithPagination('Como é seu hábito intestinal? Sim', 20, yPosition);
    yPosition = addTextWithPagination('O que costuma comer nas seguintes refeições:', 20, yPosition);
    yPosition = addTextWithPagination('Desjejum: Não', 20, yPosition);
    yPosition = addTextWithPagination('Lanche da manhã: Não', 20, yPosition);
    yPosition = addTextWithPagination('Almoço: Não', 20, yPosition);
    yPosition = addTextWithPagination('Lanche da Tarde: Não', 20, yPosition);
    yPosition = addTextWithPagination('Jantar: Não', 20, yPosition);

    // Adicionar Observações
    yPosition = addTextWithPagination('Observações', 20, yPosition);
    yPosition = addTextWithPagination('Nenhuma Observação', 20, yPosition);

    // Adicionar Plano Alimentar
    yPosition = addTextWithPagination('Plano Alimentar', 20, yPosition);
    yPosition = addTextWithPagination('Plano Atual: Redução de carboidratos e aumento de proteínas.', 20, yPosition);

    // Adicionar Anexos
    yPosition = addTextWithPagination('Anexos', 20, yPosition);
    yPosition = addTextWithPagination('Exame de Sangue.pdf', 20, yPosition);
    yPosition = addTextWithPagination('Receita Médica.pdf', 20, yPosition);

    // Gerar o PDF e fazer o download
    doc.save('prontuario_paciente.pdf');
});


