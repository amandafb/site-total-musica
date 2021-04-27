document.getElementById("btnBemois").addEventListener("click", function(event){
    event.preventDefault()
  });

  document.getElementById("novo").addEventListener("click", function(event){
    event.preventDefault()
  });

document.getElementById("btnSustenidos").addEventListener("click", function(event){
    event.preventDefault()
  });

  document.getElementById("novo2").addEventListener("click", function(event){
    event.preventDefault()
  });

function calcularEscalasBemois() {

    let escalasBemois = parseInt(document.getElementById('cicloBemois').value);
    let graus2 = parseInt(document.getElementById('grauCicloBemois').value);

    let resultadoEscalasBemois= escalasBemois + graus2;

    if (resultadoEscalasBemois== 1) {
        document.getElementById('resultadoInputBemois').value = 'Dób'
    } else if (resultadoEscalasBemois== 2) {
        document.getElementById('resultadoInputBemois').value = 'Solb'
    } else if (resultadoEscalasBemois== 3) {
        document.getElementById('resultadoInputBemois').value = 'Réb'
    } else if (resultadoEscalasBemois== 4) {
        document.getElementById('resultadoInputBemois').value = 'Láb'
    } else if (resultadoEscalasBemois== 5) {
        document.getElementById('resultadoInputBemois').value = 'Mib'
    } else if (resultadoEscalasBemois== 6) {
        document.getElementById('resultadoInputBemois').value = 'Sib'
    } else if (escalasBemois == 1 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = 'Fáb'
    } else if (resultadoEscalasBemois== 7) {
        document.getElementById('resultadoInputBemois').value = 'Fá'
    } else if (escalasBemois == 2 && graus2 == 6){
        document.getElementById('resultadoInput2').value = 'Dób'
    } else if (resultadoEscalasBemois== 8) {
        document.getElementById('resultadoInputBemois').value = 'Dó'
    } else if (escalasBemois == 1 && graus2 == 8) {
        document.getElementById('resultadoInput2').value = 'Solb'
    } else if (escalasBemois == 3 && graus2 == 6) {
        document.getElementById('resultadoInputBemois').value = 'Solb'
    } else if (resultadoEscalasBemois== 9) {
        document.getElementById('resultadoInputBemois').value = 'Sol'
    } else if ((escalasBemois == 2 && graus2 == 8) || (escalasBemois == 4 && graus2 == 6) ) {
        document.getElementById('resultadoInputBemois').value = 'Réb'
    } else if (resultadoEscalasBemois== 10) {
        document.getElementById('resultadoInputBemois').value = 'Ré'
    } else if (escalasBemois == 7 && graus2 == 4) {
        document.getElementById('resultadoInputBemois').value = 'Lá'
    } else if (resultadoEscalasBemois== 11) {
        document.getElementById('resultadoInputBemois').value = 'Láb'
    } else if (resultadoEscalasBemois== 12) {
        document.getElementById('resultadoInputBemois').value = 'Mib'
    } else if (resultadoEscalasBemois== 13) {
        document.getElementById('resultadoInputBemois').value = 'Sib'
    } else if (resultadoEscalasBemois== 14) {
        document.getElementById('resultadoInputBemois').value = 'Fá'
    } else if (resultadoEscalasBemois== 14) {
        document.getElementById('resultadoInputBemois').value = 'Fá'
    } else if (resultadoEscalasBemois== 15) {
        document.getElementById('resultadoInputBemois').value = 'Dó'
    } else if (resultadoEscalasBemois== 16) {
        document.getElementById('resultadoInputBemois').value = 'Sol'
    } else if (resultadoEscalasBemois== 17) {
        document.getElementById('resultadoInputBemois').value = 'Ré'
    } else if (resultadoEscalasBemois== 18) {
        document.getElementById('resultadoInputBemois').value = 'Lá'
    } else if (resultadoEscalasBemois== 19) {
        document.getElementById('resultadoInputBemois').value = 'Mi'
    }  
}

function calcularEscalasSustenidos() {

    let escalasSustenidos = parseInt(document.getElementById('cicloSustenidos').value);
    let graus = parseInt(document.getElementById('grauCicloSustenidos').value);

    let resultadoCHSustenidosTetrades= escalasSustenidos + graus;

    if (resultadoCHSustenidosTetrades== 1) {
        document.getElementById('resultadoInputSustenidos').value = 'SOl'
    } else if (resultadoCHSustenidosTetrades== 2) {
        document.getElementById('resultadoInputSustenidos').value = 'Ré'
    } else if (resultadoCHSustenidosTetrades== 3) {
        document.getElementById('resultadoInputSustenidos').value = 'Lá'
    } else if (resultadoCHSustenidosTetrades== 4) {
        document.getElementById('resultadoInputSustenidos').value = 'Mi'
    } else if (resultadoCHSustenidosTetrades== 5) {
        document.getElementById('resultadoInputSustenidos').value = 'Si'
    } else if (resultadoCHSustenidosTetrades== 6) {
        document.getElementById('resultadoInputSustenidos').value = 'Fá#'
    } else if (escalasSustenidos == 1 && graus == 6) {
        document.getElementById('resultadoInputSustenidos').value = 'Dó'
    } else if (resultadoCHSustenidosTetrades== 7) {
        document.getElementById('resultadoInputSustenidos').value = 'Dó#'
    } else if (escalasSustenidos == 2 && graus == 6) {
        document.getElementById('resultadoInput').value = 'Sol'
    } else if (resultadoCHSustenidosTetrades== 8) {
        document.getElementById('resultadoInputSustenidos').value = 'Sol#'
    } else if (escalasSustenidos == 5 && graus == 4) {
        document.getElementById('resultadoInputSustenidos').value = 'Ré#'
    } else if (escalasSustenidos == 7 && graus == 2) {
        document.getElementById('resultadoInputSustenidos').value = 'Ré#'
    } else if (resultadoCHSustenidosTetrades== 9) {
        document.getElementById('resultadoInputSustenidos').value = 'Ré'
    } else if (escalasSustenidos == 6 && graus == 4) {
        document.getElementById('resultadoInputSustenidos').value = 'Lá#'
    } else if (resultadoCHSustenidosTetrades== 10) {
        document.getElementById('resultadoInputSustenidos').value = 'Lá'
    } else if (escalasSustenidos == 7 && graus == 4) {
        document.getElementById('resultadoInputSustenidos').value = 'Mi#'
    } else if (resultadoCHSustenidosTetrades== 11) {
        document.getElementById('resultadoInputSustenidos').value = 'Mi'
    } else if (resultadoCHSustenidosTetrades== 12) {
        document.getElementById('resultadoInputSustenidos').value = 'Si'
    } else if (resultadoCHSustenidosTetrades== 13) {
        document.getElementById('resultadoInputSustenidos').value = 'Fá#'
    } else if (resultadoCHSustenidosTetrades== 14) {
        document.getElementById('resultadoInputSustenidos').value = 'Dó#'
    } else if (resultadoCHSustenidosTetrades== 15) {
        document.getElementById('resultadoInputSustenidos').value = 'Sol#'
    } else if (resultadoCHSustenidosTetrades== 16) {
        document.getElementById('resultadoInputSustenidos').value = 'Ré#'
    } else if (resultadoCHSustenidosTetrades== 17) {
        document.getElementById('resultadoInputSustenidos').value = 'Lá#'
    } else if (resultadoCHSustenidosTetrades== 18) {
        document.getElementById('resultadoInputSustenidos').value = 'Mi#'
    } else if (resultadoCHSustenidosTetrades== 19) {
        document.getElementById('resultadoInputSustenidos').value = 'Si#'
    }
}

function limparInputs(){
    document.getElementById('cicloBemois').value = 'escolha'
    document.getElementById('grauCicloBemois').value = 'escolha'
    document.getElementById('resultadoInputBemois').value = ''
    document.getElementById('cicloSustenidos').value = 'escolha'
    document.getElementById('grauCicloSustenidos').value = 'escolha'
    document.getElementById('resultadoInputSustenidos').value = ''

}