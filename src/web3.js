import Web3 from 'web3';


// window.ethereum.send('eth_requestAccounts');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
export default web3;

