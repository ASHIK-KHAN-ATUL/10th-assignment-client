import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { CiLock } from 'react-icons/ci';
import { FaHandsHelping } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FcProcess } from 'react-icons/fc';

const WhyChooseUs = () => {

    const features = [
        {
            title: 'Verified Visa Information',
            description: 'All visa details are regularly verified to ensure you get accurate and reliable data.',
            icon: <CiLock className='text-6xl text-purple-500' />
        },
        {
            title: 'Real-Time Tracking',
            description: 'Track your visa application status easily, with live updates right from your dashboard.',
            icon: <FaMapLocationDot className='text-6xl text-purple-500' />
        },
        {
            title: 'Fast Application Process',
            description: 'Apply for any visa in just a few clicks with our optimized form and submission flow.',
            icon: <FcProcess className='text-6xl text-purple-500' />
        },
        {
            title: 'User Support & Help',
            description: 'Get assistance at any step through our built-in support system and helpful resources.',
            icon: <FaHandsHelping className='text-6xl text-purple-500' />
        },
    ];
    
    return (
        <div className="py-16 px-[5%]">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Visa Navigator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((item, idx) => (
                    <Fade key={idx} direction="up" delay={idx * 20}>
                        <div className="bg-purple-500/10 border border-purple-500 rounded-xl p-6 text-center shadow-md hover:shadow-xl duration-300 h-64 flex items-center justify-evenly flex-col">
                            <div className='flex justify-center'>
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-purple-400">{item.description}</p>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;