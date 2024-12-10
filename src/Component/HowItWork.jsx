import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Step 1: Create an Account',
      description: 'Sign up with your email to access the visa application platform.',
      icon: '/src/assets/Create-account.png',
    },
    {
      title: 'Step 2: Explore Visa Options',
      description: 'Browse through various visa options and choose the one that suits you best.',
      icon: '/src/assets/icons8-world.gif',
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
            className="step-card bg-[#b7e4c7] hover:bg-[#74c69d] duration-500 cursor-pointer  p-6 rounded-lg text-center shadow-xl shadow-[#cce9d6] hover:shadow-red-200"
          >
            <div className='flex justify-center'>
                <img className='h-14' src={step.icon} alt="" />
            </div>
            <h3 className="text-xl font-bold mt-3">{step.title}</h3>
            <p className="text-sm font-semibold text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
