document.addEventListener('DOMContentLoaded', () => {
    const mode = document.getElementById('mode_icon');
    const form = document.querySelector('.darkmode');
    const form2 = document.querySelector('.mode');

    function setTheme(theme) {
        if (theme === 'dark') {
            mode.classList.remove('bxs-moon');
            mode.classList.add('bxs-sun');
        } else {
            mode.classList.remove('bxs-sun');
            mode.classList.add('bxs-moon');
        }
    }

    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    function setThemeFromPreference() {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const systemPreference = prefersDarkScheme.matches ? 'dark' : 'light';
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', systemPreference);
        }
        setTheme(localStorage.getItem('theme'));
    }

    setThemeFromPreference();

    mode.addEventListener('click', () => {
        toggleTheme();
    });
});