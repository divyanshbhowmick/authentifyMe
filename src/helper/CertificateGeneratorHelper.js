const Blockchain = require("../api/Blockchain/Blockchain");
const Block = require("../api/Blockchain/Block");
const BlockchainHelper = require("./BlockchainHelper");

const generateCertificate = (ceritificateData) => {
  // Creating a new Block
  const newCertificate = new Block(
    BlockchainHelper.getChain().getChainLength(),
    new Date().getTime(),
    ceritificateData
  );

  // Adding the generated certificate block to the chain
  BlockchainHelper.getChain().addBlock(newCertificate);
  return generateCertificateId(BlockchainHelper.getChain().chain.length - 1);
};

const generateCertificateId = (indexNumber) => {
  return `AM${indexNumber}`;
};

/**
 *
 * @param {any} certificate
 * @returns {boolean}
 */

const verifyCertificate = (certificate) => {
  const certificateId = certificate.certificateId;
  const certificateIndex = certificateId.substring(2);
  const certificateData = certificate.data;
  console.log(
    BlockchainHelper.getChain().chain[certificateIndex].data,
    certificateData
  );
  try {
    return (
      JSON.stringify(
        BlockchainHelper.getChain().chain[certificateIndex].data
      ) === JSON.stringify(certificateData)
    );
  } catch (e) {
    return false;
  }
};

module.exports.generateCertificate = generateCertificate;
module.exports.verifyCertificate = verifyCertificate;
