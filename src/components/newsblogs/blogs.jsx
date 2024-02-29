import React from 'react'
import Image from '../images/my.jpeg'
import { ArrowRight } from 'react-feather';
import Navbar from '../navbar/navbar';
import Footer from '../navbar/footer';

const Blogs = () => {
  const blogcard=[
    {images:<img src={Image}/>,
     titles:"UI/UX Design",
     discriptions:"LOREM IPSUM DOLOR SIT AMET ",
     final:"Explore more"},

     {images:<img src={Image}/>,
     titles:"Fronted Development",
     discriptions:"LOREM IPSUM DOLOR SIT AMET ",
     final:"Explore more"},

     {images:<img src={Image}/>,
     titles:"Frontend Development",
     discriptions:"LOREM IPSUM DOLOR SIT AMET ",
     final:"Explore more"},

     {images:<img src={Image}/>,
     titles:"Frontend Development",
     discriptions:"LOREM IPSUM DOLOR SIT AMET ",
     final:"Explore more"}
  ]

  return (
    <div className=' bg-purple-100'>
      <Navbar/>
    <div className='px-16 bg-purple-100'>
         <h1 className='text-[25px] text-center font-extrabold p-4'>CHECK NEWS AND BLOGS</h1>
        <div className='flex justify-between w-full'>
            <div className='w-[48%]'>
              <img src={Image} className='w-[100vh] h-[40vh]'/>
               <div className='px-4'>
                <p className='text-[15px] py-2'>UI/UX Design and Web Development </p>
                <h1 className='text-[20px] font-extrabold '>LOREM IPSUM DOLOR SIT AMET CONSECTETER  </h1>
                <p className='text-[15px] py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Dolor sed quasi  incidunt porro a, blanditiis debitis soluta 
                repudiandae quod deleniti. Aliquid adipisci iure 
                unde neque natus blanditiis! Debitis, esse iste.</p>
               
                <a href='' className=' text-[15px] flex font-bold'><p>Explore more...</p> <ArrowRight className='h-4  '/></a>
                
               </div>
            </div>
            <div className='grid grid-rows-2 grid-cols-2 w-[48%]'>
              {blogcard.map((cards,index)=>(
              <div key={index} className='p-2'>
              <div>{cards.images}</div>
              <p className='text-[14px] pt-2 pl-2'>{cards.titles}</p>
              <h1  className='font-extrabold text-[14px] leading-5 pl-2 p-2'>{cards.discriptions}</h1>
               <a href='' className='p-2 text-[15px] flex font-bold text-red-300'><p>{cards.final}...</p>
               <ArrowRight className='h-4  '/></a>
              </div>
             ))}
            </div>
        </div>
    </div> 
    <Footer/>  </div>
  )
}

export default Blogs;