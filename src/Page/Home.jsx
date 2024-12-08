import React from 'react';
import Banner from '../Component/Banner';
import LatestVisaSection from '../Component/LatestVisaSection';



const Home = () => {
    return (
        <div className='flex flex-col justify-center mx-auto bg-black bg-opacity-5'>

            <Banner></Banner>
            <LatestVisaSection></LatestVisaSection>
        </div>
    );
};

export default Home;