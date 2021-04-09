const Blockchain = require("../api/Blockchain/Blockchain");

class BlockchainHelper {
  constructor() {
    this.blockchain = "";
  }

  initializeBlockchain() {
    this.blockchain = new Blockchain();
  }

  /**
   * @returns {Blockchain}
   */
  getChain() {
    return this.blockchain;
  }
}

module.exports = new BlockchainHelper();
