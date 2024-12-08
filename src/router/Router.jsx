import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Home from "../Page/Home";
import AddVisa from "../Page/AddVisa";
import AllVisa from "../Page/AllVisa";
import VisaDetails from "../Component/VisaDetails";


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
                element:<AddVisa></AddVisa>,
                
            },
            {
                path:'/myaddedvisa',
                element: <div>My Added visas </div>
            },
            {
                path:'/myvisaapplication',
                element: <div> My visa application </div>
            },
            {
                path:'/visadetail/:id',
                element:<VisaDetails></VisaDetails>,
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
        ]
    },
    {
        path:'*',
        element: <div>Error</div>
    }

])


export default Router;