import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';



const VisaDetails = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }


    const handleApply = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const userEmail = form.get('email')
        const firstName = form.get('firstname')
        const lastName = form.get('lastname')
        const date = form.get('date')
        const fee = form.get('fee')

        const country_image = visa.country_image;
        const country_name = visa.country_name;
        const visa_type = visa.visa_type;
        const processingtime = visa.processingtime;
        const description = visa.description;
        const age_restriction = visa.age_restriction;
        const validity = visa.validity;
        const application_method = visa.application_method;
        const requireddocuments1 = visa.requireddocuments1;
        const requireddocuments2 = visa.requireddocuments2;
        const requireddocuments3 = visa.requireddocuments1;


        const applyingVisaDta = {userEmail, firstName, lastName, date, fee ,  country_image, country_name, visa_type, processingtime, description, age_restriction,  validity, application_method, requireddocuments1, requireddocuments2, requireddocuments3 }

        // console.log(applyingVisaDta);

        // send data to server
        fetch('https://10th-assignment-server-ruddy.vercel.app/applyvisa', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(applyingVisaDta)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.insertedId){
                toggleModal();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Visa Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/giveReview')
            }
        })
    }


    const visa = useLoaderData();
    const { _id, country_image, country_name, visa_type, processingtime, description, age_restriction, fee, validity, application_method, requireddocuments1, requireddocuments2, requireddocuments3 } = visa;
    // console.log(visa);

    return (
        <div className='bg-black/90 py-20'>

        <div className=' bg-purple-500/10  border border-purple-400  w-[90%] md:w-[60%] mx-auto  p-5 rounded-lg flex flex-col gap-5 max-w-[720px] shadow-lgduration-300'>
            {/* for image */}
            <div className='w-full'>
                <img className='object-cover mx-auto ' src={country_image} alt="" />
            </div>

            {/* for text */}
            <div className='md:flex justify-between'>
                {/* 1/2 text */}
                <div className='flex flex-col gap-3 mb-5'>
                    <p className='text-lg lg:text-2xl font-bold'><span className='font-extrabold'>Country Name :</span> {country_name}</p>
                    <p className='text-base font-semibold'><span className='text-base font-semibold'>Processing Time :</span> {processingtime}</p>
                    <p className='text-base font-semibold'><span className='text-base font-semibold'>Age Restriction :</span> {age_restriction}</p>
                </div>

                {/* divider */}
                <div className='border-r-2 border-black hidden md:block'></div>

                {/* 2nd 1/2 text */}
                <div className='flex flex-col gap-3'>
                    <p className='text-lg lg:text-2xl font-bold'><span className='font-extrabold'>Visa Type :</span> {visa_type}</p>
                    <p className='text-base font-semibold'><span className='font-bold'>Validity :</span> {validity}</p>
                    <p className='text-base font-semibold'><span className='font-bold'>Fee :</span> {fee}</p>
                </div>
            </div>

            {/* for des and others */}
            <div className='flex flex-col gap-3'>
                <ul className='font-bold text-base'><span className='font-bold underline'>Requirements :</span>
                    <li className='ml-5 font-semibold text-sm'>* {requireddocuments1}</li>
                    <li className='ml-5 font-semibold text-sm'>* {requireddocuments2}</li>
                    <li className='ml-5 font-semibold text-sm'>* {requireddocuments3}</li>
                </ul>

                <p className='text-base font-semibold'><span className='font-bold underline '>Description :</span> {description}</p>
                <p className='text-base font-semibold'><span className='font-bold underline'>Application Method :</span> {application_method}</p>
            </div>

            {/* for button */}
            <div className='mx-auto'>
                <button onClick={toggleModal} className="btn btn-outline btn-sm border-purple-500 hover:bg-purple-500 hover:border-none hover:text-white duration-500 rounded-none  mx-auto mb-2 font-semibold text-white">Apply For The Visa</button>
            </div>
        </div>


        {/* modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-purple-500/20 flex items-center justify-center z-50">
                <div className="bg-black border border-purple-500 rounded-xl text-white p-6 w-[90%] max-w-lg shadow-lg relative">
                  
                    <p className="text-2xl font-bold mb-6 text-center text-purple-500 ">Applying For Visa</p>
                    <form onSubmit={handleApply} className="flex flex-col gap-3 w-full">

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>Email :</p>
                            <input type="text" name="email" defaultValue={user.email} placeholder='Enter your email' id="" className='w-full font-semibold p-2  border border-purple-500   bg-transparent rounded-none' />
                        </div>

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>First Name :</p>
                            <input type="text" name="firstname"  placeholder='Enter Your First Name' id="" className='w-full font-semibold p-2  border border-purple-500   bg-transparent rounded-none' required />
                        </div>

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>Last Name :</p>
                            <input type="text" name="lastname"  placeholder='Enter Your Last Name' id="" className='w-full font-semibold p-2  border border-purple-500   bg-transparent rounded-none' required />
                        </div>

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>Appied Date :</p>
                            <input type="text" name="date" defaultValue={new Date().toISOString().split("T")[0]} placeholder='' id="" className='w-full font-semibold p-2  border border-purple-500   bg-transparent rounded-none' />
                        </div>

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>Fee :</p>
                            <input type="text" name="fee" defaultValue={fee} placeholder='Enter Visa Fee' id="" className='w-full font-semibold p-2  border border-purple-500   bg-transparent rounded-none' />
                        </div>
                        <div className="mt-6 flex gap-10 justify-center">
                            <button  type='submit'
                                className="btn btn-outline btn-success rounded-none btn-sm w-[30%]">Apply
                            </button>
                            <button  
                                onClick={toggleModal}
                                type=''
                                className="btn btn-outline btn-error rounded-none btn-sm w-[30%]">Cancel
                            </button>
                        </div>
                       
                        
                    </form>
                    
                </div>
            </div>) }

        </div>
    );
};

export default VisaDetails;