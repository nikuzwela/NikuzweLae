import React from 'react'
import Image from '../images/my.jpeg'
import Footer from '../navbar/footer';
import { ArrowRight } from 'react-feather';
import { Edit2 } from 'react-feather';
import { Layers } from 'react-feather';
import { Grid } from 'react-feather';
import Navbar from '../navbar/navbar';
import Contact from '../connect/contact';
import Whoiam from '../about/whoiam';

const Landingpage = () => {

const cards = [
  {
    title: "INTERMADIATE IN REACT WITH TAILWIND CSS",
    description: "Read more",
    icon:<Edit2/>,
  },
  {
    title: "INTERMADIATE IN BASED JAVASCRIPT",
    description: "Read more",
    icon:<Layers/>,
  },
  {
    title: "ADVANCED IN HTML AND CSS",
    description: "Read more",
    icon:<Grid/>,
  },];

  return (
   <div className=' bg-purple-100 text-[14px]'>
   <Navbar/>
    <div className='px-16 '>
      <div className=" flex pt-20  items-center justify-between ">
          <div className='bg-[#6c4776] w-[45vh] h-[45vh] rounded-full '>
          <img src={Image} className='w-[35vh] h-[35vh] rounded-full'/>
          </div> 
        <div className=''>
          <h3>Hi, I'm</h3>
          <h1 className='text-[20px] py-2'>Laetitia NIKUZWE</h1>
          <p>Passionate <span className='text-[#6c4776]'>Fronted Developer</span> with knack for creating and <br />high-performing web applications</p>
          <div className='py-4'>
       <a href=''className='bg-[#6c4776] rounded-[12px] px-6 h-10 w-32 flex items-center text-white gap-2 ' >  <p >Portifolio</p>< ArrowRight className='h-4 mt-1'/></a>
      </div>
        </div>
      </div>
      <Whoiam/>
      <div className='py-10'>

        <div className=' flex justify-between py-8'>
            <h1 className='text-[20px] font-extrabold w-[20%] '>SKILLS & KNOWLEDGE</h1>
            <p className='w-[58%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto 
            ducimus commodi natusNisi fuga eum at magni, voluptatibus eaque perferendis hic expedita odio voluptates.</p>
    
        <button className='bg-[#6c4776] flex items-center rounded-[12px] px-6 h-10 text-white gap-2'><p>Download CV</p>  <ArrowRight className='h-4  mt-1'/></button>
  
        </div>
        <div className='flex justify-end gap-4'>
         {cards.map((card, index) => (
        <div key={index} className='w-[20%] h-[40vh] bg-white  rounded-[12px] p-6 shadow-lg hover:border-b-4 hover:border-l-2 border-red-300 '>
           <div className='text-red-300'>{card.icon}</div>
          <h2 className='py-2 font-extrabold text-[13px]'>{card.title}</h2>
        
            <a href=''  className='flex gap 2 '>
          <p className='py-2 text-[15px]'>{card.description}...</p>
          <ArrowRight className='h-4  mt-2'/></a>
        </div>
      ))}
    </div>
    </div></div>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Landingpage;