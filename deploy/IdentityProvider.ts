module.exports = async ({ getNamedAccounts, deployments, getChainId, getUnnamedAccounts }) => {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
  await deploy('IdentityProvider', {
    from: deployer,
    args: [],
  })
}
