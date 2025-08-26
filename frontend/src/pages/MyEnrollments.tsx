import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function MyEnrollments() {
  return (
    <section className="section">
      <h2 style={{ margin: '0 0 8px' }}>My Enrollments</h2>
      <p className="subtle small">Cursos vinculados à sua conta local.</p>

      <div className="grid">
        <Card>
          <div className="kicker">2025-08-26</div>
          <h3 style={{ margin: '4px 0 6px' }}>
            <Link to="/courses/intro-motoko">Intro to Motoko</Link>
          </h3>
          <p className="subtle small mono">
            enrollmentId=1 • courseId=1 • user=anonymous
          </p>
          <div className="divider" />
          <div className="small">
            Acesse o conteúdo e o roteiro completo em{' '}
            <Link to="/courses/intro-motoko">/courses/intro-motoko</Link>.
          </div>
        </Card>
      </div>
    </section>
  )
}
