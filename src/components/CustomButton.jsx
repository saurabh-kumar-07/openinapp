import React from 'react'

const CustomButton = ({style,name,handleClick,type}) => {
  return (
    <button type={type} style={style} className='block font-montserrat font-900 bg-[#4285F4]' onClick={handleClick} >
        {name}
    </button>
  )
}

export default CustomButton