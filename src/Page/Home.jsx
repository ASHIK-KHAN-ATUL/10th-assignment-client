import React from 'react';
import Banner from '../Component/Banner';
import LatestVisaSection from '../Component/LatestVisaSection';
import HowItWorks from '../Component/HowItWork';
import ReviewSection from '../Component/ReviewSection';
import ShowReview from '../Component/ShowReview';



const Home = () => {
    return (
        <div className='flex flex-col justify-center mx-auto bg-black bg-opacity-5 space-y-20 py-10'>

            <Banner></Banner>
            <LatestVisaSection></LatestVisaSection>
            <HowItWorks></HowItWorks>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;