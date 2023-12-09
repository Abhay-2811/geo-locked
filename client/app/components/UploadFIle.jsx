import React, { useState } from 'react'
import lighthouse from '@lighthouse-web3/sdk'
import { ClipLoader } from 'react-spinners'
const CID = require('cids')

const UploadFile = props => {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [Hash, setHash] = useState();
  

  // helper function for upload img function
  const progressCallback = progressData => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2)
    console.log(percentageDone)
  }
  const uploadFile = async e => {
    setUploading(true)
    const output = await lighthouse.upload(
      e,
      "c94532a4.6f98c04387214a198ce1dde58309d0a9",
      progressCallback
    )
    const file = e.target.files
    console.log(file[0].size)
    const fileSize = file[0].size
    console.log('File Status:', output)
    console.log(
      'Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash
    )
    const hash = output.data.Hash
    setHash(hash);
    setUploaded(true)
  }

  return (
    <div>
      {uploading ? (
        <div
          style={{
            margin: '10px 0 10px 0',
            border: '2px solid rgb(200, 200, 200)',
            borderRadius: '20px',
            width: '100%',
            padding: '0.8em'
          }}
        >
          {uploaded ? (
            <span> ✅ Data deal created; Cid: {Hash} </span>
          ) : (
            <span>
              {' '}
              <ClipLoader size={15} /> Creating Data Deal on FVM
            </span>
          )}{' '}
        </div>
      ) : (
        <input
          type='file'
          name='DAOres'
          id='res'
          onChange={e => {
            uploadFile(e)
          }}
        />
      )}
      <span></span>
    </div>
  )
}

export default UploadFile
