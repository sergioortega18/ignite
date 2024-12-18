import React from "react";
import { assets } from "../assets/assets";

const Campains = () => {
    return (
        <div className='flex flex-col items-center sm:flex-row border border-gray-200 p-4 p4 md:py-32 lg:pt-40  md:gap-24'>
          

            <div className='w-full sm:w-1/2 flex items-center justify-center pb-0 sm:py-0'>

                <div className='text-[#414141] flex flex-col lg:p-6'>

                    <div className='flex items-center gap-2 text-base'>
                        <p className='font-medium text-sm md:text-2xl leading-tight'> GESTION DE CAMPANIAS</p>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    </div>

                    <h1 className='prata-regular text-xl sm:py-3 lg:text-2xl leading-tight py-4'>Mucho más que Media Buying – Un servicio holístico, estratégico y personalizado para escalar tu negocio de manera rentable.</h1>
                </div>
            </div>

            <img className=' w-full px-2 sm:w-1/3 sm:p-2' src={assets.datos} alt="" />
        </div>
    );
};
export default Campains;