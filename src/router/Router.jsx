import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Home from "../Page/Home";
import AddVisa from "../Page/AddVisa";
import AllVisa from "../Page/AllVisa";
import VisaDetails from "../Component/VisaDetails";
import PrivetRoute from "./PrivetRoute";
import Error from "../Component/Error";


const Router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/allvisa',
                element: <AllVisa></AllVisa>,
                loader: () => fetch('http://localhost:5000/visa')
            },
            {
                path:'/addvisa',
                element:<PrivetRoute><AddVisa></AddVisa></PrivetRoute>,
                
            },
            {
                path:'/myaddedvisa',
                element: <PrivetRoute><div>My Added visas </div></PrivetRoute>
            },
            {
                path:'/myvisaapplication',
                element: <PrivetRoute><div> My visa application </div></PrivetRoute>
            },
            {
                path:'/visadetail/:id',
                element:<PrivetRoute><VisaDetails></VisaDetails></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/visa/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'*',
                element: <Error></Error>
            }
        ]
    },
    {
        path:'*',
        element: <div>Error</div>
    }

])


export default Router;