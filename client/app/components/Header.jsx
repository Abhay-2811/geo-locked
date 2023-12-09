'use client'
import React from 'react'
import { Button } from '@nextui-org/button'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { encryptLoc } from '@/app/utils/fhe_util'
const Header = () => {

  return (
    <div className='mt-14 flex flex-col items-center gap-2'>
      <h1 className='text-4xl font-extrabold leading-none tracking-tight bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>
        Geo-Locked
      </h1>
      <p>
        Mint verifiable Geo-Restricted NFTs implementing Fully Homomorphic
        Encryption [FHE]{' '}
      </p>
      <hr className='w-[30%] h-1 mx-auto my-3 border-0 rounded md:my-10 bg-gradient-to-r from-cyan-500 to-blue-500' />
      <div className='absolute mr-[-80%]'>
        <div className='flex flex-col'>
          <ConnectButton showBalance={false} chainStatus={'icon'}>
            CTA
          </ConnectButton>
        </div>
      </div>
    </div>
  )
}

export default Header
