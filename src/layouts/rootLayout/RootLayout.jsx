import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './RootLayout.css'

function RootLayout() {
  return (
   <div className="rootLayout">
    <header>
        <Link to = '/' className='logo'>
            {/* <img src="/logo.png" alt="" /> */}
            <span>Lama AI</span>
        </Link>
        <div className="user">User</div>
    </header>
    <main>
        <Outlet/>
        {/* this is where the children come */}
    </main>
   </div>
  )
}

export default RootLayout