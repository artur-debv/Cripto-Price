document.getElementById('icon').addEventListener('click', function() {
    const icon = document.getElementById('icon');
    if (icon.classList.contains('bxs-sun')) {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
    } else {
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
    }
});