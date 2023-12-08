const paillierBigint = require('paillier-bigint')



async function smt(){
    const pub = new paillierBigint.PublicKey(585083n,304245819903n);
    const priv = new paillierBigint.PrivateKey(291720n,522637n,pub)
    const ecv =pub.encrypt(99999);
    console.log({1: pub.encrypt(35563),2: pub.encrypt(29876)});

    console.log({1: ecv, 2: priv.decrypt(ecv)});
}

smt()