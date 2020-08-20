// ============ Contracts ============
//const Y3dFactory = artifacts.require("y3dFactory");
const Y3dToken = artifacts.require("y3dToken");
const Y3dPool = artifacts.require("y3dPool");

const migration = async (deployer, network, accounts) => {
  await Promise.all([
    deployToken(deployer, network, accounts),
  ]);
};

module.exports = migration;

// ============ Deploy Functions ============
async function deployToken(deployer, network, accounts) {
 // await deployer.deploy(Y3dFactory, accounts[0]);
  //let y3dFactory = new web3.eth.Contract(Y3dFactory.abi, Y3dFactory.address);  
 


  //console.log('Deploy Y3D Token.')
  //await deployer.deploy(Y3dToken, accounts[0]);  
  
  console.log('Deploy WETH Pool');
  await deployer.deploy(Y3dPool);  

  // Put mining
  console.log('Init Mining');  
  let y3dToken = new web3.eth.Contract(Y3dToken.abi, Y3dToken.address);    
  await y3dToken.methods.approve(Y3dPool.address, 100).send({from: accounts[0], gas: 6700000});
  let y3dPool = new web3.eth.Contract(Y3dPool.abi, Y3dPool.address);
  await y3dPool.methods.receiveApproval(100).send({from: accounts[0], gas: 6700000});

  //await y3dFactory.methods.initWETH().send({from: accounts[0], gas: 6700000});
  //console.log(y3dFactory.wethpool);
  //console.log('UNI');
  //await y3dFactory.methods.initUNI().send({from: accounts[0], gas: 6700000});
  //console.log(y3dFactory.uniswapPool);
};