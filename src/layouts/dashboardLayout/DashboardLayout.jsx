import './DashboardLayout.css'
import { Link, Outlet,useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { useEffect, useState } from 'react'

function DashboardLayout() {

  const {userId, isLoaded} = useAuth()

  const navigate = useNavigate()

  useEffect(()=>{
    if(isLoaded && !userId){      
      navigate("/sign-in");
    }
    else{
      console.log(userId)
    }
  },[isLoaded, userId, navigate])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="dashboardLayout">
        <div className="menu">
            Menu
        </div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout