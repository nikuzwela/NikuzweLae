import React from 'react'
import Image from '../images/my.jpeg'
import Navbar from '../navbar/navbar'
import Footer from '../navbar/footer'

const Portifolio = () => {
  const porti=[
     {photo:<img src={Image}/>
     } ,
     {photo:<img src={Image}/>
     } ,
     {photo:<img src={Image}/>
     } ,
     {photo:<img src={Image}/>
     } ,
     {photo:<img src={Image}/>
     } ,
     {photo:<img src={Image}/>
     } ,
     {photo:<img src={Image}/>
     } , 
     {photo:<img src={Image}/>
     } ,
  ]
  return (
   <div className='bg-purple-100'>
    <Navbar/>
    <div className='px-16 py-14'>
    <div className='grid grid-cols-4 grid-rows-2 gap-10 '>
       {porti.map((photoes,index)=>(
      <div key={index} className='h-[30vh] bg-white  rounded-[12px]'>
        <div className='pt-2'>{photoes.photo }
        
        </div>
      </div>  
       )) } 
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Portifolio;