'use client'
import React, { useState } from 'react'
import { events,block_exp } from '@/app/constants/events'
import Image from 'next/image'
import { Divider } from '@nextui-org/divider'
import { Button } from '@nextui-org/button'
import { Avatar } from '@nextui-org/avatar'
import Loading from '@/app/loading'
import * as paillier from 'paillier-bigint'
import { extractChain, createPublicClient, http } from 'viem'
import * as chains from 'viem/chains'
import { Geo_nft_usingAirnode } from '@/app/constants/contract_data'
import { mintNFT } from '../../utils/contract_utils'
import { useWalletClient } from 'wagmi'
import { Snippet } from '@nextui-org/snippet'
import { Link } from '@nextui-org/link'

const page = ({ params }) => {
  const [loading, setLoading] = useState({ bool: true, result: -1 })
  const [position, setPosition] = useState({ lat: null, long: null })
  const [validity_area, setValidity_area] = useState([])
  const [encL, setEncL] = useState([])

  const encryptLoc = () => {
    const { lat: latitude, long: longitude } = position
    console.log(latitude, longitude)
    const publicKey = new paillier.PublicKey(585083n, 304245819903n)
    console.log([publicKey.encrypt(latitude), publicKey.encrypt(longitude)])
    setEncL([
      Number(publicKey.encrypt(latitude)),
      Number(publicKey.encrypt(longitude))
    ])
    return [
      Number(publicKey.encrypt(latitude)),
      Number(publicKey.encrypt(longitude))
    ]
  }

  const publicClient = createPublicClient({
    chain: extractChain({
      chains: Object.values(chains),
      id: events[params.id].chainId
    }),
    transport: http()
  })

  const check_eligibility = async position => {
    let { latitude, longitude } = position.coords
    latitude = Math.floor(latitude * 1000)
    longitude = Math.floor(longitude * 1000)
    const validity_area = await publicClient.readContract({
      address: events[params.id].contract_add,
      abi: Geo_nft_usingAirnode.abi,
      functionName: 'get_permitted_area'
    })
    setValidity_area([
      validity_area[0],
      validity_area[1],
      validity_area[2],
      validity_area[3]
    ])
    if (
      latitude >= Number(validity_area[0]) &&
      latitude <= Number(validity_area[1]) &&
      longitude >= Number(validity_area[2]) &&
      longitude <= Number(validity_area[3])
    ) {
      setLoading({ bool: false, result: 1 })
      setPosition({ lat: latitude, long: longitude })
    } else {
      setLoading({ bool: false, result: 0 })
    }

    // events[params.id].
  }

  let wc
  if (typeof window !== 'undefined') {
    const { data: walletClient } = useWalletClient({
      onError (error) {
        console.log('Error', error)
      }
    })
    wc = walletClient
    const locErrCallback = async position => {
      alert('Error fetching position !!!')
    }
    navigator.geolocation.getCurrentPosition(check_eligibility, locErrCallback)
  }
  const handleMint = async e => {
    e.preventDefault()
    // const encryptLoc =
    await mintNFT(
      wc,
      events[params.id].chainId,
      params.id,
      encryptLoc(),
      validity_area
    )
  }

  if (loading.bool) {
    return <Loading text={'Checking Your Eligibility ...'} />
  }

  if (!loading.bool && loading.result == 1) {
    return (
      <div className='mt-14 flex flex-col items-center gap-16'>
        <h1 className='text-4xl font-bold leading-none tracking-tight'>
          Join Event{' '}
          <span className=' bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent'>
            {events[params.id].name}
          </span>
        </h1>
        <div className='flex items-center justify-between gap-16'>
          <div>
            <Image
              src={events[params.id].thumbnail_url}
              width={300}
              height={300}
              className='rounded border border-white'
            ></Image>
          </div>

          <div className='flex flex-col items-center text-3xl gap-5'>
            <h2>You are in the permitted area of minitng !! </h2>
            <h1>🎉 🎉</h1>
            <h2 className='flex gap-2'>
              Chain:{' '}
              {
                <Avatar
                  src={events[params.id].chain_url}
                  size='md'
                  className='object-scale-down'
                />
              }
            </h2>
            {encL.length == 0 ? (
              <></>
            ) : (
              <Snippet size='lg' variant='solid' color='primary' >
                {encL.toString()} [This is the FHE encrypted location sent
                on-chain for verification so rest assured]
                <span>This might take few minutes to complete, depending on the chain</span>
              </Snippet>
            )}
            <Button color='primary' size='lg' onClick={handleMint}>
              Mint
            </Button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='mt-14 flex flex-col items-center gap-16'>
        <h1 className='text-4xl font-bold leading-none tracking-tight'>
          Join Event{' '}
          <span className=' bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent'>
            {events[params.id].name}
          </span>
        </h1>
        <div className='flex items-center justify-between gap-28'>
          <div>
            <Image
              src={events[params.id].thumbnail_url}
              width={300}
              height={300}
              className='rounded border border-white'
            ></Image>
          </div>

          <Divider orientation='vertical' className='bg-blue-300' />

          <div className='flex flex-col items-center text-3xl gap-5'>
            <h2>Sorry You Are not In Permitted Area to Mint NFT </h2>
            <h1> 😔 😔 </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default page
