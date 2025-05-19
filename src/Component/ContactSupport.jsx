import Lottie from "lottie-react";

import chatAnimation from "../assets/support.json"
import { useState } from "react";
import { toast } from "react-toastify";

const ContactSupport = () => {


      const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(true);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            setOpen(false);
            toast.success("Message submitted!");
        };


    return (
        <section className="flex flex-col md:flex-row items-center gap-6  p-8 rounded-lg shadow-md  mx-auto ">
        
        <Lottie
            animationData={chatAnimation}
            loop
            style={{ width: 350, height: 350 }}
        />


        <div className="flex flex-col gap-12">
            <h2 className="text-2xl font-semibold ">
                Need Help with Visa?
            </h2>
            <button  onClick={handleClick}  className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 transition" >
                Contact Support
            </button>
        </div>


            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-purple-500/20 border border-purple-500 p-6 rounded-lg shadow-md w-[90%] max-w-md">
                    <h2 className="text-xl font-semibold mb-4 text-center">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Your name"
                        required
                        className="border px-3 py-2 rounded bg-black/90"
                    />
                    <input
                        type="email"
                        placeholder="Your email"
                        required
                        className="border px-3 py-2 rounded  bg-black/90"
                    />
                    <textarea
                        placeholder="Your message"
                        rows={4}
                        required
                        className="border px-3 py-2 rounded  bg-black/90"
                    />
                    <div className="flex justify-end gap-3">
                        <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-gray-500"
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                        Send
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            )}


        </section>
    );
};

export default ContactSupport;