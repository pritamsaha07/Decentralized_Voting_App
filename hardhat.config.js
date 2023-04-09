require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const sepolia_URL = process.env.sepolia_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: sepolia_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};