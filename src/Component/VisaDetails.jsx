import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';



const VisaDetails = () => {

    const {user} = useContext(AuthContext);

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
            }
        })
    }


    const visa = useLoaderData();
    const { _id, country_image, country_name, visa_type, processingtime, description, age_restriction, fee, validity, application_method, requireddocuments1, requireddocuments2, requireddocuments3 } = visa;
    // console.log(visa);

    return (
        <div>

        <div className='w-[70%] md:w-[60%] mx-auto my-14 bg-[#caf0f8] p-5 rounded-lg flex flex-col gap-5 max-w-[720px] shadow-lg hover:shadow-red-200 shadow-green-200 duration-300'>
            {/* for image */}
            <div className='w-full'>
                <img className='object-cover mx-auto ' src={country_image} alt="" />
            </div>

            {/* for text */}
            <div className='md:flex justify-between p-2'>
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
            <div className='mx-auto w-[60%]'>
                <button onClick={toggleModal} className="btn border-none w-full   hover:border-none bg-[#6cddf1] hover:bg-[#74c69d] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white">Apply For The Visa</button>
            </div>
        </div>


        {/* modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-[#d8f3dc] rounded-xl p-6 w-[90%] max-w-lg shadow-lg relative">
                  
                    <p className="text-2xl font-bold mb-6 text-center text-black ">Applying For Visa</p>
                    <form onSubmit={handleApply} className="flex flex-col gap-3 w-full">

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>Email :</p>
                            <input type="text" name="email" defaultValue={user.email} placeholder='Enter your email' id="" className='w-full font-semibold p-2 rounded-lg shadow-md' />
                        </div>

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>First Name :</p>
                            <input type="text" name="firstname"  placeholder='Enter Your First Name' id="" className='w-full font-semibold p-2 rounded-lg shadow-md' />
                        </div>

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>Last Name :</p>
                            <input type="text" name="lastname"  placeholder='Enter Your Last Name' id="" className='w-full font-semibold p-2 rounded-lg shadow-md' />
                        </div>

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>Appied Date :</p>
                            <input type="text" name="date" defaultValue={new Date().toISOString().split("T")[0]} placeholder='' id="" className='w-full font-semibold p-2 rounded-lg shadow-md' />
                        </div>

                        <div className='flex gap-5 w-full items-center'>
                            <p className='w-[40%] text-lg font-bold'>Fee :</p>
                            <input type="text" name="fee" defaultValue={fee} placeholder='Enter Visa Fee' id="" className='w-full font-semibold p-2 rounded-lg shadow-md' />
                        </div>
                        <div className="mt-6 text-center">
                        <button  type='submit'
                            className="btn w-[80%] text-black hover:border-none bg-[#bbd0ff] hover:bg-[#90e0ef] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white ">Apply</button>
                    </div>
                       
                        
                    </form>
                    
                </div>
            </div>) }

        </div>
    );
};

export default VisaDetails;