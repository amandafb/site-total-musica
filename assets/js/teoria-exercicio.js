/**
 * Modo Exercício — lógica compartilhada v3.
 *
 * Alterações:
 *   - Grau: hidden no modo consulta, visível no exercício
 *   - Escalas: feedback com card da nota correta (teoria-escala-item--active)
 *   - Campo harmônico: 2 colunas lado a lado — cifra (esq) e formação (dir).
 *     Coluna direita começa travada até a cifra ser conferida.
 *   - Bloqueia submit com input vazio.
 */
var TeoriaExercicio = (function () {
  "use strict";

  // =========================================================================
  // TOGGLE CONSULTA / EXERCÍCIO
  // =========================================================================

  function initToggle(lado, onModeChange) {
    var container = document.getElementById(lado + "-toggle");
    if (!container) return;

    var buttons = container.querySelectorAll(".teoria-toggle__btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-mode");
        buttons.forEach(function (b) {
          b.classList.remove("teoria-toggle__btn--active");
        });
        btn.classList.add("teoria-toggle__btn--active");
        onModeChange(lado, mode);
      });
    });
  }

  function getMode(lado) {
    var container = document.getElementById(lado + "-toggle");
    if (!container) return "consulta";
    var active = container.querySelector(".teoria-toggle__btn--active");
    return active ? active.getAttribute("data-mode") : "consulta";
  }

  // =========================================================================
  // GRAU SELECT — SHOW / HIDE
  // =========================================================================

  function updateGrauVisibility(lado, mode) {
    var grauGroup = document.getElementById(lado + "-grau");
    if (!grauGroup) return;
    var wrapper = grauGroup.closest(".teoria-select-group");
    if (!wrapper) return;

    if (mode === "exercicio") {
      wrapper.style.visibility = "visible";
      wrapper.style.pointerEvents = "auto";
      wrapper.style.opacity = "1";
    } else {
      wrapper.style.visibility = "hidden";
      wrapper.style.pointerEvents = "none";
      wrapper.style.opacity = "0";
    }
  }

  // =========================================================================
  // EXERCÍCIO ESCALA — feedback com card da nota
  // =========================================================================

  function renderExercicio(opts) {
    var inputId = opts.lado + "-exercise-input";
    var btnId = opts.lado + "-exercise-check";

    opts.container.innerHTML =
      '<div class="teoria-exercise">' +
      '<p class="teoria-exercise__question">' +
      'Qual é o <span class="teoria-exercise__highlight">' +
      opts.destaque +
      "</span>" +
      " " +
      opts.pergunta +
      "?" +
      "</p>" +
      '<div class="teoria-exercise__input-row">' +
      '<input type="text" class="teoria-exercise__input" id="' +
      inputId +
      '" placeholder="' +
      opts.placeholder +
      '" autocomplete="off">' +
      '<button class="teoria-exercise__check-btn" id="' +
      btnId +
      '">Conferir</button>' +
      "</div>" +
      "</div>";

    var input = document.getElementById(inputId);
    var btn = document.getElementById(btnId);

    function doCheck() {
      var valor = input.value.trim();
      if (!valor) {
        input.classList.add("teoria-exercise__input--empty");
        input.focus();
        return;
      }
      // Renderiza card da nota correta + feedback
      var html = renderCardFeedback(valor, opts.correto, opts.grauRomano);
      opts.container.innerHTML = html;
    }

    btn.addEventListener("click", doCheck);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") doCheck();
    });
    input.addEventListener("input", function () {
      input.classList.remove("teoria-exercise__input--empty");
    });
    input.focus();
  }

  /**
   * Renderiza um card de nota com feedback abaixo, centralizado.
   */
  function renderCardFeedback(resposta, correto, grauRomano) {
    var acertou = normalizar(resposta) === normalizar(correto);

    var html = '<div class="teoria-exercise-result">';

    // Card da nota correta
    html +=
      '<div class="teoria-escala-item teoria-escala-item--active teoria-escala-item--solo">';
    html += '<div class="teoria-escala-item__grau">' + grauRomano + "</div>";
    html += '<div class="teoria-escala-item__nota">' + correto + "</div>";
    html += "</div>";

    // Feedback
    html += renderFeedbackLine(acertou, resposta, correto);
    html += "</div>";

    return html;
  }

  // =========================================================================
  // EXERCÍCIO CAMPO HARMÔNICO — 2 colunas
  // =========================================================================

  /**
   * @param {Object} opts
   * @param {HTMLElement} opts.container
   * @param {string} opts.destaque - "III grau"
   * @param {string} opts.pergunta - "de Fá Maior"
   * @param {string} opts.placeholderCifra - "Ex: Dm"
   * @param {string} opts.placeholderFormacao - "Ex: Ré Fá Lá"
   * @param {string} opts.lado
   * @param {string} opts.cifraCorreta - "Dm"
   * @param {string[]} opts.formacaoArray - ['Ré', 'Fá', 'Lá']
   * @param {string} opts.formacaoCorreta - "Ré Fá Lá"
   * @param {string} opts.grauRomano - "III"
   */
  function renderExercicioCampo(opts) {
    var cifraInputId = opts.lado + "-cifra-input";
    var cifraBtnId = opts.lado + "-cifra-check";
    var formInputId = opts.lado + "-form-input";
    var formBtnId = opts.lado + "-form-check";

    opts.container.innerHTML =
      '<div class="teoria-exercise-campo">' +
      // Coluna esquerda — cifra
      '<div class="teoria-exercise-campo__col" id="' +
      opts.lado +
      '-col-cifra">' +
      '<p class="teoria-exercise-campo__label">Acorde</p>' +
      '<p class="teoria-exercise__question">' +
      'Qual é o acorde do <span class="teoria-exercise__highlight">' +
      opts.destaque +
      "</span>" +
      " " +
      opts.pergunta +
      "?" +
      "</p>" +
      '<div class="teoria-exercise__input-row">' +
      '<input type="text" class="teoria-exercise__input" id="' +
      cifraInputId +
      '" placeholder="' +
      opts.placeholderCifra +
      '" autocomplete="off">' +
      '<button class="teoria-exercise__check-btn" id="' +
      cifraBtnId +
      '">Conferir</button>' +
      "</div>" +
      "</div>" +
      // Coluna direita — formação (travada)
      '<div class="teoria-exercise-campo__col teoria-exercise-campo__col--locked" id="' +
      opts.lado +
      '-col-form">' +
      '<p class="teoria-exercise-campo__label">Formação</p>' +
      '<p class="teoria-exercise__question">' +
      "Quais as notas que formam o acorde?" +
      "</p>" +
      '<div class="teoria-exercise__input-row">' +
      '<input type="text" class="teoria-exercise__input" id="' +
      formInputId +
      '" placeholder="' +
      opts.placeholderFormacao +
      '" autocomplete="off" disabled>' +
      '<button class="teoria-exercise__check-btn" id="' +
      formBtnId +
      '" disabled>Conferir</button>' +
      "</div>" +
      "</div>" +
      "</div>";

    var cifraInput = document.getElementById(cifraInputId);
    var cifraBtn = document.getElementById(cifraBtnId);
    var formInput = document.getElementById(formInputId);
    var formBtn = document.getElementById(formBtnId);
    var colCifra = document.getElementById(opts.lado + "-col-cifra");
    var colForm = document.getElementById(opts.lado + "-col-form");

    // Etapa 1: conferir cifra
    function doCheckCifra() {
      var valor = cifraInput.value.trim();
      if (!valor) {
        cifraInput.classList.add("teoria-exercise__input--empty");
        cifraInput.focus();
        return;
      }
      var acertou = normalizar(valor) === normalizar(opts.cifraCorreta);

      // Substitui a coluna esquerda por card + feedback
      colCifra.innerHTML =
        '<p class="teoria-exercise-campo__label">Acorde</p>' +
        '<div class="teoria-exercise-result">' +
        '<div class="teoria-escala-item teoria-escala-item--active teoria-escala-item--solo">' +
        '<div class="teoria-escala-item__grau">' +
        opts.grauRomano +
        "</div>" +
        '<div class="teoria-escala-item__nota">' +
        opts.cifraCorreta +
        "</div>" +
        "</div>" +
        renderFeedbackLine(acertou, valor, opts.cifraCorreta) +
        "</div>";

      // Destrava coluna direita
      colForm.classList.remove("teoria-exercise-campo__col--locked");
      formInput.disabled = false;
      formBtn.disabled = false;
      formInput.focus();
    }

    cifraBtn.addEventListener("click", doCheckCifra);
    cifraInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") doCheckCifra();
    });
    cifraInput.addEventListener("input", function () {
      cifraInput.classList.remove("teoria-exercise__input--empty");
    });

    // Etapa 2: conferir formação
    function doCheckForm() {
      var valor = formInput.value.trim();
      if (!valor) {
        formInput.classList.add("teoria-exercise__input--empty");
        formInput.focus();
        return;
      }
      var acertou = normalizar(valor) === normalizar(opts.formacaoCorreta);

      // Substitui coluna direita por card com notas + feedback
      var notasHtml = "";
      for (var i = 0; i < opts.formacaoArray.length; i++) {
        notasHtml +=
          '<span class="teoria-exercise-campo__form-note">' +
          opts.formacaoArray[i] +
          "</span>";
      }

      colForm.innerHTML =
        '<p class="teoria-exercise-campo__label">Forma\u00e7\u00e3o</p>' +
        '<div class="teoria-exercise-result">' +
        '<div class="teoria-exercise-campo__form-card">' +
        notasHtml +
        "</div>" +
        renderFeedbackLine(acertou, valor, opts.formacaoCorreta) +
        "</div>";
    }

    formBtn.addEventListener("click", doCheckForm);
    formInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") doCheckForm();
    });
    formInput.addEventListener("input", function () {
      formInput.classList.remove("teoria-exercise__input--empty");
    });

    cifraInput.focus();
  }

  // =========================================================================
  // FEEDBACK
  // =========================================================================

  function renderFeedbackLine(acertou, resposta, correto) {
    if (acertou) {
      return (
        '<div class="teoria-feedback teoria-feedback--correct">' +
        '<span class="teoria-feedback__icon teoria-feedback__icon--correct">&#10003;</span>' +
        "<span>Correto!</span>" +
        "</div>"
      );
    }
    return (
      '<div class="teoria-feedback teoria-feedback--wrong">' +
      '<span class="teoria-feedback__icon teoria-feedback__icon--wrong">&times;</span>' +
      "<span>Sua resposta: <strong>" +
      resposta +
      "</strong></span>" +
      "</div>"
    );
  }

  // =========================================================================
  // NORMALIZAÇÃO
  // =========================================================================

  function normalizar(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "")
      .replace(/\u266D/g, "b")
      .replace(/\u266F/g, "#");
  }

  // =========================================================================
  // API PÚBLICA
  // =========================================================================

  return {
    initToggle: initToggle,
    getMode: getMode,
    updateGrauVisibility: updateGrauVisibility,
    renderExercicio: renderExercicio,
    renderExercicioCampo: renderExercicioCampo,
  };
})();

export { TeoriaExercicio };
