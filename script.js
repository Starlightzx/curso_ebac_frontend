function validar() {
    var cA = window.document.querySelector('input#campoA')
    var bA = Number(cA.value)
var cB = window.document.querySelector('input.campoB')
var nB = Number(cB.value)

if (nB > bA) {
    window.alert('Tudo certo')
} else {
    window.alert('Sequência invalida! tente novamente.')
}
}