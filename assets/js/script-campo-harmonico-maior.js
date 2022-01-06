/* 
A lógica por trás desse script é uma espécie de calculadora. Como as combinações de "Escalas" e "Graus" são muito numerosas,
foi a maneira que achei de reduzir o tamanho do código.
Cada option no html tem um determinado valor e quando são somados retornam a uma nota/acorde descritos nesse script.
Como existem variações na escrita dessas notas/acordes (questões de teoria musical mesmo), em alguns casos foi necessário
criar exceções para que a resposta estivesse com a grafia correta (às vezes adicionando um bemol (b) ou um sustenido (#) 
na nota/acorde em questão)
*/

//Evita que a página seja recarregada quando se clica nos botões
document.getElementById("btnBemois").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("btnSustenidos").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("btnFormAcordesQuintas").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("btnFormAcordesQuartas").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("novoQuintas").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("novoQuartas").addEventListener("click", function (event) {
    event.preventDefault()
});

// oculta os botões "Ver Acorde"
document.getElementById('btnFormAcordesQuintas').style.display = "none";
document.getElementById('btnFormAcordesQuartas').style.display = "none";

// Função para mostrar o imput com  a formação dos acordes
function showInputQuartas() {
    document.getElementById('acordeCicloQuartasInput').style.display = "block";
}

// Função para mostrar o imput com  a formação dos acordes
function showInputQuintas() {
    document.getElementById('acordeCicloQuintasInput').style.display = "block";
}

// Função para o campo harmônico - ciclo das quartas (b)
function calcularCicloQuartas() {
    //pega o valor das opções escolhidas pelo usuário nos dois selects desse seção
    let escalasBemois = parseInt(document.getElementById('cicloBemois').value);
    let graus2 = parseInt(document.getElementById('grauCicloBemois').value);

    // faz a soma dos values dessas opções
    let resultadoEscalasBemois = escalasBemois + graus2;

    /*de acordo com a soma anterior, apresenta ao usuário o valor correspondende descrito abaixo.
     logo depois, mostra a botão "Ver acorde" que quando clicado,mostra a formação daquele ao usuário*/
    if (resultadoEscalasBemois == 1) {
        document.getElementById('resultadoInputQuartas').value = `Cb`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dób Mib Solb`
    } else if (resultadoEscalasBemois == 2) {
        document.getElementById('resultadoInputQuartas').value = `Gb`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb`
    } else if (escalasBemois == 1 && graus2 == 2) {
        document.getElementById('resultadoInputQuartas').value = `Dbm`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fáb Láb`
    } else if (resultadoEscalasBemois == 3) {
        document.getElementById('resultadoInputQuartas').value = `Db`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb`
    } else if (escalasBemois == 2 && graus2 == 2) {
        document.getElementById('resultadoInputQuartas').value = `Abm`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dób Mib`
    } else if (resultadoEscalasBemois == 4) {
        document.getElementById('resultadoInputQuartas').value = `Ab`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó Mib`
    } else if (escalasBemois == 5 && graus2 == 0) {
        document.getElementById('resultadoInputQuartas').value = `Eb`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib`
    } else if (resultadoEscalasBemois == 5) {
        document.getElementById('resultadoInputQuartas').value = `Ebm`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Solb Sib`
    } else if (escalasBemois == 6 && graus2 == 0) {
        document.getElementById('resultadoInputQuartas').value = `Bb`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá`
    } else if (resultadoEscalasBemois == 6) {
        document.getElementById('resultadoInputQuartas').value = `Bbm`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fá`
    } else if (escalasBemois == 7 && graus2 == 0) {
        document.getElementById('resultadoInputQuartas').value = `F`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Lá Dó`
    } else if (escalasBemois == 1 && graus2 == 6) {
        document.getElementById('resultadoInputQuartas').value = `Fb`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fáb Láb Dób`
    } else if (resultadoEscalasBemois == 7) {
        document.getElementById('resultadoInputQuartas').value = `Fm`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dó`
    } else if (escalasBemois == 2 && graus2 == 6) {
        document.getElementById('resultadoInputQuartas').value = `Cb`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dób Mib Solb`
    } else if (resultadoEscalasBemois == 8) {
        document.getElementById('resultadoInputQuartas').value = 'Cm'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Sol`
    } else if (escalasBemois == 1 && graus2 == 8) {
        document.getElementById('resultadoInputQuartas').value = 'Gb'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb`
    } else if (escalasBemois == 3 && graus2 == 6) {
        document.getElementById('resultadoInputQuartas').value = `Gb`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb`
    } else if (resultadoEscalasBemois == 9) {
        document.getElementById('resultadoInputQuartas').value = 'Gm'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Ré`
    } else if ((escalasBemois == 2 && graus2 == 8) || (escalasBemois == 4 && graus2 == 6)) {
        document.getElementById('resultadoInputQuartas').value = `Db`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb`
    } else if (resultadoEscalasBemois == 10) {
        document.getElementById('resultadoInputQuartas').value = 'Dm'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Lá`
    } else if (escalasBemois == 7 && graus2 == 4) {
        document.getElementById('resultadoInputQuartas').value = 'Am'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Lá Dó Mi`
    } else if (escalasBemois == 1 && graus2 == 10) {
        document.getElementById('resultadoInputQuartas').value = 'Abm'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dób Mib`
    } else if (resultadoEscalasBemois == 11) {
        document.getElementById('resultadoInputQuartas').value = 'Ab'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó  Mib`
    } else if ((escalasBemois == 6 && graus2 == 6) || (escalasBemois == 4 && graus2 == 8)) {
        document.getElementById('resultadoInputQuartas').value = `Eb`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib`
    } else if (resultadoEscalasBemois == 12) {
        document.getElementById('resultadoInputQuartas').value = 'Ebm'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Solb Sib`
    } else if (escalasBemois == 3 && graus2 == 10) {
        document.getElementById('resultadoInputQuartas').value = `Bbm`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fá`
    } else if (escalasBemois == 1 && graus2 == 12) {
        document.getElementById('resultadresultadoInputQuartasoInput2').value = 'Bbdim'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fáb`
    } else if (resultadoEscalasBemois == 13) {
        document.getElementById('resultadoInputQuartas').value = 'Bb'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá`
    } else if (escalasBemois == 4 && graus2 == 10) {
        document.getElementById('resultadoInputQuartas').value = `Fm`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dó`
    } else if (escalasBemois == 2 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = `Fdim`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dób`
    } else if (resultadoEscalasBemois == 14) {
        document.getElementById('resultadoInputQuartas').value = 'F'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Lá Dó`
    } else if (escalasBemois == 3 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = `Cdim`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Solb`
    } else if (escalasBemois == 7 && graus2 == 8) {
        document.getElementById('resultadoInputQuartas').value = 'C'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mi Sol`
    } else if (resultadoEscalasBemois == 15) {
        document.getElementById('resultadoInputQuartas').value = 'Cm'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Sol`
    } else if (escalasBemois == 4 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = `Gdim`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Réb`
    } else if (resultadoEscalasBemois == 16) {
        document.getElementById('resultadoInputQuartas').value = 'Gm'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Ré`
    } else if (escalasBemois == 5 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = 'Ddim'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Láb `
    } else if (resultadoEscalasBemois == 17) {
        document.getElementById('resultadoInputQuartas').value = 'Dm'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Lá`
    } else if (resultadoEscalasBemois == 18) {
        document.getElementById('resultadoInputQuartas').value = 'Adim'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Lá Dó Mib`
    } else if (resultadoEscalasBemois == 19) {
        document.getElementById('resultadoInputQuartas').value = 'Edim'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mi Sol Sib`
    }
}

// Função para o campo harmônico - ciclo das quintas (#)
function calcularCicloQuintas() {
    //pega o valor das opções escolhidas pelo usuário nos dois selects desse seção
    let escalasSustenidos = parseInt(document.getElementById('cicloSustenidos').value);
    let graus = parseInt(document.getElementById('grauCicloSustenidos').value);

    // faz a soma dos values dessas opções
    let resultadoCHSustenidosTetrades = escalasSustenidos + graus;

    /*de acordo com a soma anterior, apresenta ao usuário o valor correspondende descrito abaixo.
     logo depois, mostra a botão "Ver acorde" que quando clicado,mostra a formação daquele acorde ao usuário*/
    if (resultadoCHSustenidosTetrades == 1) {
        document.getElementById('resultadoInputQuintas').value = `G`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol Si Ré`
    } else if (resultadoCHSustenidosTetrades == 2) {
        document.getElementById('resultadoInputQuintas').value = `D`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá`
    } else if (escalasSustenidos == 1 && graus == 2) {
        document.getElementById('resultadoInputQuintas').value = `Am`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó Mi`
    } else if (resultadoCHSustenidosTetrades == 3) {
        document.getElementById('resultadoInputQuintas').value = `A`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó# Mi`
    } else if (escalasSustenidos == 2 && graus == 2) {
        document.getElementById('resultadoInputQuintas').value = `Em`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol Si`
    } else if (resultadoCHSustenidosTetrades == 4) {
        document.getElementById('resultadoInputQuintas').value = `E`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si`
    } else if (escalasSustenidos == 5 && graus == 0) {
        document.getElementById('resultadoInputQuintas').value = `B`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá#`
    } else if (escalasSustenidos == 6 && graus == 0) {
        document.getElementById('resultadoInputQuintas').value = `F#`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó#`
    } else if (resultadoCHSustenidosTetrades == 5) {
        document.getElementById('resultadoInputQuintas').value = `Bm`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré Fá#`
    } else if (resultadoCHSustenidosTetrades == 6) {
        document.getElementById('resultadoInputQuintas').value = `F#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó#`
    } else if (escalasSustenidos == 1 && graus == 6) {
        document.getElementById('resultadoInputQuintas').value = `C`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó Mi Sol`
    } else if (escalasSustenidos == 7 && graus == 0) {
        document.getElementById('resultadoInputQuintas').value = `C#`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol#`
    } else if (resultadoCHSustenidosTetrades == 7) {
        document.getElementById('resultadoInputQuintas').value = `C#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol#`
    } else if (escalasSustenidos == 2 && graus == 6) {
        document.getElementById('resultadoInputQuintas').value = `G`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol Si Ré`
    } else if (resultadoCHSustenidosTetrades == 8) {
        document.getElementById('resultadoInputQuintas').value = `G#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré#`
    } else if ((escalasSustenidos == 3 && graus == 6) || (escalasSustenidos == 1 && graus == 8)) {
        document.getElementById('resultadoInputQuintas').value = `D`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá`
    } else if (resultadoCHSustenidosTetrades == 9) {
        document.getElementById('resultadoInputQuintas').value = `D#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá#`
    } else if ((escalasSustenidos == 2 && graus == 8) || (escalasSustenidos == 4 && graus == 6)) {
        document.getElementById('resultadoInputQuintas').value = `A`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Do# Mi`
    } else if (resultadoCHSustenidosTetrades == 10) {
        document.getElementById('resultadoInputQuintas').value = `A#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi#`
    } else if (escalasSustenidos == 7 && graus == 4) {
        document.getElementById('resultadoInputQuintas').value = `E#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi# Sol# Si#`
    } else if (escalasSustenidos == 1 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `Em`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol Si`
    } else if (resultadoCHSustenidosTetrades == 11) {
        document.getElementById('resultadoInputQuintas').value = `E`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si`
    } else if (escalasSustenidos == 2 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `Bm`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré Fá#`
    } else if (resultadoCHSustenidosTetrades == 12) {
        document.getElementById('resultadoInputQuintas').value = `B`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá#`
    } else if (escalasSustenidos == 1 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `F#dim`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó`
    } else if (escalasSustenidos == 3 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `F#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó#`
    } else if (resultadoCHSustenidosTetrades == 13) {
        document.getElementById('resultadoInputQuintas').value = `F#`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó#`
    } else if (escalasSustenidos == 2 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `C#dim`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol`
    } else if (escalasSustenidos == 4 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `C#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol#`
    } else if (resultadoCHSustenidosTetrades == 14) {
        document.getElementById('resultadoInputQuintas').value = `C#`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol#`
    } else if (escalasSustenidos == 3 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `G#dim`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré`
    } else if (escalasSustenidos == 5 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `G#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré#`
    } else if (resultadoCHSustenidosTetrades == 15) {
        document.getElementById('resultadoInputQuintas').value = `G#`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si# Ré#`
    } else if (escalasSustenidos == 4 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `D#dim`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá `
    } else if (escalasSustenidos == 6 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `D#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá#`
    } else if (escalasSustenidos == 5 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `A#dim`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi`
    } else if (resultadoCHSustenidosTetrades == 17) {
        document.getElementById('resultadoInputQuintas').value = `A#m`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi#`
    } else if (escalasSustenidos == 6 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `E#dim`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi# Sol# Si`
    } else if (resultadoCHSustenidosTetrades == 19) {
        document.getElementById('resultadoInputQuintas').value = `B#dim`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si# Ré# Fá# `
    }
}

//limpa as opções e a resposta referente ao ciclo das quartas
function limparInputsQuartas() {
    document.getElementById('cicloBemois').value = 'escolha'
    document.getElementById('grauCicloBemois').value = 'escolha'
    document.getElementById('btnFormAcordesQuartas').style.display = "none";
    document.getElementById('resultadoInputQuartas').value = ''
    document.getElementById('acordeCicloQuartasInput').value = ''
    document.getElementById('acordeCicloQuartasInput').style.display = "none";
}

//limpa as opções e a resposta referente ao ciclo das quintas
function limparInputsQuintas() {
    document.getElementById('cicloSustenidos').value = 'escolha'
    document.getElementById('grauCicloSustenidos').value = 'escolha'
    document.getElementById('btnFormAcordesQuintas').style.display = "none";
    document.getElementById('resultadoInputQuintas').value = ''
    document.getElementById('acordeCicloQuintasInput').value = ''
    document.getElementById('acordeCicloQuintasInput').style.display = "none";
}