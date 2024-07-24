import React from 'react'
import dynamic from 'next/dynamic'


const Scene = dynamic(() => import('@/components/Scene'), {ssr:false})




const GetStarted = () => {
  return (
    <div >
      {/* <div className='pt-20 h-screen w-full bg-gradient-to-b flex from-gray-800 to-orange-400 items-center justify-center'>
        <div className='flex h-3/5 w-3/5 bg-white border-black border-double border-4'>
            <div className='flex flex-1 justify-center items-center border-r border-solid border-black bg-gradient-to-br from-black to-gray-700'>
                <div className='flex flex-col'>
                    <div className='text-4xl text-blue-600'>Getting.</div>
                    <div className='text-8xl font-serif text-white'>Started</div>
                </div>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                flex 2
            </div>

        </div>
      </div> */}
      <div className='h-screen bg-black'><Scene/></div>
    </div>
  )
}

export default GetStarted
