import React from 'react'
import { assets } from '../assets/assets'

const Services = () => {
  return (
    <div id="#services" className=' p-4 flex flex-col items-center sm:flex-row border border-gray-200'>
      
   

      <div className='w-full sm:w-1/2 flex items-center justify-center py-2 sm:py-0'>

        <div className='text-[#414141] flex flex-col lg:p-6 p-2' >

          <div className='flex items-center gap-2  px-4'>
            <p className='font-medium text-sm md:text-base lead'> NUESTROS SERVICIOS</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>

          <h1 className='prata-regular text-xl sm:py-3 lg:text-3xl leading-tight p-4'>Mucho más que Media Buying – Un servicio holístico, estratégico y personalizado para escalar tu negocio de manera rentable.</h1>


          <img className=' w-full p-2 sm:w-96 sm:p-4' src={assets.datos} alt="" />

        </div>
      </div>

    
      <div className='w-full sm:w-1/2 flex items-center justify-center py-2 sm:py-0'>
        <img className='w-full sm:w-1/2' src={assets.partners} alt="" />
      </div>
      


     
    </div>
  )
}

export default Services
