import React from 'react'
import { assets } from '../assets/assets'
import Campains from '../components/Campains'
import Planner from '../components/Planner'
import Ads from '../components/Ads'

const Services = () => {
  return (
    <div className='flex flex-col items-center sm:flex-col'>
      <main>
        <ServiceSection />
        <SectionWrapper>
          <Ads />
        </SectionWrapper>
        <SectionWrapper>
          <Campains />
        </SectionWrapper>
        <SectionWrapper>
          <Planner />
        </SectionWrapper>
      </main>
    </div>
  )
}

const ServiceSection = () => (
  <section className='py-4'>
    <div className='flex flex-col items-center sm:flex-row border border-gray-300 p-4 pt-24 md:py-32 lg:pt-36 md:gap-24'>
      <div className='w-full sm:w-1/2 flex items-center justify-center pb-0 sm:py-0'>
        <div className='text-[#414141] flex flex-col lg:p-6 md:px-4'>
          <div className='flex items-center gap-2 lg:p-4 p-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-lg md:text-2xl lead'> NUESTROS SERVICIOS</p>
          </div>
          <h1 className='prata-regular text-2xl sm:py-3 md:text-3xl lg:leading-normal leading-snug p-2'>
            Mucho más que Media Buying – Un servicio holístico, estratégico y personalizado para escalar tu negocio de manera rentable.
          </h1>
        </div>
      </div>
      <img className='w-full px-2 sm:w-1/3 sm:p-2 p-2' src={assets.datos} alt="Datos" />
    </div>
  </section>
)

const SectionWrapper = ({ children }) => (
  <section className='py-4'>
    {children}
  </section>
)

export default Services