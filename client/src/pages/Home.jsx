import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import mankey from './images/Mankey.jpg'  
function Home() {
  const [likes, setLikes] = useState(0)
  const [features] = useState([
    'Components and Props',
    'Hooks (useState, useEffect, etc.)',
    'Routing with React Router',
    'Icons with React Icons',
    'Styling with CSS'
  ])
  useEffect(() => {
    console.log('Home component mounted')
    return () => {
      console.log('Home component unmounted')
    }
  }, [])
  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1)
  }
  
  const handleDislike = () => {
    setLikes(prevLikes => Math.max(0, prevLikes -1))
  }

  return (
    <div className="home-page">
      <h1>Welcome to React!</h1>
      <p>This is a demo application showing key React concepts.</p>
      <Card 
        title="React Features" 
        image={mankey}
      >
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="like-section">
          <p>Likes: {likes}</p>
          <div className="button-group">
            <Button variant="primary" onClick={handleLike}>
              <FaThumbsUp /> Like
            </Button>
            <Button variant="secondary" onClick={handleDislike}>
              <FaThumbsDown /> Dislike
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Home