import React from 'react'

const Login = () => {
  return (
    <div className='bg-violet-100'>
    <div className='flex justify-between'>
        <div className='flex items-center w-[60%] px-16 '>
        <form className='grid w-full '> 
               <h1 className='text-center pb-8 text-[#6c4776] font-extrabold text-[18px]'>PLEASE SIGN IN</h1>
                <input type='text' placeholder='Enter Email' className='h-8  my-2  rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none  placeholder:text-[12px] pl-2 placeholder:text-black'/>
                <input type='text' placeholder='Enter Password' className='h-8  my-2  rounded-[8px] border-black border-[1px] shadow-md shadow-[#6c4776] outline-none  placeholder:text-[12px] pl-2 placeholder:text-black'/>
             <div className='flex justify-between '>
                <div className='pb-2'>
                <input type='checkbox'/>
                <label className='text-[] text-[14px] pl-[2px]'>Remember me</label>
                </div> 
                 <a href='' className='text-purple-500 text-[14px] underline'>Forget Password?</a>
                </div>
                <input type='submit' value='Sign In'  className='h-8 w-40  rounded-[12px] text-white bg-[#6c4776] hover:bg-purple-600'/>
            </form>
        </div>
     <div className='w-[40%] bg-[#6c4776] h-[100vh] text-white text-center flex items-center px-16'>
        <div className=''>
            <h1 className='text-[18px]'>Hello, welcome back!!</h1>
            <p className='py-6 text-[14px]'>To keep connected with us please Sign in with your personal info.</p>
            <a href='/Signup' className='border-2 border-white bg-transparent px-10 py-[6px] rounded-[12px]'>Sign Up</a>
            </div> </div>
    </div>
    </div>
  )
}

export default Login;