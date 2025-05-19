import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewsLetter = () => {

    const [isHover, setIsHover] = useState(false);
    // console.log(isHover)

     const handleSubmit = (e) => {
            e.preventDefault();

            const form = new FormData(e.target);
            const name =  form.get('name')
            const email =  form.get('email')
            const number =  form.get('number')

            const newsletterInfo = {name, email, number}
            console.log(newsletterInfo);


            fetch('https://10th-assignment-server-ruddy.vercel.app/newsletter', {
                method:"POST",
                headers:{ 
                    "content-type":"application/json" 
                }, 
                body: JSON.stringify(newsletterInfo) 
            })
                .then(res => res.json())
                .then(data => {
                console.log(data)
                if(data.insertedId){
                    toast.success('Your Data Send Successfully');
                    e.target.reset();
                }
            })
        };


    return (
        <div className="bg-transparent  mx-[5%]  text-white pb-10 ">
            <h2 className="text-3xl font-semibold mb-5 text-center">
                Stay Updated with Visa Navigator
            </h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center  p-10 mx-auto border border-purple-500 gap-10"
            >
                <div className='flex flex-col  w-1/2 mx-auto'>
                    <label >Name</label>
                    <input  type="text" name='name' className="   border-noe  focus:outline-none  bg-transparent w-full border-b-2 border-purple-500" />
                </div>

                <div className='flex flex-col  w-1/2 mx-auto'>
                    <label >Email</label>
                    <input  type="email" name='email' className="   border-noe  focus:outline-none  bg-transparent w-full border-b-2 border-purple-500" />
                </div>

                <div className='flex flex-col  w-1/2 mx-auto'>
                    <label >Number</label>
                    <input  type="text" name='number' className="   border-noe  focus:outline-none  bg-transparent w-full border-b-2 border-purple-500" />
                </div>

                <div className='flex flex-col  w-1/2 mx-auto'>
                    <button onMouseEnter={() => setIsHover(true)} onMouseLeave={()=> setIsHover(false)} type="submit" className="btn btn-outline rounded-none border-purple-500 text-white px-6 py-3  transition  hover:border-green-400 duration-500  relative overflow-hidden hover:bg-transparent  "  > <span className='z-50 text-white'>Subscribe</span>
                        <div className={` absolute inset-0 bg-purple-500  transition-transform duration-1000  ${isHover ? 'hover:translate-x-0' : 'translate-x-[-100%]'}`}></div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewsLetter;