import React from 'react'
import Login from './components/Login';
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <div className="">
      <div className="flex pb-20 bg-gray-50">
          <Navbar />
      </div>
        <Login />
    </div>
  )
}

export default page