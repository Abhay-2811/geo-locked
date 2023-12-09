import * as paillier from 'paillier-bigint'
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
