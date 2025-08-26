import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

export default function CourseDetails() {
  const { id } = useParams()
  const nav = useNavigate()

  return (
    <section className="section">
      <div className="grid" style={{ gridTemplateColumns: '1.1fr .9fr' }}>
        <Card>
          <div
            className="placeholder"
            style={{ height: 180, marginBottom: 12 }}
          >
            Intro to Motoko
          </div>
          <h2 style={{ margin: '2px 0 8px' }}>Intro to Motoko</h2>
          <p className="subtle">
            Learn fundamentals, hands-on demos and best practices for building
            with ICP canisters.
          </p>
          <div className="divider" />
          <ul className="list small">
            <li>• Duration: 6h</li>
            <li>• Level: Beginner</li>
            <li>• Format: Video + Labs</li>
          </ul>
        </Card>
        <Card>
          <div className="kicker">Checkout</div>
          <h3 style={{ margin: '6px 0' }}>Price</h3>
          <p className="price" style={{ fontSize: 22 }}>
            0.50 ICP
          </p>
          <p className="subtle small">2% platform fee included.</p>
          <div className="divider" />
          <Button onClick={() => nav('/checkout')}>Buy</Button>
          <p className="small subtle" style={{ marginTop: 10 }}>
            Teacher: Ana Code.
          </p>
        </Card>
      </div>
    </section>
  )
}
