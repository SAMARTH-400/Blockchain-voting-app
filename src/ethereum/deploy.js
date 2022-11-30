// const HDWalletProvider = require('truffle-hdwallet-provider');

// const provider = new HDWalletProvider(
    //     'charge real rare project today initial leopard cliff idle round ring twist',
    //     'https://rinkeby.infura.io/v3/78b1532a1f4c48deb702c0c2ccc93c89'
    // );

// const web3 = new Web3(provider);

// const deploy = async ()=>{
    //     const accounts = await web3.eth.getAccounts();
    //     // console.log('using account', accounts[0]);
    //     const result = await new web3.eth.Contract(JSON.parse(JSON.stringify(compiledFactory.abi)))
    //         .deploy({data: compiledFactory.evm.bytecode.object})
    //         .send({from: accounts[0], gas: '3000000'});
    
    //     console.log('Contract address',result.options.address);
    // }
    // deploy();
    
    // const Web3 = require('web3');

const compiledFactory = require('./build/ElectionFactory.json');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// const web3 = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const fun = async () => {
    // const accounts = await web3.eth.accounts;
    const accounts = await web3.eth.getAccounts();
    const contract = await new web3.eth.Contract( JSON.parse( JSON.stringify(compiledFactory.abi) ) )
    .deploy({data: compiledFactory.evm.bytecode.object})
    .send({from: accounts[0], gas: '1000000000000'});
    console.log(contract.options.address);
};fun();
