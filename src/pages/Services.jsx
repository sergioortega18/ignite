import React from 'react'
import { assets } from '../assets/assets'
import Campains from '../components/Campains'
import Planner from '../components/Planner'
import Ads from '../components/Ads'

const Services = () => {
  return (
    <div id="#services" className='flex flex-col items-center sm:flex-col'>
      <main>
        <section className='py-4'>
          <Campains />
        </section>
        <section className='py-4'>
          <Planner />
        </section>
        <section className='py-4'>
          <Ads />
        </section>
      </main>

    </div>
  )
}

export default Services
