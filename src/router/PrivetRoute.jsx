import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../Component/Loading";


const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading ){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate to={'/login'} ></Navigate>
};

export default PrivetRoute;