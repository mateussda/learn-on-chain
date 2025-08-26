import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Container from './components/Container'
import './styles.css'

export default function App() {
  return (
    <Container>
      <Header />
      <Outlet />
      <div className="divider" />
      <footer className="small subtle">Powered by canisters.</footer>
    </Container>
  )
}
