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
document.getElementById('btnFormAcordesQuartas').style.display = "none";
document.getElementById('btnFormAcordesQuintas').style.display = "none";

// Função para mostrar o imput com  a formação dos acordes
function showInputQuintas() {
    document.getElementById('acordeCicloQuintasInput').style.display = "block";
}


// Função para mostrar o imput com  a formação dos acordes
function showInputQuartas() {
    document.getElementById('acordeCicloQuartasInput').style.display = "block";
}

// Função para o campo harmônico - ciclo das quartas (b)
function calcularCHBemoisTetrades() {
    //pega o valor das opções escolhidas pelo usuário nos dois selects desse seção
    let campoHarmonicoBemois = parseInt(document.getElementById('cicloBemois').value);
    let graus2 = parseInt(document.getElementById('grauCicloBemois').value);

    // faz a soma dos values dessas opções
    let resultadoCHBemoisTetrades = campoHarmonicoBemois + graus2;

    /*de acordo com a soma anterior, apresenta ao usuário o valor correspondende descrito abaixo.
    logo depois, mostra a botão "Ver acorde" que quando clicado,mostra a formação daquele acorde ao usuário*/
    if (resultadoCHBemoisTetrades == 1) {
        document.getElementById('resultadoInput2').value = `Cb7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dób Mib Solb Sib`
    } else if (campoHarmonicoBemois == 1 && graus2 == 2) {
        document.getElementById('resultadoInputQuartas').value = `Dbm7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fáb Láb Dób `
    } else if (campoHarmonicoBemois == 7 && graus2 == 4) {
        document.getElementById('resultadoInputQuartas').value = 'Am7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Lá Dó Mi Sol`
    } else if (campoHarmonicoBemois == 7 && graus2 == 6) {
        document.getElementById('resultadoInputQuartas').value = 'Bb7M'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá Lá`
    } else if (campoHarmonicoBemois == 7 && graus2 == 8) {
        document.getElementById('resultadoInputQuartas').value = 'C7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mi Sol Sib`
    } else if (campoHarmonicoBemois == 7 && graus2 == 10) {
        document.getElementById('resultadoInputQuartas').value = 'Dm7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Lá Dó`
    } else if (campoHarmonicoBemois == 7 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = 'Em7(b5)'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mi Sol Sib Ré`
    } else if (campoHarmonicoBemois == 6 && graus2 == 4) {
        document.getElementById('resultadoInputQuartas').value = `Dm7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Lá Dó`
    } else if (campoHarmonicoBemois == 2 && graus2 == 0) {
        document.getElementById('resultadoInputQuartas').value = `Gb7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb Fá`
    } else if (campoHarmonicoBemois == 3 && graus2 == 0) {
        document.getElementById('resultadoInputQuartas').value = `Db7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb Dó`
    } else if (campoHarmonicoBemois == 2 && graus2 == 2) {
        document.getElementById('resultadoInputQuartas').value = `Abm7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dób Mib Solb`
    } else if (campoHarmonicoBemois == 4 && graus2 == 0) {
        document.getElementById('resultadoInputQuartas').value = `Ab7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó Mib Sol`
    } else if (campoHarmonicoBemois == 5 && graus2 == 0) {
        document.getElementById('resultadoInputQuartas').value = `Eb7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib Ré`
    } else if (resultadoCHBemoisTetrades == 5) {
        document.getElementById('resultadoInputQuartas').value = `Ebm7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Solb Sib Réb`
    } else if (campoHarmonicoBemois == 6 && graus2 == 0) {
        document.getElementById('resultadoInputQuartas').value = `Bb7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá Lá`
    } else if (resultadoCHBemoisTetrades == 6) {
        document.getElementById('resultadoInputQuartas').value = `Bbm7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fá Láb`
    } else if (campoHarmonicoBemois == 7 && graus2 == 0) {
        document.getElementById('resultadoInputQuartas').value = `F7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Lá Dó Mi`
    } else if (campoHarmonicoBemois == 1 && graus2 == 6) {
        document.getElementById('resultadoInputQuartas').value = `Fb7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fáb Láb Dób Mib`
    } else if (resultadoCHBemoisTetrades == 7) {
        document.getElementById('resultadoInputQuartas').value = `Fm7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dó Mib`
    } else if (campoHarmonicoBemois == 2 && graus2 == 6) {
        document.getElementById('resultadoInputQuartas').value = `Cb7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dób Mib Solb Sib`
    } else if (resultadoCHBemoisTetrades == 8) {
        document.getElementById('resultadoInputQuartas').value = 'Cm7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Sol Sib`
    } else if (campoHarmonicoBemois == 1 && graus2 == 8) {
        document.getElementById('resultadoInputQuartas').value = 'Gb7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb Fáb`
    } else if (campoHarmonicoBemois == 3 && graus2 == 6) {
        document.getElementById('resultadoInputQuartas').value = `Gb7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb Fá`
    } else if (resultadoCHBemoisTetrades == 9) {
        document.getElementById('resultadoInputQuartas').value = 'Gm7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Ré Fá`
    } else if (campoHarmonicoBemois == 2 && graus2 == 8) {
        document.getElementById('resultadoInputQuartas').value = `Db7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb Dób`
    } else if (campoHarmonicoBemois == 4 && graus2 == 6) {
        document.getElementById('resultadoInputQuartas').value = `Db7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb Dó`
    } else if (campoHarmonicoBemois == 1 && graus2 == 10) {
        document.getElementById('resultadoInputQuartas').value = 'Abm7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dób Mib Solb`
    } else if (campoHarmonicoBemois == 3 && graus2 == 8) {
        document.getElementById('resultadoInputQuartas').value = `Ab7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó Mib Solb`
    } else if (resultadoCHBemoisTetrades == 11) {
        document.getElementById('resultadoInputQuartas').value = 'Ab7M'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó Mib Sol`
    } else if (campoHarmonicoBemois == 6 && graus2 == 6) {
        document.getElementById('resultadoInputQuartas').value = `Eb7M`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib Ré`
    } else if (campoHarmonicoBemois == 4 && graus2 == 8) {
        document.getElementById('resultadoInputQuartas').value = `Eb7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib Réb`
    } else if (resultadoCHBemoisTetrades == 12) {
        document.getElementById('resultadoInputQuartas').value = 'Ebm7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Solb Sib Réb`
    } else if (campoHarmonicoBemois == 3 && graus2 == 10) {
        document.getElementById('resultadoInputQuartas').value = `Bbm7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fá Láb`
    } else if (campoHarmonicoBemois == 1 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = 'Bbm7(b5)'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fáb Láb`
    } else if (resultadoCHBemoisTetrades == 13) {
        document.getElementById('resultadoInputQuartas').value = 'Bb7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá Láb`
    } else if (campoHarmonicoBemois == 4 && graus2 == 10) {
        document.getElementById('resultadoInputQuartas').value = `Fm7`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dó Mib`
    } else if (campoHarmonicoBemois == 2 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = `Fm7(b5)`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dób Mib`
    } else if (resultadoCHBemoisTetrades == 14) {
        document.getElementById('resultadoInputQuartas').value = 'F7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Lá Dó Mib`
    } else if (campoHarmonicoBemois == 3 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = `Cm7(b5)`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Solb Sib`
    } else if (resultadoCHBemoisTetrades == 15) {
        document.getElementById('resultadoInputQuartas').value = 'Cm7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Sol Sib`
    } else if (campoHarmonicoBemois == 4 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = `Gm7(b5)`
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Réb Fá`
    } else if (resultadoCHBemoisTetrades == 16) {
        document.getElementById('resultadoInputQuartas').value = 'Gm7'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Ré Fá`
    } else if (campoHarmonicoBemois == 5 && graus2 == 12) {
        document.getElementById('resultadoInputQuartas').value = 'Dm7(b5)'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Láb Dó`
    } else if (resultadoCHBemoisTetrades == 18) {
        document.getElementById('resultadoInputQuartas').value = 'Am7(b5)'
        document.getElementById('btnFormAcordesQuartas').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Lá Dó Mib Sol`
    }
}

// Função para o campo harmônico - ciclo das quintas (#)
function calcularCHSustenidosTetrades() {
    //pega o valor das opções escolhidas pelo usuário nos dois selects desse seção
    let campoHarmonicoSustenidos = parseInt(document.getElementById('cicloSustenidos').value);
    let graus = parseInt(document.getElementById('grauCicloSustenidos').value);

    // faz a soma dos values dessas opções
    let resultadoCHSustenidosTetrades = campoHarmonicoSustenidos + graus;

    /*de acordo com a soma anterior, apresenta ao usuário o valor correspondende descrito abaixo.
    logo depois, mostra a botão "Ver acorde" que quando clicado,mostra a formação daquele acorde ao usuário*/
    if (resultadoCHSustenidosTetrades == 1) {
        document.getElementById('resultadoInputQuintas').value = `G7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol Si Ré Fá#`
    } else if (campoHarmonicoSustenidos == 3 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = 'G#m7(b5)'
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré Fá#`
    } else if (resultadoCHSustenidosTetrades == 2) {
        document.getElementById('resultadoInputQuintas').value = `D7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá Dó#`
    } else if (campoHarmonicoSustenidos == 1 && graus == 2) {
        document.getElementById('resultadoInputQuintas').value = `Am7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó Mi Sol`
    } else if (resultadoCHSustenidosTetrades == 3) {
        document.getElementById('resultadoInputQuintas').value = `A7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó# Mi Sol# `
    } else if (campoHarmonicoSustenidos == 2 && graus == 2) {
        document.getElementById('resultadoInputQuintas').value = `Em7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol Si Ré`
    } else if (resultadoCHSustenidosTetrades == 4) {
        document.getElementById('resultadoInputQuintas').value = `E7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si Ré#`
    } else if (campoHarmonicoSustenidos == 5 && graus == 0) {
        document.getElementById('resultadoInputQuintas').value = `B7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá# Lá#`
    } else if (campoHarmonicoSustenidos == 6 && graus == 0) {
        document.getElementById('resultadoInputQuintas').value = `F#7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó# Mi#`
    } else if (resultadoCHSustenidosTetrades == 5) {
        document.getElementById('resultadoInputQuintas').value = `Bm7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré Fá# Lá`
    } else if (resultadoCHSustenidosTetrades == 6) {
        document.getElementById('resultadoInputQuintas').value = `F#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó# Mi`
    } else if (campoHarmonicoSustenidos == 1 && graus == 6) {
        document.getElementById('resultadoInputQuintas').value = `C7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó Mi Sol Si`
    } else if (campoHarmonicoSustenidos == 7 && graus == 0) {
        document.getElementById('resultadoInputQuintas').value = `C#7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol# Si#`
    } else if (resultadoCHSustenidosTetrades == 7) {
        document.getElementById('resultadoInputQuintas').value = `C#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol# Si`
    } else if (campoHarmonicoSustenidos == 2 && graus == 6) {
        document.getElementById('resultadoInputQuintas').value = `G7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol Si Ré Fá#`
    } else if (resultadoCHSustenidosTetrades == 8) {
        document.getElementById('resultadoInputQuintas').value = `G#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré# Fá#`
    } else if (campoHarmonicoSustenidos == 3 && graus == 6) {
        document.getElementById('resultadoInputQuintas').value = `D7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá Dó#`
    } else if (campoHarmonicoSustenidos == 1 && graus == 8) {
        document.getElementById('resultadoInputQuintas').value = `D7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá Dó`
    } else if (resultadoCHSustenidosTetrades == 9) {
        document.getElementById('resultadoInputQuintas').value = `D#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá# Dó#`
    } else if (campoHarmonicoSustenidos == 2 && graus == 8) {
        document.getElementById('resultadoInputQuintas').value = `A7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó# Mi Sol`
    } else if (campoHarmonicoSustenidos == 4 && graus == 6) {
        document.getElementById('resultadoInputQuintas').value = `A7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó# Mi Sol#`
    } else if (resultadoCHSustenidosTetrades == 10) {
        document.getElementById('resultadoInputQuintas').value = `A#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi# Sol#`
    } else if (campoHarmonicoSustenidos == 7 && graus == 4) {
        document.getElementById('resultadoInputQuintas').value = `E#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi# Sol# Si# Ré#`
    } else if (campoHarmonicoSustenidos == 1 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `Em7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol Si Ré`
    } else if (campoHarmonicoSustenidos == 3 && graus == 8) {
        document.getElementById('resultadoInputQuintas').value = `E7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si Ré`
    } else if (resultadoCHSustenidosTetrades == 11) {
        document.getElementById('resultadoInputQuintas').value = `E7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si Ré#`
    } else if (campoHarmonicoSustenidos == 2 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `Bm7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré Fá# Lá`
    } else if (campoHarmonicoSustenidos == 4 && graus == 8) {
        document.getElementById('resultadoInputQuintas').value = `B7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá# Lá`
    } else if (campoHarmonicoSustenidos == 6 && graus == 6) {
        document.getElementById('resultadoInputQuintas').value = `B7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá# Lá#`
    } else if (campoHarmonicoSustenidos == 12) {
        document.getElementById('resultadoInputQuintas').value = `B7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá# Lá#`
    } else if (campoHarmonicoSustenidos == 1 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `F#m7(b5)`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó Mi`
    } else if (campoHarmonicoSustenidos == 3 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `F#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó# Mi`
    } else if (campoHarmonicoSustenidos == 5 && graus == 8) {
        document.getElementById('resultadoInputQuintas').value = `F#7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó# Mi`
    } else if (resultadoCHSustenidosTetrades == 13) {
        document.getElementById('resultadoInputQuintas').value = `F#7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó# Mi#`
    } else if (campoHarmonicoSustenidos == 2 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `C#m7(b5)`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol Si`
    } else if (campoHarmonicoSustenidos == 4 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `C#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol# Si`
    } else if (campoHarmonicoSustenidos == 6 && graus == 8) {
        document.getElementById('resultadoInputQuintas').value = `C#7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol# Si`
    } else if (resultadoCHSustenidosTetrades == 14) {
        document.getElementById('resultadoInputQuintas').value = `C#7M`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol# Si#`
    } else if (campoHarmonicoSustenidos == 5 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `G#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré# Fá#`
    } else if (resultadoCHSustenidosTetrades == 15) {
        document.getElementById('resultadoInputQuintas').value = `G#7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si# Ré# Fá#`
    } else if (campoHarmonicoSustenidos == 4 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `D#m7(b5)`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá Dó#`
    } else if (campoHarmonicoSustenidos == 6 && graus == 10) {
        document.getElementById('resultadoInputQuintas').value = `D#m7`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá# Dó#`
    } else if (campoHarmonicoSustenidos == 5 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `A#m7(b5)`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi Sol#`
    } else if (resultadoCHSustenidosTetrades == 17) {
        document.getElementById('resultadoInputQuintas').value = `A#m7 `
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi# Sol# `
    } else if (campoHarmonicoSustenidos == 6 && graus == 12) {
        document.getElementById('resultadoInputQuintas').value = `E#m7(b5)`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi# Sol# Si Ré#`
    } else if (resultadoCHSustenidosTetrades == 19) {
        document.getElementById('resultadoInputQuintas').value = `B#m7(b5)`
        document.getElementById('btnFormAcordesQuintas').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si# Ré# Fá# Lá#`
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