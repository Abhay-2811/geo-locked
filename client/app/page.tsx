'use client'
import Image from 'next/image'
import { Tabs, Tab } from '@nextui-org/tabs'
import Loading from './loading'
import EventsList from './components/EventsList'
import CreateEvent from './components/CreateEvent'
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Tabs aria-label='options' className='dark w-[40%] mt-4 text-white' fullWidth={true} color={'primary'} radius={'full'}>
        <Tab key='events' title='Live Events' className='text-white'>
          <EventsList />
        </Tab>
        <Tab key='create' title='Create Event'>
          <CreateEvent />
        </Tab>
      </Tabs>
    </main>
  )
}
