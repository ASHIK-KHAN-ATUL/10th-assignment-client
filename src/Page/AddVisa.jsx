
const AddVisa = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const country_image =  form.get('countryimage')
        const country_name =  form.get('countryname')
        const visa_type =  form.get('countryname')
        const processingtime =  form.get('processingtime')
        const description =  form.get('description')
        const ageres_triction =  form.get('agerestriction')
        const fee =  form.get('fee')
        const validity =  form.get('validity')
        const application_method =  form.get('application_method')
        const requireddocuments1 = form.get('requireddocuments1')
        const requireddocuments2 = form.get('requireddocuments2')
        const requireddocuments3 = form.get('requireddocuments3')

        console.log({country_image, country_name, visa_type, processingtime, description, ageres_triction, fee, validity, application_method,  requireddocuments1, requireddocuments2, requireddocuments3})
    }

    return (
        <div className="bg-[#caf0f8] ">
            <form onSubmit={handleSubmit}  className="card-body p-10 ">

                <div className="lg:grid grid-cols-2 gap-6">

                    {/* Country Image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country image</span>
                        </label>
                        <input name="countryimage" type="text" placeholder="Country image" className="input input-bordered" required />
                    </div>

                    {/* Country Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country name</span>
                        </label>
                        <input name="countryname" type="text" placeholder="Country name" className="input input-bordered"  />
                    </div>

                    {/* Visa Type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Visa type</span>
                        </label>
                        <select name="visatype" id="" className="p-3 rounded-lg border-2">
                            <option value="" disabled selected >Select Visa Type</option>
                            <option value="Tourist">Tourist</option>
                            <option value="Student">Student</option>
                            <option value="Official">Official</option>
                            <option value="Business">Business</option>
                            <option value="Work">Work</option>
                        </select>
                    </div>

                    {/* Processing time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing time</span>
                        </label>
                        <input name="processingtime" type="text" placeholder="Processing time" className="input input-bordered" required />
                    </div>

                    {/* Requarments Document */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Required Documents</span>
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
                            <span className="label-text">Description</span>
                        </label>
                        <input name="description" type="text" placeholder="Description" className="input input-bordered" required />
                    </div>

                    {/* Age restriction  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age restriction</span>
                        </label>
                        <input name="agerestriction" type="number" placeholder="Minimum Age" className="input input-bordered" required />
                    </div>

                    {/* Fee */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Fee</span>
                        </label>
                        <input name="fee" type="number" placeholder="Fee" className="input input-bordered" required />
                    </div>


                    {/* Validity  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Validity</span>
                        </label>
                        <input name="validity" type="text" placeholder="Validity (e.g., 6 months)" className="input input-bordered" required />
                    </div>


                    {/* Application Method */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Method</span>
                        </label>
                        <input name="applicationmethod"  placeholder="Explain how to apply" className="input input-bordered" required />
                    </div>



                </div>
                    
                    <div className="form-control mt-6">
                    <button className="btn border-none hover:border-none bg-[#74c69d] hover:bg-[#6cddf1] transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white">Add Visa</button>
                </div>
            </form>
        </div>
    );
};

export default AddVisa;