//What we want to do here:

1. something similar to zloc-nft, instead of zkp we use fhe
2. Admin deploys a NFT contract, which are location restriced :
    2.1: const inp: area struct i.e. lat/long:min/max (public)
    2.2: permitted area array- [area] (public)
    2.3: mint function: extra args- user fhe encrypted location, we check if user's location is in range
