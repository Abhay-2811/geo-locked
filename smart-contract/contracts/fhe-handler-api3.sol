//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";


contract Geo_nft is RrpRequesterV0, ERC721, AccessControl {
    mapping(bytes32 => bool) public incomingFulfillments;
    mapping(bytes32 => int256) public fulfilledData;
    mapping(bytes32 => address) public fulfilledMintingAddress;
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    uint256 private _nextTokenId;


    constructor(address _rrpAddress, string memory name, string memory symbol) RrpRequesterV0(_rrpAddress) ERC721(name,symbol){
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, _rrpAddress);
    }

    function safeMint(address to) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

    event NFTmint(address indexed reciever, int indexed tokenId, bool indexed successfully_minted);

// The main makeRequest function that will trigger the Airnode request.

    function makeRequest(
        address airnode,
        bytes32 endpointId,
        address sponsor,
        address sponsorWallet,
        bytes calldata parameters
        
    ) external {
        bytes32 requestId = airnodeRrp.makeFullRequest(
            airnode,
            endpointId,
            sponsor,
            sponsorWallet,
            address(this),
            this.fulfill.selector,
            parameters
        );
        incomingFulfillments[requestId] = true;
        fulfilledMintingAddress[requestId] = msg.sender; 
    }

    function fulfill(bytes32 requestId, bytes calldata data)
        external
        onlyAirnodeRrp
    {
        require(incomingFulfillments[requestId], "No such request made");
        delete incomingFulfillments[requestId];
        int256 decodedData = abi.decode(data, (int256));
        if(decodedData == int256(1)){
            //mint nFT
            safeMint(fulfilledMintingAddress[requestId]);
            emit NFTmint(fulfilledMintingAddress[requestId], int256(_nextTokenId-1), true);
        }
        else{
            emit NFTmint(fulfilledMintingAddress[requestId], -1, false);
        }
        delete fulfilledMintingAddress[requestId];
        fulfilledData[requestId] = decodedData;
    }
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}