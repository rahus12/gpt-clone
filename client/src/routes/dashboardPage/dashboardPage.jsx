import React from 'react'
import './dashboardPage.css'
import NewPrompt from '../../components/newPrompt/newPrompt'


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
      <NewPrompt/>
      
      {/* dont know why the vide0 had used a seperate formcontainer instead of using the component built */}
      {/* <div className="formContainer">
        <form>
          <input type="text" placeholder='Ask me anything...' />
          <button>Send</button>
        </form>
      </div> */}
    </div>
  )
}

export default DashboardPage