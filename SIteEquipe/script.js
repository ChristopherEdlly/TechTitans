let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Validar se há campos vazios
    let inputs = document.querySelectorAll("input, textarea");
    let empty = false;
    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            empty = true;
        }
    });

    if (empty) {
        alert("Por favor, preencha todos os campos!");
    } else {
        alert("Formulário enviado com sucesso!");
        // Aqui você pode enviar o formulário, fazer uma solicitação AJAX, etc.
    }
});