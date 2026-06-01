/**
 * UI do Círculo das Quintas interativo.
 * Depende de: teoria-musical.js
 *
 * Anel externo: 12 tonalidades maiores (clicáveis).
 * Anel interno: 12 relativas menores (clicáveis).
 * Painel lateral: mostra escala, acidentes e relativa.
 */
import { TeoriaMusical } from "./teoria-musical.js";

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var TM = TeoriaMusical;

  // =========================================================================
  // DADOS
  // =========================================================================

  var KEYS = [
    { c: "C", n: "Dó", acc: 0, type: "" },
    { c: "G", n: "Sol", acc: 1, type: "#" },
    { c: "D", n: "Ré", acc: 2, type: "#" },
    { c: "A", n: "Lá", acc: 3, type: "#" },
    { c: "E", n: "Mi", acc: 4, type: "#" },
    { c: "B", n: "Si", acc: 5, type: "#" },
    { c: "F#", n: "Fá#", acc: 6, type: "#" },
    { c: "Db", n: "Réb", acc: 5, type: "b" },
    { c: "Ab", n: "Láb", acc: 4, type: "b" },
    { c: "Eb", n: "Mib", acc: 3, type: "b" },
    { c: "Bb", n: "Sib", acc: 2, type: "b" },
    { c: "F", n: "Fá", acc: 1, type: "b" },
  ];

  var MINOR_KEYS = [
    { c: "Am", n: "Lá", relMaior: "Dó" },
    { c: "Em", n: "Mi", relMaior: "Sol" },
    { c: "Bm", n: "Si", relMaior: "Ré" },
    { c: "F#m", n: "Fá#", relMaior: "Lá" },
    { c: "C#m", n: "Dó#", relMaior: "Mi" },
    { c: "G#m", n: "Sol#", relMaior: "Si" },
    { c: "D#m", n: "Ré#", relMaior: "Fá#" },
    { c: "Bbm", n: "Sib", relMaior: "Réb" },
    { c: "Fm", n: "Fá", relMaior: "Láb" },
    { c: "Cm", n: "Dó", relMaior: "Mib" },
    { c: "Gm", n: "Sol", relMaior: "Sib" },
    { c: "Dm", n: "Ré", relMaior: "Fá" },
  ];

  // =========================================================================
  // CONSTRUIR SVG
  // =========================================================================

  var svg = document.getElementById("cq-svg");
  var NS = "http://www.w3.org/2000/svg";
  var CX = 190,
    CY = 190,
    R_OUTER = 155,
    R_INNER = 110;
  var selected = null; // { type: 'major'|'minor', idx: number }
  var majorEls = [];
  var minorEls = [];

  // Anéis de referência
  var ringOuter = createCircle(
    CX,
    CY,
    R_OUTER,
    "none",
    "var(--gray-200)",
    "0.5",
  );
  svg.appendChild(ringOuter);
  var ringInner = createCircle(
    CX,
    CY,
    R_INNER,
    "none",
    "var(--gray-200)",
    "0.5",
  );
  ringInner.setAttribute("stroke-dasharray", "3 3");
  svg.appendChild(ringInner);

  // Rótulos dos anéis
  var labelMaior = createText(
    CX,
    CY - R_OUTER - 12,
    "",
    "10px",
    "var(--gray-400)",
  );
  labelMaior.setAttribute("text-anchor", "middle");
  svg.appendChild(labelMaior);

  var labelMenor = createText(
    CX,
    CY - R_INNER - 8,
    "",
    "10px",
    "var(--gray-400)",
  );
  labelMenor.setAttribute("text-anchor", "middle");
  svg.appendChild(labelMenor);

  // Tonalidades maiores (anel externo)
  KEYS.forEach(function (k, i) {
    var angle = ((i * 30 - 90) * Math.PI) / 180;
    var x = CX + R_OUTER * Math.cos(angle);
    var y = CY + R_OUTER * Math.sin(angle);

    var g = createGroup(true);
    var circ = createCircle(x, y, 22, "var(--white)", "var(--gray-200)", "1");
    var txt = createText(x, y, k.c, "14px", "var(--gray-900)");
    txt.setAttribute("font-weight", "500");
    txt.setAttribute("font-family", "var(--font-display)");

    g.appendChild(circ);
    g.appendChild(txt);

    g.addEventListener("click", function () {
      selectMajor(i);
    });
    g.addEventListener("mouseenter", function () {
      if (!selected || selected.type !== "major" || selected.idx !== i) {
        circ.setAttribute("stroke", "var(--gold)");
      }
    });
    g.addEventListener("mouseleave", function () {
      if (!selected || selected.type !== "major" || selected.idx !== i) {
        circ.setAttribute("stroke", "var(--gray-200)");
      }
    });

    svg.appendChild(g);
    majorEls.push({ g: g, circ: circ, txt: txt, key: k });
  });

  // Relativas menores (anel interno)
  MINOR_KEYS.forEach(function (k, i) {
    var angle = ((i * 30 - 90) * Math.PI) / 180;
    var x = CX + R_INNER * Math.cos(angle);
    var y = CY + R_INNER * Math.sin(angle);

    var g = createGroup(true);
    var circ = createCircle(
      x,
      y,
      17,
      "var(--gray-50)",
      "var(--gray-200)",
      "0.5",
    );
    var txt = createText(x, y, k.c, "11px", "var(--gray-500)");

    g.appendChild(circ);
    g.appendChild(txt);

    g.addEventListener("click", function (e) {
      e.stopPropagation();
      selectMinor(i);
    });
    g.addEventListener("mouseenter", function () {
      if (!selected || selected.type !== "minor" || selected.idx !== i) {
        circ.setAttribute("stroke", "var(--gold)");
      }
    });
    g.addEventListener("mouseleave", function () {
      if (!selected || selected.type !== "minor" || selected.idx !== i) {
        circ.setAttribute("stroke", "var(--gray-200)");
      }
    });

    svg.appendChild(g);
    minorEls.push({ g: g, circ: circ, txt: txt, key: k });
  });

  // =========================================================================
  // SELEÇÃO
  // =========================================================================

  function resetStyles() {
    majorEls.forEach(function (e) {
      e.circ.setAttribute("fill", "var(--white)");
      e.circ.setAttribute("stroke", "var(--gray-200)");
      e.circ.setAttribute("stroke-width", "1");
      e.txt.setAttribute("fill", "var(--gray-900)");
    });
    minorEls.forEach(function (e) {
      e.circ.setAttribute("fill", "var(--gray-50)");
      e.circ.setAttribute("stroke", "var(--gray-200)");
      e.circ.setAttribute("stroke-width", "0.5");
      e.txt.setAttribute("fill", "var(--gray-500)");
    });
  }

  function selectMajor(idx) {
    selected = { type: "major", idx: idx };
    resetStyles();

    // Destaca a maior selecionada
    var e = majorEls[idx];
    e.circ.setAttribute("fill", "rgba(200,150,46,0.15)");
    e.circ.setAttribute("stroke", "var(--gold)");
    e.circ.setAttribute("stroke-width", "2");
    e.txt.setAttribute("fill", "var(--gold-dark)");

    // Destaca a relativa menor correspondente
    var mEl = minorEls[idx];
    mEl.circ.setAttribute("fill", "rgba(200,150,46,0.08)");
    mEl.circ.setAttribute("stroke", "var(--gold-dark)");
    mEl.circ.setAttribute("stroke-width", "1");
    mEl.txt.setAttribute("fill", "var(--gold-dark)");

    // Atenua as demais
    majorEls.forEach(function (el, i) {
      if (i !== idx) {
        el.txt.setAttribute("fill", "var(--gray-400)");
      }
    });
    minorEls.forEach(function (el, i) {
      if (i !== idx) {
        el.txt.setAttribute("fill", "var(--gray-300)");
      }
    });

    showMajorInfo(KEYS[idx]);
  }

  function selectMinor(idx) {
    selected = { type: "minor", idx: idx };
    resetStyles();

    // Destaca a menor selecionada
    var e = minorEls[idx];
    e.circ.setAttribute("fill", "rgba(200,150,46,0.15)");
    e.circ.setAttribute("stroke", "var(--gold)");
    e.circ.setAttribute("stroke-width", "1.5");
    e.txt.setAttribute("fill", "var(--gold-dark)");

    // Destaca a relativa maior correspondente
    var mEl = majorEls[idx];
    mEl.circ.setAttribute("fill", "rgba(200,150,46,0.08)");
    mEl.circ.setAttribute("stroke", "var(--gold-dark)");
    mEl.circ.setAttribute("stroke-width", "1");
    mEl.txt.setAttribute("fill", "var(--gold-dark)");

    // Atenua as demais
    majorEls.forEach(function (el, i) {
      if (i !== idx) {
        el.txt.setAttribute("fill", "var(--gray-400)");
      }
    });
    minorEls.forEach(function (el, i) {
      if (i !== idx) {
        el.txt.setAttribute("fill", "var(--gray-300)");
      }
    });

    showMinorInfo(MINOR_KEYS[idx]);
  }

  // =========================================================================
  // PAINEL DE INFORMAÇÕES
  // =========================================================================

  function showMajorInfo(k) {
    var escala = TM.escalaMaior(k.n);
    var relMenor = TM.relativaMenor(k.n);
    var relMenorCifra = relMenor ? TM.notaParaCifra(relMenor) + "m" : "";
    var accLabel = formatAccidentes(k.acc, k.type);

    var html = '<p class="cq-info-label">Tonalidade maior</p>';
    html += '<p class="cq-info-key">' + k.n + " Maior (" + k.c + ")</p>";
    html += renderDetail("Acidentes", accLabel);
    html += renderDetail(
      "Relativa menor",
      relMenor + " menor (" + relMenorCifra + ")",
    );
    html += renderEscala(escala, k.n);

    document.getElementById("cq-info").innerHTML = html;
  }

  function showMinorInfo(k) {
    var escala = TM.escalaMenor(k.n);
    var relMaiorCifra = TM.notaParaCifra(k.relMaior);
    // Acidentes: mesmos da relativa maior
    var relMajorKey = KEYS.find(function (mk) {
      return mk.n === k.relMaior;
    });
    var accLabel = relMajorKey
      ? formatAccidentes(relMajorKey.acc, relMajorKey.type)
      : "";

    var html = '<p class="cq-info-label">Tonalidade menor</p>';
    html += '<p class="cq-info-key">' + k.n + " menor (" + k.c + ")</p>";
    html += renderDetail("Acidentes", accLabel);
    html += renderDetail(
      "Relativa maior",
      k.relMaior + " Maior (" + relMaiorCifra + ")",
    );
    html += renderEscala(escala, k.n);

    document.getElementById("cq-info").innerHTML = html;
  }

  function renderDetail(label, value) {
    return (
      '<div class="cq-detail">' +
      '<p class="cq-detail-label">' +
      label +
      "</p>" +
      '<p class="cq-detail-value">' +
      value +
      "</p>" +
      "</div>"
    );
  }

  function renderEscala(notas, tonica) {
    if (!notas) return "";
    var html =
      '<div class="cq-detail"><p class="cq-detail-label">Escala</p><div class="cq-scale">';
    notas.forEach(function (n) {
      var cls =
        n === tonica ? "cq-scale-note cq-scale-note--root" : "cq-scale-note";
      html += '<span class="' + cls + '">' + n + "</span>";
    });
    html += "</div></div>";
    return html;
  }

  function formatAccidentes(acc, type) {
    if (acc === 0) return "Nenhum acidente";
    var symbol = type === "#" ? " sustenido" : " bemol";
    return acc + symbol + (acc > 1 ? "s" : "");
  }

  // =========================================================================
  // HELPERS SVG
  // =========================================================================

  function createCircle(cx, cy, r, fill, stroke, sw) {
    var el = document.createElementNS(NS, "circle");
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("r", r);
    el.setAttribute("fill", fill);
    el.setAttribute("stroke", stroke);
    el.setAttribute("stroke-width", sw);
    return el;
  }

  function createText(x, y, content, size, fill) {
    var el = document.createElementNS(NS, "text");
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("text-anchor", "middle");
    el.setAttribute("dominant-baseline", "central");
    el.setAttribute("font-size", size);
    el.setAttribute("fill", fill);
    el.textContent = content;
    return el;
  }

  function createGroup(clickable) {
    var el = document.createElementNS(NS, "g");
    if (clickable) el.style.cursor = "pointer";
    return el;
  }
});
