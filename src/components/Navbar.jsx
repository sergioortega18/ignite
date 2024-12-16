import React, {useContext, useState} from "react";
import { assets } from '../assets/assets'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (

        <div className="flex items-center justify-between py-5 font-medium">

            {/*primera Seccion */}
            <Link to='/'><img src={assets.logo} className="w-36" alt="" /></Link>


            {/* Segunda Seccion */}
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

                <NavLink to ='/ignite/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className="W-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
                </NavLink>
                <NavLink to ='/services' className='flex flex-col items-center gap-1'>
                    <p>SERVICES</p>
                    <hr className="W-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
                </NavLink>
                <NavLink to ='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className="W-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
                </NavLink>
                <NavLink to ='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className="W-2/4 border-none h-[1.5px] bg-gray-700 hidden"></hr>
                </NavLink>

            </ul>

                <div className='hidden sm:flex items-center gap-2 lg:py-6 '>
                    <button type='submit' className='bg-black text-white text-xs px-6 py-3 rounded'>ESCRIBENOS</button>
                </div>
            

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
      

        {/* Sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                    <div className='flex flex-col text-gray-600'>
                        
                        <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                            <p>Back</p>
                        </div>

                        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/ignite/'>HOME</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/services'>SERVICES</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                        
                        <div className='flex items-center gap-2 px-4 lg:p-6 p-4 '>
                            <button type='submit' className='bg-black text-white text-xs px-2 py-3 rounded'>ESCRIBENOS</button>
                        </div>
                    </div>
            </div>

        </div>
    )

}
export default Navbar