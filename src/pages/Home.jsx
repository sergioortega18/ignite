import React from 'react'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className='pt-16 md:pt-32 lg:pt-32'>
      <div 
        className='flex flex-col items-center sm:flex-row p-4 bg-cover bg-center' 
        
      >
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  )
}




const HeroContent = () => (
  <div className='w-full sm:w-1/2 flex items-center justify-center py-2 sm:py-0'>
    <div className='text-[#414141] flex flex-col lg:pl-10'>
      <Header />
      <Title />
      <SubHeader />
      <ActionButton />
    </div>
  </div>
)

const Header = () => (
  <div className='flex items-center gap-2 text-base'>
    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
    <p className='font-semibold text-xs md:text-base'>INBOUND MARKETING</p>
  </div>
)

const Title = () => (
  <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl lg:leading-snug leading-snug py-4'>
     Escala las Ventas de tu Negocio de Manera Rentable
  </h1>
)

const SubHeader = () => (
  <div className='flex items-center gap-2 pb-2'>
    <p className='font-light text-sm md:text-base lead'>Desde el concepto hasta la postproducción</p>
  </div>
)

const ActionButton = () => (
  <div className='flex items-center gap-2 lg:py-6 py-4 pb-0'>
    <button type='submit' className='bg-[#f14823] text-white text-xs px-6 py-3 rounded'>ESCRIBENOS</button>
  </div>
)

const HeroImage = () => (
  <img className='w-full sm:w-1/2 h-1/4' src={assets.hero_img} alt="Hero" />
)

export default Home