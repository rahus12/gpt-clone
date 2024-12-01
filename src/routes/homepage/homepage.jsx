import './homepage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

function Homepage() {
  return (
    <div className = "homepage">
      <div className="left">
        <h1>LAMA AI</h1>
        <h2>Super charge your creativity and productivity</h2>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, cupiditate ullam? Molestiae delectus possimus animi.</h3>
        <Link>Get Started</Link>
      </div>
      <div className="right">
        <div className="chat">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'We produce food for Mice',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'We produce food for Hamsters',
              1000,
              'We produce food for Guinea Pigs',
              1000,
              'We produce food for Chinchillas',
              1000
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            cursor={true}
          />
        </div>

      </div>     
      
      <div className="terms">
        <img src="" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>

    </div>
  )
}

export default Homepage