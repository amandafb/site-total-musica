import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        canto: "aulas-de-canto.html",
        guitarra: "aulas-de-guitarra.html",
        violao: "aulas-de-violao.html",
        contrabaixo: "aulas-de-contrabaixo.html",
        producao: "producao-musical.html",
        sobre: "sobre.html",
        teoria: "teoria-musical/index.html",
        escalaMaior: "teoria-musical/escala-maior.html",
        escalaMenor: "teoria-musical/escala-menor.html",
        campoMaior: "teoria-musical/campo-harmonico-maior.html",
        campoMaiorTetrades:
          "teoria-musical/campo-harmonico-maior-tetrades.html",
        campoMenor: "teoria-musical/campo-harmonico-menor.html",
        campoMenorTetrades:
          "teoria-musical/campo-harmonico-menor-tetrades.html",
        circulo: "teoria-musical/circulo-das-quintas.html",
      },
    },
  },
});
