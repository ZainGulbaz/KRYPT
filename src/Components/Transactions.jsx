import matchers from "@testing-library/jest-dom/matchers";
import React,{useEffect,useState} from "react";
import { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";
import getUrl from "../Giphy";
const Transactions = () => {

  const Contextresponse=useContext(TransactionContext);
  const [transactions,setTransactions]=useState([]);
  const [url,setUrl]=useState({});


useEffect(async()=>{

  
  let transactionsRes = await Contextresponse.getTransactions();
  setTransactions(transactionsRes);
  transactionsRes?.map(async(transaction,i)=>{
   let urlRes= await getUrl(transaction.keyword);
   console.log(i,urlRes);
   setUrl((prevState) => ({
    ...prevState,
    [i]: urlRes,
  }));

  });
  },[,Contextresponse.reloadBlock]);

  const getDate=(timestamp)=>{

   const date= new Date(parseInt(timestamp,16)*1000);
   
   let finalDate="";
  
  (date.getMinutes().toString().length==1)?finalDate=`Date:${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} Time:${date.getHours()}:0${date.getMinutes()}`
  :finalDate=`Date:${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} Time:${date.getHours()}:${date.getMinutes()}`;
return finalDate;  
}

  return (
    <>
    <h1 className="text-4xl text-white text-center mt-16">Transactions</h1>

  
    <div className="grid grid-cols-12 gap-4 mt-8 p-8">
  
  { transactions?.map((transaction,index)=>{
    return(
<div className="bg-gray-900  px-4 py-4 col-span-12 md:col-span-6 lg:col-span-4 break-all">
    

    <h3 className="text-md text-white mb-4">Sender: {transaction.sender}</h3>
    <h3 className="text-md text-white mb-4 ">Receiver: {transaction.receiver} </h3>
    <h3 className="text-md text-white mb-4 ">Message: {transaction.message} </h3>
    <h3 className="text-md text-blue-700 mb-4 ">{getDate(transaction.timestamp._hex)} </h3>
    <h3 className="text-md text-green-700 mb-4 ">{"Amount: "+parseInt(transaction.amount._hex,16)/Math.pow(10,18)+" Ether"} </h3>
   <img src={url[index]} alt='error' className="w-full h-80"/>
  </div>
    )
  }) }
    </div>
    
    </>
  );
};

export default Transactions;
