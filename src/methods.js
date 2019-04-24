/* eslint-disable no-inline-comments */

/**
 * Module dependencies.
 */

import { map, set } from 'lodash';

/**
 * Export available rpc methods.
 */

export default {
  abandonTransaction: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  abortRescan: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  addMultiSigAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  addNode: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  addWitnessAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  backupWallet: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  bumpFee: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  clearBanned: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  combineRawTransaction: {
    category: 'rawtransactions',
    version: '>=1.0.0.0'
  },
  createMultiSig: {
    category: 'util',
    version: '>=1.0.0.0'
  },
  createRawTransaction: {
    category: 'rawtransactions',
    version: '>=1.0.0.0'
  },
  createWitnessAddress: {
    category: 'wallet',
    version: '=1.0.0.0'
  },
  decodeRawTransaction: {
    category: 'rawtransactions',
    version: '>=1.0.0.0'
  },
  decodeScript: {
    category: 'rawtransactions',
    version: '>=1.0.0.0'
  },
  disconnectNode: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  dumpPrivKey: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    obfuscate: {
      response: () => '******'
    },
    version: '>=1.0.0.0'
  },
  dumpWallet: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  encryptWallet: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    obfuscate: {
      request: {
        default: params => set([...params], '[0]', '******'),
        named: params => set(params, 'passphrase', '******')
      }
    },
    version: '>=1.0.0.0'
  },
  estimateFee: {
    category: 'util',
    version: '>=1.0.0.0'
  },
  estimatePriority: {
    category: 'util',
    version: '>=1.0.0.0'
  },
  estimateSmartFee: {
    category: 'util',
    version: '>=1.0.0.0'
  },
  estimateSmartPriority: {
    category: 'util',
    version: '>=1.0.0.0'
  },
  fundRawTransaction: {
    category: 'rawtransactions',
    version: '>=1.0.0.0'
  },
  generate: {
    category: 'generating',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  generateToAddress: {
    category: 'generating',
    version: '>=1.0.0.0'
  },
  getAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getAccountAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getAddedNodeInfo: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  getAddressesByAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getBalance: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getBestBlockHash: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getBlock: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getBlockCount: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getBlockHash: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getBlockHeader: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getBlockTemplate: {
    category: 'mining',
    version: '>=1.0.0.0'
  },
  getBlockchainInfo: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getChainTips: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getChainTxStats: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getConnectionCount: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  getDifficulty: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getGenerate: {
    category: 'generating',
    version: '<0.13.0'
  },
  getHashesPerSec: {
    category: 'blockchain',
    version: '<0.10.0'
  },
  getInfo: {
    category: 'control',
    version: '>=1.0.0.0'
  },
  getMemoryInfo: {
    category: 'control',
    version: '>=1.0.0.0'
  },
  getMempoolAncestors: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getMempoolDescendants: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getMempoolEntry: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getMempoolInfo: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getMiningInfo: {
    category: 'mining',
    version: '>=1.0.0.0'
  },
  getNetTotals: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  getNetworkHashPs: {
    category: 'mining',
    version: '>=1.0.0.0'
  },
  getNetworkInfo: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  getNewAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getPeerInfo: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  getRawChangeAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getRawMempool: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getRawTransaction: {
    category: 'rawtransactions',
    version: '>=1.0.0.0'
  },
  getReceivedByAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getReceivedByAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getTransaction: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getTxOut: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getTxOutProof: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getTxOutSetInfo: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  getUnconfirmedBalance: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getWalletInfo: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  getWork: {
    category: 'blockchain',
    version: '<0.10.0'
  },
  help: {
    category: 'control',
    version: '>=1.0.0.0'
  },
  importAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  importMulti: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    obfuscate: {
      request: {
        default: params => set(params, '[0]', map(params[0], request => set(request, 'keys', map(request.keys, () => '******')))),
        named: params => set(params, 'requests', map(params.requests, request => set(request, 'keys', map(request.keys, () => '******'))))
      }
    },
    version: '>=1.0.0.0'
  },
  importPrivKey: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    obfuscate: {
      request: {
        default: () => ['******'],
        named: params => set(params, 'privkey', '******')
      }
    },
    version: '>=1.0.0.0'
  },
  importPrunedFunds: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  importPubKey: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  importWallet: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  keypoolRefill: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  listAccounts: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  listAddressGroupings: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  listBanned: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  listLockUnspent: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  listReceivedByAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  listReceivedByAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  listSinceBlock: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  listTransactions: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  listUnspent: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  listWallets: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  lockUnspent: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  move: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  ping: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  preciousBlock: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  prioritiseTransaction: {
    category: 'mining',
    version: '>=1.0.0.0'
  },
  pruneBlockchain: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  removePrunedFunds: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  sendFrom: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  sendMany: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  sendRawTransaction: {
    category: 'rawtransactions',
    version: '>=1.0.0.0'
  },
  sendToAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  setAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  setBan: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  setGenerate: {
    category: 'generating',
    version: '<0.13.0'
  },
  setNetworkActive: {
    category: 'network',
    version: '>=1.0.0.0'
  },
  setTxFee: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  signMessage: {
    category: 'wallet',
    features: {
      multiwallet: '>=1.0.0.0'
    },
    version: '>=1.0.0.0'
  },
  signMessageWithPrivKey: {
    category: 'util',
    obfuscate: {
      request: {
        default: params => set([...params], '[0]', '******'),
        named: params => set(params, 'privkey', '******')
      }
    },
    version: '>=1.0.0.0'
  },
  signRawTransaction: {
    category: 'rawtransactions',
    obfuscate: {
      request: {
        default: params => set([...params], '[2]', map(params[2], () => '******')),
        named: params => set(params, 'privkeys', map(params.privkeys || [], () => '******'))
      }
    },
    version: '>=1.0.0.0'
  },
  stop: {
    category: 'control',
    version: '>=1.0.0.0'
  },
  submitBlock: {
    category: 'mining',
    version: '>=1.0.0.0'
  },
  upTime: {
    category: 'control',
    version: '>=1.0.0.0'
  },
  validateAddress: {
    category: 'util',
    version: '>=1.0.0.0'
  },
  verifyChain: {
    category: 'blockchain',
    version: '>=1.0.0.0'
  },
  verifyMessage: {
    category: 'util',
    version: '>=1.0.0.0'
  },
  verifyTxOutProof: {
    category: 'blockchain',
    version: '>0.11.0'
  },
  walletLock: {
    category: 'wallet',
    version: '>=1.0.0.0'
  },
  walletPassphrase: {
    category: 'wallet',
    obfuscate: {
      request: {
        default: params => set([...params], '[0]', '******'),
        named: params => set(params, 'passphrase', '******')
      }
    },
    version: '>=1.0.0.0'
  },
  walletPassphraseChange: {
    category: 'wallet',
    obfuscate: {
      request: {
        default: params => set(set([...params], '[0]', '******'), '[1]', '******'),
        named: params => set(set(params, 'oldpassphrase', '******'), 'newpassphrase', '******')
      }
    },
    version: '>=1.0.0.0'
  }
};
