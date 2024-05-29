function filtrarMoedas() {
    const valorInput = document.querySelector('.input_Search').value.toLowerCase();
    const linhas = document.querySelectorAll('.table tbody tr');
    let encontrouMoeda = false; // Flag para verificar se encontrou alguma moeda

    linhas.forEach(linha => {
        const nomeMoeda = linha.querySelector('td:nth-child(3)').textContent.toLowerCase();
        if (nomeMoeda.includes(valorInput)) {
            linha.style.display = '';
            encontrouMoeda = true; // Encontrou a moeda, atualiza a flag
        } else {
            linha.style.display = 'none';
        }
    });
}

// Adiciona o evento de clique ao botão de busca
document.querySelector('.button_search').addEventListener('click', filtrarMoedas);
