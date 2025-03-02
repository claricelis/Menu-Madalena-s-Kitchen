// script.js
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function changeActiveLink() {
        let fromTop = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Ajuste conforme necessário
            const sectionHeight = section.clientHeight;

            if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
});

document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPercentage = (scrollTop / docHeight) * 100;

        progressBar.style.width = scrollPercentage + "%";
    });
});
