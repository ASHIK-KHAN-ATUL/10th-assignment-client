import React from 'react';
import error from '../../src/assets/icons8-error.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-5 text-[#f03737] text-center">
        <div className="p-10 bg-white rounded-xl shadow-lg max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
          <p className="text-lg font-medium mb-6">
            It seems the page you're looking for doesn't exist or has been moved.
          </p>
          <img src={error} alt="404 Error" className="w-20 my-8 mx-auto"/>
          <Link to={'/'} className="btn border-none hover:border-none bg-[#74c69d] hover:bg-[#6cddf1] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white" > Go to Home</Link>
        </div>
        
      </div>
    );
};

export default Error;