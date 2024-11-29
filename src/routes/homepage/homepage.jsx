import './homepage.css'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className = "homepage">
      <div className="left">
        <h1>Lama AI</h1>
        <h2>Super charge your creativity and productivity</h2>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, cupiditate ullam? Molestiae delectus possimus animi.</h3>
        <Link>Get Started</Link>
      </div>
      <div className="right">

      </div>
      
    </div>
  )
}

export default Homepage