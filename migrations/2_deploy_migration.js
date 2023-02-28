var VarunToken = artifacts.require("VarunToken");
module.exports = async function (deployer) {
	deployer.deploy(VarunToken, "VarunToken", "VTK");
};
