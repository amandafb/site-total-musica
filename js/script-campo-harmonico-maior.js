// Impedir que os botões façam o reload da página
document.getElementById("btnBemois").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("btnSustenidos").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("btnFormAcordes").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("btnFormAcordes2").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("novo").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("novo2").addEventListener("click", function (event) {
    event.preventDefault()
});

// oculta os botões "Ver Acorde"
document.getElementById('btnFormAcordes').style.display = "none";
document.getElementById('btnFormAcordes2').style.display = "none";

// Função para mostrar o imput com  a formação dos acordes
function showInputQuintas() {
    document.getElementById('acordeCicloQuintasInput').style.display = "block";
}

function showInputQuartas() {
    document.getElementById('acordeCicloQuartasInput').style.display = "block";
}

// Função para o campo harmônico - ciclo das quartas (b)
function calcularCicloQuartas() {
    let escalasBemois = parseInt(document.getElementById('lista3').value);
    let graus2 = parseInt(document.getElementById('lista4').value);
    let resultadoEscalasBemois = escalasBemois + graus2;

    if (resultadoEscalasBemois == 1) {
        document.getElementById('resultadoInput2').value = `Cb`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dób Mib Solb`
    } else if (resultadoEscalasBemois == 2) {
        document.getElementById('resultadoInput2').value = `Gb`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb`
    } else if (escalasBemois == 1 && graus2 == 2) {
        document.getElementById('resultadoInput2').value = `Dbm`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fáb Láb`
    } else if (resultadoEscalasBemois == 3) {
        document.getElementById('resultadoInput2').value = `Db`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb`
    } else if (escalasBemois == 2 && graus2 == 2) {
        document.getElementById('resultadoInput2').value = `Abm`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dób Mib`
    } else if (resultadoEscalasBemois == 4) {
        document.getElementById('resultadoInput2').value = `Ab`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó Mib`
    } else if (escalasBemois == 5 && graus2 == 0) {
        document.getElementById('resultadoInput2').value = `Eb`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib`
    } else if (resultadoEscalasBemois == 5) {
        document.getElementById('resultadoInput2').value = `Ebm`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Solb Sib`
    } else if (escalasBemois == 6 && graus2 == 0) {
        document.getElementById('resultadoInput2').value = `Bb`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá`
    } else if (resultadoEscalasBemois == 6) {
        document.getElementById('resultadoInput2').value = `Bbm`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fá`
    } else if (escalasBemois == 7 && graus2 == 0) {
        document.getElementById('resultadoInput2').value = `F`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Lá Dó`
    } else if (escalasBemois == 1 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = `Fb`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fáb Láb Dób`
    } else if (resultadoEscalasBemois == 7) {
        document.getElementById('resultadoInput2').value = `Fm`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dó`
    } else if (escalasBemois == 2 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = `Cb`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dób Mib Solb`
    } else if (resultadoEscalasBemois == 8) {
        document.getElementById('resultadoInput2').value = 'Cm'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Sol`
    } else if (escalasBemois == 1 && graus2 == 8) {
        document.getElementById('resultadoInput2').value = 'Gb'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb`
    } else if (escalasBemois == 3 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = `Gb`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb`
    } else if (resultadoEscalasBemois == 9) {
        document.getElementById('resultadoInput2').value = 'Gm'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Ré`
    } else if ((escalasBemois == 2 && graus2 == 8) || (escalasBemois == 4 && graus2 == 6)) {
        document.getElementById('resultadoInput2').value = `Db`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb`
    } else if (resultadoEscalasBemois == 10) {
        document.getElementById('resultadoInput2').value = 'Dm'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Lá`
    } else if (escalasBemois == 7 && graus2 == 4) {
        document.getElementById('resultadoInput2').value = 'Am'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Lá Dó Mi`
    } else if (escalasBemois == 1 && graus2 == 10) {
        document.getElementById('resultadoInput2').value = 'Abm'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dób Mib`
    } else if (resultadoEscalasBemois == 11) {
        document.getElementById('resultadoInput2').value = 'Ab'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó  Mib`
    } else if ((escalasBemois == 6 && graus2 == 6) || (escalasBemois == 4 && graus2 == 8)) {
        document.getElementById('resultadoInput2').value = `Eb`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib`
    } else if (resultadoEscalasBemois == 12) {
        document.getElementById('resultadoInput2').value = 'Ebm'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Solb Sib`
    } else if (escalasBemois == 3 && graus2 == 10) {
        document.getElementById('resultadoInput2').value = `Bbm`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fá`
    } else if (escalasBemois == 1 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = 'Bbdim'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fáb`
    } else if (resultadoEscalasBemois == 13) {
        document.getElementById('resultadoInput2').value = 'Bb'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá`
    } else if (escalasBemois == 4 && graus2 == 10) {
        document.getElementById('resultadoInput2').value = `Fm`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dó`
    } else if (escalasBemois == 2 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = `Fdim`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dób`
    } else if (resultadoEscalasBemois == 14) {
        document.getElementById('resultadoInput2').value = 'F'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Lá Dó`
    } else if (escalasBemois == 3 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = `Cdim`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Solb`
    } else if (escalasBemois == 7 && graus2 == 8) {
        document.getElementById('resultadoInput2').value = 'C'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mi Sol`
    } else if (resultadoEscalasBemois == 15) {
        document.getElementById('resultadoInput2').value = 'Cm'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Sol`
    } else if (escalasBemois == 4 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = `Gdim`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Réb`
    } else if (resultadoEscalasBemois == 16) {
        document.getElementById('resultadoInput2').value = 'Gm'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Ré`
    } else if (escalasBemois == 5 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = 'Ddim'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Láb `
    } else if (resultadoEscalasBemois == 17) {
        document.getElementById('resultadoInput2').value = 'Dm'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Lá`
    } else if (resultadoEscalasBemois == 18) {
        document.getElementById('resultadoInput2').value = 'Adim'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Lá Dó Mib`
    } else if (resultadoEscalasBemois == 19) {
        document.getElementById('resultadoInput2').value = 'Edim'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mi Sol Sib`
    }

}

// Função para o campo harmônico - ciclo das quintas (#)
function calcularCicloQuintas() {
    let escalasSustenidos = parseInt(document.getElementById('lista1').value);
    let graus = parseInt(document.getElementById('lista2').value);
    let resultadoCHSustenidosTetrades = escalasSustenidos + graus;

    if (resultadoCHSustenidosTetrades == 1) {
        document.getElementById('resultadoInput').value = `G`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol Si Ré`
    } else if (resultadoCHSustenidosTetrades == 2) {
        document.getElementById('resultadoInput').value = `D`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá`
    } else if (escalasSustenidos == 1 && graus == 2) {
        document.getElementById('resultadoInput').value = `Am`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó Mi`
    } else if (resultadoCHSustenidosTetrades == 3) {
        document.getElementById('resultadoInput').value = `A`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó# Mi`
    } else if (escalasSustenidos == 2 && graus == 2) {
        document.getElementById('resultadoInput').value = `Em`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol Si`
    } else if (resultadoCHSustenidosTetrades == 4) {
        document.getElementById('resultadoInput').value = `E`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si`
    } else if (escalasSustenidos == 5 && graus == 0) {
        document.getElementById('resultadoInput').value = `B`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá#`
    } else if (escalasSustenidos == 6 && graus == 0) {
        document.getElementById('resultadoInput').value = `F#`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó#`
    } else if (resultadoCHSustenidosTetrades == 5) {
        document.getElementById('resultadoInput').value = `Bm`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré Fá#`
    } else if (resultadoCHSustenidosTetrades == 6) {
        document.getElementById('resultadoInput').value = `F#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó#`
    } else if (escalasSustenidos == 1 && graus == 6) {
        document.getElementById('resultadoInput').value = `C`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó Mi Sol`
    } else if (escalasSustenidos == 7 && graus == 0) {
        document.getElementById('resultadoInput').value = `C#`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol#`
    } else if (resultadoCHSustenidosTetrades == 7) {
        document.getElementById('resultadoInput').value = `C#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol#`
    } else if (escalasSustenidos == 2 && graus == 6) {
        document.getElementById('resultadoInput').value = `G`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol Si Ré`
    } else if (resultadoCHSustenidosTetrades == 8) {
        document.getElementById('resultadoInput').value = `G#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré#`
    } else if ((escalasSustenidos == 3 && graus == 6) || (escalasSustenidos == 1 && graus == 8)) {
        document.getElementById('resultadoInput').value = `D`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá`
    } else if (resultadoCHSustenidosTetrades == 9) {
        document.getElementById('resultadoInput').value = `D#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá#`
    } else if ((escalasSustenidos == 2 && graus == 8) || (escalasSustenidos == 4 && graus == 6)) {
        document.getElementById('resultadoInput').value = `A`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Do# Mi`
    } else if (resultadoCHSustenidosTetrades == 10) {
        document.getElementById('resultadoInput').value = `A#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi#`
    } else if (escalasSustenidos == 7 && graus == 4) {
        document.getElementById('resultadoInput').value = `E#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi# Sol# Si#`
    } else if (escalasSustenidos == 1 && graus == 10) {
        document.getElementById('resultadoInput').value = `Em`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol Si`
    } else if (resultadoCHSustenidosTetrades == 11) {
        document.getElementById('resultadoInput').value = `E`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si`
    } else if (escalasSustenidos == 2 && graus == 10) {
        document.getElementById('resultadoInput').value = `Bm`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré Fá#`
    } else if (resultadoCHSustenidosTetrades == 12) {
        document.getElementById('resultadoInput').value = `B`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá#`
    } else if (escalasSustenidos == 1 && graus == 12) {
        document.getElementById('resultadoInput').value = `F#dim`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó`
    } else if (escalasSustenidos == 3 && graus == 10) {
        document.getElementById('resultadoInput').value = `F#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó#`
    } else if (resultadoCHSustenidosTetrades == 13) {
        document.getElementById('resultadoInput').value = `F#`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó#`
    } else if (escalasSustenidos == 2 && graus == 12) {
        document.getElementById('resultadoInput').value = `C#dim`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol`
    } else if (escalasSustenidos == 4 && graus == 10) {
        document.getElementById('resultadoInput').value = `C#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol#`
    } else if (resultadoCHSustenidosTetrades == 14) {
        document.getElementById('resultadoInput').value = `C#`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol#`
    } else if (escalasSustenidos == 3 && graus == 12) {
        document.getElementById('resultadoInput').value = `G#dim`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré`
    } else if (escalasSustenidos == 5 && graus == 10) {
        document.getElementById('resultadoInput').value = `G#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré#`
    } else if (resultadoCHSustenidosTetrades == 15) {
        document.getElementById('resultadoInput').value = `G#`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si# Ré#`
    } else if (escalasSustenidos == 4 && graus == 12) {
        document.getElementById('resultadoInput').value = `D#dim`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá `
    } else if (escalasSustenidos == 6 && graus == 10) {
        document.getElementById('resultadoInput').value = `D#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá#`
    } else if (escalasSustenidos == 5 && graus == 12) {
        document.getElementById('resultadoInput').value = `A#dim`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi`
    } else if (resultadoCHSustenidosTetrades == 17) {
        document.getElementById('resultadoInput').value = `A#m`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi#`
    } else if (escalasSustenidos == 6 && graus == 12) {
        document.getElementById('resultadoInput').value = `E#dim`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi# Sol# Si`
    } else if (resultadoCHSustenidosTetrades == 19) {
        document.getElementById('resultadoInput').value = `B#dim`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si# Ré# Fá# `
    }
}

//função para limpar todos os inputs
function limparInputs() {
    document.getElementById('lista1').value = 'escolha'
    document.getElementById('lista2').value = 'escolha'
    document.getElementById('lista3').value = 'escolha'
    document.getElementById('lista4').value = 'escolha'
    document.getElementById('btnFormAcordes').style.display = "none";
    document.getElementById('btnFormAcordes2').style.display = "none";
    document.getElementById('resultadoInput').value = ''
    document.getElementById('resultadoInput2').value = ''
    document.getElementById('acordeCicloQuartasInput').value = ''
    document.getElementById('acordeCicloQuartasInput').style.display = "none";
    document.getElementById('acordeCicloQuintasInput').value = ''
    document.getElementById('acordeCicloQuintasInput').style.display = "none";
}