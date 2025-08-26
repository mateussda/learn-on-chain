import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import CourseCard from '../components/CourseCard'

export default function Courses() {
  const nav = useNavigate()
  const data = useMemo(
    () => [
      {
        id: 1,
        title: 'Intro to Motoko',
        price: 0.5,
        teacher: 'Ana Code',
        level: 'Beginner'
      },
      {
        id: 2,
        title: 'React on ICP',
        price: 0.75,
        teacher: 'Bruno ML',
        level: 'Intermediate'
      },
      {
        id: 3,
        title: 'Building with Canisters',
        price: 0.65,
        teacher: 'Clara Dev',
        level: 'Beginner'
      },
      {
        id: 4,
        title: 'dApp Patterns',
        price: 0.9,
        teacher: 'Davi Chain',
        level: 'Advanced'
      }
    ],
    []
  )

  return (
    <section className="section">
      <h2 style={{ margin: '0 0 8px' }}>Courses</h2>
      <div className="grid">
        {data.map(c => (
          <CourseCard
            key={c.id}
            id={c.id}
            title={c.title}
            price={c.price}
            teacher={c.teacher}
            level={c.level}
            onOpen={id => nav(`/courses/${id}`)}
          />
        ))}
      </div>
    </section>
  )
}
