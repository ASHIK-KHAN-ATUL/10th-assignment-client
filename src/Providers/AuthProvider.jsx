import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import { toast } from "react-toastify";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true);
        toast.info('Logout Succuessfully Done')
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider();
    const signWithSoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(loading, user)
        })
        return () => {
            unSubscribe();
        }
    },[] )

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        logout,
        signWithSoogle
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;