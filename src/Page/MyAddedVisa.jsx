import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyAddedVisa = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  }
  const handleModalClose = (visa) => {
    setIsModalOpen(false);
    setSelectedVisa(null)
  }

  const handleDelete = (visaId) => {
    console.log(visaId);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   

        fetch(`http://localhost:5000/visa/${visaId}`, {
            method:"DELETE",
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                        title: "Deleted!",
                        text: "Your Visa has been deleted.",
                        icon: "success"
                      });
                      const remainingVisa = visas.filter(visa => visa._id !== visaId );
                      setVisas(remainingVisa);
            }
        })

        console.log('Deleete confirm')
        }
      });
  }

  const handleUpdateVisa = e => {
    e.preventDefault();

    const form = new FormData(e.target);
    const country_image =  form.get('countryimage')
    const country_name =  form.get('countryname')
    const visa_type =  form.get('visatype')
    const processingtime =  form.get('processingtime')
    const description =  form.get('description')
    const age_restriction =  form.get('agerestriction')
    const fee =  form.get('fee')
    const validity =  form.get('validity')
    const application_method =  form.get('applicationmethod')
    const requireddocuments1 = form.get('requireddocuments1')
    const requireddocuments2 = form.get('requireddocuments2')
    const requireddocuments3 = form.get('requireddocuments3')
    const userEmail = user.email;


    const updatedVisa = {userEmail, country_image, country_name, visa_type, processingtime, description, age_restriction, fee, validity, application_method,  requireddocuments1, requireddocuments2, requireddocuments3}
    console.log(updatedVisa)

    // send data in DB
    fetch(`http://localhost:5000/visa/${selectedVisa._id}`, {
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(updatedVisa)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.matchedCount){
            setIsModalOpen(false);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Visa Updated Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}




  useEffect(() => {
    fetch(`http://localhost:5000/visa/myaddedvisa/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
      });


  }, [userEmail]);





  return (
    <div className="my-20  mx-auto ">
      <h2 className="text-start text-3xl font-bold mb-5 mx-[5%]">
        My Added Visas 
      </h2>

      {
        visas.length > 0? 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className=" bg-[#f8edeb] bg-opacity-50  shadow-xl shadow-[#b7e4c7] hover:shadow-red-200  w-80 mx-auto scale-90  duration-300 flex flex-col  cursor-pointer   "
          >
            <img
              src={visa.country_image}
              alt={visa.country_name}
              className="h-40 w-full object-cover rounded-md"
            />
            <div className="p-4 font-semibold flex flex-col space-y-3 ">
              <h3 className="text-lg font-bold">Name : {visa.country_name}</h3>
              <p className="text-sm">Visa Type : {visa.visa_type}</p>
              <p className="text-sm">
                {" "}
                Processing Time: {visa.processingtime}{" "}
              </p>
              <p className="text-sm">Fee: {visa.fee} BDT</p>
              <p className="text-sm"> Validity: {visa.validity} </p>
              <p className="text-sm">
                {" "}
                Application Method: {visa.application_method}{" "}
              </p>
            </div>

            {/* for btn */}
            <div className=" flex mx-[5%] gap-5 justify-between">

              <button onClick={ () => handleModalOpen(visa)} className="btn border-none w-[40%]  my-5 hover:border-none bg-[#6cddf1] hover:bg-[#74c69d] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white" > Update </button>

              <button onClick={() => handleDelete(visa._id)} className="btn border-none w-[40%]  my-5 hover:border-none bg-[#ff2f2f] hover:bg-[#74c69d] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold text-white hover:text-black"> Delete</button>

            </div>

          </div>
        ))}
      </div>
      :
      <div>
        <h2 className="flex justify-center items-center my-[25%] text-3xl text-red-300 font-bold">The visa hasn't been added yet.</h2>
      </div>

      }


                        {/* Modal */}
                        {isModalOpen && (
              <div className="absolute inset-0 flex  mx-[5%] top-10 sm:top-20 rounded-xl items-center justify-center bg-black bg-opacity-10 z-50 ">
                <div className="relative top-96 sm:top-44 lg:top-24 bg-sky-200   rounded-lg shadow-lg w-11/12 lg:w-2/3 xl:w-1/2 p-6 overflow-y-auto">
                  {/* Modal Header */}
                  <h1 className="text-center font-bold text-2xl pt-4 text-[#52b788]">
                    Update Visa
                  </h1>

                  {/* Modal Form */}
                  <form onSubmit={handleUpdateVisa} className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Country Image */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Country Image
                          </span>
                        </label>
                        <input
                          name="countryimage"
                          type="text"
                          defaultValue={selectedVisa.country_image}
                          placeholder="Country image"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      {/* Country Name */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Country Name
                          </span>
                        </label>
                        <input
                          name="countryname"
                          type="text"
                          defaultValue={selectedVisa.country_name}
                          placeholder="Country name"
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Visa Type */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Visa Type
                          </span>
                        </label>
                        <select
                          name="visatype"
                          defaultValue={selectedVisa.visa_type}
                          className="p-3 rounded-lg border-2 w-full"
                        >
                          <option value="" disabled selected>
                            Select Visa Type
                          </option>
                          <option value="Tourist">Tourist</option>
                          <option value="Student">Student</option>
                          <option value="Medical">Medical</option>
                          <option value="Business">Business</option>
                          <option value="Work">Work</option>
                        </select>
                      </div>

                      {/* Processing Time */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Processing Time
                          </span>
                        </label>
                        <input
                          name="processingtime"
                          type="text"
                          defaultValue={selectedVisa.processingtime}
                          placeholder="Processing time"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      {/* Required Documents */}
                      <div className="form-control sm:col-span-2">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Required Documents
                          </span>
                        </label>
                        <div className="flex flex-wrap gap-3">
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="requireddocuments1"
                              value="Valid passport"
                              className="checkbox checkbox-primary"
                              checked={true}
                            />
                            <span>Valid passport</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="requireddocuments2"
                              value="Visa application form"
                              className="checkbox checkbox-primary"
                              checked={true}
                            />
                            <span>Visa application form</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              name="requireddocuments3"
                              value="Recent passport-sized photograph"
                              className="checkbox checkbox-primary"
                              checked={true}
                            />
                            <span>Recent passport-sized photograph</span>
                          </label>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="form-control sm:col-span-2">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Description
                          </span>
                        </label>
                        <textarea
                          name="description"
                          defaultValue={selectedVisa.description}
                          placeholder="Description"
                          className="textarea textarea-bordered w-full"
                          required
                        ></textarea>
                      </div>

                      {/* Age Restriction */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Age Restriction
                          </span>
                        </label>
                        <input
                          name="agerestriction"
                          type="number"
                          defaultValue={selectedVisa.age_restriction}
                          placeholder="Minimum Age"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      {/* Fee */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Fee
                          </span>
                        </label>
                        <input
                          name="fee"
                          type="number"
                          defaultValue={selectedVisa.fee}
                          placeholder="Fee"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      {/* Validity */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Validity
                          </span>
                        </label>
                        <input
                          name="validity"
                          type="text"
                          defaultValue={selectedVisa.validity}
                          placeholder="Validity (e.g., 6 months)"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      {/* Application Method */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-xl font-bold">
                            Application Method
                          </span>
                        </label>
                        <input
                          name="applicationmethod"
                          type="text"
                          defaultValue={selectedVisa.application_method}
                          placeholder="Explain how to apply"
                          className="input input-bordered w-full"
                          required
                        />
                      </div>
                    </div>

                    {/* Modal Actions */}
                    <div className="flex justify-center gap-4 mt-6">

                      <button type="submit"  className="btn border-none w-[40%]  my-5 hover:border-none bg-[#74c69d] hover:bg-[#6cddf1] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white"> Submit </button>

                      <button type="button" onClick={handleModalClose} className="btn border-none w-[40%]  my-5 hover:border-none bg-[#ff2f2f] hover:bg-[#74c69d] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold text-white hover:text-black" > Close </button>

                    </div>
                  </form>

                </div>
              </div>
            )}

    </div>
  );
};

export default MyAddedVisa;
