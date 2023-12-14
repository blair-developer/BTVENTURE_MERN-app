import React, { useState } from 'react';
//import { Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess,signinFailure } from '../redux/user/userSlice';



export default function Footer(){
    const [formData, setFormData] = useState({}); //store
    const { loading, error } = useSelector((state) => state.user);
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setFormData({  //updating component state
            ...formData,
            [e.target.id]: e.target.value, //sets whatever changinging to its value
          });
          console.log(formData);
    };
    const handleSubscribe = async () => {
        e.preventDefault();
        try {
          const res = await fetch('/api/subnext/subscribe', {
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
          //navigate('/');
        } catch (error) {
          dispatch(signinFailure(error.message));
        }
      };
    return (
     
     <footer className="bg-slate-300 shadow-md text-center fixed bottom-0 w-full">
            {/* <!--Sign-up form section--> */}
            <div className="px-4 pt-4">
                <form onSubmit={handleSubscribe}>
                    <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                        <div className="md:mb-6 md:ml-auto">
                            <p className="text-secondary-800 dark:text-secondary-200">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <div className="relative md:mb-6">
                            <input onChange={handleEmailChange} type='email' className='bg-primary focus:outline-300 w-24 sm:w-64 p-1 border-stone-500 rounded' id="email" placeholder='Email Address' required></input>
                        </div> 

                        <div className="mb-6 md:mr-auto">
                            
                                <button disabled={loading} className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                {loading ? 'Loading...': 'Subscribe'}
                                </button>
                          
                        </div>
                    </div>
                </form>
            </div>

            {/* <!--Copyright section--> */}
            <div className="bg-slate-400 shadow-md bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
                © 2023 Copyright:
                <a
                    className="text-secondary-800 dark:text-secondary-400"
                    href="https://tailwind-elements.com/"
                >BT Venture NGO</a>
            </div>
        </footer>
    );
}