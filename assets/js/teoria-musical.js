/**
 * Motor de Teoria Musical — Total Música
 *
 * Fundamento: todas as escalas e campos harmônicos derivam da sequência
 * cromática de 12 notas. A escala maior segue o padrão de intervalos
 * T-T-S-T-T-T-S (tom-tom-semitom-tom-tom-tom-semitom). Os acordes do
 * campo harmônico são construídos empilhando terças diatônicas sobre
 * cada grau da escala.
 *
 * O ciclo de quintas (C→G→D→A→E→B→F#→C#) e o ciclo de quartas
 * (C→F→Bb→Eb→Ab→Db→Gb→Cb) são organizadores das tonalidades por
 * número de acidentes (sustenidos ou bemóis).
 */

const TeoriaMusical = (() => {
  "use strict";

  // =========================================================================
  // DADOS FUNDAMENTAIS
  // =========================================================================

  /**
   * Sequência cromática com nomes em português.
   * Duas versões: com sustenidos e com bemóis.
   * Cada posição = 1 semitom acima da anterior.
   */
  const CROMATICA_SUSTENIDOS = [
    "Dó",
    "Dó#",
    "Ré",
    "Ré#",
    "Mi",
    "Fá",
    "Fá#",
    "Sol",
    "Sol#",
    "Lá",
    "Lá#",
    "Si",
  ];

  const CROMATICA_BEMOIS = [
    "Dó",
    "Réb",
    "Ré",
    "Mib",
    "Mi",
    "Fá",
    "Solb",
    "Sol",
    "Láb",
    "Lá",
    "Sib",
    "Si",
  ];

  /**
   * Mapa de todas as notas para seus índices cromáticos (0-11).
   * Inclui enharmonias (Dó# = Réb = índice 1).
   */
  const NOTA_PARA_INDICE = {
    Dó: 0,
    "Dó#": 1,
    Réb: 1,
    Ré: 2,
    "Ré#": 3,
    Mib: 3,
    Mi: 4,
    "Mi#": 5,
    Fáb: 4,
    Fá: 5,
    "Fá#": 6,
    Solb: 6,
    Sol: 7,
    "Sol#": 8,
    Láb: 8,
    Lá: 9,
    "Lá#": 10,
    Sib: 10,
    Si: 11,
    "Si#": 0,
    Dób: 11,
  };

  /**
   * Intervalos da escala maior em semitons: T-T-S-T-T-T-S
   * Tom = 2 semitons, Semitom = 1 semitom
   * Soma total: 2+2+1+2+2+2+1 = 12 (uma oitava completa)
   */
  const INTERVALOS_ESCALA_MAIOR = [2, 2, 1, 2, 2, 2, 1];

  /**
   * Nomes dos graus em numeração romana.
   */
  const GRAUS_ROMANOS = ["I", "II", "III", "IV", "V", "VI", "VII"];

  /**
   * Qualidade de cada grau do campo harmônico maior (tríades).
   * I=maior, II=menor, III=menor, IV=maior, V=maior, VI=menor, VII=diminuto
   */
  const QUALIDADES_TRIADES = ["", "m", "m", "", "", "m", "dim"];

  /**
   * Qualidade de cada grau do campo harmônico maior (tétrades).
   * I=7M, II=m7, III=m7, IV=7M, V=7, VI=m7, VII=m7(b5)
   *
   * A 7ª adicionada a cada tríade é sempre diatônica (pertence à escala):
   * - Graus I e IV: a 7ª está a 11 semitons da fundamental → 7M (sétima maior)
   * - Graus II, III e VI: 7ª a 10 semitons → m7 (menor com sétima menor)
   * - Grau V: tríade maior + 7ª a 10 semitons → 7 (acorde dominante)
   * - Grau VII: tríade diminuta + 7ª a 10 semitons → m7(b5) (meio-diminuto)
   */
  const QUALIDADES_TETRADES = ["7M", "m7", "m7", "7M", "7", "m7", "m7(b5)"];

  /**
   * Intervalos das tétrades em semitons a partir da fundamental.
   * [fundamental, terça, quinta, sétima]
   */
  const INTERVALOS_TETRADES = [
    [0, 4, 7, 11], // I   - 7M    (3M + 5J + 7M)
    [0, 3, 7, 10], // II  - m7    (3m + 5J + 7m)
    [0, 3, 7, 10], // III - m7    (3m + 5J + 7m)
    [0, 4, 7, 11], // IV  - 7M    (3M + 5J + 7M)
    [0, 4, 7, 10], // V   - 7     (3M + 5J + 7m)  → dominante
    [0, 3, 7, 10], // VI  - m7    (3m + 5J + 7m)
    [0, 3, 6, 10], // VII - m7b5  (3m + 5dim + 7m)
  ];

  /**
   * Intervalos das tríades em semitons a partir da fundamental.
   */
  const INTERVALOS_TRIADES = [
    [0, 4, 7], // I   - maior  (3M + 5J)
    [0, 3, 7], // II  - menor  (3m + 5J)
    [0, 3, 7], // III - menor  (3m + 5J)
    [0, 4, 7], // IV  - maior  (3M + 5J)
    [0, 4, 7], // V   - maior  (3M + 5J)
    [0, 3, 7], // VI  - menor  (3m + 5J)
    [0, 3, 6], // VII - dim    (3m + 5dim)
  ];

  /**
   * Tonalidades organizadas pelo ciclo de quintas (sustenidos)
   * e ciclo de quartas (bemóis).
   *
   * Ciclo de quintas: cada tonalidade tem 1 sustenido a mais.
   * G=1#, D=2#, A=3#, E=4#, B=5#, F#=6#, C#=7#
   *
   * Ciclo de quartas: cada tonalidade tem 1 bemol a mais.
   * F=1b, Bb=2b, Eb=3b, Ab=4b, Db=5b, Gb=6b, Cb=7b
   */
  const CICLO_QUINTAS = [
    { cifra: "G", tonica: "Sol", acidentes: 1 },
    { cifra: "D", tonica: "Ré", acidentes: 2 },
    { cifra: "A", tonica: "Lá", acidentes: 3 },
    { cifra: "E", tonica: "Mi", acidentes: 4 },
    { cifra: "B", tonica: "Si", acidentes: 5 },
    { cifra: "F#", tonica: "Fá#", acidentes: 6 },
    { cifra: "C#", tonica: "Dó#", acidentes: 7 },
  ];

  const CICLO_QUARTAS = [
    { cifra: "F", tonica: "Fá", acidentes: 1 },
    { cifra: "Bb", tonica: "Sib", acidentes: 2 },
    { cifra: "Eb", tonica: "Mib", acidentes: 3 },
    { cifra: "Ab", tonica: "Láb", acidentes: 4 },
    { cifra: "Db", tonica: "Réb", acidentes: 5 },
    { cifra: "Gb", tonica: "Solb", acidentes: 6 },
    { cifra: "Cb", tonica: "Dób", acidentes: 7 },
  ];

  /**
   * Nomes corretos das notas de cada escala maior.
   *
   * Por que não usar apenas a cromática + intervalos?
   * Porque a teoria musical exige que cada escala use as 7 letras
   * (Dó, Ré, Mi, Fá, Sol, Lá, Si) exatamente uma vez, com os
   * acidentes necessários. Exemplo: a escala de Fá# maior usa
   * Fá#-Sol#-Lá#-Si-Dó#-Ré#-Mi# (e não Fá), mesmo que Mi# soe
   * igual a Fá. Isso é uma exigência da grafia musical, não uma
   * questão acústica.
   *
   * O mapa abaixo garante a grafia correta para todas as 15 tonalidades.
   */
  const ESCALAS_MAIORES = {
    // Naturais
    Dó: ["Dó", "Ré", "Mi", "Fá", "Sol", "Lá", "Si"],

    // Ciclo de Quintas (sustenidos)
    Sol: ["Sol", "Lá", "Si", "Dó", "Ré", "Mi", "Fá#"],
    Ré: ["Ré", "Mi", "Fá#", "Sol", "Lá", "Si", "Dó#"],
    Lá: ["Lá", "Si", "Dó#", "Ré", "Mi", "Fá#", "Sol#"],
    Mi: ["Mi", "Fá#", "Sol#", "Lá", "Si", "Dó#", "Ré#"],
    Si: ["Si", "Dó#", "Ré#", "Mi", "Fá#", "Sol#", "Lá#"],
    "Fá#": ["Fá#", "Sol#", "Lá#", "Si", "Dó#", "Ré#", "Mi#"],
    "Dó#": ["Dó#", "Ré#", "Mi#", "Fá#", "Sol#", "Lá#", "Si#"],

    // Ciclo de Quartas (bemóis)
    Fá: ["Fá", "Sol", "Lá", "Sib", "Dó", "Ré", "Mi"],
    Sib: ["Sib", "Dó", "Ré", "Mib", "Fá", "Sol", "Lá"],
    Mib: ["Mib", "Fá", "Sol", "Láb", "Sib", "Dó", "Ré"],
    Láb: ["Láb", "Sib", "Dó", "Réb", "Mib", "Fá", "Sol"],
    Réb: ["Réb", "Mib", "Fá", "Solb", "Láb", "Sib", "Dó"],
    Solb: ["Solb", "Láb", "Sib", "Dób", "Réb", "Mib", "Fá"],
    Dób: ["Dób", "Réb", "Mib", "Fáb", "Solb", "Láb", "Sib"],
  };

  // =========================================================================
  // FUNÇÕES DE CÁLCULO — ESCALA MAIOR
  // =========================================================================

  /**
   * Retorna as 7 notas da escala maior de uma tonalidade.
   * @param {string} tonica - Nota tônica (ex: 'Sol', 'Réb', 'Fá#')
   * @returns {string[]} Array com 7 notas
   */
  function escalaMaior(tonica) {
    if (ESCALAS_MAIORES[tonica]) {
      return [...ESCALAS_MAIORES[tonica]];
    }
    // Fallback: cálculo por intervalos (sem garantia de grafia correta)
    const indice = NOTA_PARA_INDICE[tonica];
    if (indice === undefined) return null;

    const usaBemois = tonica.includes("b");
    const cromatica = usaBemois ? CROMATICA_BEMOIS : CROMATICA_SUSTENIDOS;
    const notas = [tonica];
    let pos = indice;

    for (let i = 0; i < 6; i++) {
      pos = (pos + INTERVALOS_ESCALA_MAIOR[i]) % 12;
      notas.push(cromatica[pos]);
    }
    return notas;
  }

  /**
   * Retorna a nota de um grau específico da escala maior.
   * @param {string} tonica - Nota tônica
   * @param {number} grau - Grau (0-6, onde 0=I, 1=II, etc.)
   * @returns {string} Nome da nota
   */
  function notaDoGrau(tonica, grau) {
    const escala = escalaMaior(tonica);
    if (!escala || grau < 0 || grau > 6) return null;
    return escala[grau];
  }

  /**
   * Monta o nome cifrado de um acorde do campo harmônico (tríade).
   * @param {string} tonica - Tônica da tonalidade
   * @param {number} grau - Grau (0-6)
   * @returns {{ cifra: string, formacao: string[], grauRomano: string }}
   */
  function acordeTriade(tonica, grau) {
    const escala = escalaMaior(tonica);
    if (!escala || grau < 0 || grau > 6) return null;

    const fundamental = escala[grau];
    const qualidade = QUALIDADES_TRIADES[grau];

    // Formação: empilha terças diatônicas (graus 1-3-5 a partir do grau atual)
    const formacao = [
      escala[grau],
      escala[(grau + 2) % 7],
      escala[(grau + 4) % 7],
    ];

    // Cifra: usa notação internacional para a fundamental
    const cifraFundamental = notaParaCifra(fundamental);
    const cifra = cifraFundamental + qualidade;

    return {
      cifra,
      formacao,
      grauRomano: GRAUS_ROMANOS[grau],
      qualidade,
      fundamental,
    };
  }

  /**
   * Monta o nome cifrado de um acorde do campo harmônico (tétrade).
   * @param {string} tonica - Tônica da tonalidade
   * @param {number} grau - Grau (0-6)
   * @returns {{ cifra: string, formacao: string[], grauRomano: string }}
   */
  function acordeTetrade(tonica, grau) {
    const escala = escalaMaior(tonica);
    if (!escala || grau < 0 || grau > 6) return null;

    const fundamental = escala[grau];
    const qualidade = QUALIDADES_TETRADES[grau];

    // Formação: 4 notas empilhadas em terças diatônicas
    const formacao = [
      escala[grau],
      escala[(grau + 2) % 7],
      escala[(grau + 4) % 7],
      escala[(grau + 6) % 7],
    ];

    const cifraFundamental = notaParaCifra(fundamental);
    const cifra = cifraFundamental + qualidade;

    return {
      cifra,
      formacao,
      grauRomano: GRAUS_ROMANOS[grau],
      qualidade,
      fundamental,
    };
  }

  /**
   * Retorna o campo harmônico completo (7 acordes) de uma tonalidade.
   * @param {string} tonica - Tônica da tonalidade
   * @param {'triades'|'tetrades'} tipo
   * @returns {Array} Array de 7 objetos de acorde
   */
  function campoHarmonico(tonica, tipo = "triades") {
    const fn = tipo === "tetrades" ? acordeTetrade : acordeTriade;
    const acordes = [];
    for (let i = 0; i < 7; i++) {
      acordes.push(fn(tonica, i));
    }
    return acordes;
  }

  // =========================================================================
  // UTILIDADES
  // =========================================================================

  /**
   * Converte nome português para cifra internacional.
   * Dó → C, Ré → D, Mi → E, Fá → F, Sol → G, Lá → A, Si → B
   * Mantém acidentes (# e b).
   */
  const CIFRA_MAP = {
    Dó: "C",
    Ré: "D",
    Mi: "E",
    Fá: "F",
    Sol: "G",
    Lá: "A",
    Si: "B",
  };

  function notaParaCifra(nota) {
    // Separa o nome base do acidente
    const match = nota.match(/^(Dó|Ré|Mi|Fá|Sol|Lá|Si)(.*)/);
    if (!match) return nota;
    return CIFRA_MAP[match[1]] + match[2];
  }

  /**
   * Converte cifra internacional para nome português.
   */
  const NOTA_MAP = {
    C: "Dó",
    D: "Ré",
    E: "Mi",
    F: "Fá",
    G: "Sol",
    A: "Lá",
    B: "Si",
  };

  function cifraParaNota(cifra) {
    const match = cifra.match(/^([A-G])(.*)/);
    if (!match) return cifra;
    return NOTA_MAP[match[1]] + match[2];
  }

  /**
   * Retorna as listas de tonalidades para popular os selects.
   */
  function tonalidades() {
    return {
      quintas: CICLO_QUINTAS,
      quartas: CICLO_QUARTAS,
    };
  }

  /**
   * Mapa de tônicas menores para suas relativas maiores.
   */
  const RELATIVA_MAIOR = {
    Lá: "Dó",
    Mi: "Sol",
    Si: "Ré",
    "Fá#": "Lá",
    "Dó#": "Mi",
    "Sol#": "Si",
    "Ré#": "Fá#",
    "Lá#": "Dó#",
    Ré: "Fá",
    Sol: "Sib",
    Dó: "Mib",
    Fá: "Láb",
    Sib: "Réb",
    Mib: "Solb",
    Láb: "Dób",
  };

  /**
   * Escala menor natural = modo eólio = começa no VI grau da relativa maior.
   * @param {string} tonica - Tônica da escala menor (ex: 'Lá', 'Mi')
   * @returns {string[]} Array com 7 notas, ou null
   */
  function escalaMenor(tonica) {
    const maior = RELATIVA_MAIOR[tonica];
    if (!maior) return null;
    const escalaMai = escalaMaior(maior);
    if (!escalaMai) return null;
    const idx = escalaMai.indexOf(tonica);
    if (idx === -1) return null;
    const notas = [];
    for (let i = 0; i < 7; i++) {
      notas.push(escalaMai[(idx + i) % 7]);
    }
    return notas;
  }

  /**
   * Escala menor harmônica = menor natural com o VII grau elevado em 1 semitom.
   * Ex: Lá menor harmônica = Lá Si Dó Ré Mi Fá Sol# (Sol→Sol#)
   * @param {string} tonica
   * @returns {string[]} Array com 7 notas, ou null
   */
  function escalaMenorHarmonica(tonica) {
    const natural = escalaMenor(tonica);
    if (!natural) return null;
    const notas = [...natural];
    // Elevar o VII grau em 1 semitom
    notas[6] = elevarNota(notas[6]);
    return notas;
  }

  /**
   * Escala menor melódica (ascendente) = menor natural com VI e VII graus
   * elevados em 1 semitom.
   * Ex: Lá menor melódica = Lá Si Dó Ré Mi Fá# Sol# (Fá→Fá#, Sol→Sol#)
   * @param {string} tonica
   * @returns {string[]} Array com 7 notas, ou null
   */
  function escalaMenorMelodica(tonica) {
    const natural = escalaMenor(tonica);
    if (!natural) return null;
    const notas = [...natural];
    // Elevar VI e VII graus em 1 semitom
    notas[5] = elevarNota(notas[5]);
    notas[6] = elevarNota(notas[6]);
    return notas;
  }

  /**
   * Eleva uma nota em 1 semitom, mantendo a grafia correta.
   * Dó → Dó#, Ré → Ré#, Mi → Mi# (não Fá), Fá → Fá#,
   * Sol → Sol#, Lá → Lá#, Si → Si# (não Dó)
   * Se já tem bemol, remove o bemol (Sib → Si, Mib → Mi, etc.)
   */
  function elevarNota(nota) {
    if (nota.endsWith("b")) {
      // Remove o bemol: Sib → Si, Réb → Ré, etc.
      return nota.slice(0, -1);
    }
    if (nota.endsWith("#")) {
      // Já tem sustenido — duplo sustenido (raro, mas correto)
      return nota + "#";
    }
    // Nota natural — adiciona sustenido
    return nota + "#";
  }

  /**
   * Retorna a relativa maior de uma tonalidade menor.
   */
  function relativaMaior(tonicaMenor) {
    return RELATIVA_MAIOR[tonicaMenor] || null;
  }

  /**
   * Retorna a relativa menor de uma tonalidade maior.
   */
  function relativaMenor(tonicaMaior) {
    const escala = escalaMaior(tonicaMaior);
    if (!escala) return null;
    return escala[5]; // VI grau
  }

  /**
   * Ciclo de quintas/quartas para tonalidades menores.
   */
  const CICLO_QUINTAS_MENORES = [
    { cifra: "Em", tonica: "Mi", acidentes: 1 },
    { cifra: "Bm", tonica: "Si", acidentes: 2 },
    { cifra: "F#m", tonica: "Fá#", acidentes: 3 },
    { cifra: "C#m", tonica: "Dó#", acidentes: 4 },
    { cifra: "G#m", tonica: "Sol#", acidentes: 5 },
    { cifra: "D#m", tonica: "Ré#", acidentes: 6 },
    { cifra: "A#m", tonica: "Lá#", acidentes: 7 },
  ];

  const CICLO_QUARTAS_MENORES = [
    { cifra: "Dm", tonica: "Ré", acidentes: 1 },
    { cifra: "Gm", tonica: "Sol", acidentes: 2 },
    { cifra: "Cm", tonica: "Dó", acidentes: 3 },
    { cifra: "Fm", tonica: "Fá", acidentes: 4 },
    { cifra: "Bbm", tonica: "Sib", acidentes: 5 },
    { cifra: "Ebm", tonica: "Mib", acidentes: 6 },
    { cifra: "Abm", tonica: "Láb", acidentes: 7 },
  ];

  // =========================================================================
  // CAMPO HARMÔNICO MENOR (HARMÔNICO)
  // =========================================================================

  /**
   * Graus romanos do campo harmônico menor harmônico.
   * Convenção: minúscula para menores/diminutos, maiúscula para maiores/aumentados.
   */
  const GRAUS_ROMANOS_MENOR = [
    "I",
    "II\u00b0",
    "III+",
    "IV",
    "V",
    "VI",
    "VII\u00b0",
  ];

  /**
   * Qualidade de cada grau do campo harmônico menor harmônico (tríades).
   *
   * A escala menor harmônica (T-S-T-T-S-T½-S) gera, ao empilhar
   * terças diatônicas:
   *
   *   I   = menor       (3m + 5J)
   *   II° = diminuto     (3m + 5dim)
   *   III+= aumentado    (3M + 5aum)
   *   IV  = menor        (3m + 5J)
   *   V   = maior        (3M + 5J)   ← dominante — razão de ser da harmônica
   *   VI  = maior        (3M + 5J)
   *   VII°= diminuto     (3m + 5dim)
   *
   * O ponto crucial: elevar o VII grau da escala menor natural cria
   * uma terça maior entre V e VII, transformando o v menor em V maior.
   * Esse V maior (dominante) é o que define a tonalidade menor na
   * harmonia tonal — sem ele, a resolução V→i não tem a mesma força.
   */
  const QUALIDADES_TRIADES_MENOR = ["m", "dim", "aum", "m", "", "", "dim"];

  /**
   * Qualidade de cada grau do campo harmônico menor harmônico (tétrades).
   *
   *   I    = m(7M)     — menor com sétima maior (a 7M vem do VII elevado)
   *   II°  = m7(b5)    — meio-diminuto (tríade dim + 7ª menor)
   *   III+ = 7M(#5)    — aumentado com sétima maior
   *   IV   = m7        — menor com sétima menor
   *   V    = 7         — dominante (tríade maior + 7ª menor)
   *   VI   = 7M        — maior com sétima maior
   *   VII° = \u00b07   — diminuto com sétima diminuta (totalmente diminuto)
   *
   * A diferença mais importante em relação ao campo maior: o grau I
   * recebe sétima maior sobre tríade menor (m(7M)), um acorde de
   * sonoridade tensa e característica. E o grau VII é totalmente
   * diminuto (°7), diferente do meio-diminuto (m7b5) do campo maior.
   */
  const QUALIDADES_TETRADES_MENOR = [
    "m(7M)",
    "m7(b5)",
    "7M(#5)",
    "m7",
    "7",
    "7M",
    "\u00b07",
  ];

  /**
   * Monta o nome cifrado de um acorde do campo harmônico menor harmônico (tríade).
   * @param {string} tonica - Tônica da tonalidade menor
   * @param {number} grau - Grau (0-6)
   */
  function acordeTriadeMenor(tonica, grau) {
    const escala = escalaMenorHarmonica(tonica);
    if (!escala || grau < 0 || grau > 6) return null;

    const fundamental = escala[grau];
    const qualidade = QUALIDADES_TRIADES_MENOR[grau];

    const formacao = [
      escala[grau],
      escala[(grau + 2) % 7],
      escala[(grau + 4) % 7],
    ];

    const cifraFundamental = notaParaCifra(fundamental);
    const cifra = cifraFundamental + qualidade;

    return {
      cifra,
      formacao,
      grauRomano: GRAUS_ROMANOS_MENOR[grau],
      qualidade,
      fundamental,
    };
  }

  /**
   * Monta o nome cifrado de um acorde do campo harmônico menor harmônico (tétrade).
   * @param {string} tonica - Tônica da tonalidade menor
   * @param {number} grau - Grau (0-6)
   */
  function acordeTetradeMenor(tonica, grau) {
    const escala = escalaMenorHarmonica(tonica);
    if (!escala || grau < 0 || grau > 6) return null;

    const fundamental = escala[grau];
    const qualidade = QUALIDADES_TETRADES_MENOR[grau];

    const formacao = [
      escala[grau],
      escala[(grau + 2) % 7],
      escala[(grau + 4) % 7],
      escala[(grau + 6) % 7],
    ];

    const cifraFundamental = notaParaCifra(fundamental);
    const cifra = cifraFundamental + qualidade;

    return {
      cifra,
      formacao,
      grauRomano: GRAUS_ROMANOS_MENOR[grau],
      qualidade,
      fundamental,
    };
  }

  /**
   * Retorna o campo harmônico menor harmônico completo (7 acordes).
   * @param {string} tonica - Tônica da tonalidade menor
   * @param {'triades'|'tetrades'} tipo
   */
  function campoHarmonicoMenor(tonica, tipo = "triades") {
    const fn = tipo === "tetrades" ? acordeTetradeMenor : acordeTriadeMenor;
    const acordes = [];
    for (let i = 0; i < 7; i++) {
      acordes.push(fn(tonica, i));
    }
    return acordes;
  }

  // =========================================================================
  // API PÚBLICA
  // =========================================================================

  return {
    escalaMaior,
    escalaMenor,
    escalaMenorHarmonica,
    escalaMenorMelodica,
    relativaMaior,
    relativaMenor,
    notaDoGrau,
    acordeTriade,
    acordeTetrade,
    campoHarmonico,
    acordeTriadeMenor,
    acordeTetradeMenor,
    campoHarmonicoMenor,
    notaParaCifra,
    cifraParaNota,
    tonalidades,
    GRAUS_ROMANOS,
    GRAUS_ROMANOS_MENOR,
    CICLO_QUINTAS,
    CICLO_QUARTAS,
    CICLO_QUINTAS_MENORES,
    CICLO_QUARTAS_MENORES,
  };
})();

export { TeoriaMusical };
