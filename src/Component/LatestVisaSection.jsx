import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const LatestVisaSection = () => {

    const navigate = useNavigate();

    const [visas, setVisas] = useState([]);
    useEffect ( () => {
        fetch('https://10th-assignment-server-ruddy.vercel.app/latesvisas')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setVisas(data)
        })
    } )

    // console.log(visas)

    return (
        <div className="my-10 mx-auto">
            <h2 className="text-center text-3xl font-bold mb-5">Latest Visas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    visas.map(visa => (
                        <div key={visa._id} className=" bg-purple-500/10  border border-purple-400  shadow-xl rounded-md w-80 mx-auto  flex flex-col justify-evenly" >
                            <img src={visa.country_image} alt={visa.country_name} className="h-40 w-full object-cover rounded-md" />
                            <div className="p-4 font-semibold flex flex-col space-y-3 ">
                                <h3 className="text-base font-bold">Name : {visa.country_name}</h3> 
                                <p className="text-sm">Visa Type : {visa.visa_type}</p>
                                <p className="text-sm"> Processing Time: {visa.processingtime} </p>
                                <p className="text-sm">Fee: {visa.fee} BDT</p>
                                <p className="text-sm"> Validity: {visa.validity} </p>
                            </div>
                            <Link to={`/visadetail/${visa._id}`} className="btn btn-outline btn-sm border-purple-500 hover:bg-purple-500 hover:border-none hover:text-white duration-500 rounded-none w-1/2 mx-auto mb-2 font-semibold text-white">See Details!</Link>
                        </div>
                    ) )
                }
            </div>
            <div className="text-center mt-8">
                <button
                    className='btn border-none hover:border-none bg-[#6cddf1] hover:bg-[#74c69d] hover:shadow-lg hover:shadow-[#6cddf1] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white'
                    onClick={() => navigate('/allvisa')}
                >
                    See All Visas
                </button>
            </div>
        </div>
    );
};

export default LatestVisaSection;