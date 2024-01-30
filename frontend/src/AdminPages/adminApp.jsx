import { useEffect, useState } from 'react'
import './admin.css'
import AdminSidebar from './adminSidebar'
import { getUserEmail, getUserRole } from '../Components/LoginPage/LoginHelper'

import AdminHome from './adminHome'

const AdminApp = () =>{

  const [email, setEmail] = useState('')
  const [roles, setRoles] = useState('')
  useEffect(()=>{
   setEmail(getUserEmail())
   setRoles(getUserRole())
    
  }, [])


  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      {/* <AdminHeader OpenSidebar={OpenSidebar}/> */}
      <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminHome />
    </div>
  )
}

export default AdminApp