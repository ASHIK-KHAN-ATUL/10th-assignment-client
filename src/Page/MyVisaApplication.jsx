import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const MyVisaApplication = () => {

    const [appliedVisa, setAppliedVisa] = useState([]);
    const {user} = useContext(AuthContext);
    const userEmail = user.email;

    const handleCancel = (applyVisaId) => {
        // console.log(applyVisaId)
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

                fetch(`https://10th-assignment-server-ruddy.vercel.app/applyvisa/${applyVisaId}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
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

            // console.log('Delete confirm')
            }
          });
    }

    useEffect( () => {
        fetch(`https://10th-assignment-server-ruddy.vercel.app/applyvisa/${userEmail}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setAppliedVisa(data)
        })
    } ,[])

    return (
        <div className='py-20 bg-black/90 min-h-screen'>
            
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-10 mx-5'>
                {
                appliedVisa.map(applyVisa => 

                <div className=' bg-purple-500/10  border border-purple-400  shadow-xl rounded-md w-80 mx-auto  flex flex-col justify-evenly ' >

                    {/* img */}
                    <div className='mb-5'>
                        <img className='object-cover w-full h-40' src={applyVisa.country_image} alt="" />
                    </div>

                    {/* text */}
                    <div className='p-5 flex flex-col space-y-1 grow'>
                            <span className='flex gap-2 items-center'>
                                <p className='text-base font-bold'>Country Name :</p>
                                <p className='text-sm font-semibold'>{applyVisa.country_name}</p>
                            </span>

                            <span className='flex gap-2 items-center'>
                                <p className='text-base font-bold'>Visa Type :</p>
                                <p className='text-sm font-semibold'>{applyVisa.visa_type}</p>
                            </span>

                            <span className='flex gap-2 items-center'>
                                <p className='text-base font-bold'>Processing Time :</p>
                                <p className='text-sm font-semibold'>{applyVisa.processingtime}</p>
                            </span>

                            <span className='flex gap-2 items-center'>
                                <p className='text-base font-bold'>Fee :</p>
                                <p className='text-sm font-semibold'>{applyVisa.fee}</p>
                            </span>

                            <span className='flex gap-2 items-center'>
                                <p className='text-base font-bold'>Validity :</p>
                                <p className='text-sm font-semibold'>{applyVisa.validity}</p>
                            </span>



                            <span className='flex gap-2 items-center'>
                                <p className='text-base font-bold'>Applied Date :</p>
                                <p className='text-sm font-semibold'>{applyVisa.date
                                }</p>
                            </span>

                            <span className='flex gap-2 items-center'>
                                <p className='text-base font-bold'>Applicant's Name :</p>
                                <p className='text-sm font-semibold'>{applyVisa.firstName} {applyVisa.lastName}</p>
                            </span>

                            <span className='flex gap-2 items-start py-3'>
                                <p className='text-sm font-bold flex items-start'>Applicant's Email :</p>
                                <p className='text-sm font-semibold'>{applyVisa.userEmail}</p>
                            </span>
                    </div>

                    <div className="flex justify-center mt-auto pb-5">
                    <button onClick={() => handleCancel(applyVisa._id)} className="btn btn-outline btn-error rounded-none  w-[70%]">Cancel</button>
                    </div>

                </div>

                ) 
                }
            </div>


        </div>
    );
};

export default MyVisaApplication;