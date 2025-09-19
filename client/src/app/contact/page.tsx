import React from 'react'
import Contact from './component/Contact'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div className="min-h-screen bg-slate-200">
      <Navbar />
      <Contact/>
    </div>
  )
}

export default page