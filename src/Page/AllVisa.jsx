import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleVisaCard from '../Component/SingleVisaCard';

const AllVisa = () => {

    const visas = useLoaderData();

    return (
        <div className='py-10 bg-black bg-opacity-5 '>
            
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-10'>
                {
                    visas.map(visa => <SingleVisaCard 
                        key={visa._id} 
                        visa={visa} ></SingleVisaCard>)
                }
            </div>
        </div>
    );
};

export default AllVisa;