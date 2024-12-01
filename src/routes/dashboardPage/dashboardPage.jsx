import React from 'react'
import './dashboardPage.css'


function DashboardPage() {
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="src\assets\react.svg" alt="" />
          <h1>LAMA AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="" alt="" />
            <span>Createa a new chat</span>
          </div>

          <div className="option">
            <img src="" alt="" />
            <span>Analyse images</span>
          </div>

          <div className="option">
            <img src="" alt="" />
            <span>Help me with my code</span>
          </div>

        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder='Ask me anything...' />
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage