import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="navbar">
      <div className="brand">
        <span className="brand-badge">◎</span>
        <div>Learn On Chain</div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/me">My Enrollments</Link>
      </div>
    </div>
  )
}
