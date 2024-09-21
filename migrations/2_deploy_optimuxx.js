const Optimuxx = artifacts.require("Optimuxx");

module.exports = function(deployer) {
    const initialSupply = web3.utils.toWei('1000000', 'ether');
    deployer.deploy(Optimuxx, initialSupply);
};