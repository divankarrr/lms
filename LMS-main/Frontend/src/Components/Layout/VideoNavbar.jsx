import React from 'react'
import { Link } from 'react-router-dom'

const VideoNavbar = ({ course }) => {
  console.log("C",course)

  return (
    <div className='flex flex-col h-screen bg-[#020c3f] px-4 py-4 text-white inset-0'>
      
      {/* Top Row */}
      <div className='flex justify-between items-center mb-6'>
        
        <Link to="/my-courses" className='flex items-center gap-2 hover:text-blue-400'>
          <i className="fa-solid fa-arrow-left"></i>
          <span className='font-serif italic'>Back to course page</span>
        </Link>

        <button>
          <i className="fa-solid fa-backward text-xl"></i>
        </button>

      </div>

      {/* Title */}
      <h1 className='text-xl font-semibold mb-4'>
        {course?.name} ({course?.type})
      </h1>

      {/* Progress */}
      <div className='w-full h-2 bg-white/10 rounded-md overflow-hidden'>
        <div
          className='h-full bg-blue-500'
          style={{ width: `${course?.progress || 0}%` }}
        />
      </div>

      <p className='text-sm text-gray-300 mt-2'>
        {course?.progress}% completed
      </p>

      <hr className='border-white/10 my-4' />

      {/* 🔥 VIDEO LIST */}
      <div className='flex flex-col gap-3 overflow-y-auto flex-1'>
        
        {course?.videos?.map((video, index) => (
          <div
            key={index}
            className='bg-white/5 border border-white/10 rounded-lg px-3 py-3 cursor-pointer 
                       hover:bg-white/10 hover:shadow-lg transition'
          >
            <span className='text-blue-400 mr-2'>{index + 1}.</span>
            {video.topic}
          </div>
        ))}

      </div>

    </div>
  )
}

export default VideoNavbar
