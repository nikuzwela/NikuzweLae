import React from 'react'

const Signup = () => {
  return (
    <div className=' bg-purple-100'>
        <div className='flex justify-between items-center '>
            <div className='w-[40%] bg-[#6c4776] h-[100vh] text-white text-center flex items-center px-8'>
                <div className=''>
                <h1 className='text-[18px]'>Hello, welcome to my site!!</h1>
                <p className='py-6 text-[14px]'> Please enter your Registration details, and start journey with us.
                 </p>
                <a href='/Login' className='border-2 border-white bg-transparent px-10 py-[6px] rounded-[12px]'>Sign In</a>
                 </div> </div>
        <div className='w-[60%] '>
            <form className='grid px-16'>
              <h1 className='text-center pb-8 text-[#6c4776] font-extrabold text-[18px]'>CREATE ACCOUNT</h1>
              <div className='flex justify-between'>
                <input type='text' placeholder='First Name' className='h-8  my-2  rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none  placeholder:text-[12px] pl-2 placeholder:text-black'/>
                <input type='text' placeholder='Last Name' className='h-8   my-2 rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none  placeholder:text-[12px] pl-2 placeholder:text-black'/></div>
                <input type='text' placeholder='Username' className='h-8  my-2 rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776]  outline-none placeholder:text-[12px] pl-2 placeholder:text-black'/>
                <input type='number' placeholder='Phone Number' className='h-8  my-2 rounded-[10px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none placeholder:text-[12px] pl-2 placeholder:text-black'/>
                <input type='email' placeholder='Enter Email' className='h-8  my-2 rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none placeholder:text-[12px] pl-2 placeholder:text-black'/>
                <input type='password' placeholder='Enter Password' className='h-8  my-2 rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none placeholder:text-[12px] pl-2 placeholder:text-black'/>
                <input type='password' placeholder='Confrim Password'className='h-8  my-2 rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none placeholder:text-[12px] pl-2 placeholder:text-black'/>
                <div className='pb-2'>
                  <input type="checkbox"  name='ckeckbox'/>
                  <label className='text-[] text-[14px] pl-2'>I Agree to the terms and conditions of use.</label>
                </div>
                <input type='submit' value='Sign Up' className='h-8 w-40  rounded-[12px] text-white bg-[#6c4776] '/>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Signup;

