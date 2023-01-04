import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'

const DefaultLayout = () => {
  const [isSideNavActive, setSideNav] = useState(false)
  const toggleSideNav = val => {
    setSideNav(val)
  }
  return (
    <>
        <Navbar toggleSideNav={toggleSideNav} />
        <SideNav isSideNavActive={isSideNavActive} toggleSideNav={toggleSideNav} />
        <Outlet />
    </>
  )
}

export default DefaultLayout