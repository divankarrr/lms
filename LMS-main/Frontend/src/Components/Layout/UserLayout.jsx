import React from 'react'
import Header from '../Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'

const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout