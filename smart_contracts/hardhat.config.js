require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/HdfyF_cdCBHvixDH6ud_RRuwjgGA8pcH",
      accounts: [
        "1d6e4eaa51352b547d9be2938a55df2a0e4fb1b35867605612d165cdc29585d8",
      ],
    },
  },
};
