import React from 'react'
import { Outlet } from 'react-router-dom'
import TeacherNavBar from '../Teacher/TeacherNavBar'

const TeacherLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white">
      <TeacherNavBar />
      <div className="md:ml-64 p-6 md:p-8">
        <Outlet />
      </div>
    </div>
  )
}

export default TeacherLayout
