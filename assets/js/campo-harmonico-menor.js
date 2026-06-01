import { TeoriaMusical } from "./teoria-musical.js";
import { TeoriaExercicio } from "./teoria-exercicio.js";

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var TM = TeoriaMusical;
  var EX = TeoriaExercicio;

  var quartasCampo = document.getElementById("quartas-campo");
  var quintasCampo = document.getElementById("quintas-campo");

  TM.CICLO_QUARTAS_MENORES.forEach(function (t) {
    var opt = document.createElement("option");
    opt.value = t.tonica;
    opt.textContent = t.tonica + " menor (" + t.cifra + ")";
    quartasCampo.appendChild(opt);
  });

  TM.CICLO_QUINTAS_MENORES.forEach(function (t) {
    var opt = document.createElement("option");
    opt.value = t.tonica;
    opt.textContent = t.tonica + " menor (" + t.cifra + ")";
    quintasCampo.appendChild(opt);
  });

  function renderCampoHarmonico(tonica, grauAtivo) {
    var acordes = TM.campoHarmonicoMenor(tonica, "triades");
    if (!acordes) return "";
    var cifra = TM.notaParaCifra(tonica);
    var html = '<div class="teoria-escala-display">';
    html +=
      '<p class="teoria-escala-display__title">Campo Harm\u00f4nico de ' +
      tonica +
      " menor harm\u00f4nico (" +
      cifra +
      "m) \u2014 Tr\u00edades</p>";
    html += '<div class="teoria-escala-grid">';
    for (var i = 0; i < acordes.length; i++) {
      var a = acordes[i];
      var isActive = i === grauAtivo ? " teoria-escala-item--active" : "";
      html += '<div class="teoria-escala-item' + isActive + '">';
      html +=
        '<div class="teoria-escala-item__grau">' + a.grauRomano + "</div>";
      html += '<div class="teoria-escala-item__nota">' + a.cifra + "</div>";
      html +=
        '<div class="teoria-escala-item__formacao">' +
        a.formacao.join(" ") +
        "</div>";
      html += "</div>";
    }
    html += "</div></div>";
    return html;
  }

  function renderEmpty(container) {
    container.innerHTML =
      '<div class="teoria-tool-card__result-empty">Selecione o campo harm\u00f4nico</div>';
  }

  function calcular(lado) {
    var tonica = document.getElementById(lado + "-campo").value;
    var grauStr = document.getElementById(lado + "-grau").value;
    var container = document.getElementById(lado + "-resultado");
    var mode = EX.getMode(lado);

    if (!tonica) {
      renderEmpty(container);
      return;
    }

    if (mode === "consulta") {
      container.innerHTML = renderCampoHarmonico(tonica, -1);
      return;
    }

    if (grauStr === "") {
      container.innerHTML =
        '<div class="teoria-tool-card__result-empty">Selecione o grau</div>';
      return;
    }

    var grau = parseInt(grauStr, 10);
    var acorde = TM.acordeTriadeMenor(tonica, grau);
    if (!acorde) return;

    EX.renderExercicioCampo({
      container: container,
      destaque: TM.GRAUS_ROMANOS_MENOR[grau] + " grau",
      pergunta: "de " + tonica + " menor harm\u00f4nico",
      placeholderCifra: "Ex: Am",
      placeholderFormacao: "Ex: L\u00e1 D\u00f3 Mi",
      lado: lado,
      cifraCorreta: acorde.cifra,
      formacaoArray: acorde.formacao,
      formacaoCorreta: acorde.formacao.join(" "),
      grauRomano: acorde.grauRomano,
    });
  }

  function limpar(lado) {
    document.getElementById(lado + "-campo").value = "";
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

  EX.updateGrauVisibility("quartas", "consulta");
  EX.updateGrauVisibility("quintas", "consulta");

  ["quartas", "quintas"].forEach(function (lado) {
    document
      .getElementById(lado + "-campo")
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
