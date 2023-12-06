import React from 'react'

export default function Contactus() {
  return (
    <div className='p-3 max-w-lg'>
       <form className='flex flex-col gap-4'>
        <h1 className='font-semibold text-center p-4'>Contact us form</h1>
          <input type='text' placeholder='Enter your username' className='border p-2 rounded-lg' />
          <input type='email' placeholder='Enter Your Email' className='border p-2 rounded-lg' />
          <input type='text' placeholder='Enter your email' className='border p-2 rounded-lg' />
          <textarea className=''>
             
          </textarea>
       </form>
    </div>
  )
}
