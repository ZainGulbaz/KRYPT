import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import logo from "../images/logo.png";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <>
      <nav className="bg-gray-900 min-h-28 w-full flex justify-between items-center p-4 shadow-lg shadow-gray-900">
        <div className="flex w-32 items-center">
          <img src={logo} alt="Logo" />
        </div>

       
        
        <HiMenuAlt4
          size={60}
          className="cursor-pointer md:hidden"
        />

        {/* Burger Menu for small devices */}
      </nav>

     
      
    </>
  );
};

export default Navbar;
