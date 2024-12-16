import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row '>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-2 sm:py-0'>
            
            <div className='text-[#414141] flex flex-col lg:p-6' >

                <div className='flex items-center gap-2 text-base px-4'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className=' font-medium text-sm md:text-base'>PERFORMANCE MARKETING</p>
                </div>

                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-tight p-4'> Escala las Ventas de tu Negocio de Manera Rentable</h1>
                
                <div className='flex items-center gap-2 px-4'>   
                    <p className=' font-medium text-base md:text-base lead'>DESDE EL CONCEPTO HASTA LA POSPRODUCCIÓN </p>
                    <p className='w-16 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>

                <div className='flex items-center gap-2 px-4 lg:p-6 p-4'>
                    <button type='submit' className='bg-black text-white text-sm px-10 py-4'>ESCRIBENOS</button>
                </div>

            </div>
      </div>


      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2 h-1/4' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero
