require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const kovanContract = "0xd61D26c62F36CD76eA3b7E668A35166508040118";
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    kovan: {
      url: "https://kovan.infura.io/v3/6eb302786ae7491a831fc8f0b0eb635d",
      accounts: [`0x${privateKey}`],
    },
  },
};
