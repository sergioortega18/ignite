import React from "react";
import { assets } from "../assets/assets";

const Campains = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row border border-gray-200 p-4 md:py-32 lg:pt-36 md:gap-24'>
      <Content />
      <Image />
    </div>
  );
};

const Content = () => (
  <div className='w-full sm:w-1/2 flex items-center justify-center pb-0 sm:py-0'>
    <div className='text-[#414141] flex flex-col lg:p-6'>
      <Header />
      <Title />
    </div>
  </div>
);

const Header = () => (
  <div className='flex items-center gap-2 lg:p-4 p-2'>
    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
    <p className='font-medium text-sm md:text-2xl leading-tight'>GESTIÓN DE CAMPAÑAS</p>
  </div>
);

const Title = () => (
  <h1 className='prata-regular text-2xl sm:py-3 lg:text-3xl lg:leading-normal leading-snug p-2'>
    Mucho más que media buying – Un servicio holístico, estratégico y personalizado para escalar tu negocio de manera rentable.
  </h1>
);

const Image = () => (
  <img className='w-full px-2 sm:w-1/3 sm:p-2' src={assets.datos} alt="Datos" />
);

export default Campains;