import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { CustomButton } from '../components'


    const NewProfileB = () => {
        const [currentStep, setCurrentStep] = useState('basic'); 
    

    const nextStep = () => {
        if (currentStep === 'basic') {
          setCurrentStep('contact');
        }
      };

      const prevStep = () => {
        if (currentStep === 'contact') {
          setCurrentStep('basic');
        }
    }
    const nextBtn = {
        // width: '100%',        
        color: 'white',         
        paddingTop: '.7rem',
        paddingBottom: '.7rem',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        borderRadius: '5px',
    }

    const prevBtn = {
        color: 'black',
        paddingTop: '.7rem',
        paddingBottom: '.7rem',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        borderRadius: '5px',
        border: '1px solid #999CA0',
        backgroundColor: 'transparent'
    }
  return (
    <div className=' mt-24 w-[90%] z-20 !opacity-100 bg-[#F8FAFF] rounded-[16px]'>
            <div className='text-black'>
                <div className='flex justify-between w-full border-b-2 border-[#F2F2F2] py-4 px-8'>
                    <p className='text-[12px]  '>Add New Profile</p>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className='flex justify-evenly p-4 w-full '>
                <div className='flex flex-col items-center w-1/3 gap-4' onClick={() => setCurrentStep('basic')}
          >
            Basic
            <div className={`border-2 w-full rounded-xl ${
              currentStep === 'basic' ? 'border-[#3F84F8]' : 'border-[#D9D9D9]'
            }`} ></div>
          </div>
          <div
            className='w-1/3 flex flex-col items-center gap-4'
            onClick={() => setCurrentStep('contact')}
          >
            Contact
            <div className={`border-2 w-full rounded-xl ${
              currentStep === 'contact' ? 'border-[#3F84F8]' : 'border-[#D9D9D9]'
            }`} ></div>
          </div>
                </div>
                <div className='px-8 py-4'>
                    {currentStep==='basic' &&(
                        <form className='text-[10px] space-y-6 mb-[50px]'>
                        <div className='flex flex-col space-y-3 '>
                            <label>Enter Name</label>
                            <input type="text" placeholder="Eg. John Doe" name="" id="" className='border-[#F2F2F2] px-3 rounded-[5px] p-4'/>
                        </div>
                        <div className='flex flex-col space-y-3 '>
                            <label>Enter Email</label>
                            <input type="type" placeholder="Eg. Johndoe@fdg.com" name="" id="" className='border-[#F2F2F2] px-3 rounded-[5px] p-4'/>
                        </div>
                        <div className='flex flex-col space-y-3 '>
                            <label>Enter Phone </label>
                            <input type="phone" placeholder="Eg. 5634345345345" name="" id="" className='border-[#F2F2F2] px-3 rounded-[5px] p-4'/>
                        </div>
                    </form>
                    )}
                    {currentStep === 'contact' && (
                        <form className='text-[10px] space-y-6 mb-[50px]'>
                        <div className='flex flex-col space-y-3 '>
                            <label>Instagram Link <span className='text-[#999CA0]'>{'('}Optional{')'}</span></label>
                            <input type="text" placeholder="Eg. ..instagram.com/username" name="" id="" className='border-[#F2F2F2] px-3 rounded-[5px] p-4'/>
                        </div>
                        <div className='flex flex-col space-y-3 '>
                            <label>Youtube Link <span className='text-[#999CA0]'>{'('}Optional{')'}</span></label>
                            <input type="type" placeholder="Eg. Johndoe@fdg.com" name="" id="" className='border-[#F2F2F2] px-3 rounded-[5px] p-4'/>
                        </div>
                    </form>
                    )}
                    
                    <div className='w-full flex justify-end'>
                    {currentStep === 'basic' ? (
                            <CustomButton style={nextBtn} name='Next' onClick={nextStep} />
                        
            ) : (
                <div className='flex gap-4'>
              <CustomButton style={prevBtn} name='Previous' onClick={prevStep} />
              <CustomButton style={nextBtn} name='Done' onClick={nextStep} />
              </div>
            )}
                    </div>
                </div>
            </div>
            </div>
  )
}

export default NewProfileB