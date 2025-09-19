import React from 'react'
import InHomePage from './components/InHomePage'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
      <div className="flex pb-20 bg-gray-50">
          <Navbar />
      </div>
        <InHomePage />
    </div>
  )
}

export default page