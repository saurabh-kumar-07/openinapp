
import React from 'react'
import { LoginCard} from '../components'
import { useNavigate } from 'react-router-dom';
import {apple,google} from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareTwitter, faGithub,faDiscord } from '@fortawesome/free-brands-svg-icons'

const Login = ({handleClick}) => {

    const navigate = useNavigate();
    function handleLogin() {
        // Add your login logic here if needed
        // For now, let's assume the user is successfully logged in
        navigate('/dashboard');
      }
  return (
    
    <div className='flex flex-col lg:flex-row h-screen max-w-full '>
        <div className='bg-[#4285F4] h-1/3 lg:h-full lg:w-1/2 max-w-full'>
            <div className='w-full lg:h-[70%]  px-10 pt-10 space-y-14'>
                <span className='font-poppins text-white text-[12px] lg:text-[24px] lg:font-900 font-700'>LOGO</span>
                <h1 className='w-full m-auto lg:h-[80%] lg:flex lg:justify-center lg:items-center font-monserrat text-[40px] font-900 text-white'>Board.</h1>
            </div>
            <div className='hidden lg:flex justify-center gap-14 mx-auto w-full '>
            <FontAwesomeIcon icon={faGithub} size='3x' color='#FFF' />
            <FontAwesomeIcon icon={faLinkedin} size='3x'color='#FFF' />
            <FontAwesomeIcon icon={faSquareTwitter} size='3x' color='#FFF' />
            <FontAwesomeIcon icon={faDiscord} size='3x' color='#FFF' />
            </div>

        </div>
        <div className='bg-[#F8FAFF] lg:flex lg:w-1/2 lg:items-center lg:justify-center '>
            <div className='flex flex-col items-center px-10 space-y-[15px] lg:space-y-[20px]'>
                <div className='flex flex-col items-center lg:items-start lg:w-full'>
                <h1 className='font-monserrat text-[25px] lg:text-[36px] font-700'>Sign In</h1>
                <span className='font-lato font-400 lg:text-[16px] '>Sign in to your account</span>
                </div>
                <div className='flex gap-14 text-[8px] lg:text-[12px] text-[#858585] font-monserrat'>
                    <div className='flex gap-5  items-center bg-white rounded-xl px-8 py-2'>
                        <img src={google} className='w-[20px] h-[20px]'/>
                        <span>Sign in with Google</span>
                
                    </div>
                    <div className='flex gap-5 items-center bg-white rounded-xl px-8 py-2'>
                        <img src={apple} className='w-[20px] h-[20px]'/>
                        <span>Sign in with Apple</span>
                    </div>
                </div>
                <LoginCard handleClick={handleLogin} />
                <p className='font-lato text-[#858585] lg:text-[16px]'>Don't have an account? <span className='text-[#4285F4]'>Register here</span></p>
                
            </div>
        </div>
        <div className='bg-[#4285F4] h-1/3 lg:hidden'>
            <div className=' flex justify-center items-center gap-10 mx-auto w-full h-full '>
            <FontAwesomeIcon icon={faGithub} size='2x' color='#FFF' />
            <FontAwesomeIcon icon={faLinkedin} size='2x'color='#FFF' />
            <FontAwesomeIcon icon={faSquareTwitter} size='2x' color='#FFF' />
            <FontAwesomeIcon icon={faDiscord} size='2x' color='#FFF' />
            </div>
        </div>
    </div>
  )
}

export default Login