var elementoDuvida = document.querySelectorAll('.Duvidas')

elementoDuvida.forEach(function (Duvidas) {
    Duvidas.addEventListener('click', function () {
        Duvidas.classList.toggle('ativa')
    })

})

