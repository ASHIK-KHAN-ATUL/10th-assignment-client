import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';


const Register = () => {

    const {createUser, signWithSoogle, user, setUser,} = useContext(AuthContext)

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return regex.test(password);
    };

    const handleSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const newUser = {name, photo, email, password}
        // console.log(newUser)



        // Firebase Auth code
        createUser(email, password)
        .then(result => {
            // console.log(result.user)
            setUser(result.user)
            toast.success('Login Successfully Done')
        })
        .catch(error => {
            // console.log('Error', error)
            toast.error('Unable to log in. Please try again later')
        })
    }
    // console.log(user);

    const handleGoogleSignIn = () =>{
        signWithSoogle()
        .then(result => {
            // console.log(result.user)
            setUser(result.user)
            toast.success('Login Successfully Done')
        })
        .catch(error => {
            // console.log(error)
            toast.error('Unable to log in. Please try again later')
        })
    }

    if(user){
        return <Navigate to={'/'} > </Navigate>
    }


    return (
        <div className="py-10 bg-black ">

            <div className="min-h-screen flex justify-center items-center">
                <div className="card w-full max-w-lg shrink-0 rounded-none p-10 bg-purple-500/10 border border-purple-500">
                    <h2 className="text-2xl font-bold text-center pt-7">Register your account</h2>
                    <form onSubmit={handleSubmit}  className="card-body my-3 gap-5">

                    <div className="form-control">
                            <input name="name" type="text" placeholder="Enter Your Name" className="bg-transparent p-2 border-b border-purple-500 focus:outline-none" required />
                        </div>

                        <div className="form-control">
                            <input name="photo" type="text" placeholder="Enter Your Photo Url" className="bg-transparent p-2 border-b border-purple-500 focus:outline-none"  />
                        </div>

                        <div className="form-control">
                            <input name="email" type="email" placeholder="Enter Your Email" className="bg-transparent p-2 border-b border-purple-500 focus:outline-none" required />
                        </div>

                        <div className="form-control">
                            <input name="password" type="password" placeholder="Enter Your Password" className="bg-transparent p-2 border-b border-purple-500 focus:outline-none" required />
                        </div>
                        
                        <div className="form-control mt-6">
                        <button className="btn btn-outline btn-success rounded-none">Register</button>
                        </div>
                    </form>
                    <p className="text-center">Already Have An Account ? <Link className="text-[#f85e00] font-semibold" to="/login" > Login</Link> </p>

                    <div className="divider divider-success"></div>

                    <Link onClick={handleGoogleSignIn} className=" btn btn-outline rounded-none border-purple-500  hover:bg-purple-500 hover:border-none duration-500 mx-8">
                            
                        <p className="font-semibold ">Register With Google  </p>
                        <FcGoogle className="text-3xl"></FcGoogle>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Register;