const main=async()=> {

try{

  // We get the contract to deploy
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}
catch(err){
  console.error(err);
}
}
const runMain=async()=>{
try{
await main();
process.exit(0);
}
catch(err){
  console.error(err);
  process.exit(1);
}

}
runMain();

