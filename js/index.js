document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");
    const navLinks = document.querySelectorAll("#navbarNav .nav-link");

    // Abrir/fechar ao clicar no hambúrguer
    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    // Fechar ao clicar em qualquer link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function () {
            navbarCollapse.classList.remove("show");
        });
    });
});
