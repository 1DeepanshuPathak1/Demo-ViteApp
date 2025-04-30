import { Link } from 'react-router-dom'
import { FaExclamationTriangle, FaHome } from 'react-icons/fa'
function NotFound() {
  return (
    <div className="not-found-page">
      <FaExclamationTriangle className="error-icon" />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-link">
        <FaHome /> Back to Home
      </Link>
    </div>
  )
}

export default NotFound