import Button from '../components/Button'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const nav = useNavigate()
  return (
    <section className="section">
      <Card>
        <div className="row">
          <span className="success">Payment done successfully</span>
        </div>
        <p className="small subtle">Receipt #1348.</p>
        <div className="divider" />
        <Button onClick={() => nav('/me')}>Go to My Enrollments</Button>
      </Card>
    </section>
  )
}
