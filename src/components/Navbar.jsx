import React, { useState } from "react";
import { assets } from '../assets/assets';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-10">
            <div className="container mx-auto flex justify-between items-center p-4 font-medium">
                <Logo />
                <NavLinks />
                <div className="flex items-center">
                    <ContactButton />
                    <MenuButton onClick={() => setVisible(true)} />
                </div>
            </div>
            <SidebarMenu visible={visible} onClose={() => setVisible(false)} />
        </nav>
    );
};



const Logo = () => (
    <a href="#home">
        <img src={assets.logo} className="w-20 md:w-32 ml-3" alt="Logo" />
    </a>
);

const NavLinks = () => (
    <ul className="hidden md:flex gap-5 text-sm text-gray-700">
        {['home', 'servicios', 'nosotros', 'contacto'].map((link) => (
            <NavItem key={link} link={link} />
        ))}
    </ul>
);

const NavItem = ({ link }) => (
    <li>
        <a href={`#${encodeURIComponent(link)}`} className="flex flex-col items-center gap-1">
            <p>{link.toUpperCase()}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </a>
    </li>
);

const ContactButton = () => (
    <button type="submit" className="bg-black text-white text-xs px-6 py-3 rounded hidden md:block">
        ESCRIBENOS
    </button>
);

const MenuButton = ({ onClick }) => (
    <button onClick={onClick} className="sm:hidden">
        <img src={assets.menu_icon} className="w-4 cursor-pointer mr-3" alt="Menu" />
    </button>
);

const SidebarMenu = ({ visible, onClose }) => (
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all overflow-y-auto h-screen ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={onClose} className="flex items-center gap-4 p-3 cursor-pointer">
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
                <p>Back</p>
            </div>
            <ul className="flex flex-col">
                {['home', 'servicios', 'nosotros', 'contacto'].map((link) => (
                    <SidebarItem key={link} link={link} onClick={onClose} />
                ))}
            </ul>
            <div className="py-2 pl-6">
                <button type="submit" className="bg-black text-white text-xs px-6 py-3 rounded">
                    ESCRIBENOS
                </button>
            </div>
        </div>
    </div>
);

const SidebarItem = ({ link, onClick }) => (
    <li onClick={onClick} className="py-2 pl-6 border">
        <a href={`#${encodeURIComponent(link)}`}>{link.toUpperCase()}</a>
    </li>
);

export default Navbar;