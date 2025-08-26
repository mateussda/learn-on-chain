export type Lesson = {
  id: number
  title: string
  duration: string
  points: string[]
}

const syllabus: Lesson[] = [
  {
    id: 1,
    title: "Welcome & Tooling",
    duration: "8 min",
    points: [
      "O que é ICP e onde o Motoko se encaixa",
      "Instalação do DFX e visão do projeto",
      "Estrutura de pastas e ciclo de desenvolvimento"
    ]
  },
  {
    id: 2,
    title: "Language Basics",
    duration: "18 min",
    points: [
      "Imutabilidade e variáveis",
      "Tipos, records e variants",
      "Funções, módulos e imports"
    ]
  },
  {
    id: 3,
    title: "Actors & Canisters",
    duration: "16 min",
    points: [
      "Modelo de atores no ICP",
      "Métodos públicos e de consulta",
      "Interfaces Candid"
    ]
  },
  {
    id: 4,
    title: "State & Persistence",
    duration: "14 min",
    points: [
      "Stable variables",
      "Upgrades e segurança de dados",
      "Padrões para coleções"
    ]
  },
  {
    id: 5,
    title: "Inter-canister Patterns",
    duration: "12 min",
    points: [
      "Assíncrono com async/await",
      "Noções de cycles e custo",
      "Tratamento de erros"
    ]
  },
  {
    id: 6,
    title: "Mini Project",
    duration: "20 min",
    points: [
      "Construindo um contador simples",
      "Expondo list/get/create",
      "Testando localmente com dfx"
    ]
  },
  {
    id: 7,
    title: "Next Steps",
    duration: "6 min",
    points: [
      "Documentação e recursos",
      "Armadilhas comuns",
      "Caminhos de evolução"
    ]
  }
]

export default syllabus
