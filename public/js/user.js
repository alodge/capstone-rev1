const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')

window.addEventListener('load', function() {

  // Check if Web3 has been injected by the browser:
  if (typeof web3 !== 'undefined') {

    // You have a web3 browser! Continue below!
    startApp(web3);

  } else {
	  // Warn the user that they need to get a web3 browser
	  // Or install MetaMask, maybe with a nice graphic.
	  console.log("get metamask");
  }

})

function startApp(web3) {

  const eth = new Eth(web3.currentProvider)
  const contract = new EthContract(eth)

  initContract(contract)

}
