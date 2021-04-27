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
function calcularCHBemoisTetrades() {
    let campoHarmonicoBemois = parseInt(document.getElementById('lista3').value);
    let graus2 = parseInt(document.getElementById('lista4').value);
    let resultadoCHBemoisTetrades = campoHarmonicoBemois + graus2;

    if (resultadoCHBemoisTetrades == 1) {
        document.getElementById('resultadoInput2').value = `Cb7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dób Mib Solb Sib`
    } else if (campoHarmonicoBemois == 1 && graus2 == 2) {
        document.getElementById('resultadoInput2').value = `Dbm7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fáb Láb Dób `
    } else if (campoHarmonicoBemois == 7 && graus2 == 4) {
        document.getElementById('resultadoInput2').value = 'Am7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Lá Dó Mi Sol`
    } else if (campoHarmonicoBemois == 7 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = 'Bb7M'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá Lá`
    } else if (campoHarmonicoBemois == 7 && graus2 == 8) {
        document.getElementById('resultadoInput2').value = 'C7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mi Sol Sib`
    } else if (campoHarmonicoBemois == 7 && graus2 == 10) {
        document.getElementById('resultadoInput2').value = 'Dm7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Lá Dó`
    } else if (campoHarmonicoBemois == 7 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = 'Em7(b5)'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mi Sol Sib Ré`
    } else if (campoHarmonicoBemois == 6 && graus2 == 4) {
        document.getElementById('resultadoInput2').value = `Dm7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Lá Dó`
    } else if (campoHarmonicoBemois == 2 && graus2 == 0) {
        document.getElementById('resultadoInput2').value = `Gb7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb Fá`
    } else if (campoHarmonicoBemois == 3 && graus2 == 0) {
        document.getElementById('resultadoInput2').value = `Db7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb Dó`
    } else if (campoHarmonicoBemois == 2 && graus2 == 2) {
        document.getElementById('resultadoInput2').value = `Abm7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dób Mib Solb`
    } else if (campoHarmonicoBemois == 4 && graus2 == 0) {
        document.getElementById('resultadoInput2').value = `Ab7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó Mib Sol`
    } else if (campoHarmonicoBemois == 5 && graus2 == 0) {
        document.getElementById('resultadoInput2').value = `Eb7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib Ré`
    } else if (resultadoCHBemoisTetrades == 5) {
        document.getElementById('resultadoInput2').value = `Ebm7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Solb Sib Réb`
    } else if (campoHarmonicoBemois == 6 && graus2 == 0) {
        document.getElementById('resultadoInput2').value = `Bb7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá Lá`
    } else if (resultadoCHBemoisTetrades == 6) {
        document.getElementById('resultadoInput2').value = `Bbm7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fá Láb`
    } else if (campoHarmonicoBemois == 7 && graus2 == 0) {
        document.getElementById('resultadoInput2').value = `F7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Lá Dó Mi`
    } else if (campoHarmonicoBemois == 1 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = `Fb7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fáb Láb Dób Mib`
    } else if (resultadoCHBemoisTetrades == 7) {
        document.getElementById('resultadoInput2').value = `Fm7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dó Mib`
    } else if (campoHarmonicoBemois == 2 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = `Cb7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dób Mib Solb Sib`
    } else if (resultadoCHBemoisTetrades == 8) {
        document.getElementById('resultadoInput2').value = 'Cm7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Sol Sib`
    } else if (campoHarmonicoBemois == 1 && graus2 == 8) {
        document.getElementById('resultadoInput2').value = 'Gb7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb Fáb`
    } else if (campoHarmonicoBemois == 3 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = `Gb7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Solb Sib Réb Fá`
    } else if (resultadoCHBemoisTetrades == 9) {
        document.getElementById('resultadoInput2').value = 'Gm7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Ré Fá`
    } else if (campoHarmonicoBemois == 2 && graus2 == 8) {
        document.getElementById('resultadoInput2').value = `Db7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb Dób`
    } else if (campoHarmonicoBemois == 4 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = `Db7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Réb Fá Láb Dó`
    } else if (campoHarmonicoBemois == 1 && graus2 == 10) {
        document.getElementById('resultadoInput2').value = 'Abm7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dób Mib Solb`
    } else if (campoHarmonicoBemois == 3 && graus2 == 8) {
        document.getElementById('resultadoInput2').value = `Ab7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó Mib Solb`
    } else if (resultadoCHBemoisTetrades == 11) {
        document.getElementById('resultadoInput2').value = 'Ab7M'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Láb Dó Mib Sol`
    } else if (campoHarmonicoBemois == 6 && graus2 == 6) {
        document.getElementById('resultadoInput2').value = `Eb7M`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib Ré`
    } else if (campoHarmonicoBemois == 4 && graus2 == 8) {
        document.getElementById('resultadoInput2').value = `Eb7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Sol Sib Réb`
    } else if (resultadoCHBemoisTetrades == 12) {
        document.getElementById('resultadoInput2').value = 'Ebm7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Mib Solb Sib Réb`
    } else if (campoHarmonicoBemois == 3 && graus2 == 10) {
        document.getElementById('resultadoInput2').value = `Bbm7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fá Láb`
    } else if (campoHarmonicoBemois == 1 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = 'Bbm7(b5)'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Réb Fáb Láb`
    } else if (resultadoCHBemoisTetrades == 13) {
        document.getElementById('resultadoInput2').value = 'Bb7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sib Ré Fá Láb`
    } else if (campoHarmonicoBemois == 4 && graus2 == 10) {
        document.getElementById('resultadoInput2').value = `Fm7`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dó Mib`
    } else if (campoHarmonicoBemois == 2 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = `Fm7(b5)`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Láb Dób Mib`
    } else if (resultadoCHBemoisTetrades == 14) {
        document.getElementById('resultadoInput2').value = 'F7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Fá Lá Dó Mib`
    } else if (campoHarmonicoBemois == 3 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = `Cm7(b5)`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Solb Sib`
    } else if (resultadoCHBemoisTetrades == 15) {
        document.getElementById('resultadoInput2').value = 'Cm7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Dó Mib Sol Sib`
    } else if (campoHarmonicoBemois == 4 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = `Gm7(b5)`
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Réb Fá`
    } else if (resultadoCHBemoisTetrades == 16) {
        document.getElementById('resultadoInput2').value = 'Gm7'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Sol Sib Ré Fá`
    } else if (campoHarmonicoBemois == 5 && graus2 == 12) {
        document.getElementById('resultadoInput2').value = 'Dm7(b5)'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Ré Fá Láb Dó`
    } else if (resultadoCHBemoisTetrades == 18) {
        document.getElementById('resultadoInput2').value = 'Am7(b5)'
        document.getElementById('btnFormAcordes2').style.display = "block";
        document.getElementById('acordeCicloQuartasInput').value = `Lá Dó Mib Sol`
    }
}

// Função para o campo harmônico - ciclo das quintas (#)
function calcularCHSustenidosTetrades() {
    let campoHarmonicoSustenidos = parseInt(document.getElementById('lista1').value);
    let graus = parseInt(document.getElementById('lista2').value);
    let resultadoCHSustenidosTetrades = campoHarmonicoSustenidos + graus;

    if (resultadoCHSustenidosTetrades == 1) {
        document.getElementById('resultadoInput').value = `G7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol Si Ré Fá#`
    } else if (campoHarmonicoSustenidos == 3 && graus == 12) {
        document.getElementById('resultadoInput').value = 'G#m7(b5)'
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré Fá#`
    } else if (resultadoCHSustenidosTetrades == 2) {
        document.getElementById('resultadoInput').value = `D7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá Dó#`
    } else if (campoHarmonicoSustenidos == 1 && graus == 2) {
        document.getElementById('resultadoInput').value = `Am7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó Mi Sol`
    } else if (resultadoCHSustenidosTetrades == 3) {
        document.getElementById('resultadoInput').value = `A7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó# Mi Sol# `
    } else if (campoHarmonicoSustenidos == 2 && graus == 2) {
        document.getElementById('resultadoInput').value = `Em7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol Si Ré`
    } else if (resultadoCHSustenidosTetrades == 4) {
        document.getElementById('resultadoInput').value = `E7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si Ré#`
    } else if (campoHarmonicoSustenidos == 5 && graus == 0) {
        document.getElementById('resultadoInput').value = `B7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá# Lá#`
    } else if (campoHarmonicoSustenidos == 6 && graus == 0) {
        document.getElementById('resultadoInput').value = `F#7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó# Mi#`
    } else if (resultadoCHSustenidosTetrades == 5) {
        document.getElementById('resultadoInput').value = `Bm7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré Fá# Lá`
    } else if (resultadoCHSustenidosTetrades == 6) {
        document.getElementById('resultadoInput').value = `F#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó# Mi`
    } else if (campoHarmonicoSustenidos == 1 && graus == 6) {
        document.getElementById('resultadoInput').value = `C7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó Mi Sol Si`
    } else if (campoHarmonicoSustenidos == 7 && graus == 0) {
        document.getElementById('resultadoInput').value = `C#7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol# Si#`
    } else if (resultadoCHSustenidosTetrades == 7) {
        document.getElementById('resultadoInput').value = `C#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol# Si`
    } else if (campoHarmonicoSustenidos == 2 && graus == 6) {
        document.getElementById('resultadoInput').value = `G7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol Si Ré Fá#`
    } else if (resultadoCHSustenidosTetrades == 8) {
        document.getElementById('resultadoInput').value = `G#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré# Fá#`
    } else if (campoHarmonicoSustenidos == 3 && graus == 6) {
        document.getElementById('resultadoInput').value = `D7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá Dó#`
    } else if (campoHarmonicoSustenidos == 1 && graus == 8) {
        document.getElementById('resultadoInput').value = `D7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré Fá# Lá Dó`
    } else if (resultadoCHSustenidosTetrades == 9) {
        document.getElementById('resultadoInput').value = `D#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá# Dó#`
    } else if (campoHarmonicoSustenidos == 2 && graus == 8) {
        document.getElementById('resultadoInput').value = `A7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó# Mi Sol`
    } else if (campoHarmonicoSustenidos == 4 && graus == 6) {
        document.getElementById('resultadoInput').value = `A7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá Dó# Mi Sol#`
    } else if (resultadoCHSustenidosTetrades == 10) {
        document.getElementById('resultadoInput').value = `A#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi# Sol#`
    } else if (campoHarmonicoSustenidos == 7 && graus == 4) {
        document.getElementById('resultadoInput').value = `E#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi# Sol# Si# Ré#`
    } else if (campoHarmonicoSustenidos == 1 && graus == 10) {
        document.getElementById('resultadoInput').value = `Em7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol Si Ré`
    } else if (campoHarmonicoSustenidos == 3 && graus == 8) {
        document.getElementById('resultadoInput').value = `E7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si Ré`
    } else if (resultadoCHSustenidosTetrades == 11) {
        document.getElementById('resultadoInput').value = `E7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi Sol# Si Ré#`
    } else if (campoHarmonicoSustenidos == 2 && graus == 10) {
        document.getElementById('resultadoInput').value = `Bm7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré Fá# Lá`
    } else if (campoHarmonicoSustenidos == 4 && graus == 8) {
        document.getElementById('resultadoInput').value = `B7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá# Lá`
    } else if (campoHarmonicoSustenidos == 6 && graus == 6) {
        document.getElementById('resultadoInput').value = `B7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá# Lá#`
    } else if (campoHarmonicoSustenidos == 12) {
        document.getElementById('resultadoInput').value = `B7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si Ré# Fá# Lá#`
    } else if (campoHarmonicoSustenidos == 1 && graus == 12) {
        document.getElementById('resultadoInput').value = `F#m7(b5)`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó Mi`
    } else if (campoHarmonicoSustenidos == 3 && graus == 10) {
        document.getElementById('resultadoInput').value = `F#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá Dó# Mi`
    } else if (campoHarmonicoSustenidos == 5 && graus == 8) {
        document.getElementById('resultadoInput').value = `F#7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó# Mi`
    } else if (resultadoCHSustenidosTetrades == 13) {
        document.getElementById('resultadoInput').value = `F#7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Fá# Lá# Dó# Mi#`
    } else if (campoHarmonicoSustenidos == 2 && graus == 12) {
        document.getElementById('resultadoInput').value = `C#m7(b5)`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol Si`
    } else if (campoHarmonicoSustenidos == 4 && graus == 10) {
        document.getElementById('resultadoInput').value = `C#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi Sol# Si`
    } else if (campoHarmonicoSustenidos == 6 && graus == 8) {
        document.getElementById('resultadoInput').value = `C#7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol# Si`
    } else if (resultadoCHSustenidosTetrades == 14) {
        document.getElementById('resultadoInput').value = `C#7M`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Dó# Mi# Sol# Si#`
    } else if (campoHarmonicoSustenidos == 5 && graus == 10) {
        document.getElementById('resultadoInput').value = `G#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si Ré# Fá#`
    } else if (resultadoCHSustenidosTetrades == 15) {
        document.getElementById('resultadoInput').value = `G#7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Sol# Si# Ré# Fá#`
    } else if (campoHarmonicoSustenidos == 4 && graus == 12) {
        document.getElementById('resultadoInput').value = `D#m7(b5)`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá Dó#`
    } else if (campoHarmonicoSustenidos == 6 && graus == 10) {
        document.getElementById('resultadoInput').value = `D#m7`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Ré# Fá# Lá# Dó#`
    } else if (campoHarmonicoSustenidos == 5 && graus == 12) {
        document.getElementById('resultadoInput').value = `A#m7(b5)`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi Sol#`
    } else if (resultadoCHSustenidosTetrades == 17) {
        document.getElementById('resultadoInput').value = `A#m7 `
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Lá# Dó# Mi# Sol# `
    } else if (campoHarmonicoSustenidos == 6 && graus == 12) {
        document.getElementById('resultadoInput').value = `E#m7(b5)`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Mi# Sol# Si Ré#`
    } else if (resultadoCHSustenidosTetrades == 19) {
        document.getElementById('resultadoInput').value = `B#m7(b5)`
        document.getElementById('btnFormAcordes').style.display = "block";
        document.getElementById('acordeCicloQuintasInput').value = `Si# Ré# Fá# Lá#`
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