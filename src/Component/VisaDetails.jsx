import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { MdOutlineManageHistory } from "react-icons/md";

const VisaDetails = () => {

    const visa = useLoaderData();
    const { _id, country_image, country_name, visa_type, processingtime, description, age_restriction, fee, validity, application_method, requireddocuments1, requireddocuments2, requireddocuments3 } = visa;

    return (
        <div>

        <div className='w-[70%] md:w-[60%] mx-auto my-14 bg-red-100 p-5 rounded-lg flex flex-col gap-5'>
            {/* for image */}
            <div className='w-full'>
                <img className='object-cover mx-auto max-w-[450px]' src={country_image} alt="" />
            </div>

            {/* for text */}
            <div className='md:flex justify-between'>
                {/* 1/2 text */}
                <div>
                    <p className='text-lg lg:text-2xl font-bold'>Country Name : {country_name}</p>
                    <div className='text-base font-semibold'>
                        <p>Processing Time : {processingtime}</p>
                    </div>
                    <div className='flex items-center gap-3 text- font-semibold'>
                        <MdOutlineManageHistory></MdOutlineManageHistory>
                        <p className=''>Age Restriction : {age_restriction}</p>
                    </div>
                </div>

                {/* divider */}
                <div className='border-r-2 border-black'></div>

                {/* 2nd 1/2 text */}
                <div>
                    <p className='text-lg lg:text-2xl font-bold'>Visa Type : {visa_type}</p>
                    <p className='text-base font-semibold'>Validity : {validity}</p>
                    <p className='text-base font-semibold'>Fee : {fee}</p>
                </div>
            </div>

            {/* for button */}
            <div></div>
        </div>

        </div>
    );
};

export default VisaDetails;