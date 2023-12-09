import {
  polygonZkEvmTestnet,
  arbitrumGoerli,
  baseGoerli,
  fantomTestnet,
  lineaTestnet,
  goerli
} from 'viem/chains'


export const chain_mapping = {
  polygon:
    'https://assets-global.website-files.com/6364e65656ab107e465325d2/642235057dbc06788f6c45c1_polygon-zkevm-logo.png',
  arb: 'https://res.coinpaper.com/coinpaper/arbitrum_logo_fb8ebaca35.svg',
  base: 'https://altcoinsbox.com/wp-content/uploads/2023/02/base-logo-in-blue.png',
  goerli:
    'https://res.coinpaper.com/coinpaper/ethereum_eth_logo_b64861bd15.svg',
  fantom: 'https://res.coinpaper.com/coinpaper/fantom_ftm_logo_5b62819c57.png',
  linea: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg'
}

export const events = [
  {
    name: 'EthIndia',
    chain_url: chain_mapping.linea,
    thumbnail_url: '/EthIndia.png',
    chainId: lineaTestnet.id,
    contract_add:'0x9dC4638e22936Da7723B4923e0Bfe249d4A7fa62',
    sponsor_wallet: '0x591D7705Cfe97b34ab321FC0e8Cd9A888c280Bcc'
  },
  {
    name: 'EthGloabl Istanbul',
    chain_url: chain_mapping.base,
    thumbnail_url: '/ethistanbul.png',
    chainId: baseGoerli.id,
    contract_add: '0xaa87F6Ff58D587b286a8EE98629D4b5CB2c506A7',
    sponsor_wallet: '0x24A6Aaba6845a88c7C38997b5E4D06f9D5D556Ec'
  },
  {
    name: 'Scaling Ethereum',
    chain_url: chain_mapping.polygon,
    thumbnail_url: '/scalingeth.png',
    chainId: polygonZkEvmTestnet.id,
    contract_add: '0x4097aF75b84D600c2851ea551D5FD7c8D5e07A70',
    sponsor_wallet: '0x6410Ae2c0AF1eb2Aa79713D101685FeFf5eC9001'
  },
  {
    name: 'EthGlobal Paris',
    chain_url: chain_mapping.arb,
    thumbnail_url: '/ethparis.png',
    chainId: arbitrumGoerli.id,
    contract_add: '0x39DAf5111096520efae34054bfD2A2febA271325',
    sponsor_wallet: '0x188Ce08Ca7Bfe2e30789c0F5fFc7fc6677045EeA'
  },
  {
    name: 'LFGHO',
    chain_url: chain_mapping.fantom,
    thumbnail_url: '/LFGHO.png',
    chainId: fantomTestnet.id,
    contract_add: '0x4097aF75b84D600c2851ea551D5FD7c8D5e07A70',
    sponsor_wallet: '0x6410Ae2c0AF1eb2Aa79713D101685FeFf5eC9001'
  }
]

export const chains = [
  {
    label: 'polygon-zkevm',
    value: polygonZkEvmTestnet.id.toString(),
    descrpition: ''
  },
  { label: 'base-goerli', value: baseGoerli.id.toString(), descrpition: '' },
  {
    label: 'arbitrum-goerli',
    value: arbitrumGoerli.id.toString(),
    descrpition: ''
  },
  {
    label: 'fantom-testnet',
    value: fantomTestnet.id.toString(),
    descrpition: ''
  },
  {
    label: 'linea-testnet',
    value: lineaTestnet.id.toString(),
    descrpition: ''
  },
  { label: 'goerli', value: goerli.id.toString(), descrpition: '' }
]

export const AirnodeRrpV0 = {
  1: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  5: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  10: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  30: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  31: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  56: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  97: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  100: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  137: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  250: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  288: '0x1d4F592E0723e03bed2Ff6d78F3CEe6750f08B38',
  416: '0xE338f63170c42bA0d2a888f18F6185369779009c',
  420: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  599: '0x5997C09be60196b7De9dE73C88dd7776f2875401',
  647: '0x20C9e9610d4e719a39F82893b3f42e2730F42778',
  1088: '0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E',
  1101: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  1284: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  1285: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  1287: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  1442: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  2001: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  4002: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  5000: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  5001: '0x20C9e9610d4e719a39F82893b3f42e2730F42778',
  8453: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  10200: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  42161: '0xb015ACeEdD478fc497A798Ab45fcED8BdEd08924',
  42170: '0xd864A45334C7a632cA9149993682354D7f967F28',
  43113: '0x7f5AF7a37a33898544717AAa6c35c111dCe95b28',
  43114: '0xC02Ea0f403d5f3D45a4F1d0d817e7A2601346c9E',
  43288: '0xd864A45334C7a632cA9149993682354D7f967F28',
  56288: '0x20C9e9610d4e719a39F82893b3f42e2730F42778',
  59140: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  59144: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  71401: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  71402: '0xb3070A0F2f84765Ee19EfADf91dfE50690a9eEa1',
  80001: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  84531: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  200101: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  421613: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd',
  11155111: '0x2ab9f26E18B64848cd349582ca3B55c2d06f507d',
  1313161554: '0xE338f63170c42bA0d2a888f18F6185369779009c',
  1313161555: '0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd'
}
