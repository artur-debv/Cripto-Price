function setTheme(theme) {
    if (theme === 'dark') {
        mode.classList.remove('fa-moon');
        mode.classList.add('bxs-sun');
    } else {
        mode.classList.remove('bxs-sun');
        mode.classList.add('bxs-moon');
    }
}