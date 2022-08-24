const hre = require("hardhat");

async function main() {
  const Docs = await hre.ethers.getContractFactory("Docs");
  const docs = await Docs.deploy();

  await docs.deployed();

  console.log("Docs with 1 ETH deployed to:", docs.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
