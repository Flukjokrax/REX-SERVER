require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    myQuickNode: {
      url: "https://radial-fluent-tree.quiknode.pro/1956a0a98a1d7f97cb4533f5fb1721223d3a4356/",
      accounts: [
        "RADIAL_AUTH_TOKEN",
      ],
    },
  },
  solidity: "0.8.19",

};

