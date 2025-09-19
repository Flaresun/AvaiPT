import React from 'react'
import DischargePlanningPage from './components/DischargePlanningPage'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
        <div className="flex pb-20 bg-gray-50">
            <Navbar />
        </div>
            
        <DischargePlanningPage />
    </div>
  )
}

export default page