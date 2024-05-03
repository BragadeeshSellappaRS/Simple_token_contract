const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("SampleTokenModule", (m) => {
    const token = m.contract("SampleToken");

  return { token };
});
