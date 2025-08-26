import Button from '../components/Button'

export default function Home() {
  return (
    <div className="hero">
      <div className="kicker">Education on-chain</div>
      <h2>Learn On Chain — Mini Courses Marketplace</h2>
      <p className="subtle">
        A clean, modular demo that showcases how an ICP dApp could structure
        course catalogs, enrollments and a mocked checkout using four canisters.
      </p>
      <div className="row" style={{ marginTop: 12 }}>
        <span className="badge">4 canisters</span>
        <span className="badge">React mock UI</span>
        <span className="badge">2% platform fee (mock)</span>
      </div>
      <div style={{ marginTop: 16 }}>
        <Button onClick={() => location.assign('/courses')}>
          Browse Courses
        </Button>
        <Button
          variant="ghost"
          style={{ marginLeft: 8 }}
          onClick={() => location.assign('/me')}
        >
          My Enrollments
        </Button>
      </div>
    </div>
  )
}
