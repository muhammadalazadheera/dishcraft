import React from 'react'

function Call2Action() {
  return (
    <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center justify-center h-auto pt-10 md:pt-0 px-2 md:px-0 md:h-[200px] border border-[#b75d6977] border-double shadow my-5 mx-4 md:mx-0'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-[#b75d69]'>Join Our Cooking Community</h2>
        <a className='text-lg font-bold text-[#0081a7] underline' href="#">Get Started</a>
      </div>
      <div className='flex items-center justify-center p-4'>
        <img src="https://i.ibb.co.com/XZ1Y9f4f/4a578394ee0264f1266ab9c968a4a2cd-removebg-preview.png" alt="Cooking" className="w-[300px] h-auto" />
      </div>
    </div>
  )
}

export default Call2Action