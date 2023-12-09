import { Geo_nft_usingAirnode } from '../constants/contract_data'
import {
  parseUnits,
  parseEther,
  createPublicClient,
  http,
  extractChain
} from 'viem'
import * as chains from 'viem/chains'
import { AirnodeRrpV0 } from '../constants/events'
import { events } from '../constants/events'
import {airnode_const} from '../constants/airnode_configs'

export const deployContract = async (
  chainId,
  walletClient,
  NFTname,
  NFTsymbol,
  permittedArea
) => {
  console.log(chainId)
  await walletClient.switchChain({ id: chainId })
  const [account] = await walletClient.getAddresses()
  console.log(
    AirnodeRrpV0[chainId],
    NFTname,
    NFTsymbol,
    permittedArea[0],
    permittedArea[1],
    permittedArea[2],
    permittedArea[3]
  )
  if (account) {
    const hash = await walletClient.deployContract({
      ...Geo_nft_usingAirnode,
      account,
      args: [
        AirnodeRrpV0[chainId],
        NFTname,
        NFTsymbol,
        permittedArea[0],
        permittedArea[1],
        permittedArea[2],
        permittedArea[3]
      ]
    })
    const publicClient = createPublicClient({
      chain: extractChain({
        chains: Object.values(chains),
        id: chainId
      }),
      transport: http()
    })
    const receipt = await publicClient.waitForTransactionReceipt({ hash })
    return receipt.contractAddress
  }
}

export const mintNFT = async (walletClient, chainId, id) => {
  await walletClient.switchChain({ id: chainId })
  const [account] = await walletClient.getAddresses()
  if (account) {
    const encodedRequest = ''
    const { request } = walletClient.simulateContract({
        account,
        address: events[id].contract_add,
        abi: Geo_nft_usingAirnode.abi,
        functionName: 'makeRequest',
        args:[airnode_const.address,airnode_const.endpoint,events[id].contract_add,events[id].sponsor_wallet,]
    })
  }
}
