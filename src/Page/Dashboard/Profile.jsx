import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaRegUserCircle } from 'react-icons/fa';

const Profile = () => {

    const {user} = useContext(AuthContext);
    // console.log(user)

    return (
        <div className="p-1 flex justify-center items-center bg-transparent text-white h-full ">
            <div className="bg-purple-900/10 border border-purple-500 rounded-md p-8 w-full max-w-xl relative">

                <div className='h-7 w-7 absolute rounded-full animate-spin border-b-2 border-b-purple-400 border-t-2 border-t-cyan-200 top-2 left-2'></div>

                <div className="flex flex-col items-center text-center relative">
                    <div className='w-[145px]  h-[145px] rounded-full animate-pulse bg-purple-500/60 absolute -top-2'></div>
                    <img  src={user?.photoURL || <FaRegUserCircle  />}
                                alt="User Avatar"
                                className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover shadow-lg z-20"
                            />
                            <h2 className="text-2xl font-bold mt-4">{user?.displayName || 'Unnamed User'}</h2>
                </div>

                <div className="mt-6 space-y-4 text-left px-4">
                    <div>
                        <p className="font-semibold text-purple-400">Email</p>
                        <p>{user?.email || 'N/A'}</p>
                    </div>

                    <div>
                         <p className="font-semibold text-purple-400">User Role</p>
                        <p className="text-sm">Member</p> {/* Optional: dynamic role */}
                    </div>

                    <div>
                        <p className="font-semibold text-purple-400">Joined On</p>
                        <p className="text-sm">{user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'Unknown'}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-purple-400">Last Sign In </p>
                        <p className="text-sm">{user?.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'Unknown'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;