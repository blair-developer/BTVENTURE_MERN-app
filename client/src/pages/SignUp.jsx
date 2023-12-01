import React from 'react';
import { useState } from "react";
import {Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({}); //store
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //function for event handlers
  const handleChange = (e) => {
    setFormData({  //updating component state
      ...formData,
      [e.target.id]: e.target.value, //sets whatever changinging to its value
    });
    console.log(formData);
  };
  const handleSubmit = async (e) =>{
    setLoading(true);
    e.preventDefault(); //prevent refresh page
    try {
      const res = await fetch('/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json(); // convert res to json
      //check the loading in api server
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
       console.log(data); 
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
   
    console.log(formData);
  }
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
       <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input type='text' placeholder='enter username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
          <input type='email' placeholder='enter email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
          <input type='password' placeholder='enter password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
          <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...': 'Sign Up'}</button>
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
              <span className='text-blue-700'>Sign In</span>
          </Link>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
