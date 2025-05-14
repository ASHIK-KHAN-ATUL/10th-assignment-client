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
import MyAddedVisa from "../Page/MyAddedVisa";
import MyVisaApplication from "../Page/MyVisaApplication";


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
                loader: () => fetch('https://10th-assignment-server-ruddy.vercel.app/visa')
            },
            {
                path:'/addvisa',
                element:<PrivetRoute><AddVisa></AddVisa></PrivetRoute>,
                
            },
            {
                path:'/myaddedvisa',
                element: <PrivetRoute><MyAddedVisa></MyAddedVisa></PrivetRoute>
            },
            {
                path:'/myvisaapplication',
                element: <PrivetRoute><MyVisaApplication></MyVisaApplication></PrivetRoute>,
            },
            {
                path:'/visadetail/:id',
                element:<PrivetRoute><VisaDetails></VisaDetails></PrivetRoute>,
                loader: ({params}) => fetch(`https://10th-assignment-server-ruddy.vercel.app/visa/${params.id}`)
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
    }

])


export default Router;