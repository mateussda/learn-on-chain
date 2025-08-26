# Learn On Chain

## Canisters
1. **teachers** — cadastro de professores.
2. **courses** — catálogo de cursos e preços.
3. **enrollments** — registro de matrículas.
4. **payments** - pagamentos/recibos.

## Dor & Solução (Modelo)
- **Dor**: taxas altas e dados centralizados.
- **Solução**: marketplace com taxa fixa **2%** e transparência de estado.
- **MVP**: pagamentos **mock** (sem ICP real).

## Visão geral

Hoje, quem vende cursos online costuma enfrentar taxas elevadas, dependência de plataformas centralizadas e pouca transparência sobre dados de venda e matrículas. A proposta deste projeto é um marketplace on-chain no ICP com taxa fixa de 2%, em que professores publicam cursos e alunos se matriculam com estado transparente e verificável entre canisters. O fluxo de pagamento, nesta versão inicial, é simulado para viabilizar um MVP rápido: o canister de pagamentos emite recibos e sinaliza confirmações para o canister de matrículas, preservando a arquitetura e a experiência do processo de compra, mas sem transferências reais de ICP. A ideia é mostrar como descentralização, custos previsíveis e auditabilidade podem reduzir fricções e aumentar a confiança no ecossistema de cursos digitais.

## Como rodar
```bash

dfx start --background
dfx deploy

cd src-frontend
npm install
npm run dev
```