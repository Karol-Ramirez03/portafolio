window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) { // Cambia este valor según lo que necesites
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
});
