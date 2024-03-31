const { Web3 } = require('web3');
// if you are using ESM style imports, use this line instead:
// import { Web3 } from 'web3';

const web3 = new Web3("https://flashy-little-spree.quiknode.pro/9317c0fd24fec591eb649b473dd50506c7ee79d7/");

async function fetchBlockNumber() {
    try {
        const currentBlockNumber = await web3.eth.getBlockNumber();
        console.log('Current block number:', currentBlockNumber);
    } catch (error) {
        console.error('Error fetching block number:', error);
    }
}

fetchBlockNumber();
