import React from 'react'
import { Link } from 'react-router-dom'

const BestCourseBar = () => {
  return (
    <div className='pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-5 gap-6 py-6'>
      
      {/* Heading */}
      <div className='w-full sm:w-auto px-8'>
        <h1 className='text-2xl sm:text-4xl font-semibold text-white text-center sm:text-left'>
          Popular <span className='text-blue-600'>Courses</span>
        </h1>
      </div>

      {/* Links */}
      <div className='w-full sm:w-auto px-8'>
        <div className='rounded-lg bg-[#202839] backdrop-blur-md border border-white/10 '>
          
          {/* 🔥 Scroll on mobile */}
          <ul className='flex gap-3 overflow-x-auto'>
            
            <Link to="/design">
              <button className='rounded-md  hover:bg-blue-900 text-gray-200 py-3 px-4 transition text-sm sm:text-lg'>
                Design
              </button>
            </Link>

            <Link to="/development">
              <button className=' rounded-md hover:bg-blue-900 text-gray-200 py-3 px-4 transition text-sm sm:text-lg'>
                Development
              </button>
            </Link>

            <Link to="/business">
              <button className=' rounded-md hover:bg-blue-900 text-gray-200 py-3 px-4 transition text-sm sm:text-lg'>
                Business
              </button>
            </Link>

            <Link to="/scientist">
              <button className=' rounded-md hover:bg-blue-900 text-gray-200 py-3 px-4 transition text-sm sm:text-lg'>
                Scientist
              </button>
            </Link>

            <Link to="/marketing">
              <button className='rounded-md hover:bg-blue-900 text-gray-200 py-3 px-4 transition text-sm sm:text-lg'>
                Marketing
              </button>
            </Link>

          </ul>

        </div>
      </div>

    </div>
  )
}

export default BestCourseBar;