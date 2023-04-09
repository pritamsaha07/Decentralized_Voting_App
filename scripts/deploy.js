const hre = require("hardhat");
async function main() {
   
    const vote=await hre.ethers.getContractFactory("Vote");
    const contract=await vote.deploy();
  
    await contract.deployed();
   
    console.log("Address of contract:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });