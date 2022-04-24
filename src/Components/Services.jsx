import React from "react";
import {MdSecurity} from "react-icons/md";
import {AiOutlineSearch} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";

const Services = () => {
  return (
    <>
    <div className="flex justify-center items-center mt-48 sm:mt-2">
      <h1 className=" sm:text-5xl text-3xl ml-2 sm:ml-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-white">Services we are
        <br/>
        Trying to improve
      </h1>
<div className="flex flex-col">
  <div className="flex rounded h-full backdrop-filter backdrop-blur-lg border border-gray-900 opacity-90 w-full sm:ml-8  items-center w-auto sm:w-88 text-xs sm:text-md">
    <div className="rounded-full bg-blue-700 h-10 w-10 flex justify-center items-center ml-2">
    <MdSecurity size="30"/>
    </div>
   
    <h1 className="text-xl text-white ml-4">Security is gurranted.We provide the best security services 
    <br/>
    to our customers</h1>
  </div>

  <div className="flex rounded h-full backdrop-filter backdrop-blur-lg border border-gray-900 opacity-90 w-full sm:ml-8 items-center mt-4  sm:w-88 w-auto sm:w-88 text-xs sm:text-md">
    <div className="rounded-full bg-violet-700 h-10 w-10 flex justify-center items-center ml-2">
    <AiOutlineSearch size="30"/>
    </div>
   
    <h1 className="text-xl text-white ml-4">Best exchange rates are gurranted.We provide the best exchange rates
    <br/>
    to our customers</h1>
  </div>

  <div className="flex rounded h-full backdrop-filter backdrop-blur-lg border border-gray-900 opacity-90 w-full sm:ml-8 items-center mt-4  sm:w-88 w-auto sm:w-88 text-xs sm:text-md">
    <div className="rounded-full bg-red-700 h-10 w-10 flex justify-center items-center ml-2">
    <AiFillHeart size="30"/>
    </div>
   
    <h1 className="text-xl text-white ml-4">Transaction in seconds. We provide fast transactions 
    <br/>
    to our customers</h1>
  </div>

  
</div>
      </div>
    </>
  );
};

export default Services;