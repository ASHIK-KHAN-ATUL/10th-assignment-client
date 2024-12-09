import React from 'react';
import { useLoaderData } from 'react-router-dom';



const VisaDetails = () => {

    const visa = useLoaderData();
    const { _id, country_image, country_name, visa_type, processingtime, description, age_restriction, fee, validity, application_method, requireddocuments1, requireddocuments2, requireddocuments3 } = visa;
    console.log(visa);

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
                <button className="btn border-none w-full   hover:border-none bg-[#6cddf1] hover:bg-[#74c69d] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white">Apply For The Visa</button>
            </div>
        </div>

        </div>
    );
};

export default VisaDetails;