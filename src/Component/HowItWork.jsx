import React from 'react';

const HowItWorks = () => {


  const steps = [
    {
      title: 'Step 1: Create an Account',
      description: 'Sign up with your email to access the visa application platform.',
      icon: 'https://img.icons8.com/?size=100&id=95043&format=png&color=000000',
    },
    {
      title: 'Step 2: Explore Visa Options',
      description: 'Browse through various visa options and choose the one that suits you best.',
      icon: '/src/assets/icons8-explore-100.png',
    },
    {
      title: 'Step 3: Apply for Visa',
      description: 'Fill out the application form and submit the necessary documents.',
      icon: '/src/assets/apply.png',
    },
    {
      title: 'Step 4: Track Application',
      description: 'Stay updated on your application status in real-time.',
      icon: '/src/assets/track.png',
    },
  ];

  return (
    <div className=" py-10">
      <h2 className="text-3xl font-bold text-center mb-5">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-[5%]">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-purple-500/10  border-b border-x border-purple-400  duration-500 cursor-pointer  p-6 rounded-lg text-center shadow-xl"
          >
            <div className='flex justify-center'>
                <img className='h-14 bg-transparent'  src={step.icon} alt="" />
            </div>
            <h3 className="text-xl font-bold mt-3">{step.title}</h3>
            <p className="text-sm font-semibold text-purple-200 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
