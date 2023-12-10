# Geo-Locked NFTs

Geo-Locked NFTs do exactly what they sound like, they are geo-restricted and user can only mint them in specific location, as decided by owner of NFT. 

## How Is It Possible?

Using FHE i.e Homomorphic Encryption we can send user's encrypted location freely on-chain which was the only barrier previously stopping us from implementing this.

The project "Geo Locked NFT" depicts one of many use cases that FHE unlocks in web3.

![FHE_1](https://github.com/Abhay-2811/geo-locked/assets/97840499/4a959929-5719-42b0-a173-aeedc8c80831)


## Deployed FHE Handler Contract Addresses [All are testnets]

1. Arbritrum: 0x39DAf5111096520efae34054bfD2A2febA271325
2. Base: 0xaa87F6Ff58D587b286a8EE98629D4b5CB2c506A7
3. Polygon-zkevm: 0x4097aF75b84D600c2851ea551D5FD7c8D5e07A70
4. Fantom: 0x4097aF75b84D600c2851ea551D5FD7c8D5e07A70
5. Linea: 0x9dC4638e22936Da7723B4923e0Bfe249d4A7fa62

## FHE Key generation

1. Define the bit length of the modulus `n`, or `keyLength` in bits.
2. Choose two large prime numbers `p` and `q` randomly and independently of each other such that `gcd( p·q, (p-1)(q-1) )=1` and `n=p·q` has a key length of keyLength. For instance:
   1. Generate a random prime `p` with a bit length of `keyLength/2 + 1`.
   2. Generate a random prime `q` with a bit length of `keyLength/2`.
   3. Repeat until the bitlength of `n=p·q` is `keyLength`.
3. Compute parameters `λ`, `g` and `μ`. Among other ways, it can be done as follows:
   1. Standard approach:
      1. Compute `λ = lcm(p-1, q-1)` with `lcm(a, b) = a·b / gcd(a, b)`.
      2. Generate randoms `α` and `β` in `Z*` of `n`, and select generator `g` in `Z*` of `n**2` as `g = ( α·n + 1 ) β**n mod n**2`.
      3. Compute `μ = ( L( g^λ mod n**2 ) )**(-1) mod n` where `L(x)=(x-1)/n`.
   2. If using p,q of equivalent length, a simpler variant would be:
      1. `λ = (p-1, q-1)`
      2. `g = n+1`
      3. `μ = λ**(-1) mod n`
   
The **public** (encryption) **key** is **(n, g)**.

The **private** (decryption) **key** is **(λ, μ)**. 
  
## FHE Encryption
Let `m` in `[0, n)` be the clear-text message,

1. Select random integer `r` in `Z*` of `n`.

2. Compute ciphertext as: **`c = g**m · r**n mod n**2`**

## FHE Decryption
Let `c` be the ciphertext to decrypt, where `c` in `(0, n**2)`.

1. Compute the plaintext message as: **`m = L( c**λ mod n**2 ) · μ mod n`**


