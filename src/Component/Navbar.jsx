import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProvider';


const Navbar = () => {

    const {user, logout} = useContext(AuthContext);
    const [isHover, setIsHover] = useState(false);
    const location = useLocation();
    const [dropdown, setDropdown] = useState(false)

    const links = <>
                    <li> <NavLink to="/" onClick={()=>setDropdown(false)}>Home</NavLink> </li>
                    <li> <NavLink to="/allvisa" onClick={()=>setDropdown(false)}>All Visas</NavLink> </li> 
                    <li> <NavLink to="/addvisa" onClick={()=>setDropdown(false)}>Add Visa</NavLink></li>
                    <li> <NavLink to="/myaddedvisa" onClick={()=>setDropdown(false)} >My Added Visas</NavLink> </li>
                    <li> <NavLink to="/myvisaapplication" onClick={()=>setDropdown(false)}>My Visa Applications </NavLink> </li>
                    {
                        user?.email && <li> <NavLink to="/dashboard/profile" onClick={()=>setDropdown(false)} >Dashboard</NavLink> </li>
                    }

                </>

    return (
            <div className="navbar sticky top-0 z-50 bg-black border-b border-purple-500  lg:px-10">

                <div className="navbar-start">
                    <div className="dropdown">
                            <div onClick={()=>setDropdown(!dropdown)} role="button" className="btn btn-ghost  lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul  tabIndex={0} className={`menu menu-sm ${dropdown ? '' : 'hidden'} absolute bg-black border border-purple-500 text-purple-500 rounded-box z-[1]  w-52 p-2 pt-7 shadow-xl`} onMouseLeave={() => setDropdown(false)} >
                                {links}
                                <span onClick={()=>setDropdown(!dropdown)} className='absolute text-lg  rounded-full h-5 w-5 bg-red-600 flex justify-center items-center top-1 right-1 hover:cursor-pointer'>
                                <p className='pb-1 text-white'>x</p>
                            </span>
                            </ul>
                    </div>
                    {/* <p className=" font-bold text-base md:text-xl md:font-extrabold xl:text-3xl ">VISA NAVIGATOR</p> */}
                    <img src="../../public/icons8-visa-500.png" className='w-12' alt="" />
                </div>
                <div className="navbar-center hidden  lg:flex ">
                    <ul className="menu menu-horizontal  text-sm font-semibold">
                    {links}
                   </ul>
                </div>
                <div className='navbar-end'>
                    {
                        user ? 
                        <div className='flex items-center gap-2 relative cursor-pointer' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                            {/* Profile pic */}
                            <div className='flex items-center'>
                                <div className='h-12 w-12  rounded-full border-2 border-purple-500'>
                                    <img className='object-cover rounded-full' src={user.photoURL} alt="Profile Pic" />
                                </div>
                            </div>
                            

                            {isHover && (
                                <div className='absolute right-0 top-12 bg-black/90 border border-purple-500 text-purple-500 shadow-md rounded-lg w-56 md:w-80 p-3 z-10'>
                                    <div className='text-center mb-3'>
                                        <img src={user.photoURL} className='h-16 w-16 mx-auto rounded-full border-2 border-[#023e8a]'  alt="Profile pic" />
                                        <p className='mt-2 text-[10px] md:text-base font-medium text-start'>Name : {user.displayName}</p>
                                        <p className='mt-2 text-[10px] md:text-base font-medium text-start'>email : {user.email}</p>
                                        <p className='mt-2 text-[8px] md:text-sm font-medium text-start'>Last Sign In : {new Date(user.metadata.lastSignInTime).toLocaleDateString()}</p>
                                        <Link onClick={logout} className='btn btn-outline rounded-none btn-error btn-md text-white mt-2 hover:scale-x-125 '>Logout</Link>
                                    </div>
                                </div>
                            )}
                        </div> 
                        
                        :

                    <div className=' flex gap-4'>
                        {
                            location.pathname === '/register' ? 

                            (<NavLink to={'/login'} className='btn btn-outline btn-success rounded-none btn-sm'>Login</NavLink>) : 
                            (<NavLink to={'/register'} className='btn btn-outline btn-success rounded-none btn-sm'>register</NavLink>)
                        }
                    </div>
                    }
                </div>
            </div>
    );
};

export default Navbar;