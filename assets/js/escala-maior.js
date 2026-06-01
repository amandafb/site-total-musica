import { TeoriaMusical } from "./teoria-musical.js";
import { TeoriaExercicio } from "./teoria-exercicio.js";

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var TM = TeoriaMusical;
  var EX = TeoriaExercicio;

  var quartasEscala = document.getElementById("quartas-escala");
  var quintasEscala = document.getElementById("quintas-escala");

  TM.CICLO_QUARTAS.forEach(function (t) {
    var opt = document.createElement("option");
    opt.value = t.tonica;
    opt.textContent = t.tonica + " Maior (" + t.cifra + ")";
    quartasEscala.appendChild(opt);
  });

  TM.CICLO_QUINTAS.forEach(function (t) {
    var opt = document.createElement("option");
    opt.value = t.tonica;
    opt.textContent = t.tonica + " Maior (" + t.cifra + ")";
    quintasEscala.appendChild(opt);
  });

  function renderEscala(tonica, grauAtivo) {
    var escala = TM.escalaMaior(tonica);
    if (!escala) return "";
    var cifra = TM.notaParaCifra(tonica);
    var html = '<div class="teoria-escala-display">';
    html +=
      '<p class="teoria-escala-display__title">Escala de ' +
      tonica +
      " Maior (" +
      cifra +
      ")</p>";
    html += '<div class="teoria-escala-grid">';
    for (var i = 0; i < escala.length; i++) {
      var isActive = i === grauAtivo ? " teoria-escala-item--active" : "";
      html += '<div class="teoria-escala-item' + isActive + '">';
      html +=
        '<div class="teoria-escala-item__grau">' +
        TM.GRAUS_ROMANOS[i] +
        "</div>";
      html += '<div class="teoria-escala-item__nota">' + escala[i] + "</div>";
      html += "</div>";
    }
    html += "</div></div>";
    return html;
  }

  function renderEmpty(container) {
    container.innerHTML =
      '<div class="teoria-tool-card__result-empty">Selecione a escala</div>';
  }

  function calcular(lado) {
    var tonica = document.getElementById(lado + "-escala").value;
    var grauStr = document.getElementById(lado + "-grau").value;
    var container = document.getElementById(lado + "-resultado");
    var mode = EX.getMode(lado);

    if (!tonica) {
      renderEmpty(container);
      return;
    }

    if (mode === "consulta") {
      container.innerHTML = renderEscala(tonica, -1);
      return;
    }

    // Exercício
    if (grauStr === "") {
      container.innerHTML =
        '<div class="teoria-tool-card__result-empty">Selecione o grau</div>';
      return;
    }

    var grau = parseInt(grauStr, 10);
    var escala = TM.escalaMaior(tonica);
    if (!escala) return;

    EX.renderExercicio({
      container: container,
      destaque: TM.GRAUS_ROMANOS[grau] + " grau",
      pergunta: "de " + tonica + " Maior",
      placeholder: "Ex: F\u00e1#",
      lado: lado,
      correto: escala[grau],
      grauRomano: TM.GRAUS_ROMANOS[grau],
    });
  }

  function limpar(lado) {
    document.getElementById(lado + "-escala").value = "";
    document.getElementById(lado + "-grau").value = "";
    renderEmpty(document.getElementById(lado + "-resultado"));
  }

  function onModeChange(lado) {
    var mode = EX.getMode(lado);
    EX.updateGrauVisibility(lado, mode);
    calcular(lado);
  }

  EX.initToggle("quartas", onModeChange);
  EX.initToggle("quintas", onModeChange);

  // Inicializa grau hidden
  EX.updateGrauVisibility("quartas", "consulta");
  EX.updateGrauVisibility("quintas", "consulta");

  ["quartas", "quintas"].forEach(function (lado) {
    document
      .getElementById(lado + "-escala")
      .addEventListener("change", function () {
        calcular(lado);
      });
    document
      .getElementById(lado + "-grau")
      .addEventListener("change", function () {
        calcular(lado);
      });
    document
      .getElementById(lado + "-limpar")
      .addEventListener("click", function () {
        limpar(lado);
      });
  });
});
