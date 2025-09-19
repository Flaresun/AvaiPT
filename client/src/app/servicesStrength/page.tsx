import React from 'react'
import StrengthTraining from './components/StrengthTraining'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
        <div className="flex pb-20 bg-gray-50">
            <Navbar />
        </div>
        <StrengthTraining/>
    </div>
  )
}

export default page