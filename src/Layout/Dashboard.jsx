import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='bg-black/90'>
                    <div className="font-Oswald bg-black/70 text-white min-h-screen w-full ">

            <div className='flex'>
            <div className='w-[25%] lg:w-[20%] bg-purple-500/10 border-r border-purple-500 min-h-screen '>
                <h2 className="text-center font-bold text-lg border-b-2 border-purple-500 py-10 ">Visa Naviagator</h2>

                <div className=''>
                    <ul className='dashNav flex flex-col gap-5 font-medium  text-base px-2 my-10'>
                        <NavLink to={'/dashboard/profile'}><li className="hover:bg-purple-400 py-2 duration-500 cursor-pointer pl-2 md:pl-7 rounded-md">Profile</li></NavLink>
                        <NavLink to={'/dashboard/overview'}><li className="hover:bg-purple-400 py-2 duration-500 cursor-pointer pl-2 md:pl-7 rounded-md">Overview</li></NavLink>
                    </ul>
                </div>
                <div className='border-t-2 border-purple-500'>
                    <ul className='dashNav flex flex-col gap-5 font-medium  text-base px-2 my-10'>
                        <NavLink to={'/'}><li className="hover:bg-purple-400 py-2 duration-500 cursor-pointer pl-2 md:pl-7 rounded-md">Home</li></NavLink>
                    </ul>
                </div>
            </div>

            <div className='w-[75%] lg:w-[80%]'>
                <Outlet></Outlet>
            </div>
            </div>

        </div>
        </div>
    );
};

export default Dashboard;