import { ethers } from "hardhat";

async function main() {
  const contractFactory = await ethers.getContractFactory("DiceBear");
  const contract = await contractFactory.deploy();

  await contract.deployed();

  console.log(`DiceBear deployed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
