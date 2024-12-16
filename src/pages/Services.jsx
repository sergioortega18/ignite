import React from 'react'
import { assets } from '../assets/assets'

const Services = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row border border-gray-300'>
      
      <div className='w-full sm:w-1/2 flex items-center justify-center py-2 sm:py-0'>
          {/* Hero Left Side */}
        <img className='w-full sm:w-1/2' src={assets.partners} alt="" />
      </div>
      
      {/* Hero Right Side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-2 sm:py-0'>
              
              <div className='text-[#414141] flex flex-col lg:p-6' >

                  <div className='flex items-center gap-2  px-4'>
                      <p className='font-medium text-sm md:text-base lead'>PERFORMANCE MARKETING</p>
                      <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                  </div>

                  <h1 className='prata-regular text-xl sm:py-3 lg:text-3xl leading-tight p-4'>Mucho más que Media Buying – Un servicio holístico, estratégico y personalizado para escalar tu negocio de manera rentable.</h1>
                  
                  <div className='flex items-center gap-2 text-base px-4'>
                      <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                      <p className=' font-medium text-sm md:text-base'>NUESTRO SERVICIOS</p>
                  </div>

                  <img className=' w-full px-3 sm:w-96 sm:py-4' src={assets.datos} alt="" />


              </div>
        </div>
      


     
    </div>
  )
}

export default Services
