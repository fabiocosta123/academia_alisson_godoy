document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");
    const navLinks = document.querySelectorAll("#navbarNav .nav-link");

    // Alternar a classe 'show' corretamente no mobile
    navbarToggler.addEventListener("click", function () {
        const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
            navbarCollapse.classList.remove("show");
        } else {
            navbarCollapse.classList.add("show");
        }
    });

    // Fechar ao clicar em qualquer link no mobile
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navbarCollapse.classList.remove("show");
        });
    });
});
