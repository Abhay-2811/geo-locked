const paillierBigint = require('paillier-bigint')



async function smt(){
    const publicKey = new paillierBigint.PublicKey(585083n, 304245819903n)
    const privateKey = new paillierBigint.PrivateKey(291720n, 522637n, publicKey)
    const value =[95650028990, 284635815732]

    console.log({1: privateKey.decrypt(value[0]), 2: privateKey.decrypt(value[1])});
}

smt()