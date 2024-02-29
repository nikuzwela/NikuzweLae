import React from 'react'
import Image from '../images/my.jpeg'
import { Circle, Grid } from 'react-feather';

const Whoiam = () => {
  return (
    <div className='flex justify-between gap-10 pt-10' id='WhoIam'>
      
        <div className='pt-10'>
            <p className=''>A front-end developer's role is to combine design and business logic to achieve a user
                -facing product. A wide skill set is necessary to produce a quality user experience that leads 
                to meet business goals. 
            </p>
            <ul className='p-5 leading-6 '>
                <li className='flex gap-2 '><Circle size={10} color='#6c4776' className='mt-2'/><p> Create responsive websites that work on a wide range of devices.</p></li>
                <li className='flex gap-2'><Circle size={10} color='#6c4776' className='mt-2'/><p>Create responsive websites that work on a wide range of devices.</p></li>
                <li className='flex gap-2'><Circle size={10} color='#6c4776' className='mt-2 '/><p>Create responsive websites that work on a wide range of devices.</p></li>
            </ul>
            <p>The work i provide is high quality, full responsive, and tested in a wide range of devices.</p>
        </div>
        <div> <h1 className='text-[20px] font-extrabold overline decoration-red-300 decoration-[3px] '>  WHO I AM</h1>
            <p className='py-3'>I have a commercial experience providing front-end development, producing high 
                quality responsive websites and exceptional user experience.
            </p>
            <div className='flex l-18 '>
                <div>
                <div className=''> <img src={Image} className='w-[35vh] h-[40vh] rounded-[12px] '/> </div>
                 <div className='flex gap-2  '>
                 <h1 className='font-bold pt-3 text-[25px]' >1</h1>
                <h1 className='font-bold pt-2'>Year <br /> experience</h1>
                <div className='w-1 h-8 bg-red-300 mt-2'></div>
                 </div>
                 </div>
                <div className='absolute pt-24 pl-32 '> 
                <Grid className='ml-16 mb-2 text-[#6c4776]'/>
                <img src={Image} className='w-[25vh] h-[25vh] rounded-[12px]'/></div>

            </div>
        </div>
    </div>
  )
}

export default Whoiam;