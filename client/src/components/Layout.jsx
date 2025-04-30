import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { FaMoon, FaSun } from 'react-icons/fa'
function Layout({ theme, toggleTheme }) {
  return (
    <>
      <Navbar />
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} My React App - Created with React</p>
      </footer>
    </>
  )
}

export default Layout