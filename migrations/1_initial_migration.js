var TimeLockedVault = artifacts.require("TimeLockedVault");

module.exports = function(deployer) {
    deployer.then(async () => {
	await deployer.deploy(TimeLockedVault,604800);
    });
};
