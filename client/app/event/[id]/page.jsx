import React from 'react'
import { events } from '@/app/constants/events'
import Image from 'next/image'
import { Divider } from '@nextui-org/divider'
import { Button } from '@nextui-org/button'
import { Avatar } from '@nextui-org/avatar'

const page = ({ params }) => {
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
          <h2>You are in the permitted area of minitng !! </h2>
          <h1>🎉🎉</h1>
          <h2 className='flex gap-2'>Chain: {<Avatar src={events[params.id].chain_url} size='md' className='object-scale-down' />} {events[params.id].chain}</h2>
          <Button color='primary' size="lg">Mint</Button>
        </div>
      </div>
    </div>
  )
}

export default page
