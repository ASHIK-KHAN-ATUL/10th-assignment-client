import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AddVisa = () => {

    const {user} = useContext(AuthContext);

    const handleAddVisa = e => {
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


        const newVisa = {userEmail, country_image, country_name, visa_type, processingtime, description, age_restriction, fee, validity, application_method,  requireddocuments1, requireddocuments2, requireddocuments3}
        console.log(newVisa)

        // send data in DB
        fetch('http://localhost:5000/visa', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newVisa)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Visa Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div className="bg-[#caf0f8] ">
            <h1 className="text-center font-bold text-2xl pt-10 text-[#52b788]">Add New Visa</h1>
            <form onSubmit={handleAddVisa}  className="card-body p-10 font-semibold">

                <div className="lg:grid grid-cols-2 gap-10 ">

                    {/* Country Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Country Image</span>
                        </label>
                        <input name="countryimage" type="text" placeholder="Country image" className="input input-bordered" required />
                    </div>

                    {/* Country Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Country Name</span>
                        </label>
                        <input name="countryname" type="text" placeholder="Country name" className="input input-bordered"  />
                    </div>

                    {/* Visa Type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Visa Type</span>
                        </label>
                        <select name="visatype" id="" className="p-3 rounded-lg border-2 ">
                            <option value="" disabled selected  >Select Visa Type</option>
                            <option value="Tourist">Tourist</option>
                            <option value="Student">Student</option>
                            <option value="Medical">Medical</option>
                            <option value="Business">Business</option>
                            <option value="Work">Work</option>
                        </select>
                    </div>

                    {/* Processing time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Processing Time</span>
                        </label>
                        <input name="processingtime" type="text" placeholder="Processing time" className="input input-bordered" required />
                    </div>

                    {/* Requarments Document */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Required Documents</span>
                        </label>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="requireddocuments1"
                                value="Valid passport"
                                className="checkbox checkbox-primary"
                            />
                            <span>Valid passport</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="requireddocuments2"
                                value="Visa application form"
                                className="checkbox checkbox-primary"
                            />
                            <span>Visa application form</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="requireddocuments3"
                                value="Recent passport-sized photograph"
                                className="checkbox checkbox-primary"
                            />
                            <span>Recent passport-sized photograph</span>
                            </label>
                        </div>
                    </div>

                    {/* Description  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Description</span>
                        </label>
                        <input name="description" type="text" placeholder="Description" className="input input-bordered" required />
                    </div>

                    {/* Age restriction  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Age Restriction</span>
                        </label>
                        <input name="agerestriction" type="number" placeholder="Minimum Age" className="input input-bordered" required />
                    </div>

                    {/* Fee */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Fee</span>
                        </label>
                        <input name="fee" type="number" placeholder="Fee" className="input input-bordered" required />
                    </div>


                    {/* Validity  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Validity</span>
                        </label>
                        <input name="validity" type="text" placeholder="Validity (e.g., 6 months)" className="input input-bordered" required />
                    </div>


                    {/* Application Method */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Application Method</span>
                        </label>
                        <input name="applicationmethod" type="text"  placeholder="Explain how to apply" className="input input-bordered" required />
                    </div>



                </div>
                    
                <div className="form-control mt-6">
                    <button className="w-1/2 lg:w-1/3 mx-auto btn border-none hover:border-none bg-[#6cddf1] hover:bg-[#95d5b2] transition-all duration-300 ease-in-out transform hover:scale-90 font-semibold hover:text-white">Add Visa</button>
                </div>
            </form>
        </div>
    );
};

export default AddVisa;