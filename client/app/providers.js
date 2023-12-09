'use client'

import * as React from 'react'
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css';
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonZkEvmTestnet,arbitrumGoerli, baseGoerli, goerli, fantomTestnet, lineaTestnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { NextUIProvider } from '@nextui-org/react'
import { chain_mapping } from './constants/events';

const defaultChains = [
  {
    ...polygonZkEvmTestnet,
    iconUrl: chain_mapping.polygon
  },
  {
    ...arbitrumGoerli,
    iconUrl:chain_mapping.arb
  },
  {
    ...baseGoerli,
    iconUrl:chain_mapping.base
  },
  {
    ...goerli,
    iconUrl:chain_mapping.goerli
  },
  {
    ...lineaTestnet,
    iconUrl:chain_mapping.linea
  }
]

const { chains, publicClient } = configureChains(defaultChains, [
  publicProvider()
])

const { connectors } = getDefaultWallets({
  appName: 'Paper Stack',
  projectId: 'db1b8a46ffa835bd9a48a89ff540f990',
  chains
})

const demoAppInfo = {
  appName: 'Geo-Locked'
}

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export function Providers ({ children }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <NextUIProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          initialChain={polygonZkEvmTestnet.id}
          appInfo={demoAppInfo}
          theme={midnightTheme({
            accentColor: '#3b82f6',
            accentColorForeground: 'white',
            borderRadius: 'medium'
          })}
          coolMode
          modalSize='compact'
        >
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  )
}