import React from 'react'
import { GitHub, Instagram, Linkedin } from 'react-feather';


const Footer = () => {
  return (
    <div className='bg-[#c6a8c7]  '>
        <div>
            <div className='text-center '>
                <h1 className='font-bold text-[17px] p-2 '>LET'S GET YOUR PROJECT START</h1>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button className='bg-[#6c4776] rounded-[12px] px-6 h-10  my-4 text-white '>Hire me </button>
                 <p className=''>Lorem ipsum dolorsit</p>
            </div>
            <div className='flex justify-between list-none py-2 px-6'>
                <h1 className=' text-extrabold text-[25px]'>*LAETITIA*</h1>
                <div className='flex justify-between gap-6'>
                <li className='hover:underline decoration-[#6c4776]'><a href='/'>Home</a></li>
                <li><a href='/WhoIam'>Who I am</a></li>
               <li><a href='/'>Portifolio</a></li>
               <li className='hover:underline decoration-[#6c4776] underline-offset-8'><a href='/'>Blogs</a></li>
               <li><a href='/Contact'>Contact me</a></li></div>
               <div className='flex justify-between gap-2'>
              <a href=''className='bg-[#6c4776] rounded-full p-2'> <Linkedin size={16} color='#ffffff'/></a> 
              <a href='' className='bg-[#6c4776] rounded-full p-2'><Instagram size={16} color='#ffffff' /></a> 
              <a href=''className='bg-[#6c4776] rounded-full p-2'><GitHub size={16} color='#ffffff' /></a>    
               </div>
            </div>
        </div>

    </div>
  )
}

export default Footer;