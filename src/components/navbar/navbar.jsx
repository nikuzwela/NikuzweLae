import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-between bg-white rounded-[15px] h-12 items-center fixed w-full z-10 '>
      <h1 className='px-10 text-extrabold text-[25px]'>*LAETITIA*</h1>
      <nav className='list-none flex justify-between gap-6'>
        <li className='hover:underline decoration-[#6c4776] underline-offset-8'><a href='/'>Home</a></li>
        <li className='hover:underline decoration-[#6c4776] underline-offset-8'><a href='#WhoIam'>Who I am</a></li>
        <li className='hover:underline decoration-[#6c4776] underline-offset-8'><a href='/Portifolio'>Portifolio</a></li>
        <li className='hover:underline decoration-[#6c4776] underline-offset-8'><a href='/Blogs'>Blogs</a></li>
        <li className='hover:underline decoration-[#6c4776] underline-offset-8'><a href='#Contact'>Contact me</a></li>
      </nav>
      <ul className='pr-10'>
        <li className='bg-[#6c4776] rounded-[12px] px-6 h-8 text-white flex items-center hover:bg-transparent border-2 hover:text-black border-[#6c4776]'><a href='/Signup'>Sign up</a></li>
      </ul>

    </div>
  )
}

export default Navbar;