// var abi = JSON.parse(
//  '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
//);

var abi = JSON.parse(
  '[
    {
      "constant":true,
      "inputs":[],
      "name":"name",
      "outputs":[{"name":"","type":"string"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],
      "name":"approve",
      "outputs":[{"name":"success","type":"bool"}],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[],
      "name":"totalSupply",
      "outputs":[{"name":"","type":"uint256"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],
      "name":"transferFrom",
      "outputs":[{"name":"success","type":"bool"}],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"","type":"uint8"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[],
      "name":"_totalSupply",
      "outputs":[{"name":"","type":"uint256"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[{"name":"tokenOwner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[],
      "name":"acceptOwnership",
      "outputs":[],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[],
      "name":"owner",
      "outputs":[{"name":"","type":"address"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[],
      "name":"symbol",
      "outputs":[{"name":"","type":"string"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],
      "name":"safeSub",
      "outputs":[{"name":"c","type":"uint256"}],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],
      "name":"transfer",
      "outputs":[{"name":"success","type":"bool"}],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],
      "name":"safeDiv",
      "outputs":[{"name":"c","type":"uint256"}],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],
      "name":"approveAndCall",
      "outputs":[{"name":"success","type":"bool"}],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],
      "name":"safeMul",
      "outputs":[{"name":"c","type":"uint256"}],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[],
      "name":"newOwner",
      "outputs":[{"name":"","type":"address"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],
      "name":"transferAnyERC20Token",
      "outputs":[{"name":"success","type":"bool"}],
      "payable":false,"stateMutability":"nonpayable","type":"function"
    },
    {
      "constant":true,
      "inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],
      "name":"allowance",
      "outputs":[{"name":"remaining","type":"uint256"}],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],
      "name":"safeAdd",
      "outputs":[{"name":"c","type":"uint256"}],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
    },
    {
      "constant":false,
      "inputs":[{"name":"_newOwner","type":"address"}],
      "name":"transferOwnership",
      "outputs":[],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "inputs":[],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"constructor"
    },
    {
      "payable":true,
      "stateMutability":"payable",
      "type":"fallback"
    },
    {
      "anonymous":false,
      "inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],
      "name":"OwnershipTransferred",
      "type":"event"
    },
    {
      "anonymous":false,
      "inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],
      "name":"Transfer",
      "type":"event"
    },
    {
      "anonymous":false,
      "inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],
      "name":"Approval",
      "type":"event"
    }
  ]'
);

$(document).ready(function() {
  // Checking if Web3 has been injected by MetaMask
  if (typeof web3 !== "undefined" && web3.currentProvider.isMetaMask) {
    web3 = new Web3(web3.currentProvider);
    eth = web3.eth;
  } else {
    $("#balance_text").hide();
    $("#meta_text").show();
  }
  // initial
  //var BurgerContract = eth
  //  .contract(abi)
  //  .at("0xa1f2112d28d9c159940928dc5d7ff45f869a2350");

  // putting my test into it
  var BurgerContract = eth
    .contract(abi)
    .at("0xe8f31079989eca482d84a95c9ff145da8db3e612");

  
  var text = $("#balance_text > strong").text();
  console.log("in user");
  console.log(text);
  
  BurgerContract.balanceOf.call(eth.coinbase, function(error, result) {
    if (error) {
      console.log(error);
    } else {
      var bal = result / 1000000000000000000;
      console.log(bal);
      $("#balance_text > strong").text(text + bal);
    }
  });
});



