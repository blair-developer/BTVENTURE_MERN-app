import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import User from '../../../api/models/user.model';

export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
         <Link to='/'>
         <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-600'>BT</span>
            <span className='text-amber-400'>Venture</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-orange-500 hover:text-purple-400 cursor-pointer'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-green-500 hover:text-purple-400 cursor-pointer'>About</li>
            </Link>
            <Link to='/contactus'>
            <li className='hidden sm:inline text-green-500 hover:text-purple-400 cursor-pointer'>Contact Us</li>
            </Link>
            <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
            ): (
              <li className=' text-green-500 hover:text-purple-400 cursor-pointer'>Sign In</li>
           )}
            </Link>
        </ul>
        </div>
    </header>
  )
}
