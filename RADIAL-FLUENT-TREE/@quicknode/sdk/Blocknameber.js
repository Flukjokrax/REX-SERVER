const QuickNode = require('@quicknode/sdk');
// if you are using ESM style imports, use this line instead:
// import QuickNode from '@quicknode/sdk';

const core = new Core({
  endpointUrl: 'https://radial-fluent-tree.quiknode.pro/1956a0a98a1d7f97cb4533f5fb1721223d3a4356/',
})

const currentBlockNumber = await core.client.getBlockNumber();
console.log(currentBlockNumber)