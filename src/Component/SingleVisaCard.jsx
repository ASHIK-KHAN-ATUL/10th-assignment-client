import React from "react";

const SingleVisaCard = ({ visa }) => {
  const {
    country_image,
    country_name,
    visa_type,
    processingtime,
    description,
    age_restriction,
    fee,
    validity,
    application_method,
    requireddocuments1,
    requireddocuments2,
    requireddocuments3,
  } = visa;

  return (
    <div className="card  bg-white bg-opacity-50  shadow-xl shadow-[#b7e4c7]  w-80 mx-auto scale-90 hover:scale-95 duration-300 cursor-pointer ">
      <figure className="">
        <img className="" src={country_image} alt="country image!" />
      </figure>
      <div className="card-body flex flex-col gap-3">
        <h2 className="text-xl font-bold text-black">Country Name : {country_name}</h2>
        <p className="text-lg font-semibold text-black">Visa Type : {visa_type}</p>
        <p className="text-lg font-semibold text-black">Fee : {fee}</p>
        <p className="text-lg font-semibold text-black"> Processing Time : {processingtime} </p>
        <div className="">
          <button className="btn border-none w-full hover:border-none bg-[#74c69d] hover:bg-[#6cddf1] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white">See Details!</button>
        </div>
      </div>
    </div>
  );
};

export default SingleVisaCard;
