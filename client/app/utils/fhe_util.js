import * as paillier from 'paillier-bigint'
import { encode } from '@api3/airnode-abi'

export const encryptLoc = position => {
  const { latitude, longitude } = position.coords
  const publicKey = new paillier.PublicKey(585083n, 304245819903n)
  console.log([
    publicKey.encrypt(Math.floor(latitude * 1000)),
    publicKey.encrypt(Math.floor(longitude * 1000))
  ])
  return [
    publicKey.encrypt(Math.floor(latitude * 1000)),
    publicKey.encrypt(Math.floor(longitude * 1000))
  ]
}

export const encodeCallData = (enc_ul, access_loc) => {
  const params = [
    { type: 'uint256', name: 'enc_ul_lat', value: enc_ul[0] },
    { type: 'uint256', name: 'enc_ul_lon', value: enc_ul[1] },
    { type: 'uint256', name: 'access_loc_1', value: access_loc[0] },
    { type: 'uint256', name: 'access_loc_2', value: access_loc[1] },
    { type: 'uint256', name: 'access_loc_3', value: access_loc[2] },
    { type: 'uint256', name: 'access_loc_4', value: access_loc[3] },
    { type: 'string', name: '_path', value: '' },
    { type: 'string', name: '_type', value: 'bool' }
  ]
  const encodedData = encode(params)
  return encodedData
}
