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
        // console.log(newVisa)

        // send data in DB
        fetch('https://10th-assignment-server-ruddy.vercel.app/visa', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newVisa)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
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
        <div className="bg-black/90 py-20">
            <div className="bg-purple-500/10  mx-[5%] border border-purple-500">
            <h1 className="text-center font-bold text-3xl pt-10 text-purple-500">Add New Visa</h1>
            <form onSubmit={handleAddVisa}  className="card-body p-10 font-semibold">

                <div className="flex flex-col gap-5 lg:grid grid-cols-2 text-white">

                    {/* Country Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-bold">Country Image</span>
                        </label>
                        <input name="countryimage" type="text" placeholder="Country image" className="border border-purple-500   bg-transparent rounded-none p-2" required />
                    </div>

                    {/* Country Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-bold">Country Name</span>
                        </label>
                        <input name="countryname" type="text" placeholder="Country name" className="border border-purple-500   bg-transparent rounded-none p-2"  />
                    </div>

                    {/* Visa Type */}
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-bold">Visa Type</span>
                        </label>
                        <select name="visatype" id="" className="p-2 border border-purple-500  bg-transparent rounded-none">
                            <option className="text-black bg-purple-500/20"  value="" disabled selected  >Select Visa Type</option>
                            <option className="text-black bg-purple-500/20" value="Tourist">Tourist</option>
                            <option className="text-black bg-purple-500/20"  value="Student">Student</option>
                            <option className="text-black bg-purple-500/20"  value="Medical">Medical</option>
                            <option className="text-black bg-purple-500/20"  value="Business">Business</option>
                            <option className="text-black bg-purple-500/20"  value="Work">Work</option>
                        </select>
                    </div>

                    {/* Processing time */}
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-bold">Processing Time</span>
                        </label>
                        <input name="processingtime" type="text" placeholder="Processing time" className="border border-purple-500   bg-transparent rounded-none p-2" required />
                    </div>

                    {/* Requarments Document */}
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-bold">Required Documents</span>
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
                            <span className=" text-xl font-bold">Description</span>
                        </label>
                        <input name="description" type="text" placeholder="Description" className="border border-purple-500   bg-transparent rounded-none p-2" required />
                    </div>

                    {/* Age restriction  */}
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-bold">Age Restriction</span>
                        </label>
                        <input name="agerestriction" type="number" placeholder="Minimum Age" className="border border-purple-500   bg-transparent rounded-none p-2" required />
                    </div>

                    {/* Fee */}
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-bold">Fee</span>
                        </label>
                        <input name="fee" type="number" placeholder="Fee" className="border border-purple-500   bg-transparent rounded-none p-2" required />
                    </div>


                    {/* Validity  */}
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-bold">Validity</span>
                        </label>
                        <input name="validity" type="text" placeholder="Validity (e.g., 6 months)" className="border border-purple-500   bg-transparent rounded-none p-2" required />
                    </div>


                    {/* Application Method */}
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-bold">Application Method</span>
                        </label>
                        <input name="applicationmethod" type="text"  placeholder="Explain how to apply" className="border border-purple-500   bg-transparent rounded-none p-2" required />
                    </div>



                </div>
                    
                <div className="form-control mt-6">
                    <button className="btn btn-outline btn-success rounded-none mx-auto w-1/2  ">Add Visa</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddVisa;