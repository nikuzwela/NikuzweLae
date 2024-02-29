import React from 'react'
import { Mail, PhoneCall, Smile } from 'react-feather';

const Contact = () => {
  return (
    <div id='Contact'>
    <div className='flex justify-between px-16 py-10 gap-16'>
      
        <div className='grid '>
        <div className='flex gap-6'>
            <input type='text' placeholder='Enter Name' className='h-8  my-2  rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none  placeholder:text-[12px] pl-2 placeholder:text-black'/>
            <input type='phone' placeholder='Phone Number' className='h-8   my-2 rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none  placeholder:text-[12px] pl-2 placeholder:text-black'/></div>
            <input type='text' placeholder='Subject' className='h-8  my-2 rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776]  outline-none placeholder:text-[12px] pl-2 placeholder:text-black'/>
            <textarea type='text' placeholder='Message' className='h-24  my-2 rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776]  outline-none placeholder:text-[12px] pl-2 pt-2 placeholder:text-black'/>
            <button className='bg-[#6c4776] w-40 rounded-[12px] px-6 h-10 px-10 my-4 text-white '>Send message</button>
         </div>
         
        <div>
            <h1 className='text-[20px] font-extrabold py-4 overline decoration-red-300 decoration-[3px] '>CONNECT WITH ME</h1>
           <div className='
           flex gap-1'> <h1 className='font-bold text-[18px]'> I would like to hear from you </h1><Smile size={18} color='#6c4776'/></div>
            <p  className='py-4 '>Share your feedback with me! I value your thoughts on my portifolio website. 
               Contact me today and help me pursue in this career.</p>
          <div className='text-[12px] '>
           <p className='flex gap-2 pb-2'> <PhoneCall size={14}/><span>(+250) 782025442</span></p>
           <p className='flex gap-2'> <Mail size={14}/> <span >nikuzwelaetitia@gmail.com</span></p></div> 

        </div>
    </div></div>
  )
}

export default Contact;