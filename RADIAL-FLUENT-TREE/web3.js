const { Web3 } = require('web3');
// if you are using ESM style imports, use this line instead:
// import { Web3 } from 'web3';

const web3 = new Web3("https://radial-fluent-tree.quiknode.pro/1956a0a98a1d7f97cb4533f5fb1721223d3a4356/");

async function fetchBlockNumber() {
    try {
        const currentBlockNumber = await web3.eth.getBlockNumber();
        console.log('Current block number:', currentBlockNumber);
    } catch (error) {
        console.error('Error fetching block number:', error);
    }
}

fetchBlockNumber();
