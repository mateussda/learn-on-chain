import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import syllabus, { Lesson } from '../data/IntroMotokoOutline'

export default function IntroMotoko() {
  const nav = useNavigate()

  return (
    <section className="section">
      <div className="hero">
        <div className="kicker">Course</div>
        <h2 style={{ margin: '4px 0 8px' }}>Intro to Motoko</h2>
        <p className="subtle">
          Aprenda os fundamentos da linguagem Motoko no contexto do Internet
          Computer: do básico da linguagem ao modelo de atores, estado
          persistente, upgrades e padrões para canisters. Ideal para quem quer
          estruturar dApps modulares e escaláveis.
        </p>
        <div className="row" style={{ marginTop: 12 }}>
          <span className="badge">Beginner</span>
          <span className="badge">Total ~ 1h 40m</span>
          <span className="badge">Hands-on + conceitos</span>
        </div>
        <div style={{ marginTop: 16 }}>
          <Button onClick={() => nav('/checkout')}>Start</Button>
          <Button
            variant="ghost"
            style={{ marginLeft: 8 }}
            onClick={() => nav('/me')}
          >
            Back to My Enrollments
          </Button>
        </div>
      </div>

      <div className="section">
        <h3 style={{ margin: '0 0 8px' }}>What you’ll learn</h3>
        <ul className="list small">
          <li>
            Fundamentos de Motoko: tipos, funções, módulos e organização de
            código
          </li>
          <li>
            Conceitos de atores e canisters no ICP, incluindo métodos de
            consulta e atualização
          </li>
          <li>
            Persistência de estado com stable variables e prática de upgrades
          </li>
          <li>
            Padrões assíncronos, chamadas entre canisters e tratamento de erros
          </li>
          <li>
            Montagem de um mini projeto local com dfx para consolidar conceitos
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 style={{ margin: '0 0 8px' }}>Syllabus</h3>
        <div className="grid">
          {syllabus.map((lesson: Lesson) => (
            <Card key={lesson.id}>
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <div className="kicker">Lesson {lesson.id}</div>
                <span className="badge">{lesson.duration}</span>
              </div>
              <h3 style={{ margin: '6px 0 8px' }}>{lesson.title}</h3>
              <ul className="list small">
                {lesson.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
