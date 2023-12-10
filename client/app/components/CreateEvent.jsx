import React, { useState } from 'react'
import { Card, CardBody } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { Select, SelectSection, SelectItem } from '@nextui-org/select'
import { chains } from '../constants/events'
import UploadFile from './UploadFIle'
import { goerli } from 'viem/chains'
import {Geo_nft_usingAirnode} from '../constants/contract_data'
import { useWalletClient } from 'wagmi'
import {deployContract} from '../utils/contract_utils'

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    NFTname: '',
    NFTsymbol: '',
    map: '',
    chain: 0
  })
  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  }
  let wc
  if (typeof window !== 'undefined') {
    const { data: walletClient } = useWalletClient({
      onError (error) {
        console.log('Error', error)
      }
    })
    wc = walletClient
   
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    //chain specific actions
    //Api3 specific actions
    //1. Deploy Compatible contract
    //2. Get sponsor wallet and ask user to fund it
    //3. Edit Events.js to update frontend
    //4. Create Push channel for event, nft gate it
    //5. Done

    //api3 part
    console.log(formData.chain);
    if(formData.chain !== 0 && formData.chain !== goerli.id){
      //1.deploy contract
      const input_permitted_area = formData.map.slice(1,-1).split(",");
      const address = await deployContract(formData.chain,wc,formData.NFTname,formData.NFTsymbol,[Number(input_permitted_area[0]),Number(input_permitted_area[1]),Number(input_permitted_area[2]),Number(input_permitted_area[3])]);
      console.log(address);
    }

  }
  return (
    <form className='flex flex-col ml-40 mr-40 my-5 dark mb-10' onSubmit={handleSubmit}>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='eventName'
          id='eventName'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required

          onChange={handleChange}
        />
        <label
          htmlFor='eventName'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Event Name
        </label>
      </div>

      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='text'
            name='NFTname'
            id='NFTname'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
            onChange={handleChange}
          />
          <label
            htmlFor='NFTname'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            NFT Name
          </label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='text'
            name='NFTsymbol'
            id='NFTsymbol'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
            onChange={handleChange}
          />
          <label
            htmlFor='NFTsymbol'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            NFT Symbol
          </label>
        </div>
      </div>

      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='map'
          id='map'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
          //   onChange={
          //     // (e)=>{
          //     // e.preventDefault();
          //     // console.log(e.target.value.slice(1,-1).split(","));
          //   // }

          // }
          onChange={handleChange}
        />
        <label
          htmlFor='map'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Array Representing Permitted Area
        </label>
        <Link
          isBlock
          showAnchorIcon
          href='https://whimsical-pie-92b2cd.netlify.app/'
          target='_blank'
          color='primary'
        >
          Get Formatted Coordinates
        </Link>
      </div>

      <div class='p-4 mb-4 text-sm  rounded-lg bg-gray-800 w-auto' role='alert'>
        <span class='font-medium text-red-400'>
          <b>Warning!</b>
        </span>{' '}
        Users will only be able to mint event tickets in permitted locations.
        Dont worry we use FHE for maintaining privacy 🤯 😎
      </div>
      <div className=' mb-6'>
        <label
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          for='file_input'
        >
          Upload file
        </label>
        <UploadFile className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' />
      </div>
      <div className='dark'>
        <Select
          items={chains}
          label='Deploy FHE handler on chain'
          name='chain'
          id='chain'
          placeholder='Select Chain'
          className='max-w-xs dark text-green-200'
          variant='underlined'
          isRequired={true}
          popoverProps={{ color: 'primary' }}
          onChange={handleChange}
        >
          {chain => <SelectItem key={chain.value}>{chain.label}</SelectItem>}
        </Select>
      </div>

      <button
        className='text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[30%] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='submit'
      >
        Deploy Contract
      </button>
    </form>
  )
}

export default CreateEvent
