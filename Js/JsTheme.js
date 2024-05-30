function setTheme(theme) {
    if (theme === 'dark') {
        mode.classList.remove('fa-moon');
        mode.classList.add('bxs-sun');
        form.classList.add('dark');
        form2.classList.add('select');
    } else {
        mode.classList.remove('bxs-sun');
        mode.classList.add('bxs-moon');
        form.classList.remove('dark');
        form2.classList.remove('select');
    }
}