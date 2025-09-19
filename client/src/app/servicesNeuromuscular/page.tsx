import React from 'react'
import NeuroBalancePage from './components/NeuroBalancePage'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
      <div className="flex pb-20 bg-gray-50">
          <Navbar />
      </div>
        <NeuroBalancePage/>
    </div>
  )
}

export default page