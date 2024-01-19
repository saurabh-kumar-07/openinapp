import React from 'react'
import { search } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
      
        
        {/* Small Device Navbar Starts Here */}
        <div className=' flex w-full justify-between items-center'>
            <div className='flex w-full bg-white rounded-lg px-3 py-2'>
                <input type='text' placeholder='Search' className='bg-transparent w-full'/>
                <img src={search}/>
            </div>
            <FontAwesomeIcon icon={faBell} size='2x' className='px-5' />
            <img src='#' className='rounded-[50%] bg-black w-[25px] h-[25px] px-5' />
            <FontAwesomeIcon icon={faBars} size='2x' className='pl-4 sm:hidden'/>
        </div>
       
        
           {/* Small Device Navbar Ends Here */}
    </div>
  )
}

export default Navbar