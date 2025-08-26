import Button from '../components/Button'

export default function Home() {
  return (
    <div className="hero">
      <div className="kicker">Education on-chain</div>
      <h2>Learn On Chain — Mini Courses Marketplace</h2>
      <p className="subtle">
        A clean, modular dApp that structures course catalogs, enrollments and a
        checkout using canisters.
      </p>
      <div className="row" style={{ marginTop: 12 }}>
        <span className="badge">Powered by canisters</span>
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
