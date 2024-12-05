import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
                    <li> <NavLink to="/" >Home</NavLink> </li>
                    <li> <NavLink to="/allvisa" >All Visas</NavLink> </li> 
                    <li> <NavLink to="/addvisa" >Add Visa</NavLink></li>
                    <li> <NavLink to="/myaddedvisa" >My Added Visas</NavLink> </li> 
                    <li> <NavLink to="/myvisaapplication" >My Visa Applications </NavLink> </li> 
                </>

    return (
            <div className="navbar ">

                <div className="navbar-start">
                    <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content  bg-green-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" >{links}</ul>
                    </div>
                    <p className=" font-bold text-base md:text-xl md:font-extrabold xl:text-3xl ">VISA NAVIGATOR</p>
                </div>
                <div className="navbar-center hidden  lg:flex pl-10">
                    <ul className="menu menu-horizontal  text-sm font-semibold">
                    {links}
                   </ul>
                </div>
                <div className='navbar-end'>
                    <NavLink to={'/login'} className='btn'>Login</NavLink>
                    <NavLink to={'/register'} className='btn'>register</NavLink>
                </div>
            </div>
    );
};

export default Navbar;