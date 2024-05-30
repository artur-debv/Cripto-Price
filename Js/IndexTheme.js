document.getElementById('icon').addEventListener('click', function() {
    const body = document.body;
    const icon = document.getElementById('icon');
    
    // Alterna a cor de fundo
    if (body.classList.contains('default-table')) {
        body.classList.remove('default-table');
        body.classList.add('alternative-table');
    } else {
        body.classList.remove('alternative-table');
        body.classList.add('default-table');
    }
    
    // Alterna o ícone
    if (icon.classList.contains('bxs-sun')) {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
    } else {
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
    }
});