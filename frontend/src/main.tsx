import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import CheckoutMock from './pages/Checkout'
import MyEnrollments from './pages/MyEnrollments'
import IntroMotoko from './pages/IntroMotoko'
import CoursePlayer from './pages/CoursePlayer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'courses/:id', element: <CourseDetails /> },
      { path: 'checkout', element: <CheckoutMock /> },
      { path: 'me', element: <MyEnrollments /> },
      { path: 'courses/intro-motoko', element: <IntroMotoko /> },
      { path: 'courses/intro-motoko/player', element: <CoursePlayer /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
