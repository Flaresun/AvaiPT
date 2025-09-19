import React from 'react'
import PostRehabPage from './components/PostRehabPage'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
      <div className="flex pb-20 bg-gray-50">
            <Navbar />
      </div>
        <PostRehabPage />
    </div>
  )
}

export default page