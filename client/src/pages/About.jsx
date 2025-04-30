import { useRef, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

function About() {
  const titleRef = useRef(null)
  const [showDetails, setShowDetails] = useState(false)
  const highlightTitle = () => {
    if (titleRef.current) {
      titleRef.current.classList.add('highlight')
      setTimeout(() => {
        titleRef.current.classList.remove('highlight')
      }, 1000)
    }
  }
  const toggleDetails = () => {
    setShowDetails(prev => !prev)
  }

  return (
    <div className="about-page">
      <h1 ref={titleRef}>About This Demo</h1>
      <p>This page demonstrates useRef and conditional rendering.</p>
      
      <Button onClick={highlightTitle}>
        Highlight Title
      </Button>
      
      <Card title="About React">
        <p>React is a JavaScript library for building user interfaces. It was developed by Facebook.</p>
        
        <Button onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Button>
        {showDetails && (
          <div className="details">
            <h4>Key React Concepts</h4>
            <ul>
              <li>Virtual DOM for efficient updates</li>
              <li>Component-based architecture</li>
              <li>Unidirectional data flow</li>
              <li>JSX for templating</li>
              <li>React hooks for state and lifecycle</li>
            </ul>
          </div>
        )}
      </Card>
    </div>
  )
}

export default About