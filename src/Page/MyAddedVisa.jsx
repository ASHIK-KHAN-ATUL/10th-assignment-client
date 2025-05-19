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
    // console.log(visaId);
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

        fetch(`https://10th-assignment-server-ruddy.vercel.app/visa/${visaId}`, {
            method:"DELETE",
        })
        .then(res => res.json())
        .then( data => {
            // console.log(data);
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

        // console.log('Deleete confirm')
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
    // console.log(updatedVisa)

    // send data in DB
    fetch(`https://10th-assignment-server-ruddy.vercel.app/visa/${selectedVisa._id}`, {
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(updatedVisa)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data)
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
    fetch(`https://10th-assignment-server-ruddy.vercel.app/visa/myaddedvisa/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
      });


  }, [userEmail]);





  return (
    <div className="py-20 bg-black/90 mx-auto ">
      <h2 className="text-start text-3xl font-bold mb-5 mx-[5%]">
        My Added Visas 
      </h2>

      {
        visas.length > 0? 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className=" bg-purple-500/10  border border-purple-400  shadow-xl rounded-md w-80 mx-auto  flex flex-col justify-evenly "
          >
            <img
              src={visa.country_image}
              alt={visa.country_name}
              className="h-40 w-full object-cover rounded-md"
            />
            <div className="p-4 font-semibold flex flex-col space-y-3 ">
              <h3 className="text-lg font-bold">Name : {visa.country_name}</h3>
              <p className="text-sm">Visa Type : {visa.visa_type}</p>
              <p className="text-sm">   Processing Time: {visa.processingtime} </p>
              <p className="text-sm">Fee: {visa.fee} BDT</p>
              <p className="text-sm"> Validity: {visa.validity} </p>
            </div>

            {/* for btn */}
            <div className=" flex gap-5 justify-evenly mb-3">

              <button onClick={ () => handleModalOpen(visa)} className="btn btn-outline btn-success rounded-none btn-sm w-[40%]" > Update </button>

              <button onClick={() => handleDelete(visa._id)} className="btn btn-outline btn-error rounded-none btn-sm w-[40%]"> Delete</button>

            </div>

          </div>
        ))}
      </div>
      :
      <div>
        <h2 className="flex justify-center items-center my-[25%] text-3xl text-red-500 font-bold">The visa hasn't been added yet.</h2>
      </div>

      }


                        {/* Modal */}
              {isModalOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center overflow-y-auto ">
                <div className=" bg-black  border border-purple-500 w-[90%] max-h-[90vh] overflow-y-auto rounded-lg shadow-lg py-10 px-5 mt-10">
                  {/* Modal Header */}
                  <h1 className="text-center font-bold text-2xl py-4 text-purple-500">
                    UPDATE VISA
                  </h1>

                  {/* Modal Form */}
                  <form onSubmit={handleUpdateVisa} className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                      {/* Country Image */}
                      <div className="form-control">
                        <label className="label">
                          <span className=" text-xl font-bold">
                            Country Image
                          </span>
                        </label>
                        <input
                          name="countryimage"
                          type="text"
                          defaultValue={selectedVisa.country_image}
                          placeholder="Country image"
                          className="input border border-purple-500 rounded-none bg-transparent w-full"
                          required
                        />
                      </div>

                      {/* Country Name */}
                      <div className="form-control">
                        <label className="label">
                          <span className=" text-xl font-bold">
                            Country Name
                          </span>
                        </label>
                        <input
                          name="countryname"
                          type="text"
                          defaultValue={selectedVisa.country_name}
                          placeholder="Country name"
                          className="input border border-purple-500 rounded-none bg-transparent w-full"
                        />
                      </div>

                      {/* Visa Type */}
                      <div className="form-control">
                        <label className="label">
                          <span className="text-xl font-bold">
                            Visa Type
                          </span>
                        </label>
                        <select
                          name="visatype"
                          defaultValue={selectedVisa.visa_type}
                          className="p-3  border border-purple-500 bg-transparent w-full"
                        >
                          <option className="text-black bg-purple-500/20" value="" disabled selected>
                            Select Visa Type
                          </option>
                          <option className="text-black bg-purple-500/20" value="Tourist">Tourist</option>
                          <option className="text-black bg-purple-500/20" value="Student">Student</option>
                          <option className="text-black bg-purple-500/20" value="Medical">Medical</option>
                          <option className="text-black bg-purple-500/20" value="Business">Business</option>
                          <option className="text-black bg-purple-500/20" value="Work">Work</option>
                        </select>
                      </div>

                      {/* Processing Time */}
                      <div className="form-control">
                        <label className="label">
                          <span className=" text-xl font-bold">
                            Processing Time
                          </span>
                        </label>
                        <input
                          name="processingtime"
                          type="text"
                          defaultValue={selectedVisa.processingtime}
                          placeholder="Processing time"
                          className="input border border-purple-500 rounded-none bg-transparent w-full"
                          required
                        />
                      </div>

                      {/* Required Documents */}
                      <div className="form-control sm:col-span-2">
                        <label className="label">
                          <span className=" text-xl font-bold">
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
                          <span className=" text-xl font-bold">
                            Description
                          </span>
                        </label>
                        <textarea
                          name="description"
                          defaultValue={selectedVisa.description}
                          placeholder="Description"
                          className="textarea textarea-bordered bg-transparent border border-y-purple-500 rounded-none w-full"
                          required
                        ></textarea>
                      </div>

                      {/* Age Restriction */}
                      <div className="form-control">
                        <label className="label">
                          <span className=" text-xl font-bold">
                            Age Restriction
                          </span>
                        </label>
                        <input
                          name="agerestriction"
                          type="number"
                          defaultValue={selectedVisa.age_restriction}
                          placeholder="Minimum Age"
                          className="input border border-purple-500 rounded-none bg-transparent w-full"
                          required
                        />
                      </div>

                      {/* Fee */}
                      <div className="form-control">
                        <label className="label">
                          <span className=" text-xl font-bold">
                            Fee
                          </span>
                        </label>
                        <input
                          name="fee"
                          type="number"
                          defaultValue={selectedVisa.fee}
                          placeholder="Fee"
                          className="input border border-purple-500 rounded-none bg-transparent w-full"
                          required
                        />
                      </div>

                      {/* Validity */}
                      <div className="form-control">
                        <label className="label">
                          <span className=" text-xl font-bold">
                            Validity
                          </span>
                        </label>
                        <input
                          name="validity"
                          type="text"
                          defaultValue={selectedVisa.validity}
                          placeholder="Validity (e.g., 6 months)"
                          className="input border border-purple-500 rounded-none bg-transparent w-full"
                          required
                        />
                      </div>

                      {/* Application Method */}
                      <div className="form-control">
                        <label className="label">
                          <span className=" text-xl font-bold">
                            Application Method
                          </span>
                        </label>
                        <input
                          name="applicationmethod"
                          type="text"
                          defaultValue={selectedVisa.application_method}
                          placeholder="Explain how to apply"
                          className="input border border-purple-500 rounded-none bg-transparent w-full"
                          required
                        />
                      </div>
                    </div>

                    {/* Modal Actions */}
                    <div className="flex justify-center gap-4 mt-10">

                      <button type="submit"  className="btn btn-outline btn-success rounded-none  w-[30%]"> Submit </button>

                      <button type="button" onClick={handleModalClose} className="btn btn-outline btn-error rounded-none  w-[30%]" > Close </button>

                    </div>
                  </form>

                </div>
              </div>
            )}

    </div>
  );
};

export default MyAddedVisa;
