import './DashboardLayout.css'
import { Link, Outlet } from 'react-router-dom'

function DashboardLayout() {
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