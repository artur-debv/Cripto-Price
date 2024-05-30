document.getElementById('icon').addEventListener('click', function() {
    const body = document.body;
    const icon = document.getElementById('icon');
    
    // Alterna a cor de fundo
    if (body.classList.contains('default-background')) {
        body.classList.remove('default-background');
        body.classList.add('alternative-background');
    } else {
        body.classList.remove('alternative-background');
        body.classList.add('default-background');
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