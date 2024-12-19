import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div className='border border-gray-200 p-4 pt-24 md:p-32 lg:pt-40 gap-4'>
            <Header />
            <Content />
        </div>
    );
};



const Header = () => (
    <div className='text-center text-2xl pt-10'>
        <Title text1='CONTACT' text2='US' />
    </div>
);

const Content = () => (
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-8'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact" />
        <ContactDetails />
    </div>
);



const ContactDetails = () => (
    <div className='flex flex-col justify-center items-start gap-6 p-2'>
        <ContactInfo title='Our Store' address='54709 Willms Station Suite 350, Washington, USA' phone='(415) 555-0132' email='admin@forever.com' />
        <CareersInfo />
    </div>
);

const ContactInfo = ({ title, address, phone, email }) => (
    <>
        <p className='font-semibold text-xl text-gray-600'>{title}</p>
        <p className='text-gray-500'>{address}</p>
        <p className='text-gray-500'>Tel: {phone} <br /> Email: {email}</p>
    </>
);

const CareersInfo = () => (
    <>
        <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
    </>
);
export default Contact