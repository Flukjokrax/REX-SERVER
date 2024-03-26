import { createClient, http, publicActions } from 'viem';
import { nftAndTokenActions } from './addOns/nftTokenV2/actions.js';
import { deriveChainFromUrl } from './chains.js';
import { setupGlobalFetch } from '../lib/helpers/globalFetch.js';

const buildQNActions = (config) => {
    return (client) => ({
        ...nftAndTokenActions(client, config),
    });
};
class Core {
    constructor({ endpointUrl, chain, config = {} }) {
        setupGlobalFetch();
        this.endpointUrl = endpointUrl;
        const baseClient = createClient({
            chain: chain || deriveChainFromUrl(endpointUrl),
            transport: http(this.endpointUrl),
        }).extend(publicActions);
        const qnClient = baseClient.extend(buildQNActions(config));
        this.client = qnClient;
    }
}

export { Core, buildQNActions };

const QuickNode = require('@quicknode/sdk');
// if you are using ESM style imports, use this line instead:
// import QuickNode from '@quicknode/sdk';
const core = new Core({
    endpointUrl: 'https://radial-fluent-tree.quiknode.pro/1956a0a98a1d7f97cb4533f5fb1721223d3a4356/',
  })
  const currentBlockNumber = await core.client.getBlockNumber();
console.log(currentBlockNumber)