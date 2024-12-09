import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const MyVisaApplication = () => {

    const [appliedVisa, setAppliedVisa] = useState([]);
    const {user} = useContext(AuthContext);
    const userEmail = user.email;

    useEffect( () => {
        fetch(`http://localhost:5000/applyvisa/${userEmail}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAppliedVisa(data)
        })
    } ,[])

    return (
        <div className='my-20'>
            
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-10'>
                {
                appliedVisa.map(applyVisa => 

                <div className='w-[350px] mx-auto border-2 border-green-200 hover:border-red-200 bg-[#f8edeb] bg-opacity-50  shadow-xl shadow-[#b7e4c7] hover:shadow-red-200 scale-90 hover:scale-95 duration-300 flex flex-col  cursor-pointer' >

                    {/* img */}
                    <div className='mb-5'>
                        <img className='object-cover' src={applyVisa.country_image} alt="" />
                    </div>

                    {/* text */}
                        <div className='p-5 flex flex-col space-y-3'>
                            <span className='flex gap-4 items-center'>
                                <p className='text-lg font-bold'>Country Name :</p>
                                <p className='text-base font-semibold'>{applyVisa.country_name}</p>
                            </span>

                            <span className='flex gap-4 items-center'>
                                <p className='text-lg font-bold'>Visa Type :</p>
                                <p className='text-base font-semibold'>{applyVisa.visa_type}</p>
                            </span>

                            <span className='flex gap-4 items-center'>
                                <p className='text-lg font-bold'>Processing Time :</p>
                                <p className='text-base font-semibold'>{applyVisa.processingtime}</p>
                            </span>

                            <span className='flex gap-4 items-center'>
                                <p className='text-lg font-bold'>Fee :</p>
                                <p className='text-base font-semibold'>{applyVisa.fee}</p>
                            </span>

                            <span className='flex gap-4 items-center'>
                                <p className='text-lg font-bold'>Validity :</p>
                                <p className='text-base font-semibold'>{applyVisa.validity}</p>
                            </span>

                            <span className='flex gap-4 items-start py-3'>
                                <p className='text-base font-bold flex items-start'>Application Method :</p>
                                <p className='text-base font-semibold'>{applyVisa.application_method}</p>
                            </span>

                            <span className='flex gap-4 items-center'>
                                <p className='text-lg font-bold'>Applied Date :</p>
                                <p className='text-base font-semibold'>{applyVisa.date
                                }</p>
                            </span>

                            <span className='flex gap-4 items-center'>
                                <p className='text-lg font-bold'>Applicant's Name :</p>
                                <p className='text-base font-semibold'>{applyVisa.firstName} {applyVisa.lastName}</p>
                            </span>

                            <span className='flex gap-4 items-start py-3'>
                                <p className='text-base font-bold flex items-start'>Applicant's Email :</p>
                                <p className='text-sm font-semibold'>{applyVisa.userEmail}</p>
                            </span>
                        </div>

                        <button className="btn border-none w-[80%] mx-auto  my-5 hover:border-none bg-[#ff2f2f] hover:bg-[#74c69d] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold text-white hover:text-black">Cancel</button>

                </div>

                ) 
                }
            </div>


        </div>
    );
};

export default MyVisaApplication;