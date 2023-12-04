import React from 'react';
import { useState } from "react";
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess,signinFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({}); //store
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //function for event handlers for input changes in a form.
  const handleChange = (e) => {
    setFormData({  //updating component state
      ...formData,
      [e.target.id]: e.target.value, //sets whatever changinging to its value
    });
    console.log(formData);
  };
  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevent refresh page
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',
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
        dispatch(signinFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signinFailure(error.message));
    }
   
   // console.log(formData);
  }
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
       <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input type='email' placeholder='enter email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
          <input type='password' placeholder='enter password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
          <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...': 'Sign In'}</button>
        <OAuth />
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Dont't Have an account?</p>
          <Link to={"/sign-up"}>
              <span className='text-blue-700'>Sign Up</span>
          </Link>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
