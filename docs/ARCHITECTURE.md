# ARCHITECTURE

## Canisters
- **teachers**: CRUD de professores.
- **courses**: CRUD de cursos (preço em e8s).
- **enrollments**: cria matrículas.
- **payments**: gera recibos.

## Fluxo
1) Professor cadastra curso (teachers -> courses).
2) Aluno escolhe curso e paga (payments).
3) Registro de matrícula (enrollments).
