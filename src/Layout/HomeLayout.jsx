import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


const HomeLayout = () => {
    return (
        <div className="font-Oswald bg-black/70 text-white">
            <Navbar></Navbar>
            
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;