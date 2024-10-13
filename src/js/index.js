const listaSelecaoPokeDevs = document.querySelectorAll('.pokedev')

listaSelecaoPokeDevs.forEach(pokedev =>{
    pokedev.addEventListener('click', ()=>{
        esconderCartaoPokedev()
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev)
        desativarPokedevNaListagem()
        ativarPokedevNaListagem(idPokedevSelecionado)
    })
})

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoListagem = document.getElementById(idPokedevSelecionado)
    pokedevSelecionadoListagem.classList.add('ativo')
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector('.ativo')
    pokedevAtivoNaListagem.classList.remove('ativo')
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value
    const idDoCartaoPokedevParaAbrir = 'cartao-' + idPokedevSelecionado
    const cartaPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir)
    cartaPokedevParaAbrir.classList.add('aberto')
    return idPokedevSelecionado
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector('.aberto')
    cartaoPokedevAberto.classList.remove('aberto')
}
