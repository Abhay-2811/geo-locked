

export const Geo_nft_usingAirnode = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_rrpAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "symbol",
                    "type": "string"
                },
                {
                    "internalType": "int256",
                    "name": "_permittedArea0",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "_permittedArea1",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "_permittedArea2",
                    "type": "int256"
                },
                {
                    "internalType": "int256",
                    "name": "_permittedArea3",
                    "type": "int256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "AccessControlBadConfirmation",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "neededRole",
                    "type": "bytes32"
                }
            ],
            "name": "AccessControlUnauthorizedAccount",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "reciever",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "int256",
                    "name": "tokenId",
                    "type": "int256"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "successfully_minted",
                    "type": "bool"
                }
            ],
            "name": "NFTmint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "previousAdminRole",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "newAdminRole",
                    "type": "bytes32"
                }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleGranted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleRevoked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "MINTER_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "airnodeRrp",
            "outputs": [
                {
                    "internalType": "contract IAirnodeRrpV0",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "requestId",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "fulfill",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "fulfilledData",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "fulfilledMintingAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                }
            ],
            "name": "getRoleAdmin",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "get_permitted_area",
            "outputs": [
                {
                    "internalType": "int256[4]",
                    "name": "",
                    "type": "int256[4]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "hasRole",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "incomingFulfillments",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "airnode",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "endpointId",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "sponsor",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "sponsorWallet",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "parameters",
                    "type": "bytes"
                }
            ],
            "name": "makeRequest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "permittedArea",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "callerConfirmation",
                    "type": "address"
                }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "safeMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    bytecode: "60a060405234801562000010575f80fd5b506040516200217838038062002178833981016040819052620000339162000305565b6001600160a01b0387166080819052604051632b77c09f60e21b815230600482015260016024820152879187918a919063addf027c906044015f604051808303815f87803b15801562000084575f80fd5b505af115801562000097573d5f803e3d5ffd5b5050505050815f9081620000ac919062000438565b506001620000bb828262000438565b50620000cc91505f9050336200013b565b50620000f97f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6886200013b565b50604051806080016040528085815260200184815260200183815260200182815250600b9060046200012d929190620001eb565b505050505050505062000504565b5f8281526006602090815260408083206001600160a01b038516845290915281205460ff16620001e2575f8381526006602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620001993390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620001e5565b505f5b92915050565b82600481019282156200021c579160200282015b828111156200021c578251825591602001919060010190620001ff565b506200022a9291506200022e565b5090565b5b808211156200022a575f81556001016200022f565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000268575f80fd5b81516001600160401b038082111562000285576200028562000244565b604051601f8301601f19908116603f01168101908282118183101715620002b057620002b062000244565b8160405283815260209250866020858801011115620002cd575f80fd5b5f91505b83821015620002f05785820183015181830184015290820190620002d1565b5f602085830101528094505050505092915050565b5f805f805f805f60e0888a0312156200031c575f80fd5b87516001600160a01b038116811462000333575f80fd5b60208901519097506001600160401b038082111562000350575f80fd5b6200035e8b838c0162000258565b975060408a015191508082111562000374575f80fd5b50620003838a828b0162000258565b955050606088015193506080880151925060a0880151915060c0880151905092959891949750929550565b600181811c90821680620003c357607f821691505b602082108103620003e257634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200043357805f5260205f20601f840160051c810160208510156200040f5750805b601f840160051c820191505b8181101562000430575f81556001016200041b565b50505b505050565b81516001600160401b0381111562000454576200045462000244565b6200046c81620004658454620003ae565b84620003e8565b602080601f831160018114620004a2575f84156200048a5750858301515b5f19600386901b1c1916600185901b178555620004fc565b5f85815260208120601f198616915b82811015620004d257888601518255948401946001909101908401620004b1565b5085821015620004f057878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b608051611c4d6200052b5f395f818161035b0152818161087d0152610b710152611c4d5ff3fe608060405234801561000f575f80fd5b50600436106101c6575f3560e01c806370a08231116100fe578063b88d4fde1161009e578063dd2ae83f1161006e578063dd2ae83f14610425578063e6080aa414610447578063e81da32a1461045a578063e985e9c51461046f575f80fd5b8063b88d4fde146103c5578063c87b56dd146103d8578063d5391393146103eb578063d547741f14610412575f80fd5b806391d14854116100d957806391d148541461039057806395d89b41146103a3578063a217fddf146103ab578063a22cb465146103b2575f80fd5b806370a082311461034357806371bab666146103565780637c1de7e11461037d575f80fd5b80632f2ff15d1161016957806340d097c31161014457806340d097c3146102f757806342842e0e1461030a57806350673c8d1461031d5780636352211e14610330575f80fd5b80632f2ff15d146102b257806336568abe146102c5578063406c6d6c146102d8575f80fd5b8063095ea7b3116101a4578063095ea7b31461023257806323b872dd14610247578063248a9ca31461025a578063295206bc1461028a575f80fd5b806301ffc9a7146101ca57806306fdde03146101f2578063081812fc14610207575b5f80fd5b6101dd6101d83660046115bd565b6104aa565b60405190151581526020015b60405180910390f35b6101fa6104ba565b6040516101e99190611625565b61021a610215366004611637565b610549565b6040516001600160a01b0390911681526020016101e9565b610245610240366004611669565b61056e565b005b610245610255366004611691565b610687565b61027c610268366004611637565b5f9081526006602052604090206001015490565b6040519081526020016101e9565b61021a610298366004611637565b60096020525f90815260409020546001600160a01b031681565b6102456102c03660046116ca565b6106b8565b6102456102d33660046116ca565b6106e2565b61027c6102e6366004611637565b60086020525f908152604090205481565b6102456103053660046116f4565b610715565b610245610318366004611691565b61075f565b61027c61032b366004611637565b610779565b61021a61033e366004611637565b61078f565b61027c6103513660046116f4565b6107ee565b61021a7f000000000000000000000000000000000000000000000000000000000000000081565b61024561038b366004611752565b610872565b6101dd61039e3660046116ca565b610a4a565b6101fa610a74565b61027c5f81565b6102456103c036600461179a565b610a83565b6102456103d33660046117e7565b610a92565b6101fa6103e6366004611637565b610ac4565b61027c7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102456104203660046116ca565b610b34565b6101dd610433366004611637565b60076020525f908152604090205460ff1681565b6102456104553660046118bc565b610b58565b610462610c36565b6040516101e99190611936565b6101dd61047d366004611966565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b5f6104b482610c71565b92915050565b60605f80546104c89061198e565b80601f01602080910402602001604051908101604052809291908181526020018280546104f49061198e565b801561053f5780601f106105165761010080835404028352916020019161053f565b820191905f5260205f20905b81548152906001019060200180831161052257829003601f168201915b5050505050905090565b5f61055382610c95565b505f908152600460205260409020546001600160a01b031690565b5f6105788261078f565b9050806001600160a01b0316836001600160a01b0316036105ea5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806106065750610606813361047d565b6106785760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016105e1565b6106828383610cf6565b505050565b6106913382610d63565b6106ad5760405162461bcd60e51b81526004016105e1906119c6565b610682838383610de0565b5f828152600660205260409020600101546106d281610f78565b6106dc8383610f82565b50505050565b6001600160a01b038116331461070b5760405163334bd91960e11b815260040160405180910390fd5b6106828282611013565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661073f81610f78565b600a80545f918261074f83611a28565b919050559050610682838261107e565b61068283838360405180602001604052805f815250610a92565b600b8160048110610788575f80fd5b0154905081565b5f818152600260205260408120546001600160a01b0316806104b45760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016105e1565b5f6001600160a01b0382166108575760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016105e1565b506001600160a01b03165f9081526003602052604090205490565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108e35760405162461bcd60e51b8152602060048201526016602482015275043616c6c6572206e6f74204169726e6f6465205252560541b60448201526064016105e1565b5f8381526007602052604090205460ff166109375760405162461bcd60e51b81526020600482015260146024820152734e6f20737563682072657175657374206d61646560601b60448201526064016105e1565b5f838152600760205260408120805460ff1916905561095882840184611637565b9050600181036109d8575f84815260096020526040902054610982906001600160a01b0316610715565b600a54600190610993908290611a40565b5f868152600960205260408082205490516001600160a01b03909116917f08f0cdf438caa22aea1eda5a13942c172dfc339494d5620e7350cfee700c4ee091a4610a1c565b5f848152600960205260408082205490515f19916001600160a01b0316907f08f0cdf438caa22aea1eda5a13942c172dfc339494d5620e7350cfee700c4ee0908490a45b5f93845260096020908152604080862080546001600160a01b03191690556008909152909320929092555050565b5f9182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600180546104c89061198e565b610a8e338383611097565b5050565b610a9c3383610d63565b610ab85760405162461bcd60e51b81526004016105e1906119c6565b6106dc84848484611164565b6060610acf82610c95565b5f610ae460408051602081019091525f815290565b90505f815111610b025760405180602001604052805f815250610b2d565b80610b0c84611197565b604051602001610b1d929190611a53565b6040516020818303038152906040525b9392505050565b5f82815260066020526040902060010154610b4e81610f78565b6106dc8383611013565b604051636e6be03f60e01b81525f906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690636e6be03f90610bbb908a908a908a908a903090637c1de7e160e01b908c908c90600401611a81565b6020604051808303815f875af1158015610bd7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bfb9190611af6565b5f908152600760209081526040808320805460ff191660011790556009909152902080546001600160a01b0319163317905550505050505050565b610c3e61158a565b60408051608081019182905290600b9060049082845b815481526020019060010190808311610c54575050505050905090565b5f6001600160e01b03198216637965db0b60e01b14806104b457506104b482611294565b5f818152600260205260409020546001600160a01b0316610cf35760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016105e1565b50565b5f81815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d2a8261078f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b5f80610d6e8361078f565b9050806001600160a01b0316846001600160a01b03161480610db457506001600160a01b038082165f9081526005602090815260408083209388168352929052205460ff165b80610dd85750836001600160a01b0316610dcd84610549565b6001600160a01b0316145b949350505050565b826001600160a01b0316610df38261078f565b6001600160a01b031614610e575760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016105e1565b6001600160a01b038216610eb95760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105e1565b610ec35f82610cf6565b6001600160a01b0383165f908152600360205260408120805460019290610eeb908490611a40565b90915550506001600160a01b0382165f908152600360205260408120805460019290610f18908490611b0d565b90915550505f8181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610cf381336112e3565b5f610f8d8383610a4a565b61100c575f8381526006602090815260408083206001600160a01b03861684529091529020805460ff19166001179055610fc43390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016104b4565b505f6104b4565b5f61101e8383610a4a565b1561100c575f8381526006602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016104b4565b610a8e828260405180602001604052805f81525061131c565b816001600160a01b0316836001600160a01b0316036110f85760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105e1565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61116f848484610de0565b61117b8484848461134e565b6106dc5760405162461bcd60e51b81526004016105e190611b20565b6060815f036111bd5750506040805180820190915260018152600360fc1b602082015290565b815f5b81156111e657806111d081611a28565b91506111df9050600a83611b86565b91506111c0565b5f8167ffffffffffffffff811115611200576112006117d3565b6040519080825280601f01601f19166020018201604052801561122a576020820181803683370190505b5090505b8415610dd85761123f600183611a40565b915061124c600a86611b99565b611257906030611b0d565b60f81b81838151811061126c5761126c611bac565b60200101906001600160f81b03191690815f1a90535061128d600a86611b86565b945061122e565b5f6001600160e01b031982166380ac58cd60e01b14806112c457506001600160e01b03198216635b5e139f60e01b145b806104b457506301ffc9a760e01b6001600160e01b03198316146104b4565b6112ed8282610a4a565b610a8e5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016105e1565b611326838361144b565b6113325f84848461134e565b6106825760405162461bcd60e51b81526004016105e190611b20565b5f6001600160a01b0384163b1561144057604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611391903390899088908890600401611bc0565b6020604051808303815f875af19250505080156113cb575060408051601f3d908101601f191682019092526113c891810190611bfc565b60015b611426573d8080156113f8576040519150601f19603f3d011682016040523d82523d5f602084013e6113fd565b606091505b5080515f0361141e5760405162461bcd60e51b81526004016105e190611b20565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610dd8565b506001949350505050565b6001600160a01b0382166114a15760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105e1565b5f818152600260205260409020546001600160a01b0316156115055760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105e1565b6001600160a01b0382165f90815260036020526040812080546001929061152d908490611b0d565b90915550505f8181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60405180608001604052806004906020820280368337509192915050565b6001600160e01b031981168114610cf3575f80fd5b5f602082840312156115cd575f80fd5b8135610b2d816115a8565b5f5b838110156115f25781810151838201526020016115da565b50505f910152565b5f81518084526116118160208601602086016115d8565b601f01601f19169290920160200192915050565b602081525f610b2d60208301846115fa565b5f60208284031215611647575f80fd5b5035919050565b80356001600160a01b0381168114611664575f80fd5b919050565b5f806040838503121561167a575f80fd5b6116838361164e565b946020939093013593505050565b5f805f606084860312156116a3575f80fd5b6116ac8461164e565b92506116ba6020850161164e565b9150604084013590509250925092565b5f80604083850312156116db575f80fd5b823591506116eb6020840161164e565b90509250929050565b5f60208284031215611704575f80fd5b610b2d8261164e565b5f8083601f84011261171d575f80fd5b50813567ffffffffffffffff811115611734575f80fd5b60208301915083602082850101111561174b575f80fd5b9250929050565b5f805f60408486031215611764575f80fd5b83359250602084013567ffffffffffffffff811115611781575f80fd5b61178d8682870161170d565b9497909650939450505050565b5f80604083850312156117ab575f80fd5b6117b48361164e565b9150602083013580151581146117c8575f80fd5b809150509250929050565b634e487b7160e01b5f52604160045260245ffd5b5f805f80608085870312156117fa575f80fd5b6118038561164e565b93506118116020860161164e565b925060408501359150606085013567ffffffffffffffff80821115611834575f80fd5b818701915087601f830112611847575f80fd5b813581811115611859576118596117d3565b604051601f8201601f19908116603f01168101908382118183101715611881576118816117d3565b816040528281528a6020848701011115611899575f80fd5b826020860160208301375f60208483010152809550505050505092959194509250565b5f805f805f8060a087890312156118d1575f80fd5b6118da8761164e565b9550602087013594506118ef6040880161164e565b93506118fd6060880161164e565b9250608087013567ffffffffffffffff811115611918575f80fd5b61192489828a0161170d565b979a9699509497509295939492505050565b6080810181835f5b600481101561195d57815183526020928301929091019060010161193e565b50505092915050565b5f8060408385031215611977575f80fd5b6119808361164e565b91506116eb6020840161164e565b600181811c908216806119a257607f821691505b6020821081036119c057634e487b7160e01b5f52602260045260245ffd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b5f52601160045260245ffd5b5f60018201611a3957611a39611a14565b5060010190565b818103818111156104b4576104b4611a14565b5f8351611a648184602088016115d8565b835190830190611a788183602088016115d8565b01949350505050565b6001600160a01b0389811682526020820189905287811660408301528681166060830152851660808201526001600160e01b0319841660a082015260e060c0820181905281018290525f6101008385828501375f838501820152601f909301601f191690910190910198975050505050505050565b5f60208284031215611b06575f80fd5b5051919050565b808201808211156104b4576104b4611a14565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b5f52601260045260245ffd5b5f82611b9457611b94611b72565b500490565b5f82611ba757611ba7611b72565b500690565b634e487b7160e01b5f52603260045260245ffd5b6001600160a01b03858116825284166020820152604081018390526080606082018190525f90611bf2908301846115fa565b9695505050505050565b5f60208284031215611c0c575f80fd5b8151610b2d816115a856fea2646970667358221220895234332d2c935ac4c16d0caa47062a208d19aa9da62dca83bfc5194f4dabfe64736f6c63430008170033"
}

