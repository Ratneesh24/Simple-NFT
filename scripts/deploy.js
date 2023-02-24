const {ethers} = require("hardhat")


async function main() {

  const nftContract =  await ethers.getContractFactory("NFTee");

  const deployedNFTContract = await nftContract.deploy();
  await deployedNFTContract.deployed();

  console.log("NFT ContractAddress:", deployedNFTContract.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
