const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {

  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });
  var blockResponse, blockHash;
  if (process.argv[2]) {
    blockHash = await api.rpc.chain.getBlockHash(process.argv[2]);
    blockResponse = await api.rpc.chain.getBlock(blockHash);
  } else {
    blockResponse = await api.rpc.chain.getBlock();
  }

  const reponseJSON = JSON.stringify(blockResponse, null, 2);
  console.log(reponseJSON);
  return;
}
main().catch(console.error).finally(() => process.exit(0));
