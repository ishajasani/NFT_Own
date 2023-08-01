const hre = require("hardhat");
async function main() {
    const contract = await hre.ethers.deployContract("NFT");
    await contract.waitForDeployment();
    console.log("Contract deployed to:", contract.target);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
