const express = require('express')
const cors = require('cors')

const app = express()
const paillierBigint = require('paillier-bigint')

const viem = require('viem')

app.use(cors())

app.use(express.json())

const PORT = process.env.PORT || 8000
const publicKey = new paillierBigint.PublicKey(585083n, 304245819903n)
const privateKey = new paillierBigint.PrivateKey(291720n, 522637n, publicKey)

//@params: enc_ul: [2] [long,lat] encrypted user location, area_ramge: [4] [0,1]: long range [2,3]: lat range
function in_permitted_location (enc_ul, area_range) {
  const dec_ul_lon = privateKey.decrypt(BigInt(enc_ul[1]))
  const dec_ul_lat = privateKey.decrypt(BigInt(enc_ul[0]))
  console.log(dec_ul_lat, dec_ul_lon)
  // console.log({1: publicKey.encrypt(enc_ul[0]),2: publicKey.encrypt(enc_ul[1])});
  // const dec_ul_lon = (enc_ul[0]);
  // const dec_ul_lat = (enc_ul[1]);
  if (
    dec_ul_lon >= area_range[0] &&
    dec_ul_lon <= area_range[1] &&
    dec_ul_lat >= area_range[2] &&
    dec_ul_lat <= area_range[3]
  ) {
    return true
  } else {
    return false
  }
}
app.listen(PORT, async () => {
  console.log('Listening at PORT: ', PORT)
})

app.post('/fhe_check', (req, res) => {
  try {
    let enc_userLat = req.body.enc_ul_lat;
    let enc_userLon = req.body.enc_ul_lon;
    const access_loc_1 = req.body.access_loc_1;
    const access_loc_2 = req.body.access_loc_2;
    const access_loc_3 = req.body.access_loc_3;
    const access_loc_4 = req.body.access_loc_4;
     const access_loc = req.body.access_loc
    const permit = in_permitted_location([enc_userLat,enc_userLon], [access_loc_1,access_loc_2,access_loc_3,access_loc_4])
    if (permit) {
      res.status(200).send('1')
    } else {
      res.status(200).send('0')
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('2')
  }
})
