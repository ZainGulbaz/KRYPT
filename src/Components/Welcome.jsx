import React,{useState} from "react";
import {AiFillPlayCircle} from "react-icons/ai";
import {SiEthereum} from "react-icons/si";
import {BsInfoCircle} from "react-icons/bs";
import {FcGlobe} from "react-icons/fc";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";
import Loader from "./Loader";
const Welcome = () => {
  const[toAddress,setToAddress]=useState("");
  const[amount,setAmount]=useState("");
  const[keyoword,setKeyoword]=useState("");
  const[message,setMessage]=useState("");
  const value=useContext(TransactionContext);

  const sendNow=()=>{
  
    value.sendTransactions({toAddress,amount,keyoword,message});

  }

 const connectWallet=()=>{
  
value.connectWallet();
 }
  return (
    <>
   {/* Loader */}
   {(value.isLoading)&&
   <div className="w-full flex justify-center mt-2">
   <Loader/>
   </div>
   }
   



    <div className="flex-col sm:flex sm:flex-row justify-center h-screen w-full backImg mt-8 p-4" >

    <div className=" w-full flex flex-col  items-center">

<div className=" flex flex-col  items-center font-bold">
    <h1 className="sm:text-3xl text-xl text-white">Send Crypto</h1>
    <div className="ml-8 flex">
    <h1 className="sm:text-md text-sm text-white font-bold"> Around the globe</h1>
    <FcGlobe size={20}/>
      </div>
</div>

  <p className="text-blue-600 text-white mt-2">
  Explore the world of crypto.</p>
  <p className="text-blue-600 text-white ml-12 sm:ml-0 ">
  Send and receive your crypto through our website
  </p>
  
 {<button className="bg-green-500 hover:bg-green-700 text-white-700 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded mt-2" onClick={()=>connectWallet()}>
Connect to wallet
</button>}

<div className="grid-cols-12 w-2/4  hidden sm:grid mt-4">
<div className="border border-white-900 h-12 flex justify-center items-center col-span-4 text-white font-bold">Etherium</div>
<div className="border border-white-900 h-12 flex justify-center items-center col-span-4 text-white font-bold">Blockchain</div>
<div className="border border-white-900 h-12 flex justify-center items-center col-span-4 text-white font-bold">Web 3.0</div>
<div className="border border-white-900 h-12 flex justify-center items-center col-span-4 text-white font-bold">Transactions</div>
<div className="border border-white-900 h-12 flex justify-center items-center col-span-4 text-white font-bold">Crypto Currency</div>
<div className="border border-white-900 h-12 flex justify-center items-center col-span-4 text-white font-bold">Reliabiliy</div>


</div>


 </div>

 <div className="mt-4 sm:mt-0 w3/4 sm:w-1/4 h-36  bg-white mr-4 p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg ">
     <div className="flex flex-col">
    
    <div className="flex flex-col ">
      <div className="flex justify-between">
      <SiEthereum size={40} />
    <BsInfoCircle/>
      </div>
  {
   (value?.currentAccount)?<h6 className="text-sm font-bold text-gray-700 mt-6">{`${value.currentAccount?.slice(0,6)}....${value.currentAccount?.substr(-6)}`}</h6>:<h6 className="text-sm font-bold text-gray-700 mt-6">Address</h6>
  }
    <h6 className="text-md font-bold text-gray-900 ">Ehtereum</h6>
    </div>

   

     </div> 

    {/* Form */}
    <div className="w-full max-w-xs mt-8 bg-gray-900">
  <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
    <label className="text-white">Address To</label>
      <input className="shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white bg-gray-400"  type="text" placeholder="Address To" onChange={(e)=>setToAddress(e.target.value)}/>
    </div>
       
    <div className="mb-4">
    <label className="text-white">Amount (ETH)</label>
      <input className="shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white bg-gray-400"  type="text" placeholder="Amount (ETH)" onChange={(e)=>setAmount(e.target.value)}/>
    </div>

    <div className="mb-4">
    <label className="text-white">Keyword</label>
      <input className="shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white bg-gray-400"  type="text" placeholder="Keyoword" onChange={(e)=>setKeyoword(e.target.value)}/>
    </div>

    <div className="mb-4">
      <label className="text-white">Enter Message</label>
      <textarea className="shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white bg-gray-400"  type="text" placeholder="Enter Message" rows={3} onChange={(e)=>setMessage(e.target.value)}/>
    </div>
<hr/>
    <div className="flex items-center justify-between mt-2">
      <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline" type="button" onClick={()=>sendNow()}>
        Send Now
      </button>
    </div>
  </form>
</div>
 </div>
    </div>
  
    </>
  );
};
export default Welcome;