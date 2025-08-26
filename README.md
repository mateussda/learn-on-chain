# Mini-Marketplace de Cursos (ICP · 4 Canisters · Frontend Mock)

## ICP e Canisters
- **ICP (Internet Computer Protocol)**: blockchain pública para rodar apps completos on-chain.
- **Canisters**: unidades computacionais (código + estado) que expõem métodos e se comunicam.

## Canisters deste projeto
1. **teachers** — cadastro de professores.
2. **courses** — catálogo de cursos e preços.
3. **enrollments** — registro de matrículas.
4. **payments** (mock) — simula pagamentos/recibos.

## Dor & Solução (Modelo)
- **Dor**: taxas altas e dados centralizados.
- **Solução**: marketplace com taxa fixa **2%** e transparência de estado.
- **MVP**: pagamentos **mock** (sem ICP real).

## Como rodar (mock)
```bash
# terminal 1
dfx start --background
dfx deploy   # opcional, só para compilar/implantar canisters

# terminal 2 (frontend)
cd src-frontend
npm install
npm run dev
```