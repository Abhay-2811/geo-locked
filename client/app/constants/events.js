import {
  polygonZkEvmTestnet,
  arbitrumGoerli,
  baseGoerli,
  fantomTestnet,
  lineaTestnet,
  goerli
} from 'viem/chains'
export const chain_mapping = {
  polygon: 'https://assets-global.website-files.com/6364e65656ab107e465325d2/642235057dbc06788f6c45c1_polygon-zkevm-logo.png',
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
    chain: 'Linea Testnet'
  },
  {
    name: 'EthGloabl Istanbul',
    chain_url: chain_mapping.base,
    thumbnail_url: '/ethistanbul.png',
    chain: 'Base Goerli'
  },
  {
    name: 'Scaling Ethereum',
    chain_url: chain_mapping.polygon,
    thumbnail_url: '/scalingeth.png',
    chain: 'Fantom Testnet'
  }
]

export const chains = [
  { label: 'polygon-zkevm', value: polygonZkEvmTestnet.id.toString(),descrpition: "" },
  { label: 'base-goerli', value: baseGoerli.id.toString(),descrpition: "" },
  { label: 'arbitrum-goerli', value: arbitrumGoerli.id.toString(),descrpition: "" },
  { label: 'fantom-testnet', value: fantomTestnet.id.toString(),descrpition: "" },
  { label: 'linea-testnet', value: lineaTestnet.id.toString(),descrpition: "" },
  { label: 'goerli', value: goerli.id.toString(),descrpition: "" }
]
