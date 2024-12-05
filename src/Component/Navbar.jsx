import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProvider';


const Navbar = () => {

    const {user, logout} = useContext(AuthContext);

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
                <div className="navbar-center hidden  lg:flex ">
                    <ul className="menu menu-horizontal  text-sm font-semibold">
                    {links}
                   </ul>
                </div>
                <div className='navbar-end'>
                    {
                        user ? 
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <div className='h-12 w-12 xl:w-16 xl:h-16 rounded-full border-2 border-black'>
                                    <img className='object-cover rounded-full' src={user.photoURL} alt="Profile Pic" />
                                </div>
                                <p>{user.displayName}</p>
                            </div>
                            <Link onClick={logout} className='btn'>Logout</Link>
                        </div> 
                        
                        :

                    <div className=' flex gap-4'>
                        <NavLink to={'/login'} className='btn'>Login</NavLink>
                        <NavLink to={'/register'} className='btn'>register</NavLink>
                    </div>
                    }
                </div>
            </div>
    );
};

export default Navbar;