import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            activeClassName="text-white"
            to="/"
            exact
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Muhemin ALi
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-red-700"
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-red-700"
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-red-700"
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-4 my-6">
          <SocialIcon url="https://github.com/syedalihussain100" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
          <SocialIcon url="https://www.facebook.com/zaid.roy.3386/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
          <SocialIcon url="https://www.linkedin.com/in/zaid-roy-8b9896179/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
          <SocialIcon url="https://mail.google.com/mail/u/0/?ogbl#inbox" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>


        </div>
      </div>
    </header>
  );
}

export default Navbar;
