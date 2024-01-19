import React,{useState} from 'react'
import { Bar, DashCard,  Donut, Navbar, MNavbar,NewProfileB } from '../components'
import { Card} from "@tremor/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faXmark} from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {


    const [isProfileVisible, setIsProfileVisible] = useState(false)
    

  return (
    <div className=' relative p-10 lg:flex lg:justify-between lg:h-screen lg:w-full'>
        <div className='lg:hidden'>
        <Navbar/>
        </div>
        <div className='hidden lg:flex lg:h-full '>
        <MNavbar />
        </div>
       
        <div className='flex flex-col items-center space-y-10 lg:space-y-5 lg:w-[79%] '>
        {isProfileVisible && (<><div className='absolute bg-black w-full h-full z-10 opacity-40 top-0 lg:left-0 '>
         </div>  
         <div className='absolute w-full z-30 left-8 lg:w-1/2 lg:left-auto'>
         <NewProfileB/>
         </div> 
         </>
            )} 
            
       <div className='lg:w-full lg:flex lg:justify-between lg:items-center'>
        <h1 className=' font-montserrat font-900 my0 text-[20px]'>Dashboard</h1>

        <div className='hidden lg:flex'>
            <Navbar/>
        </div>
        </div>
            <div className='flex justify-between flex-wrap gap-3 lg:flex-nowrap lg:gap-[50px] lg:w-full '>
               <DashCard/>
            </div>
            <div className='w-full'>
                <Bar/>
            </div>
            <div className='space-y-10 w-full lg:flex lg:justify-between lg:gap-20 lg:space-y-0'>
            <div className='w-full'>
                <Donut/>
            </div>
            <div className='w-full'>
                <Card className='w-full flex flex-col justify-center items-center space-y-3 lg:py-[57px]  py-[40px]'>
                    <div className='bg-[#F5F5F5] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center cursor-pointer'
                    onClick={()=> setIsProfileVisible(true)}>
                    <FontAwesomeIcon icon={faPlus} color='#999CA0' size='2x' />
                    </div>
                    <div className='text-[#858585]'>Add Profile</div>
                </Card>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard