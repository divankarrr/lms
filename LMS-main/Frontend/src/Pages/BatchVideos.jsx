import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import VideoNavbar from '../Components/Layout/videoNavbar';

const BatchVideos = () => {
  const location = useLocation();
  const course = location.state;
  const [currIndex,setCurrIndex]=useState(0);
  const [currVideo, setCurrVideo] = useState(course.videos[0]);

  const getEmbedUrl = (url) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };
  function handleNextVideo(){
    if(currIndex<course.videos.length-1){
     const nextIndex = currIndex + 1;
     setCurrIndex(nextIndex);
     setCurrVideo(course.videos[nextIndex]);
    }
  }
  function handlePreviousVideo() {
  if (currIndex > 0) {
    const prevIndex = currIndex - 1;
    setCurrIndex(prevIndex);
    setCurrVideo(course.videos[prevIndex]);
  }
}


  return (
    <div className="min-h-screen flex bg-[#020617] text-white">
      <div className='hidden md:block flex-[1] border-r border-white/10 overflow-y-auto h-screen'>
        <VideoNavbar course={course} />
      </div>
      <div className='flex-[3] flex flex-col'>
        <div className='w-full h-16 bg-[#050d2e] flex justify-between items-center px-10'>
          <button className='flex items-center gap-2 hover:text-blue-400 transition' onClick={handlePreviousVideo}>
            <i className="fa-solid fa-angle-left"></i>
            Previous
          </button>
          <button className='flex items-center gap-2 hover:text-blue-400 transition' onClick={handleNextVideo}>
            Next
            <i className="fa-solid fa-angle-right"></i>
          </button>

        </div>

        {/* Video Player */}
        <div className='flex-1 p-6'>
          <div className='w-full h-full bg-black rounded-xl overflow-hidden shadow-lg'>
            
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(currVideo.url)}
              allowFullScreen
              className="w-full h-full"
            />

          </div>
        </div>

      </div>

    </div>
  )
}

export default BatchVideos;