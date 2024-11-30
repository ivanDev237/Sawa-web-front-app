import { Check, Hourglass } from 'lucide-react'
import React from 'react'

export default function Final() {
  return (
    <div className='container md:mt-8 flex items-center justify-center gap-5'> 

      <div className='flex flex-col items-center'>
      <div className='bg-blue-600 w-[50px] h-[50px] rounded-[50%] p-1 flex items-center justify-center'  >
              <Hourglass color='white' />
          </div>
          <div className='mt-3 text-xl font-semibold uppercase text-green-500'>
              congratulation
          </div>

          <div className=' text-sm font-semibold  text-gray-500'>
          An email will be sent to you after verification 
          </div>

          <a className='mt-10 ' href='/'>
          <button className='h-10 px-5 text-green-700  transition-colors duration-150 border border-gray-300 rounded-lg
          focus:shadow-outline hover:bg-green-500 hover:text-green-100'>close</button>
          </a>
      </div>

      
    </div>
  )
}
