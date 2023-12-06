import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/signin';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/profile';
import Header from './components/header';
import PrivateRoute from './components/PrivateRoute';
import Contactus from './pages/contactus';

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/sign-in" element={<SignIn />} />
       <Route path="/sign-up" element={<SignUp />} />
       <Route path="/about" element={<About />} />
       <Route path="/contactus" element={<Contactus />} />
       <Route element={<PrivateRoute/>} >
           <Route path="/profile" element={<Profile/>} />
       </Route>
     </Routes>
   </BrowserRouter>
  )
}
