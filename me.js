const { urlencoded } = require("express");
const express = require("express");
const app = express();

var path = require("path");

const BlockchainHelper = require("./src/helper/BlockchainHelper");
const {
  generateCertificate,
  verifyCertificate,
} = require("./src/helper/CertificateGeneratorHelper");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

BlockchainHelper.initializeBlockchain();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/web/html/me.html");
});

app.get("/generate", (req, res) => {
  res.sendFile(__dirname + "/web/html/generate.html");
});

app.post("/generate", (req, res) => {
  const certificateId = generateCertificate(req.body.data);
  if (certificateId !== null || certificateId !== "")
    res.status(200).json({ success: true, data: { certificateId } });
  else res.status(200).json({ success: false, data: { certificateId } });
});

app.get("/verify", (req, res) => {
  res.sendFile(__dirname + "/web/html/verify.html");
});

app.post("/verify", (req, res) => {
  const certificate = req.body.data.certificate;
  if (verifyCertificate(certificate))
    res.status(200).json({ success: true, data: { validated: true } });
  else res.status(200).json({ success: false, data: { validated: false } });
});

app.get("/getChain", (req, res) => {
  res.json(BlockchainHelper.getChain().chain);
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");
});
