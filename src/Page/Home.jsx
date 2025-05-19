import React from 'react';
import Banner from '../Component/Banner';
import LatestVisaSection from '../Component/LatestVisaSection';
import HowItWorks from '../Component/HowItWork';
import ReviewSection from '../Component/ReviewSection';
import ShowReview from '../Component/ShowReview';
import WhyChooseUs from '../Component/WhyChooseUs';
import NewsLetter from '../Component/NewsLetter';



const Home = () => {
    return (
        <div className='flex flex-col justify-center mx-auto bg-black bg-opacity-90 space-y-20 '>

            <Banner></Banner>
            <LatestVisaSection></LatestVisaSection>
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
            <ShowReview></ShowReview>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;