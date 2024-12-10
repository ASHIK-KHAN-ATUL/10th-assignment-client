import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const MyVisaApplication = () => {

    const [appliedVisa, setAppliedVisa] = useState([]);
    const {user} = useContext(AuthContext);
    const userEmail = user.email;

    const handleCancel = (applyVisaId) => {
        console.log(applyVisaId)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/applyvisa/${applyVisaId}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                            Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
                const remainingApplyVisa = appliedVisa.filter(applyVisa => applyVisa._id !== applyVisaId);
                setAppliedVisa(remainingApplyVisa);
                
            console.log('Delete confirm')
            }
          });
    }

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
            
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 '>
                {
                appliedVisa.map(applyVisa => 

                <div className='w-[350px] mx-auto border-2 border-green-200 hover:border-red-200 bg-[#f8edeb] bg-opacity-50  shadow-xl shadow-[#b7e4c7] hover:shadow-red-200 scale-90  duration-300  flex-col  cursor-pointer ' >

                    {/* img */}
                    <div className='mb-5'>
                        <img className='object-cover w-full h-40' src={applyVisa.country_image} alt="" />
                    </div>

                    {/* text */}
                    <div className='p-5 flex flex-col space-y-3 grow'>
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

                    <div className="flex justify-center mt-auto pb-5">
                    <button onClick={() => handleCancel(applyVisa._id)} className="btn border-none w-[80%] mx-auto  my-5 hover:border-none bg-[#ff2f2f] hover:bg-[#74c69d] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold text-white hover:text-black">Cancel</button>
                    </div>

                </div>

                ) 
                }
            </div>


        </div>
    );
};

export default MyVisaApplication;