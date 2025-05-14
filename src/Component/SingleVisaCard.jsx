import React from "react";
import { Link } from "react-router-dom";

const SingleVisaCard = ({ visa }) => {
  const {
    _id,
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
    <div className=" bg-purple-500/10  border border-purple-400  shadow-xl rounded-md w-80 mx-auto  flex flex-col justify-evenly ">

        <img className="h-[180px] object-cover" src={country_image} alt="country image!" />

      <div className="card-body p-5 flex flex-col gap-3 border-t-2 border-black">
        <p className="font-sm font-semibold ">Country Name : {country_name}</p>
        <p className="font-sm font-medium ">Visa Type : {visa_type}</p>
        <p className="font-sm font-medium ">Fee : {fee}BDT</p>
        <p className="font-sm font-medium "> Processing Time : {processingtime} </p>
      </div>

      <Link to={`/visadetail/${_id}`} className="btn btn-outline btn-sm border-purple-500 hover:bg-purple-500 hover:border-none hover:text-white duration-500 rounded-none w-1/2 mx-auto mb-2 font-semibold text-white">See Details!</Link>

    </div>
  );
};

export default SingleVisaCard;
