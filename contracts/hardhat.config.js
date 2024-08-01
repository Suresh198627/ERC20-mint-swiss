require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "81bd9724f1742754abcfc40bb12d8f03e076208671e7f497844717c1ea73d328";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x81bd9724f1742754abcfc40bb12d8f03e076208671e7f497844717c1ea73d328"],
    },
  },
};
