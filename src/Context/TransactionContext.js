import React,{useState,useEffect} from "react";
import { ethers } from "ethers";
import { contractAbi,contractAddress } from "../utils/constants";
import { ParamType } from "ethers/lib/utils";

export const TransactionContext= React.createContext("");
const {ethereum}= window;

const getEthereumContract=()=>{
    const provider= new ethers.providers.Web3Provider(ethereum);
    const signer=provider.getSigner();
    const transactionsContract=new ethers.Contract(contractAddress,contractAbi,signer);
    
    return transactionsContract;


}

export const TransactionsProvider=({children})=>{
    const[userData,setUserData]=useState({userAddress:"",ether:""});
    const[isLoading,setIsLoading]=useState(false);
    const[transactionCountState,setTransactionCountState]=useState(localStorage.getItem("transactionCount"));
    const[reloadBlock,setReloadBlock]=useState("null");
    const[currentAccount,setCurrentAccount]=useState("0x0000....000");

    useEffect(async()=>{
        try{
        let accounts=await ethereum.request({method:"eth_accounts"});
        let _currentAccount=accounts[0];
        userData.userAddress=_currentAccount;
        setCurrentAccount(_currentAccount);
        }
        catch(err){
            console.log(err);
        }

    },[]);
   
 const checkIfWalletIsConnected=async()=>{
    try{
  if(!ethereum) alert("Please install the metamask first");
   let accounts=await ethereum.request({method:"eth_accounts"});
  return accounts;
   
    }
    catch(err)
    {
        console.log(err);
    }
 };

 const connectWallet=async()=>{
   try{
    
       let isConnected= await checkIfWalletIsConnected();
       if(isConnected.length==0)
       {
    let response= await ethereum.request({method:"eth_requestAccounts"});
    if(response)setReloadBlock("reload");
       }
       else{
           
           alert("The wallet is already connected");
       }

   }
   catch(err){
       console.log(err);
   }

 };

 const sendTransactions=async(formData)=>{
     try{
    const{toAddress, amount, keyoword, message}=formData;
     let value = ethers.utils.parseEther(amount);
      

    
    
  let params=[{
      from:userData.userAddress,
      to:toAddress,
      gas:'0x5208',
      value:value._hex
  }];
 let response= await ethereum.request({method:'eth_sendTransaction',params});
const transactionsContract=getEthereumContract();
const transactionHash= await transactionsContract.addToBlockchain(toAddress,value,message,keyoword);
setIsLoading(true);
console.log("Loading...."+transactionHash.hash);
await transactionHash.wait();
setIsLoading(false);
console.log("Done "+transactionHash.hash);
setReloadBlock(new Date().getSeconds());

let transactions= await transactionsContract.getTransactionsCount();




 

     }
     catch(err)
     {
         console.log(err);
     }
 }


  const getTransactions=async()=>{
      try{
        const transactionsContract=getEthereumContract();
        const response= await transactionsContract.getAllTransactions();
        return response;

      }
      catch(err){
          console.log(err);
      }

  }

return(
    <TransactionContext.Provider value={{connectWallet,sendTransactions,getTransactions,reloadBlock,currentAccount,isLoading}}>
     {children}
    </TransactionContext.Provider>
)
}