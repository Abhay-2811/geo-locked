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
import { airnode_const } from '../constants/airnode_configs'
import { encodeCallData } from './fhe_util'
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

export const mintNFT = async (
  walletClient,
  chainId,
  id,
  enc_ul,
  access_loc
) => {
  console.log(chainId, id, enc_ul, access_loc)
  await walletClient.switchChain({ id: chainId })
  const [account] = await walletClient.getAddresses()
  const publicClient = createPublicClient({
    chain: extractChain({
      chains: Object.values(chains),
      id: chainId
    }),
    transport: http()
  })
  if (account) {
    
    const encodedRequest = encodeCallData(enc_ul, access_loc)
    console.log(Geo_nft_usingAirnode.abi);
    const { request } = await publicClient.simulateContract({
      account,
      address: events[id].contract_add,
      abi: Geo_nft_usingAirnode.abi,
      functionName: 'makeRequest',
      args: [
        airnode_const.address,
        airnode_const.endpoint,
        events[id].contract_add,
        events[id].sponsor_wallet,
        encodedRequest
      ]
    })
    const hash = await walletClient.writeContract(request)
    await publicClient.waitForTransactionReceipt({ hash })
  }
}
