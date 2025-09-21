import { useNavigate } from 'react-router-dom'
import CardButton from '../components/CardButton'
import Button from '../components/Button'
import syllabus, { Lesson } from '../data/IntroMotokoOutline'

export default function IntroMotoko() {
  const nav = useNavigate()

  const handleLessonClick = (lessonId: number) => {
    nav(`/courses/intro-motoko/player?lesson=${lessonId}`)
  }

  return (
    <section className="section">
      <div className="hero">
        <div className="kicker">Course</div>
        <h2 style={{ margin: '4px 0 8px' }}>Intro to Motoko</h2>
        <p className="subtle">
          Aprenda os fundamentos da linguagem Motoko no contexto do Internet
          Computer: do bǭsico da linguagem ao modelo de atores, estado
          persistente, upgrades e padr��es para canisters. Ideal para quem quer
          estruturar dApps modulares e escalǭveis.
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
        <h3 style={{ margin: '0 0 8px' }}>What you�?Tll learn</h3>
        <ul className="list small">
          <li>
            Fundamentos de Motoko: tipos, fun����es, m��dulos e organiza��ǜo de
            c��digo
          </li>
          <li>
            Conceitos de atores e canisters no ICP, incluindo mǸtodos de
            consulta e atualiza��ǜo
          </li>
          <li>
            PersistǦncia de estado com stable variables e prǭtica de upgrades
          </li>
          <li>
            Padr��es ass��ncronos, chamadas entre canisters e tratamento de erros
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
            <CardButton
              key={lesson.id}
              onClick={() => handleLessonClick(lesson.id)}
              aria-label={`Abrir lesson ${lesson.id}: ${lesson.title}`}
            >
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
            </CardButton>
          ))}
        </div>
      </div>
    </section>
  )
}
