import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const { API_KEY, PRIVATE_KEY } = process.env;
console.log(API_KEY, PRIVATE_KEY)

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: `https://eth-sepolia.g.alchemy.com/v2/${API_KEY}`,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};

export default config;
