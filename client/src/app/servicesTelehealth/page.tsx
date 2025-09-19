import React from 'react'
import TelehealthPage from './components/TelehealthPage'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
      <div className="flex pb-20 bg-gray-50">
          <Navbar />
      </div>
        <TelehealthPage />
    </div>
  )
}

export default page