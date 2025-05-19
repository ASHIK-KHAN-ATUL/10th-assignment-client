import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
    <footer className="bg-black border-t border-purple-500 text-purple-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 text-center md:text-left">
        <div>
          <h6 className="footer-title mb-2 font-bold">Quick Links</h6>
          <NavLink to="/" className="link link-hover block">Home</NavLink>
          <NavLink to="/allvisa" className="link link-hover block">All Visa</NavLink>
          <NavLink to="/addvisa" className="link link-hover block">Add Visa</NavLink>
          <NavLink to="/myaddedvisa" className="link link-hover block">My Added Visa</NavLink>
        </div>

        <div>
          <h6 className="footer-title mb-2 font-bold">Dashboard</h6>
          <NavLink to="/dashboard/overview" className="link link-hover block">Overview</NavLink>
          <NavLink to="/dashboard/profile" className="link link-hover block">Profile</NavLink>
          <NavLink to="/myvisaapplication" className="link link-hover block">My Applications</NavLink>
          <NavLink to="/giveReview" className="link link-hover block">Give Review</NavLink>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h6 className="footer-title mb-2 font-bold">Follow Us</h6>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white text-purple-500 p-2 rounded-full">
              <IoLogoFacebook />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-white text-purple-500 p-2 rounded-full">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-white text-purple-500 p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white text-purple-500 p-2 rounded-full">
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-center text-center text-purple-500 p-4">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by Visa Navigator</p>
      </div>
    </footer>
    );
};

export default Footer;