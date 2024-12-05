import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";


const Router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path:'/allvisa',
                element: <div>this is All visa </div>
            },
            {
                path:'/addvisa',
                element: <div>Add visa </div>
            },
            {
                path:'/myaddedvisa',
                element: <div>My Added visas </div>
            },
            {
                path:'/myvisaapplication',
                element: <div> My visa application </div>
            },
        ]
    },
    {
        path:'*',
        element: <div>Error</div>
    }

])


export default Router;