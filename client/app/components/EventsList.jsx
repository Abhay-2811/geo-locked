import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Spacer } from '@nextui-org/spacer'
import Image from 'next/image'
import { events } from '../constants/events'
import Link from 'next/link'

const EventsList = () => {
  return (
    <div className='flex mx-20 my-5'>
      {events.map((events, index) => (
        <>
          <Event_card
            id={index}
            name={events.name}
            thumbnail_url={events.thumbnail_url}
            chain_url={events.chain_url}
          />
          <Spacer x={16} y={16} />
        </>
      ))}
    </div>
  )
}

const Event_card = props => {
  return (
    <Card className='py-4 bg-gray-200' fullWidth={false}>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start h-[40px]'>
        <h4 className='font-bold text-large'>{props.name}</h4>
      </CardHeader>
      <Divider className='my-3 w-[50%] bg-black' />
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='Card background'
          className='rounded-xl border border-black'
          src={props.thumbnail_url}
          width={270}
          height={270}
        />
      </CardBody>
      <CardFooter className='justify-between'>
        <Avatar src={props.chain_url} size='md' className='object-scale-down' />
        <Link href={`/event/${props.id}`}>
          <Button>Join Event</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default EventsList
