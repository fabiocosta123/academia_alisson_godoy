// document.addEventListener("DOMContentLoaded", function() {
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     var navbarCollapse = document.querySelector("#navbarNav");

//     navbarToggler.addEventListener("click", function() {
//         navbarCollapse.classList.toggle("show");
//     });
// });

// window.onload = function() {
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     navbarToggler.addEventListener("click", function() {
//         var navbarCollapse = document.querySelector("#navbarNav");
//         new bootstrap.Collapse(navbarCollapse, { toggle: true });
//     });
// };


document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });
});
