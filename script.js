var web3 = new Web3('https://rpc.bitkubchain.io')
var kap721abi = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_adminRouter","internalType":"address"},{"type":"address","name":"_kyc","internalType":"address"},{"type":"address","name":"_committee","internalType":"address"},{"type":"uint256","name":"_acceptedKycLevel","internalType":"uint256"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"approved","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"Paused","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"Unpaused","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"PROJECT","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"acceptedKycLevel","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"adminApprove","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IAdminProjectRouter"}],"name":"adminRouter","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"adminSetApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"adminTransfer","inputs":[{"type":"address","name":"_from","internalType":"address"},{"type":"address","name":"_to","internalType":"address"},{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"approve","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"baseURI","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"","internalType":"uint256[]"}],"name":"batchMint","inputs":[{"type":"address[]","name":"_to","internalType":"address[]"},{"type":"uint256[]","name":"_itemInfo","internalType":"uint256[]"},{"type":"string[]","name":"_tokenURI","internalType":"string[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"burn","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"committee","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"exists","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"externalTransfer","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"freeze","inputs":[{"type":"address","name":"_addr","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"freezed","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getApproved","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"internalTransfer","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IKYCBitkubChain"}],"name":"kyc","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"mint","inputs":[{"type":"address","name":"_to","internalType":"address"},{"type":"uint256","name":"_itemInfo","internalType":"uint256"},{"type":"string","name":"_tokenURI","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerOf","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"pause","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"paused","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"bytes","name":"_data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setAcceptedKycLevel","inputs":[{"type":"uint256","name":"_kycLevel","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setAdmin","inputs":[{"type":"address","name":"_adminRouter","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBaseURI","inputs":[{"type":"string","name":"_baseURI","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setCommittee","inputs":[{"type":"address","name":"_committee","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setKYC","inputs":[{"type":"address","name":"_kyc","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTokenURI","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"},{"type":"string","name":"_tokenURI","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTransferRouter","inputs":[{"type":"address","name":"_transferRouter","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenByIndex","inputs":[{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenIndexCounter","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenIndexToId","inputs":[{"type":"uint256","name":"_index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"","internalType":"uint256[]"}],"name":"tokenOfOwnerAll","inputs":[{"type":"address","name":"_owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenOfOwnerByIndex","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"","internalType":"uint256[]"}],"name":"tokenOfOwnerByPage","inputs":[{"type":"address","name":"_owner","internalType":"address"},{"type":"uint256","name":"_page","internalType":"uint256"},{"type":"uint256","name":"_limit","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"tokenURI","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"transferRouter","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"","internalType":"uint256[]"}],"name":"unfreeze","inputs":[{"type":"address","name":"_addr","internalType":"address"},{"type":"uint256[]","name":"_burnItemId","internalType":"uint256[]"},{"type":"uint256[]","name":"_mintItemInfo","internalType":"uint256[]"},{"type":"string[]","name":"_tokenURI","internalType":"string[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"unpause","inputs":[]}]
var nftWiki = Array(4).fill(Array(5))
nftWiki[1] = ['MMV', '', '', '0xd08Ac40b3a0A7fb20b026A3b6Cd5D7cFadc3d6f5', new web3.eth.Contract(kap721abi, '0xd08Ac40b3a0A7fb20b026A3b6Cd5D7cFadc3d6f5')]
nftWiki[2] = ['CM', '', '', '0x2F022D4Ef37847304eCd167303aeaA9699F73663', new web3.eth.Contract(kap721abi, '0x2F022D4Ef37847304eCd167303aeaA9699F73663')]
nftWiki[3] = ['FCN', '', '', '0xd49C4e35ccd575b46176Eac69A3e60a89Eb0C27f', new web3.eth.Contract(kap721abi, '0xd49C4e35ccd575b46176Eac69A3e60a89Eb0C27f')]
var kap20abi = [ { "inputs": [ { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "uint8", "name": "_decimals", "type": "uint8" }, { "internalType": "address", "name": "_adminRouter", "type": "address" }, { "internalType": "address", "name": "_committee", "type": "address" }, { "internalType": "address", "name": "_kyc", "type": "address" }, { "internalType": "uint256", "name": "_acceptedKycLevel", "type": "uint256" }, { "internalType": "address", "name": "_transferRouter", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "account", "type": "address" } ], "name": "Unpaused", "type": "event" }, { "inputs": [], "name": "PROJECT", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "acceptedKycLevel", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "activateOnlyKycAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "adminRouter", "outputs": [ { "internalType": "contract IAdminProjectRouter", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "adminTransfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "committee", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "externalTransfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "internalTransfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "isActivatedOnlyKycAddress", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "kyc", "outputs": [ { "internalType": "contract IKYCBitkubChain", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_kycLevel", "type": "uint256" } ], "name": "setAcceptedKycLevel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_adminRouter", "type": "address" } ], "name": "setAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_committee", "type": "address" } ], "name": "setCommittee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_kyc", "type": "address" } ], "name": "setKYC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_transferRouter", "type": "address" } ], "name": "setTransferRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "transferRouter", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ];
var tokenWiki = Array(72).fill(Array(5))
tokenWiki[0][1] = 'https://storage.googleapis.com/static.bitkubnext.com/bitkub-next/token-icons/' 
tokenWiki[1] = ['KKUB', tokenWiki[0][1] + 'kub.png', 'token2001', '0x67eBD850304c70d983B2d1b93ea79c7CD6c3F6b5', new web3.eth.Contract(kap20abi, '0x67eBD850304c70d983B2d1b93ea79c7CD6c3F6b5')]
tokenWiki[2] = ['LUMI', tokenWiki[0][1] + 'lumi.png', 'token2002', '0x95013Dcb6A561e6C003AED9C43Fb8B64008aA361', new web3.eth.Contract(kap20abi, '0x95013Dcb6A561e6C003AED9C43Fb8B64008aA361')]
tokenWiki[3] = ['KUSDT', tokenWiki[0][1] + 'usdt.png', 'token2003', '0x7d984C24d2499D840eB3b7016077164e15E5faA6', new web3.eth.Contract(kap20abi, '0x7d984C24d2499D840eB3b7016077164e15E5faA6')]
tokenWiki[4] = ['TOMATO', tokenWiki[0][1] + 'crop-tomato.png', 'token1001', '0x9Ea7E0435B5E50e1DCBB8Eacd63F0dbD3003BdAA', new web3.eth.Contract(kap20abi, '0x9Ea7E0435B5E50e1DCBB8Eacd63F0dbD3003BdAA')]
tokenWiki[5] = ['CORN', tokenWiki[0][1] + 'crop-corn.png', 'token1002', '0x4fA393FC50BcDF367145163b920bB37C21e596ec', new web3.eth.Contract(kap20abi, '0x4fA393FC50BcDF367145163b920bB37C21e596ec')]
tokenWiki[6] = ['CABBAGE', tokenWiki[0][1] + 'crop-cabbage.png', 'token1003', '0xE3bee928D481b40BB6D0F0EDbfD888a7845CF622', new web3.eth.Contract(kap20abi, '0xE3bee928D481b40BB6D0F0EDbfD888a7845CF622')]
tokenWiki[7] = ['CARROT', tokenWiki[0][1] + 'crop-carrot.png', 'token1004', '0x3937dDAd2Ad8A9Ac7EFbf7C1Cb2B2D9b68B7d048', new web3.eth.Contract(kap20abi, '0x3937dDAd2Ad8A9Ac7EFbf7C1Cb2B2D9b68B7d048')]
tokenWiki[8] = ['TOMATOSEED', tokenWiki[0][1] + 'seed-tomato.png', 'token1005', '0xe991151Bf43bD712beAC33e5cFF2580841c9b440', new web3.eth.Contract(kap20abi, '0xe991151Bf43bD712beAC33e5cFF2580841c9b440')]
tokenWiki[9] = ['CORNSEED', tokenWiki[0][1] + 'seed-corn.png', 'token1006', '0xe27aEbED61Be207E83Fc05fBC408420c737881DA', new web3.eth.Contract(kap20abi, '0xe27aEbED61Be207E83Fc05fBC408420c737881DA')]
tokenWiki[10] = ['CABBAGESEED', tokenWiki[0][1] + 'seed-cabbage.png', 'token1007', '0x1F8B5AF0eC97c44b24366b36C40F2d4ACa2c73e2', new web3.eth.Contract(kap20abi, '0x1F8B5AF0eC97c44b24366b36C40F2d4ACa2c73e2')]
tokenWiki[11] = ['CARROTSEED', tokenWiki[0][1] + 'seed-carrot.png', 'token1008', '0x7B263d648Fff39142aBECb07a1bB85297E09982d', new web3.eth.Contract(kap20abi, '0x7B263d648Fff39142aBECb07a1bB85297E09982d')]
tokenWiki[12] = ['RED APPLE', tokenWiki[0][1] + 'red-apple.png', 'token1009', '0x3cEDA9D8f4b629745488bB6044452CADcec1157f', new web3.eth.Contract(kap20abi, '0x3cEDA9D8f4b629745488bB6044452CADcec1157f')]
tokenWiki[13] = ['GREEN APPLE', tokenWiki[0][1] + 'green-apple.png', 'token1010', '0x417e28bd41cD45d9F996B69450F81B02821A6D64', new web3.eth.Contract(kap20abi, '0x417e28bd41cD45d9F996B69450F81B02821A6D64')]
tokenWiki[14] = ['BANANA', tokenWiki[0][1] + 'banana.png', 'token1011', '0x0944882cF373Adc8c3de740821FB14c8669E89EB', new web3.eth.Contract(kap20abi, '0x0944882cF373Adc8c3de740821FB14c8669E89EB')]
tokenWiki[15] = ['HONEYCOMB', tokenWiki[0][1] + 'honey.png', 'token1012', '0x619460ae4aD823efBA1c7A21FDf0a353893308B9', new web3.eth.Contract(kap20abi, '0x619460ae4aD823efBA1c7A21FDf0a353893308B9')]
tokenWiki[16] = ['WHITE BUTTON', tokenWiki[0][1] + 'white-button.png', 'token1013', '0xcb74a1A9dB4285E97D4dE8aa4B61cd10277Ab479', new web3.eth.Contract(kap20abi, '0xcb74a1A9dB4285E97D4dE8aa4B61cd10277Ab479')]
tokenWiki[17] = ['SHIITAKE', tokenWiki[0][1] + 'shiitake.png', 'token1014', '0xd3b314b101b26Fa2bD19dF0d845A632D72C4Fc44', new web3.eth.Contract(kap20abi, '0xd3b314b101b26Fa2bD19dF0d845A632D72C4Fc44')]
tokenWiki[18] = ['KING TRUMPET', tokenWiki[0][1] + 'king-trumpet.png', 'token1015', '0xC14f24835Efe355106aB8725488F16f93C8c5f96', new web3.eth.Contract(kap20abi, '0xC14f24835Efe355106aB8725488F16f93C8c5f96')]
tokenWiki[19] = ['MANGOSTEEN', tokenWiki[0][1] + 'mangosteen.png', 'token1016', '0x1786a5391EaA5cfd5c8bc4376991B993380Db102', new web3.eth.Contract(kap20abi, '0x1786a5391EaA5cfd5c8bc4376991B993380Db102')]
tokenWiki[20] = ['RED HERB', tokenWiki[0][1] + 'red-herb.png', 'token1017', '0x3F69C740456150268C5e23bD05a2A10Bf9e5c3CB', new web3.eth.Contract(kap20abi, '0x3F69C740456150268C5e23bD05a2A10Bf9e5c3CB')]
tokenWiki[21] = ['GREEN HERB', tokenWiki[0][1] + 'green-herb.png', 'token1018', '0xDe496524c30c460922E7810DDC6c806c0E2C5354', new web3.eth.Contract(kap20abi, '0xDe496524c30c460922E7810DDC6c806c0E2C5354')]
tokenWiki[22] = ['LESSER POTION', tokenWiki[0][1] + 'lesser-health-potion.png', 'token1019', '0xE66f21d817Af8F99129aF6023332dd7b37503B9d', new web3.eth.Contract(kap20abi, '0xE66f21d817Af8F99129aF6023332dd7b37503B9d')]
tokenWiki[23] = ['HEALTH POTION', tokenWiki[0][1] + 'health%20-potion.png', 'token1020', '0xbD60c8caF6e22907576d9e363aB1f91b43AAF769', new web3.eth.Contract(kap20abi, '0xbD60c8caF6e22907576d9e363aB1f91b43AAF769')]
tokenWiki[24] = ['TOOL FRAGMENT', tokenWiki[0][1] + 'tool-fragment.png', 'token1021', '0x677230Ca27C123a5bE24fb0ba1846f871959fe05', new web3.eth.Contract(kap20abi, '0x677230Ca27C123a5bE24fb0ba1846f871959fe05')]
tokenWiki[25] = ['RAG', tokenWiki[0][1] + 'rag.png', 'token1022', '0x1F14690e6c7D02fCeB67c6b818aa2C093e16fe27', new web3.eth.Contract(kap20abi, '0x1F14690e6c7D02fCeB67c6b818aa2C093e16fe27')]
tokenWiki[26] = ['SCRAP METAL', tokenWiki[0][1] + 'scrap-metal.png', 'token1023', '0x0Cd968a09E8D43E08c1f0F9c848b7A8e3bc89392', new web3.eth.Contract(kap20abi, '0x0Cd968a09E8D43E08c1f0F9c848b7A8e3bc89392')]
tokenWiki[27] = ['LEATHER PIECE', tokenWiki[0][1] + 'leather-piece.png', 'token1024', '0x15aa87eb74069d3800f8e75A93FC04fda79AA24d', new web3.eth.Contract(kap20abi, '0x15aa87eb74069d3800f8e75A93FC04fda79AA24d')]
tokenWiki[28] = ['ARCANE POWDER', tokenWiki[0][1] + 'arcane-powder.png', 'token1025', '0x136609236fadE78113d1690D6546428b1DEd8293', new web3.eth.Contract(kap20abi, '0x136609236fadE78113d1690D6546428b1DEd8293')]
tokenWiki[29] = ['RUNIC ESSENCE', tokenWiki[0][1] + 'runic-essence.png', 'token1026', '0xBF2eCE989D892018a1c338F38872Ca20A3813aff', new web3.eth.Contract(kap20abi, '0xBF2eCE989D892018a1c338F38872Ca20A3813aff')]
tokenWiki[30] = ['MYSTIC OIL', tokenWiki[0][1] + 'mystic-oil.png', 'token1027', '0xa224371188Efc777E0C62F32Fc45721eea0b8816', new web3.eth.Contract(kap20abi, '0xa224371188Efc777E0C62F32Fc45721eea0b8816')]
tokenWiki[31] = ['COW MILK', tokenWiki[0][1] + 'COWMILK.png', 'token1028', '0xE5AD9bB1a4D001d9c22D5cfb93Dfdd6eB1027aff', new web3.eth.Contract(kap20abi, '0xE5AD9bB1a4D001d9c22D5cfb93Dfdd6eB1027aff')]
tokenWiki[32] = ['CM', './logo/CMToken.png', 'token2004', '0x978391222393DB94856D4468Cd2980D33cf221a6', new web3.eth.Contract(kap20abi, '0x978391222393DB94856D4468Cd2980D33cf221a6')]
tokenWiki[33] = ['DK', tokenWiki[0][1] + 'DK%20Token.png', 'token2005', '0x8E3C2B00eFEBB64a6B775c451197a9dbA1077967', new web3.eth.Contract(kap20abi, '0x8E3C2B00eFEBB64a6B775c451197a9dbA1077967')]
tokenWiki[34] = ['KM', tokenWiki[0][1] + 'KM%20Token.png', 'token2006', '0xB810bC46B200c8024EE63071691D84f0fd111a9B', new web3.eth.Contract(kap20abi, '0xB810bC46B200c8024EE63071691D84f0fd111a9B')]
tokenWiki[35] = ['SCP', tokenWiki[0][1] + 'SCP%20Token.png', 'token2007', '0xf482B77FbE4076b18e49E74ACda79789C84d16cc', new web3.eth.Contract(kap20abi, '0xf482B77FbE4076b18e49E74ACda79789C84d16cc')]
tokenWiki[36] = ['GOLD', tokenWiki[0][1] + 'Gold%20Token.png', 'token2008', '0x711a189c8D1Eff2438f41c06c083DD1214705ce5', new web3.eth.Contract(kap20abi, '0x711a189c8D1Eff2438f41c06c083DD1214705ce5')]
tokenWiki[37] = ['FANS', tokenWiki[0][1] + 'fans-token.png', 'token2009', '0x9C04EFD1E9aD51A605eeDcb576159242FF930368', new web3.eth.Contract(kap20abi, '0x9C04EFD1E9aD51A605eeDcb576159242FF930368')]
tokenWiki[38] = ['CRYS', tokenWiki[0][1] + 'icon_cystal.png', 'token2010', '0x1DC6CB986EF0265D34C04d421867B4e34E37EC50', new web3.eth.Contract(kap20abi, '0x1DC6CB986EF0265D34C04d421867B4e34E37EC50')]
tokenWiki[39] = ['GAIA', tokenWiki[0][1] + 'icon_gaia.png', 'token2011', '0xb0719390f2B882AbCa0752149bA79301711F6FE0', new web3.eth.Contract(kap20abi, '0xb0719390f2B882AbCa0752149bA79301711F6FE0')]
tokenWiki[40] = ['META', './logo/meta-token.png', 'token2012', '0xb2D5a5AEC0C7f2Cac33DcdF6D7B47Ab6Dd403246', new web3.eth.Contract(kap20abi, '0xb2D5a5AEC0C7f2Cac33DcdF6D7B47Ab6Dd403246')]
tokenWiki[41] = ['EMPTY BOTTLE', tokenWiki[0][1] + 'empty-bottle.png', 'token1029', '0x5BF5eea0CE540db3986fa58ee47D685104b7c2FB', new web3.eth.Contract(kap20abi, '0x5BF5eea0CE540db3986fa58ee47D685104b7c2FB')]
tokenWiki[42] = ['SILVER KEY', tokenWiki[0][1] + 'silver_key.png', 'token1030', '0x73D05F935534918bbc87cB353928CB957ed03697', new web3.eth.Contract(kap20abi, '0x73D05F935534918bbc87cB353928CB957ed03697')]
tokenWiki[43] = ['LIVING BRANCH', tokenWiki[0][1] + 'living_branch.png', 'token1031', '0xDF5a0E8db593EbFbf6D50E00C0e69dd3df008e53',  new web3.eth.Contract(kap20abi, '0xDF5a0E8db593EbFbf6D50E00C0e69dd3df008e53')]
tokenWiki[44] = ['TAINTED LEAF', tokenWiki[0][1] + 'tainted_leaf.png', 'token1032', '0x3534EFDde4D0d69c8e863A0528BE4729ac041FBf', new web3.eth.Contract(kap20abi, '0x3534EFDde4D0d69c8e863A0528BE4729ac041FBf')]
tokenWiki[45] = ['FLORAL HORN', tokenWiki[0][1] + 'floral_horn.png', 'token1033', '0x2Ef170237AD789c2f3DB184D9251927D88387913', new web3.eth.Contract(kap20abi, '0x2Ef170237AD789c2f3DB184D9251927D88387913')]
tokenWiki[46] = ['SACRED BARK', tokenWiki[0][1] + 'sacred_bark.png', 'token1034', '0x2188c881C20632C97bd18234Db481E12c372b981', new web3.eth.Contract(kap20abi, '0x2188c881C20632C97bd18234Db481E12c372b981')]
tokenWiki[47] = ['SOUL STONE', tokenWiki[0][1] + 'soul_stone.png', 'token1035', '0x8254B1aA38239101Fbc0721297BA9E553bD9cA7f', new web3.eth.Contract(kap20abi, '0x8254B1aA38239101Fbc0721297BA9E553bD9cA7f')]
tokenWiki[48] = ['LUCENT TEAR', tokenWiki[0][1] + 'Lucent%20Tear.png', 'token1036', '0x8fB2788EDc797cDF52A84e4A4291B82619200073', new web3.eth.Contract(kap20abi, '0x8fB2788EDc797cDF52A84e4A4291B82619200073')]
tokenWiki[49] = ['NOXIOUS FANG', tokenWiki[0][1] + 'Noxious%20Fang.png', 'token1037', '0xB0366C3a7a174c299F1E8402Bf16630cec26b717', new web3.eth.Contract(kap20abi, '0xB0366C3a7a174c299F1E8402Bf16630cec26b717')]
tokenWiki[50] = ['GOLEM HEART', tokenWiki[0][1] + 'Golem%20Heart.png', 'token1038', '0xcC82FBCeD131714150DDe300450ed72D47283C1d', new web3.eth.Contract(kap20abi, '0xcC82FBCeD131714150DDe300450ed72D47283C1d')]
tokenWiki[51] = ['TREANT SPIRIT', tokenWiki[0][1] + 'Treant%20Spirit.png', 'token1039', '0x2260ed1B575a3e0e835f0c35e2E2Ad3747570a78', new web3.eth.Contract(kap20abi, '0x2260ed1B575a3e0e835f0c35e2E2Ad3747570a78')]
tokenWiki[52] = ['BREEDING ELIXIR', tokenWiki[0][1] + 'breeding_elixir.png', 'token1040', '0xa8b13D8f97155aE201a7B1F866cD2E374e09a806', new web3.eth.Contract(kap20abi, '0xa8b13D8f97155aE201a7B1F866cD2E374e09a806')]
tokenWiki[53] = ['TEARDROP', tokenWiki[0][1] + 'teardrop.png', 'token1041', '0x3c4DBaC8D63898eacfE8D763D356D8Af5116baEF', new web3.eth.Contract(kap20abi, '0x3c4DBaC8D63898eacfE8D763D356D8Af5116baEF')]
tokenWiki[54] = ['KDEV', tokenWiki[0][1] + 'kdev.png', 'token2013', '0x69764bd960Eda9988F279c5e3e5c34fa011E4761', new web3.eth.Contract(kap20abi, '0x69764bd960Eda9988F279c5e3e5c34fa011E4761')]
tokenWiki[55] = ['ESB', './logo/ESBToken.png', 'token2014', '0x1432533fFEc4642824828285cF52f3A4e84aDdA8', new web3.eth.Contract(kap20abi, '0x1432533fFEc4642824828285cF52f3A4e84aDdA8')]
tokenWiki[56] = ['CMT', './logo/CMT.png', 'token2015', '0xe29BeA9508b12edd1E92252c5b77069C0842D5dB', new web3.eth.Contract(kap20abi, '0xe29BeA9508b12edd1E92252c5b77069C0842D5dB')]
tokenWiki[57] = ['EQIO', './logo/EQIronOre.png', 'token2016', '0x2b1f7630a96a1814da9942678fc8859e566136b2', new web3.eth.Contract(kap20abi, '0x2b1f7630a96a1814da9942678fc8859e566136b2')]
tokenWiki[58] = ['EQLS', './logo/EQLunarShard.png', 'token2017', '0x332e08139b26dC57Bd85dc12FE90a0bDBd52D50a', new web3.eth.Contract(kap20abi, '0x332e08139b26dC57Bd85dc12FE90a0bDBd52D50a')]
tokenWiki[59] = ['EQDS', './logo/EQDarkShard.png', 'token2018', '0xdf0C0d7001bF68d89e9130525A0451307934c241', new web3.eth.Contract(kap20abi, '0xdf0C0d7001bF68d89e9130525A0451307934c241')]
tokenWiki[60] = ['ESHARD', './logo/EShard.png', 'token2019', '0xD962770D67c24f4E2E0992cadDB732bfC6782F67', new web3.eth.Contract(kap20abi, '0xD962770D67c24f4E2E0992cadDB732bfC6782F67')]
tokenWiki[61] = ['ASKIN', './logo/SLeather.png', 'token2020', '0xa0380db78D2c6Aa36c7383748A537E13149bbC87', new web3.eth.Contract(kap20abi, '0xa0380db78D2c6Aa36c7383748A537E13149bbC87')]
tokenWiki[62] = ['SSHARD', './logo/SolarShard.png', 'token2021', '0x58890cfd67579b171d13a3ba30e330611ddd402e', new web3.eth.Contract(kap20abi, '0x58890cfd67579b171d13a3ba30e330611ddd402e')]
tokenWiki[63] = ['BFRAME', './logo/BFrame.png', 'token2022', '0x901BeB0dF40E4447484d758072aAF30e774a38a7', new web3.eth.Contract(kap20abi, '0x901BeB0dF40E4447484d758072aAF30e774a38a7')]
tokenWiki[64] = ['CACC', './logo/CAccessory.png', 'token2023', '0x6b2589f05049a3168688be6ffd985c8141c9a31f', new web3.eth.Contract(kap20abi, '0x6b2589f05049a3168688be6ffd985c8141c9a31f')]
tokenWiki[65] = ['CARMOR', './logo/CArmor.png', 'token2024', '0xde250b74f7888c6f8b9b04c5e2f4bf128130717e', new web3.eth.Contract(kap20abi, '0xde250b74f7888c6f8b9b04c5e2f4bf128130717e')]
tokenWiki[66] = ['CWEP', './logo/CWGrip.png', 'token2025', '0x140b1c745f3afcb720b72e463cb1b5b785c3d702', new web3.eth.Contract(kap20abi, '0x140b1c745f3afcb720b72e463cb1b5b785c3d702')]
tokenWiki[67] = ['FRYSTAL', './logo/Frystal.png', 'token2026', '0x305c158a9B3c7E218c18E249d83f21fB17891B95', new web3.eth.Contract(kap20abi, '0x305c158a9B3c7E218c18E249d83f21fB17891B95')]
tokenWiki[68] = ['CAPSULE', './logo/Capsule.png', 'token2027', '0xb973de1fabdd269ea2e6710151516d40c82585ef', new web3.eth.Contract(kap20abi, '0xb973de1fabdd269ea2e6710151516d40c82585ef')]
tokenWiki[69] = ['PUNK', './logo/punk.png', 'token2028', '0x35fe7fFD1B3d80D0B07E16F51d8b630Bb9bEcB95', new web3.eth.Contract(kap20abi, '0x35fe7fFD1B3d80D0B07E16F51d8b630Bb9bEcB95')]
tokenWiki[70] = ['JBCM', './logo/jbcm.png', 'token2029', '0xF92CCd21df022B55014B9A4C1280c08d97681d45', new web3.eth.Contract(kap20abi, '0xF92CCd21df022B55014B9A4C1280c08d97681d45')]
tokenWiki[71] = ['KLD', './logo/kld.png', 'token2030', '0xcA5815B6f333093Bf238FE08Bb330c219d0991e1', new web3.eth.Contract(kap20abi, '0xcA5815B6f333093Bf238FE08Bb330c219d0991e1')]
// skip 72 is duplicate to 71

// Old p2pContract //
var p2pabi = [ { "inputs": [], "name": "activateOnlyKycAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_buyer", "type": "address" }, { "internalType": "uint256", "name": "_offerToken", "type": "uint256" }, { "internalType": "uint256", "name": "_getToken", "type": "uint256" }, { "internalType": "uint256", "name": "_offerAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_getAmount", "type": "uint256" } ], "name": "addDeal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_nftAddr", "type": "address" } ], "name": "addNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_tokenAddr", "type": "address" } ], "name": "addToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "uint256", "name": "_value", "type": "uint256" } ], "name": "adminTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_nftIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "approveProfile", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "buyDeal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "removeDeal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_bkcAdminAddr", "type": "address" } ], "name": "setBkcAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_commuAdminAddr", "type": "address" } ], "name": "setCommuAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_fee", "type": "uint256" } ], "name": "setFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_kyc", "type": "address" } ], "name": "setKYC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_projectAdminAddr", "type": "address" } ], "name": "setProjectAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "getBkcAdmin", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "getBuyer", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCommuAdmin", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getDealCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getFee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "getGetAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "getGetToken", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "getIndexforNoti", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getNftCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "getOfferAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "getOfferToken", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "getProfileNftIndex", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "getProfileTokenId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getProjectAdmin", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "getSeller", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "getSold", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getSoldCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTokenCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ];
var p2pAddr = '0xce21c602d8cA31644eBcC7070D40bCe55793C99A';
var p2pContract = new web3.eth.Contract(p2pabi, p2pAddr);
var addFtabi = [ { "inputs": [ { "internalType": "uint256", "name": "_ftindex", "type": "uint256" }, { "internalType": "uint256", "name": "_dealindex", "type": "uint256" }, { "internalType": "uint256", "name": "_option", "type": "uint256" } ], "name": "addDealbyFeeToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_tokenAddr", "type": "address" }, { "internalType": "uint256", "name": "_ftRate", "type": "uint256" }, { "internalType": "uint256", "name": "_ftRatio", "type": "uint256" } ], "name": "addFeeToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_tokenAddr", "type": "address" } ], "name": "addToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_ftindex", "type": "uint256" }, { "internalType": "uint256", "name": "_dealindex", "type": "uint256" }, { "internalType": "uint256", "name": "_option", "type": "uint256" } ], "name": "buyDealbyFeeToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_dealindex", "type": "uint256" } ], "name": "getbackFeeToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_ftindex", "type": "uint256" }, { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "setFtAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_ftindex", "type": "uint256" }, { "internalType": "uint256", "name": "_ftRate", "type": "uint256" } ], "name": "setFtRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_ftindex", "type": "uint256" }, { "internalType": "uint256", "name": "_ftRatio", "type": "uint256" } ], "name": "setFtRatio", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "setProjectAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "ftAdmin", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getFtCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_ftindex", "type": "uint256" } ], "name": "getFtRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_ftindex", "type": "uint256" } ], "name": "getFtRatio", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_dealindex", "type": "uint256" } ], "name": "getFtUsedDeal", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_dealindex", "type": "uint256" } ], "name": "getOptionOneDeal", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_dealindex", "type": "uint256" } ], "name": "getOptionTwoDeal", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_dealindex", "type": "uint256" } ], "name": "getRateUsedDeal", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTokenCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "projectAdmin", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ];
var addFtAddr = '0xCF24f811509AfA5D430b40486e70C3F009D16DAA';
var addFtContract = new web3.eth.Contract(addFtabi, addFtAddr);
var rankabi = [ { "inputs": [], "name": "setRank", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getRank", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "getRegistered", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" } ];
var rankAddr = '0xd4A75aD67fFE0941B4fB824393C101422a1DAB42';
var rankContract = new web3.eth.Contract(rankabi, rankAddr);
// New p2pContract //
var mainp2pabi = [ { "inputs": [ { "internalType": "bool", "name": "_isActivatedOnlyKycAddress", "type": "bool" }, { "internalType": "uint256", "name": "_acceptedKycLevel", "type": "uint256" } ], "name": "activateOnlyKycAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "address", "name": "_to", "type": "address" } ], "name": "adminUnlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_committee", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bool", "name": "isActivatedOnlyKycAddress", "type": "bool" }, { "indexed": true, "internalType": "uint256", "name": "acceptedKycLevel", "type": "uint256" } ], "name": "ActivateOnlyKycAddress", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "oldAdmin", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newAdmin", "type": "address" } ], "name": "CommitteeChange", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "address", "name": "_sendFrom", "type": "address" } ], "name": "confirmDeal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "callIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dealIndex", "type": "uint256" } ], "name": "ConfirmDeal", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_callIndex", "type": "uint256" }, { "internalType": "address", "name": "_sender", "type": "address" }, { "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_offerTokenIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_offerTokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_offerNftIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_offerNftId", "type": "uint256" }, { "internalType": "uint256", "name": "_getTokenIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_getTokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_getNftIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_getNftId", "type": "uint256" } ], "name": "offerDeal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": true, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "callIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dealIndex", "type": "uint256" } ], "name": "OfferDeal", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "oldAdmin", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newAdmin", "type": "address" } ], "name": "ProjectAdminChange", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "address", "name": "_sendFrom", "type": "address" } ], "name": "rejectDeal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "rejectBy", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "callIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "dealIndex", "type": "uint256" } ], "name": "RejectDeal", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "setCommittee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "setKYC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "kycAddr", "type": "address" } ], "name": "SetKyc", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "setNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "index", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "nftAddr", "type": "address" } ], "name": "SetNft", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "setProgramCall", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "callIndex", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "programCallAddr", "type": "address" } ], "name": "SetProgramCall", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "setProjectAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "address", "name": "_addr", "type": "address" } ], "name": "setToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "index", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "tokenAddr", "type": "address" } ], "name": "SetToken", "type": "event" }, { "inputs": [], "name": "acceptedKycLevel", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "committee", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "dealCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "getDeal", "outputs": [ { "components": [ { "internalType": "uint256", "name": "callIndex", "type": "uint256" }, { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "offerTokenIndex", "type": "uint256" }, { "internalType": "uint256", "name": "offerTokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "offerNftIndex", "type": "uint256" }, { "internalType": "uint256", "name": "offerNftId", "type": "uint256" }, { "internalType": "uint256", "name": "getTokenIndex", "type": "uint256" }, { "internalType": "uint256", "name": "getTokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "getNftIndex", "type": "uint256" }, { "internalType": "uint256", "name": "getNftId", "type": "uint256" }, { "internalType": "uint256", "name": "offerTime", "type": "uint256" }, { "internalType": "bool", "name": "status", "type": "bool" } ], "internalType": "struct p2pContract.Deal", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isActivatedOnlyKycAddress", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "kyc", "outputs": [ { "internalType": "contract IKYCBitkubChain", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "nfts", "outputs": [ { "internalType": "contract IKAP721", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "programCall", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "projectAdmin", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "tokens", "outputs": [ { "internalType": "contract IKAP20", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]
var mainp2pAddr = '0xdd2A34e5A054D92493Ab5bcE6CC0Cc9102E5149A'
var mainp2pContract = new web3.eth.Contract(mainp2pabi, mainp2pAddr)
var p2pcall1abi = [ { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" }, { "internalType": "bool", "name": "_isFeeForBoth", "type": "bool" } ], "name": "callConfirmDeal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_isFeeForBoth", "type": "bool" }, { "internalType": "address", "name": "_receiver", "type": "address" }, { "internalType": "uint256", "name": "_offerTokenIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_offerTokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_offerNftIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_offerNftId", "type": "uint256" }, { "internalType": "uint256", "name": "_getTokenIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_getTokenAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_getNftIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_getNftId", "type": "uint256" } ], "name": "callOfferDeal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_index", "type": "uint256" } ], "name": "callRejectDeal", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_p2pContract", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "oldRate", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "newRate", "type": "uint256" } ], "name": "ChangeFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bool", "name": "isFeeForBoth", "type": "bool" }, { "indexed": true, "internalType": "uint256", "name": "feeIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "valueLock", "type": "uint256" } ], "name": "ConfirmFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bool", "name": "isFeeForBoth", "type": "bool" }, { "indexed": true, "internalType": "uint256", "name": "feeIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "valueLock", "type": "uint256" } ], "name": "LockFee", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "bool", "name": "isFeeForBoth", "type": "bool" }, { "indexed": true, "internalType": "uint256", "name": "feeIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "valueLock", "type": "uint256" } ], "name": "RejectFee", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_rate", "type": "uint256" } ], "name": "setFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenIndex", "type": "uint256" }, { "internalType": "bool", "name": "_isKAPitem", "type": "bool" } ], "name": "setIsKAPitem", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenIndex", "type": "uint256" }, { "indexed": true, "internalType": "bool", "name": "isKAPitem", "type": "bool" } ], "name": "SetKAPitem", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_tokenIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "address", "name": "_to", "type": "address" } ], "name": "withdrawFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "uint256", "name": "tokenIndex", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "WithdrawFee", "type": "event" }, { "inputs": [], "name": "fee", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "feeLock", "outputs": [ { "internalType": "uint256", "name": "feeIndex", "type": "uint256" }, { "internalType": "uint256", "name": "valueLock", "type": "uint256" }, { "internalType": "bool", "name": "isFeeForBoth", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "isKAPitem", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mainContract", "outputs": [ { "internalType": "contract p2pContract", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]
var p2pcall1Addr = '0x2E837A429FcE6177A2B2e186094739393fe91510'
var p2pcall1Contract = new web3.eth.Contract(p2pcall1abi, p2pcall1Addr)
// KNS contract //
var knsabi = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"AddOwner","inputs":[{"type":"address","name":"newOwner","internalType":"address","indexed":false},{"type":"string","name":"name","internalType":"string","indexed":false}],"anonymous":false},{"type":"event","name":"ExtendName","inputs":[{"type":"address","name":"_addr","internalType":"address","indexed":true},{"type":"string","name":"name","internalType":"string","indexed":true},{"type":"uint256","name":"newExpire","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"RefundFee","inputs":[{"type":"address","name":"_addr","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"RegisterNewName","inputs":[{"type":"address","name":"_addr","internalType":"address","indexed":true},{"type":"string","name":"name","internalType":"string","indexed":true},{"type":"uint256","name":"nftID","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"RemoveOwner","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"SetKNS","inputs":[{"type":"address","name":"_setAddr","internalType":"address","indexed":true},{"type":"string","name":"name","internalType":"string","indexed":true},{"type":"uint256","name":"nftID","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"IdxToTokenID","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"PROJECT","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"acceptedKYCLevel","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"addrToIdx","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"adminBanData","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"banData","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"callHelper","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"},{"type":"uint256","name":"","internalType":"uint256"}],"name":"checkNameUse","inputs":[{"type":"string","name":"_name","internalType":"string"}]},{"type":"function","stateMutability":"pure","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"compareStrings","inputs":[{"type":"string","name":"a","internalType":"string"},{"type":"string","name":"b","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address payable"}],"name":"devAddr","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"extendName","inputs":[{"type":"string","name":"_name","internalType":"string"},{"type":"string","name":"_surname","internalType":"string"},{"type":"address","name":"_payTokenAddr","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"extendNameBuffer","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"extendNameNext","inputs":[{"type":"string","name":"_name","internalType":"string"},{"type":"string","name":"_surname","internalType":"string"},{"type":"address","name":"_payTokenAddr","internalType":"address"},{"type":"address","name":"fromAddr","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getAddress","inputs":[{"type":"string","name":"_name","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getExpire","inputs":[{"type":"string","name":"_name","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"_name","internalType":"string"},{"type":"uint256","name":"_expire","internalType":"uint256"},{"type":"address","name":"_useAddress","internalType":"address"}],"name":"getKNSData","inputs":[{"type":"uint256","name":"tokenID","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"_name","internalType":"string"},{"type":"uint256","name":"_expire","internalType":"uint256"},{"type":"address","name":"_useAddress","internalType":"address"}],"name":"getKNSDataIdx","inputs":[{"type":"uint256","name":"idx","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"_tokenURI","internalType":"string"}],"name":"getKNSTokenURI","inputs":[{"type":"uint256","name":"tokenID","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMaxKNS","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"getName","inputs":[{"type":"address","name":"_addr","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IKNSBG"}],"name":"knsBG","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IKNSConfig"}],"name":"knsConfig","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"name","internalType":"string"},{"type":"uint256","name":"expire","internalType":"uint256"},{"type":"address","name":"useAddress","internalType":"address"}],"name":"knsNames","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IKNSNFT"}],"name":"knsNft","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IKYCBitkubChain"}],"name":"kycBitkubChain","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"nameToAddr","inputs":[{"type":"string","name":"","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nameToIdx","inputs":[{"type":"string","name":"","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"newOwnerConfirm","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract INextTransferRouter"}],"name":"nextTransferRouter","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerAddr","inputs":[{"type":"string","name":"","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"preMintAddr","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"premint","inputs":[{"type":"string","name":"_nameReserve","internalType":"string"},{"type":"string","name":"_surname","internalType":"string"},{"type":"address","name":"_ownerKNS","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reservedName","inputs":[{"type":"string","name":"_nameReserve","internalType":"string"},{"type":"string","name":"_surname","internalType":"string"},{"type":"address","name":"_ownerKNS","internalType":"address"},{"type":"address","name":"_tokenAddr","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"reservedNameNext","inputs":[{"type":"string","name":"_nameReserve","internalType":"string"},{"type":"string","name":"_surname","internalType":"string"},{"type":"address","name":"_tokenAddr","internalType":"address"},{"type":"address","name":"_ownerKNS","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBanAdmin","inputs":[{"type":"address","name":"_addr","internalType":"address"},{"type":"bool","name":"_set","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBanData","inputs":[{"type":"uint256","name":"idx","internalType":"uint256"},{"type":"bool","name":"_ban","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBanDomain","inputs":[{"type":"string","name":"_name","internalType":"string"},{"type":"bool","name":"_ban","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBaseURI","inputs":[{"type":"string","name":"_baseURI","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setCallHelper","inputs":[{"type":"address","name":"_callHelper","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"setDevAddress","inputs":[{"type":"address","name":"_addr","internalType":"address payable"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setExtendNameBuffer","inputs":[{"type":"uint256","name":"_extend","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setKNSBG","inputs":[{"type":"address","name":"_knsBG","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setKNSConfig","inputs":[{"type":"address","name":"_knsConfig","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setKNSNFT","inputs":[{"type":"address","name":"_knsNft","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"setKNSName","inputs":[{"type":"uint256","name":"_tokenID","internalType":"uint256"},{"type":"address","name":"_addr","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"setKNSNameNext","inputs":[{"type":"uint256","name":"_tokenID","internalType":"uint256"},{"type":"address","name":"_addr","internalType":"address"},{"type":"address","name":"_ownerAddr","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setKYC","inputs":[{"type":"address","name":"_kyc","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setNextTransfer","inputs":[{"type":"address","name":"_nextTransfer","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setPremintAddr","inputs":[{"type":"address","name":"_addr","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setStopPremint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTokenURI","inputs":[{"type":"uint256","name":"_tokenId","internalType":"uint256"},{"type":"string","name":"_tokenURI","internalType":"string"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"stopPreMint","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenIDToIdx","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"_newOwner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"version","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"withdrawFund","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"withdrawToken","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"},{"type":"address","name":"_token","internalType":"address"}]}];
var knsAddr = '0x5062CB0af889eB77e59482a0D71448Fb3061d3bf';
var knsContract = new web3.eth.Contract(knsabi, knsAddr);
// Iden global var //
var fee = 0
var myaddr = '';
var peerAddr = '';
var locknftId = 0;
var nftIDlocked = [];
// Jazzicon global var needed //
var sellerPullnoti = [];
var el = [];
var elpeer = '';
var bodyindex = 0;
// Set starter profile var //
var yournftpic = "<div id='yournftpic' class='mainprofile'></div>";
var yourpeernftprofile = "<div id='yourpeernftprofile' class='mainprofile'></div>";
var imgPeer = [];
// Dealing global var //
var indexAcSave = 0;
var indexHxSave = 0;
var dataorderTxbyindex = [];
var dealsData = []
var tokenOffer = [0, 0, '', '', 0] // [0 : Selectmode, 1 : Index, 2 : Addr, 3 : Contract, 4 : Balance]
var tokenGet = [0, 0, '', '', 0]
var nftOffer = [0, 0, '', '', 0]
var copyelement = []; // for copy kap20 img
var nftIndex = 0 // for checking nft need to choose
var copynft = [0, 0, '', '', '', '', '', '', 0, ''] // [0 : Index, 1 : Id, 2 : Name, 3 : Img, 4+ : Attr]
// mmv attr data copy
var copynamenft = []
var copyraritynft = []
var copyclassnft = []
var copypricenft = []
// CM attr data copy
var copynamenft2 = []
var copyraritynft2 = []
var copyclassnft2 = []
var copycmpownft2 = []
var copybonuscmnft2 = []
// FCN attr data copy
var copynamenft3 = []
var copyraritynft3 = []
var copyclassnft3 = []
var copycmpownft3 = []
var copybonuscmnft3 = []
// Miscellaneous
var tokenSend = 0;
var idselect = 0;
var feeOptionText = [0, 0]
var payfeeoption = 0
var optionselect = 0;
var copyfeetext = '';
var copyvaltext = '';
var inputGet = 0;
var domainmode = 0;
var offermode = 0
// Dummy var //
var Page = 0
var locksearch = 0;
// rankBoard //
var getAddrRank = []
var kingsrank = []
// Const data //
var KAP18Index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 31, 33, 34, 35, 36, 37, 38, 39, 40, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
var CMadmin = [('0x8c4369814AA115Dd2634a9aec310f47d0b551533').toUpperCase(), ('0x389a12563670014A9700425b7DC267134d6F5B59').toUpperCase(), ('0x0c3b46A73325be15f1FA512d5d8B2c981F270902').toUpperCase(), ('0x6c8144b5AAd092381801717A4718d0EC01429999').toUpperCase(), ('0x513927eFa3482a91a0aC7bABcc7e23526B6A7145').toUpperCase(), ('0xCd45Ef88d15c38533AF85cc2Dd3afC65372840f0').toUpperCase(), ('0x1C65c6f7B394C459D9B58558EDE5d05217BCc232').toUpperCase(), ('0x7973C5C9A547Bb2C7a1Ebc75Be375cD592115c36').toUpperCase(), ('0x433BcC1e72864C9cc6a1927A2fD9C9d0eE997315').toUpperCase(), ('0x19655b64BC180742F8CC62129D2B29A4b76897De').toUpperCase(), ('0xC2480168eFDa1C471bfDFAa9937da9d377425799').toUpperCase(), ('0x1bBc17B3485553227a6fcC4aeE7426B8C913DC83').toUpperCase(), ('0xabAc7c58feAB585b8C2F9B80E7086211926d7B35').toUpperCase(), ('0x94EaDb7e678Ba7A78CADe66A1ABfa5c12dc8Cd7b').toUpperCase(), ('0x84c0D9418d3EfA338327B1f41Ca4BEf4c27BB66D').toUpperCase(), ('0x9c80671A1152762A97CC020F6C9F669cF1DFCAd7').toUpperCase(), ('0xF05e1636B0D6016d53f41Af2b6fb4b1c7E437467').toUpperCase(), ('0xea25CC1A043dc0dEA61F5365B2F3e343b24852a7').toUpperCase(), ('0xCed0e22141ae3a4154E9e5B574257D7D8C0dD53C').toUpperCase(), ('0x98e5CFBC115b01017Ed19101357Ab0a7664f38f1').toUpperCase(), ('0xe96D803125284A8Fd218c012090e944473597023').toUpperCase(), ('0x11993d8BAa744a099F6bbA364daf42E8984Fc709').toUpperCase(), ('0xFA3580CbA506B28a309c56DDf483Bd1C19B6AB26').toUpperCase(), ('0x7C4438dD3e35Bf3440F25Bca682BcF6E96D8F487').toUpperCase(), ('0x1Ad0A252fe10Fa3d58A86b57e63F23E4927d46BC').toUpperCase(), ('0x494c102E557F5b8F1a5EaC7481d160EbA4413934').toUpperCase(), ('0xCb50283bb33EDE032Ce56a6975168CEb0c1BEA8A').toUpperCase(), ('0x6813f0AC2c5b2f924b16712c4B27A2a6DF9020b6').toUpperCase()]

async function showoffdeal() {
    var soldcount = await p2pContract.methods.getSoldCount().call()
    $("#showcompletedeal").html(soldcount)
    fee = await p2pContract.methods.getFee().call()    
    $("#platformfee").html((100/Number(fee)) + "%")
    // indexedDB update
    var openRequest = indexedDB.open("HarvestStore", 2)
    openRequest.onupgradeneeded = function() {
        var db = openRequest.result
        if (!db.objectStoreNames.contains('Tomato')) {
            db.createObjectStore('Tomato', {keyPath: 'id'})
        } else {
            db.deleteObjectStore('Tomato')
            db.createObjectStore('Tomato', {keyPath: 'id'})
        }
        if (!db.objectStoreNames.contains('Corn')) {
            db.createObjectStore('Corn', {keyPath: 'id'})
        } else {
            db.deleteObjectStore('Corn')
            db.createObjectStore('Corn', {keyPath: 'id'})
        }
        if (!db.objectStoreNames.contains('Cabbage')) {
            db.createObjectStore('Cabbage', {keyPath: 'id'})
        } else {
            db.deleteObjectStore('Cabbage')
            db.createObjectStore('Cabbage', {keyPath: 'id'})
        }
        if (!db.objectStoreNames.contains('Carrot')) {
            db.createObjectStore('Carrot', {keyPath: 'id'})
        } else {
            db.deleteObjectStore('Carrot')
            db.createObjectStore('Carrot', {keyPath: 'id'})
        }
        console.log(db)
    }
}

function showconmodal() {
    $("#conmodal").css("display", "block")
    $(window).click(function(e) {if (e.target == modalcenterCon) {$("#conmodal").css("display", "none")}})
    $(window).on("touchend", function(e) {if (e.target == modalcenterCon) {$("#conmodal").css("display", "none")}})
}

async function walletconnect() {
    try {
        var addrs = await ethereum.request({ method: 'eth_requestAccounts' })
        myaddr = addrs[0]
        document.cookie = "login=metamask ; path=/"
        $(".login").remove()
        if (await knsContract.methods.getName(myaddr).call() != '') {
            var myname = await knsContract.methods.getName(myaddr).call()
        } else {
            var myname =  myaddr.slice(0, 4) + "..." + myaddr.slice(-4)
        }
        $("#menuUser").before("<button id='youraddrNav' class='addr' onclick='displayusermenu()'>" + myname + "</button>")
        if (Page == 1) {
            $("#loginarg").empty()
            $("#loginarg").append("<button id='youraddr' class='addr' onclick='copyyouraddr()'>" + myname + "</button>")
            refreshnftpic()
            startertrade()
        } else if (Page == 2) {
            $("#yourrank").empty()
            $("#yourrank").append("<button class='rankregist' onclick='rankRegister()'>REGISTER</button>")
            rankPage(0)
        }
        $("#conmodal").css("display", "none")
    } catch { window.open("https://metamask.io/download/") }
}

function getCookie(name) { // from stackoverflow
    var nameEQ = name + "="
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}

async function startertrade() {
    Page = 1
    optionselect = 0
    idselect = 0
    offermode = 0
    $(".dropdown-box").css("visibility", "hidden")
    $(".dropdown-content").css("visibility", "hidden")
    $(".status").remove()
    $("#youraddr").attr("class", "addr")
    $("#dealerarg").empty()
    $("#dealerarg").append("<div class='waitdealer'>Approve a deal to view your dealer.</div>")
    $("#tradearg").empty()
    $("#tradearg").append("<div id='offerMode' class='tokenarg headarg'></div>")
    $("#offerMode").append("<button id='offer20butt' class='inchooser tradebuttonTo'>OFFER TOKEN</button>")
    $("#offerMode").append("<button id='offer721butt' class='inchooser mainbuttonTo'>OFFER NFT(BETA)</button>")
    jQuery(document).ready(function() {
        $("#offer20butt").click(function() {
            if (offermode == 1) {
                offermode = 0
                $("#errormsg").css("visibility", "hidden")
                $("#offer20butt").removeClass(" mainbuttonTo")
                $("#offer20butt").addClass(" tradebuttonTo")
                $("#offer721butt").removeClass("tradebuttonTo")
                $("#offer721butt").addClass(" mainbuttonTo")
                $("#tokenarg1nft").remove()
                $("#offerMode").after("<div id='tokenarg1' class='tokenarg'><button id='tokenchooser1' class='chooser'></button></div>")
                $("#tokenchooser1").append("<img src=" + tokenWiki[4][1] + " height='40' width='40' />")
                $("#tokenchooser1").append("<span id='token1001' class='inchooserName'>TOMATO</span>")
                $("#tokenchooser1").click(function() {
                    tokenOffer[0] = 1
                    displayChooser1()
                })
                $("#tokenarg1").after("<button id='maxbutton' class='maxbutton'>MAX</button>")
                $("#maxbutton").click(function() {
                    $("#inputoffer").val(tokenOffer[4])
                })
                $("#maxbutton").after("<input id='inputoffer' class='parameterinput' placeholder='Offer token amount (to send)' />")
                findtokenOffer()
            }
        })
        $("#offer721butt").click(function() {
            if (myaddr.toUpperCase() == ('0x494c102E557F5b8F1a5EaC7481d160EbA4413934').toUpperCase()) {
                if (offermode == 0) {
                    offermode = 1
                    $("#errormsg").css("visibility", "hidden")
                    $("#offer721butt").removeClass(" mainbuttonTo")
                    $("#offer721butt").addClass(" tradebuttonTo")
                    $("#offer20butt").removeClass("tradebuttonTo")
                    $("#offer20butt").addClass(" mainbuttonTo")
                    $("#maxbutton, #inputoffer, #tokenarg1").remove()
                    $("#offerMode").after("<div id='tokenarg1nft' class='tokenargnft'></div>")
                    $("#tokenarg1nft").append("<button id='selectoffernft' class='mainbutton' onclick='displayNFT()'>CHOOSE OFFER NFT</button>")
                }
            }
        })
    })
    $("#tradearg").append("<div id='tokenarg1' class='tokenarg'><button id='tokenchooser1' class='chooser'></button></div>")
    $("#tokenchooser1").append("<img src=" + tokenWiki[4][1] + " height='40' width='40' />")
    $("#tokenchooser1").append("<span id='token1001' class='inchooserName'>TOMATO</span>")
    $("#tokenchooser1").click(function() {
        tokenOffer[0] = 1
        displayChooser1()
    })
    $("#tradearg").append("<button id='maxbutton' class='maxbutton'>MAX</button>")
    $("#maxbutton").click(function() {
        $("#inputoffer").val(tokenOffer[4])
    })
    $("#tradearg").append("<input id='inputoffer' class='parameterinput' placeholder='Offer token amount (to send)' />")
    $("#tradearg").append("<div class='tokenarg'><button id='tokenchooser2' class='chooser'></button></div>")
    $("#tokenchooser2").append("<img src=" + tokenWiki[1][1] + " height='40' width='40' />")
    $("#tokenchooser2").append("<span id='token2001' class='inchooserName'>KKUB</span>")
    $("#tokenchooser2").click(function() {
        tokenGet[0] = 1
        displayChooser2(offermode)
    })
    $("#tradearg").append("<input id='inputget' class='parameterinput' placeholder='Get token amount (to receive)' />")
    $("#tradearg").append("<div id='addrArg' class='tokenarg headarg'></div>")
    $("#addrArg").append("<button id='addrbutt' class='inchooser tradebuttonTo'>DEALER ADDRESS</button>")
    $("#addrArg").append("<button id='knsbutt' class='inchooser mainbuttonTo'>KNS DOMAIN</button>")
    jQuery(document).ready(function() {
        $("#knsbutt").click(function() {
            domainmode = 1;
            $("#knsbutt").removeClass(" mainbuttonTo")
            $("#knsbutt").addClass(" tradebuttonTo")
            $("#addrbutt").removeClass("tradebuttonTo")
            $("#addrbutt").addClass(" mainbuttonTo")
            $("#inputdealaddr").remove()
            $("#addrArg").after("<input id='inputdealaddr' class='parameterinput' placeholder='THEDEALER.KUB' />")
        });
        $("#addrbutt").click(function() {
            domainmode = 0;
            $("#addrbutt").removeClass(" mainbuttonTo")
            $("#addrbutt").addClass(" tradebuttonTo")
            $("#knsbutt").removeClass("tradebuttonTo")
            $("#knsbutt").addClass(" mainbuttonTo")
            $("#inputdealaddr").remove()
            $("#addrArg").after("<input id='inputdealaddr' class='parameterinput' placeholder='0xb0B0B0B1B0B2B0B3...' />")
        })
    })
    $("#tradearg").append("<input id='inputdealaddr' class='parameterinput' placeholder='0xb0B0B0B1B0B2B0B3...' />")
    $("#tradearg").append("<br><br><button id='approve' class='tradebutton'>APPROVE</button>")
    var x = getCookie('login')
    if (!x) {
        showoffdeal()
    } else if (myaddr == '' && x) {
        showoffdeal()
        walletconnect()
    } else {
        $("#txnoti").css("visibility", "visible")
        $("#hxnoti").css("visibility", "visible")
        notiupdate()
        findtokenOffer()
        findtokenGet()
    }
    $("#approve").after("<br><div id='errormsg'></div>")
    jQuery(document).ready(function() {
        $("#approve").click(async function() {
            $("#errormsg").css("visibility", "hidden")
            $("#loadingmodal").css("display", "block")
            try {
                if (copynft[0] == 0) {
                    var inputOffer = $("#inputoffer").val()
                } else if (copynft[0] == 1) {
                    var ownership = await nftWiki[1][4].methods.ownerOf(copynft[1]).call()
                } else if (copynft[0] == 2) {
                    var ownership = await nftWiki[2][4].methods.ownerOf(copynft[1]).call()
                }
                inputGet = $("#inputget").val()
                var inputTo = $("#inputdealaddr").val()
                if (domainmode == 1) {
                    var checkkns = await knsContract.methods.checkNameUse(inputTo).call()
                    if (checkkns[0] == false) {
                        var inputTo = null
                    } else {
                        var inputTo = await knsContract.methods.getAddress(inputTo).call()
                    }
                }
                if (!x) {
                    txfail("Connect wallet to approve")
                } else if (await ethereum.request({ method: 'eth_chainId' }) != '0x60') {
                    txfail("Invalid chain ID")
                } else if (await nftWiki[1][4].methods.freezed(myaddr).call() == true) {
                    txfail("Your address is freezed")
                } else if (offermode == 0 && (isNaN(Number(inputOffer)) || inputOffer <= 0)) {
                    txfail("Invalid offer token")
                    $("#inputoffer").addClass(" errorinput")
                } else if (offermode == 0 && Number(inputOffer) > Number(tokenOffer[4])) {
                    txfail("Insufficient offer token")
                    $("#inputoffer").addClass(" errorinput")
                } else if (offermode == 1 && ownership.toUpperCase() != myaddr.toUpperCase()) {
                    txfail("Invalid offer NFT's ownership")
                    $("#tokenarg1nft").addClass(" errorinput")
                } else if (isNaN(Number(inputGet)) || inputGet <= 0) {
                    txfail("Invalid get token")
                    $("#inputget").addClass(" errorinput")
                } else if (offermode == 1 && Number(inputGet)/fee > Number(tokenGet[4])) {
                    txfail("Insufficient fee to pay")
                } else if (inputTo == null) {
                    txfail("Invalid dealer domain")
                    $("#inputdealaddr").addClass(" errorinput")
                } else if (await web3.utils.isAddress(inputTo) == false) {
                    txfail("Invalid dealer address")
                    $("#inputdealaddr").addClass(" errorinput")
                } else {
                    //** input value to wei unit & display text **//
                    payfeeoption = 0
                    if (offermode == 0) {
                        if (KAP18Index.indexOf(tokenOffer[1]) > -1) {
                            var offerWei = await web3.utils.toWei(inputOffer)
                            var offerDisp = Number(inputOffer).toFixed(9)
                        } else if (tokenOffer[1] == 32 || tokenOffer[1] == 56) {
                            var offerWei = inputOffer * (10**8)
                            var offerDisp = Number(inputOffer).toFixed(8)
                        } else {
                            var offerWei = inputOffer
                            var offerDisp = inputOffer
                        }
                    }
                    if (KAP18Index.indexOf(tokenGet[1]) > -1) {
                        // Wei unit
                        var getWei = await web3.utils.toWei(inputGet)
                        var exactfeeWei = Math.floor(Number(getWei)/fee)
                        // Normal unit
                        var exactFee = await web3.utils.fromWei((exactfeeWei).toString())
                        // Display unit
                        var feeDisp = (Number(inputGet)/fee).toFixed(9)
                        var feeDisp2 = ((Number(inputGet)/fee) * 2).toFixed(9)
                        var getDisp = (Number(inputGet) - (Number(inputGet)/fee)).toFixed(9)
                        var getDisp2 = (Number(inputGet)).toFixed(9)
                    } else if (tokenGet[1] == 32 || tokenGet[1] == 56) {
                        var getWei = inputGet * (10**8)
                        var exactfeeWei = Math.floor(Number(getWei)/fee)
                        var exactFee = exactfeeWei / (10**8)
                        var feeDisp = (Number(inputGet)/fee).toFixed(8)
                        var feeDisp2 = ((Number(inputGet)/fee) * 2).toFixed(8)
                        var getDisp = (Number(inputGet) - (Number(inputGet)/fee)).toFixed(8)
                        var getDisp2 = (Number(inputGet)).toFixed(8)
                    } else {
                        var getWei = inputGet
                        var feeDisp = Math.floor(inputGet/fee)
                        var getDisp = inputGet - feeDisp
                    }
                    if (feeDisp == 0) {
                        var feeText = 'NO FEE FOR'
                    } else {
                        feeOptionText[0] = 'FEE : ' + feeDisp
                        feeOptionText[1] = 'FEE : ' + feeDisp2
                        var feeText = feeOptionText[0]
                    }
                    //** approval process **//
                    if (offermode == 0) {
                        if (tokenOffer[2] == tokenWiki[3][3]) { //usdt unique approve func name
                            var allowofferWei = await tokenOffer[3].methods.allowances(myaddr, p2pAddr).call()
                        } else {
                            var allowofferWei = await tokenOffer[3].methods.allowance(myaddr, p2pAddr).call()
                        }
                        if (offerWei >= Number(allowofferWei)) {
                            var approveofferWei = offerWei * 10
                            var data = tokenOffer[3].methods.approve(p2pAddr, approveofferWei.toLocaleString('en-US', {useGrouping:false})).encodeABI()
                            var approvetx = await ethereum.request({
                                method: 'eth_sendTransaction',
                                params: [{
                                from: myaddr,
                                to: tokenOffer[2],
                                data: data,
                                },],
                            })
                            var isValidate = await web3.eth.getTransactionReceipt(approvetx)
                            while (isValidate == null) {
                                isValidate = await web3.eth.getTransactionReceipt(approvetx)
                            }
                        }
                    } else if (offermode == 1) {
                        var allowoffernft = await nftOffer[3].methods.getApproved(nftOffer[4]).call()
                        if (allowoffernft.toUpperCase() != mainp2pAddr.toUpperCase()) {
                            var approvenft = await ethereum.request({ method: 'eth_sendTransaction', params: [{
                                from: myaddr,
                                to: nftOffer[2],
                                data: nftOffer[3].methods.approve(mainp2pAddr, nftOffer[4]).encodeABI(),
                            },], })
                            var isValidate = await web3.eth.getTransactionReceipt(approvenft)
                            while (isValidate == null) { isValidate = await web3.eth.getTransactionReceipt(approvenft) }
                        }
                        if (tokenGet[2] == tokenWiki[3][3]) {
                            var allowget = await tokenGet[3].methods.allowances(myaddr, p2pcall1Addr).call()
                        } else {
                            var allowget = await tokenGet[3].methods.allowance(myaddr, p2pcall1Addr).call()
                        }
                        if (payfeeoption == 0) {
                            var feeforoption = exactfeeWei
                        } else {
                            var feeforoption = exactfeeWei * 2
                        }
                        if (feeforoption >= Number(allowget)) {
                            var approveVal = feeforoption * 10
                            var approvefeeget = await ethereum.request({ method: 'eth_sendTransaction', params: [{
                                from: myaddr,
                                to: tokenGet[2],
                                data: tokenGet[3].methods.approve(p2pcall1Addr, approveVal.toLocaleString('en-US', {useGrouping:false})).encodeABI(),
                            },], })
                            var isValidate = await web3.eth.getTransactionReceipt(approvefeeget)
                            while (isValidate == null) { isValidate = await web3.eth.getTransactionReceipt(approvefeeget) }
                        }
                    }
                    //** sender's approve complete window **//
                    $("#youraddr").after("<div id='status-content' class='status'>Status : <span class='dealsender'>Sender</span></div>")
                    peerAddr = inputTo
                    $("#dealerarg").empty()
                    if (await knsContract.methods.getName(peerAddr).call() != '') {
                        var peername = await knsContract.methods.getName(peerAddr).call()
                    } else {
                        var peername = peerAddr.slice(0, 4) + "..." + peerAddr.slice(-4)
                    }
                    $("#dealerarg").append("<button id='peeraddr' class='addr' onclick='copypeeraddr()'>" + peername + "</button>")
                    $("#peeraddr").after("<div id='status-content' class='status'>Status : <span class='dealgetter'>Receiver</span></div>")
                    refreshpeerFace()
                    $("#tradearg").empty()
                    $("#tradearg").append("<div id='processApprove' class='processmsg'>Approve Complete</div>")
                    if (offermode == 0) {
                        $("#tradearg").append("<div class='tokenarg'><div id='tokenchose1' class='chooser'></button></div>")
                        $("#tokenchose1").append("<img src=" + tokenWiki[tokenOffer[1]][1] + " height='40' width='40' />")
                        $("#tokenchose1").append("<span id='token1001' class='inchooserName'>" + offerDisp + " " + tokenWiki[tokenOffer[1]][0] + "</span>")
                    } else {
                        $("#tradearg").append("<div id='tokenarg1nft2' class='tokenargnft'><div id='tokenchose1' class='chooser'></button></div>")
                        $("#tokenarg1nft2").append("<img src=" + copynft[2] + " height='85' width='85' />")
                        $("#tokenarg1nft2").append("<span id='offernftname' class='inchooserName'>" + copynft[3] + "</span>")
                    }
                    $("#tradearg").append("<div class='arrowdown'></div>")
                    $("#tradearg").append("<div class='tokenarg'><div id='tokenchose2' class='chooser'></button></div>")
                    $("#tokenchose2").append("<img src=" + tokenWiki[tokenGet[1]][1] + " height='40' width='40' />")
                    if (offermode == 0) {
                        $("#tokenchose2").append("<span id='token2001' class='inchooserName'>" + getDisp + " " +  tokenWiki[tokenGet[1]][0] + "</span>")
                        $("#tradearg").append("<button id='addfeetoken' class='feetokenbutton2'>ADD FEE TOKEN</button>")
                        $("#addfeetoken").click(function() {
                            displayChooser3(1, 0)
                        })
                    } else {
                        $("#tokenchose2").append("<span id='token2001' class='inchooserName'>" + getDisp2 + " " +  tokenWiki[tokenGet[1]][0] + "</span>")
                        $("#tradearg").append("<button id='lockfee0' class='lockfeebutton' onclick='changelockfeeoption(0, 1, 0)'>PAY FEE ONE SIDE [2.5%]</button>")
                    }
                    $("#tradearg").append("<div id='feespan0' class='feespan'>" + feeText + " " +  tokenWiki[tokenGet[1]][0] + "</div>")
                    $("#tradearg").append("<div id='addrCheck' class='tokenarg'></div>")
                    $("#addrCheck").append("<div class='arrowright'></div><div class='checkaddr'>" + inputTo + "</div>")
                    $("#tradearg").append("<button id='offer' class='tradebutton'>CONFIRM OFFER</button>")
                    $("#tradearg").append("<button id='back' class='mainbutton' onclick='startertrade()'>CANCEL</button>")
                    $("#loadingmodal").css("display", "none")
                    jQuery(document).ready(function() {
                        $("#offer").click(async function() {
                            $("#errormsg").css("visibility", "hidden")
                            $("#loadingmodal").css("display", "block")
                            try {
                                if (offermode == 0) {
                                    var addVal = await addFtContract.methods.getFtRate(1).call()
                                    var addValBtc = await addFtContract.methods.getFtRate(1).call()/(10**8)
                                    var ftBalance = await tokenWiki[32][4].methods.balanceOf(myaddr).call()/(10**8)
                                    if ((optionselect == 1 && ftBalance < addValBtc) || (optionselect == 2 && ftBalance < (addValBtc * 2))) {
                                        $("#errormsg").css("visibility", "visible")
                                        $("#errormsg").html("Insufficient fee token")
                                        $("#loadingmodal").css("display", "none")
                                    } else {
                                        //** main kap20 offer of old p2pContract **//
                                        var data = p2pContract.methods.addDeal(inputTo, tokenOffer[1], tokenGet[1], offerWei, getWei).encodeABI()
                                        var sendoffertx = await ethereum.request({
                                            method: 'eth_sendTransaction',
                                            params: [{
                                            from: myaddr,
                                            to: p2pAddr,
                                            data: data,
                                            },],
                                        })
                                        var isValidate = await web3.eth.getTransactionReceipt(sendoffertx)
                                        while (isValidate == null) {
                                            isValidate = await web3.eth.getTransactionReceipt(sendoffertx)
                                        }
                                        var dealArr = await p2pContract.methods.getIndexforNoti(myaddr).call()
                                        var dealnum = dealArr[dealArr.length - 1] // display deal#
                                        // fee token add
                                        if (optionselect == 1) {
                                            var allowget = await tokenWiki[32][4].methods.allowance(myaddr, addFtAddr).call()
                                            if (addVal >= Number(allowget)) {
                                                var approveget = addVal * 10
                                                var data = tokenWiki[32][4].methods.approve(addFtAddr, approveget.toLocaleString('en-US', {useGrouping:false})).encodeABI()
                                                var approveget = await ethereum.request({
                                                    method: 'eth_sendTransaction',
                                                    params: [{
                                                    from: myaddr,
                                                    to: tokenWiki[32][3],
                                                    data: data,
                                                    },],
                                                })
                                                var isValidate = await web3.eth.getTransactionReceipt(approveget)
                                                while (isValidate == null) {
                                                    isValidate = await web3.eth.getTransactionReceipt(approveget)
                                                }
                                            }
                                            var data = addFtContract.methods.addDealbyFeeToken(idselect, dealnum, 1).encodeABI()
                                            var sendaddtx = await ethereum.request({
                                                method: 'eth_sendTransaction',
                                                params: [{
                                                from: myaddr,
                                                to: addFtAddr,
                                                data: data,
                                                },],
                                            })
                                            var isValidate = await web3.eth.getTransactionReceipt(sendaddtx)
                                            while (isValidate == null) {
                                                isValidate = await web3.eth.getTransactionReceipt(sendaddtx)
                                            }
                                        } else if (optionselect == 2) {
                                            var allowget = await tokenWiki[32][4].methods.allowance(myaddr, addFtAddr).call()
                                            if ((addVal * 2) >= Number(allowget)) {
                                                var approveget = addVal * 20;
                                                var data = tokenWiki[32][4].methods.approve(addFtAddr, approveget.toLocaleString('en-US', {useGrouping:false})).encodeABI()
                                                var approveget = await ethereum.request({
                                                    method: 'eth_sendTransaction',
                                                    params: [{
                                                    from: myaddr,
                                                    to: tokenWiki[32][3],
                                                    data: data,
                                                    },],
                                                })
                                                var isValidate = await web3.eth.getTransactionReceipt(approveget)
                                                while (isValidate == null) {
                                                    isValidate = await web3.eth.getTransactionReceipt(approveget)
                                                }
                                            }
                                            var data = addFtContract.methods.addDealbyFeeToken(idselect, dealnum, 2).encodeABI()
                                            var sendaddtx = await ethereum.request({
                                                method: 'eth_sendTransaction',
                                                params: [{
                                                from: myaddr,
                                                to: addFtAddr,
                                                data: data,
                                                },],
                                            })
                                            var isValidate = await web3.eth.getTransactionReceipt(sendaddtx)
                                            while (isValidate == null) {
                                                isValidate = await web3.eth.getTransactionReceipt(sendaddtx)
                                            }
                                        }
                                        // sender's offer complete window
                                        $(".processmsg").after("<div id='dealnumber' class='compmsg'>DEAL#" + dealnum + "</div>")
                                        $(".processmsg").remove()
                                        $("#dealnumber").after("<button id='copydeal' onclick='copydeal()'>Copy</button>")
                                        $("#copydeal").after("<div class='processmsg'>Offer Complete</div>")
                                        $(".feetokenbutton2").remove()
                                        $(".headarg").remove()
                                        $("#back").remove()
                                        $("#offer").before("<div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>")
                                        $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + sendoffertx)
                                        if (sendaddtx) {
                                            $(".exploreblockLink").click(function() {
                                                window.open("https://www.bkcscan.com/tx/" + sendaddtx)
                                            })
                                        }
                                        $("#offer").before("<button class='mainbutton' onclick='startertrade()'>BACK</button>")
                                        $("#offer").remove()
                                        notiupdate()
                                    }
                                } else if (offermode == 1) {
                                    var sendoffertx = await ethereum.request({ method: 'eth_sendTransaction', params: [{
                                        from: myaddr,
                                        to: p2pcall1Addr,
                                        data: p2pcall1Contract.methods.callOfferDeal(payfeeoption, inputTo, 0, 0, nftOffer[1], nftOffer[4], tokenGet[1], getWei, 0, 0).encodeABI(),
                                    },], })
                                    var isValidate = await web3.eth.getTransactionReceipt(sendoffertx)
                                    while (isValidate == null) { isValidate = await web3.eth.getTransactionReceipt(sendoffertx) }
                                    var options = {
                                        filter: { sender: myaddr },
                                        fromBlock: 9250000,
                                        toBlock: 'latest'
                                    }
                                    var result = await mainp2pContract.getPastEvents('OfferDeal', options)
                                    var dealnum = result[result.length - 1].returnValues[3]
                                    $(".lockfeebutton, .headarg, #offer").remove()
                                    $(".processmsg").before("<div id='dealnumber' class='compmsg'>DEAL#A" + dealnum + "</div><button id='copydeal' onclick='copydeal()'>Copy</button>")
                                    $(".processmsg").attr("id", "offercompMsg")
                                    $(".processmsg").html("Offer Complete")
                                    $("#back").before("<div id='exploreblock'><a class='exploreblockLink' href='https://www.bkcscan.com/tx/" + sendoffertx + "' target='_blank'>Tx Receipt on BKCSCAN</a></div>")
                                    $("#back").html("BACK")
                                    notiupdate()
                                }
                            } catch { txfail("Offer Tx failed") }
                        })
                    })
                    $("#tradearg").append("<br><div id='errormsg'></div>")
                }
            } catch { txfail("Approve Tx failed") }
        })
    })
}

function txfail(errormsg) {
    $("#errormsg").html(errormsg)
    $("#errormsg").css("visibility", "visible")
    $(".tokenargnft").removeClass("errorinput")
    $(".parameterinput").removeClass("errorinput")
    $("#loadingmodal").css("display", "none")
}

function changelockfeeoption(m, o, d) {
    payfeeoption = o
    if (m == 0) {
        if (o == 0) {
            $("#lockfee1").remove()
            $(".tokenargnft").after("<button id='lockfee0' class='lockfeebutton' onclick='changelockfeeoption(0, 1, 0)'>PAY FEE ONE SIDE [2.5%]</button>")
        } else {
            $("#lockfee0").remove()
            $(".tokenargnft").after("<button id='lockfee1' class='lockfeebutton' onclick='changelockfeeoption(0, 0, 0)'>PAY FEE BOTH SIDE [5%]</button>")
        }
        $("#feespan0").html(feeOptionText[o] + " " +  tokenWiki[tokenGet[1]][0])
    } else {
        if (o == 0) {
            $("#lockfee1").remove()
            $(".tokenargnft").after("<button id='lockfee0' class='lockfeebutton1' onclick='changelockfeeoption(1, 1, " + d + ")'>PAY FEE ONE SIDE [2.5%]</button>")
        } else {
            $("#lockfee0").remove()
            $(".tokenargnft").after("<button id='lockfee1' class='lockfeebutton1' onclick='changelockfeeoption(1, 0, " + d + ")'>PAY FEE BOTH SIDE [5%]</button>")
        }
        $("#feespan1").html(feeOptionText[o] + " " +  tokenWiki[dealsData[d][7]][0])
    }
}

function showNoti(noti) {
    $(".dropdown-box").css("display", "none")
    if (noti == 0) {
        var box = "notibox"
    } else if (noti == 1) {
        var box = "historybox"
    }
    $("#" + box).css("display", "block")
    $(document).mouseup(function(e) {
        var container = $("#" + box)
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.css("display", "none")
        }
    })
}

async function notiupdate() {
    $("#loadingmodal").css("display", "block")
    $(".search").remove() //clear input on searchbox
    $(".searchtemp").remove() //clear search deal window
    $("#notibadge").remove() //clear activeReceive badge
    $(".dropdown-content").empty() //clear main deal window
    //** local var for counting **//
    var activeReceive = 0
    var activeSend = 0
    var hxReceive = 0
    var hxSend = 0
    //** restart global var for call switchpage() **//
    dataorderTxbyindex = []
    dataorderTxbyindex.push([0])
    //** main refreshing noti loop **//
    // new p2pContract
    var senderoptions = {
        filter: { sender: myaddr },
        fromBlock: 9250000,
        toBlock: 'latest'
    }
    var receiveroptions = {
        filter: { receiver: myaddr },
        fromBlock: 9250000,
        toBlock: 'latest'
    }
    var result = await mainp2pContract.getPastEvents('OfferDeal', senderoptions)
    var senderDeals = []
    for (var i = 0; i <= result.length - 1; i++) {
        senderDeals.push(result[i].returnValues[3])
    }
    result = await mainp2pContract.getPastEvents('OfferDeal', receiveroptions)
    var receiverDeals = []
    for (var i = 0; i <= result.length - 1; i++) {
        receiverDeals.push(result[i].returnValues[3])
    }
    result = await mainp2pContract.getPastEvents('RejectDeal', senderoptions)
    var senderRejectDeals = []
    for (var i = 0; i <= result.length - 1; i++) {
        senderRejectDeals.push(result[i].returnValues[4])
    }
    result = await mainp2pContract.getPastEvents('RejectDeal', receiveroptions)
    var receiverRejectDeals = []
    for (var i = 0; i <= result.length - 1; i++) {
        receiverRejectDeals.push(result[i].returnValues[4])
    }
    result = await mainp2pContract.getPastEvents('ConfirmDeal', senderoptions)
    var senderCompDeals = []
    for (var i = 0; i <= result.length - 1; i++) {
        senderCompDeals.push(result[i].returnValues[3])
    }
    result = await mainp2pContract.getPastEvents('ConfirmDeal', receiveroptions)
    var receiverCompDeals = []
    for (var i = 0; i <= result.length - 1; i++) {
        receiverCompDeals.push(result[i].returnValues[3])
    }
    var myASDeals = []
    var myARDeals = []
    var myHSDeals = []
    var myHRDeals = []
    var allOfmyDeals = []
    for (var d = 0; d <= senderDeals.length - 1; d++) {
        if (senderCompDeals.indexOf(senderDeals[d]) > -1) {
            myHSDeals.push(senderDeals[d])
            allOfmyDeals.push(senderDeals[d])
        } else if (senderRejectDeals.indexOf(senderDeals[d]) == -1) {
            myASDeals.push(senderDeals[d])
            allOfmyDeals.push(senderDeals[d])
        }
    }
    for (var d = 0; d <= receiverDeals.length - 1; d++) {
        if (receiverCompDeals.indexOf(receiverDeals[d]) > -1) {
            myHRDeals.push(receiverDeals[d])
            allOfmyDeals.push(receiverDeals[d])
        } else if (receiverRejectDeals.indexOf(receiverDeals[d]) == -1) {
            myARDeals.push(receiverDeals[d])
            allOfmyDeals.push(receiverDeals[d])
        }
    }
    for (var ii = allOfmyDeals.length - 1; ii >= 0; ii--) {
        var i = allOfmyDeals[ii]
        if (i != 0) {
            var deal = await mainp2pContract.methods.getDeal(i).call()
            if (deal.offerNftIndex != 0) {
                var nftipfs = await nftWiki[deal.offerNftIndex][4].methods.tokenURI(deal.offerNftId).call()
                var response = await fetch(nftipfs)
                var json = await response.json()
                var offerNftImg = json.image
                var offerNftName = json.name
            }
            if (KAP18Index.indexOf(Number(deal.getTokenIndex)) > -1) {
                var getamount = await web3.utils.fromWei(deal.getTokenAmount)
            } else if (deal.getTokenIndex == 32 || deal.getTokenIndex == 56) {
                var getamount = deal.getTokenAmount / (10**8)
            } else {
                var getamount = deal.getTokenAmount
            }
            if (Number(getamount) >= 1) {
                var txtget = Number(getamount).toFixed(0)
            } else if (Number(getamount) >= 0.0001) {
                var txtget = Number(getamount).toFixed(4)
            } else {
                var txtget = Number(getamount)
            }
            // main noti building
            if ((deal.sender).toUpperCase() == myaddr.toUpperCase()) { //You are sender
                peerAddr = deal.receiver
                var badge = 'Receiverdeal'
                if (deal.status == false) {
                    var Status = ''
                    $("#noti-content").append("<button id='txN" + i + "' class='notibutt acS' onclick='switchDealPage(" + i + ")'></button>")
                } else {
                    var Status = ' [Complete]'
                    $("#history-content").append("<button id='txN" + i + "' class='notibutt hxS' onclick='switchDealPage(" + i + ")'></button>")
                }
                $("#txN" + i).append("<div id='offerpic" + i + "' class='notipeerprofile'></div>")
                $("#txN" + i).append("<div class='dealmsg'>DEAL#A" + i + Status + "<br>You offered<br>" + offerNftName + "<br>To exchange with<br>" + txtget + " " + tokenWiki[deal.getTokenIndex][0] + "</div>")
            } else if ((deal.receiver).toUpperCase() == myaddr.toUpperCase()) { //You are receiver
                peerAddr = deal.sender
                var badge = 'Senderdeal'
                if (deal.status == false) {
                    var Status = ''
                    $("#noti-content").append("<button id='txN" + i + "' class='notibutt acR' onclick='switchDealPage(" + i + ")'></button>")
                } else {
                    var Status = ' [Complete]'
                    $("#history-content").append("<button id='txN" + i + "' class='notibutt hxR' onclick='switchDealPage(" + i + ")'></button>")
                }
                $("#txN" + i).append("<div id='offerpic" + i + "' class='notipeerprofile'></div>")
                $("#txN" + i).append("<div class='dealmsg'>DEAL#A" + i + Status + "<br>Dealer offered<br>" + offerNftName + "<br>To exchange with<br>" + txtget + " " + tokenWiki[deal.getTokenIndex][0] + "</div>")
            }
            $("#offerpic" + i).append("<div id='offerpicInside" + i + "' class='nftmini'></div>")
            $("#offerpicInside" + i).append("<img id='offerImg' class='miniprofile' src='" + offerNftImg + "' height='100' width='100'>")
            if (await knsContract.methods.getName(peerAddr).call() != '') {
                var peername = await knsContract.methods.getName(peerAddr).call()
                $("#txN" + i).append("<span class='dealbadgeKns " + badge + "'>" + peername + "</span>")
            } else {
                var peername = peerAddr.slice(0, 4) + "..." + peerAddr.slice(-4)
                $("#txN" + i).append("<span class='dealbadge " + badge + "'>" + peername + "</span>")
            }
            dealsData[i] = [deal.callIndex, deal.sender, deal.receiver, 0, 0, Number(deal.offerNftIndex), [deal.offerNftId, offerNftName, offerNftImg], Number(deal.getTokenIndex), [Number(deal.getTokenAmount), txtget], 0, 0, deal.offerTime, deal.status]
        }
    }
    // old p2pContract
    var indexforNoti = await p2pContract.methods.getIndexforNoti(myaddr).call()
    for (var ii = indexforNoti.length - 1; ii >= 0 && ((hxSend + hxReceive) < 3 || (activeSend + activeReceive) < 3); ii--) {
        if (indexforNoti[ii] != 0) {
            var i = indexforNoti[ii]
            if (((hxSend + hxReceive) < 3 || await p2pContract.methods.getSold(i).call() == false) && ((activeSend + activeReceive) < 3 || await p2pContract.methods.getSold(i).call() == true)) { // skip for fasting load
                var seller = await p2pContract.methods.getSeller(i).call()
                var buyer = await p2pContract.methods.getBuyer(i).call()
                var offerIndex = await p2pContract.methods.getOfferToken(i).call()
                var offerWei = await p2pContract.methods.getOfferAmount(i).call()
                if (KAP18Index.indexOf(Number(offerIndex)) > -1) {
                    var offeramount = await web3.utils.fromWei(offerWei)
                    var txtoffer = Number(offeramount).toFixed(4)
                } else if (offerIndex == 32 || offerIndex == 56) {
                    var offeramount = offerWei / (10**8)
                    var txtoffer = Number(offeramount).toFixed(4)
                } else {
                    var offeramount = offerWei
                    var txtoffer = Number(offeramount)
                }
                var getIndex = await p2pContract.methods.getGetToken(i).call()
                var getWei = await p2pContract.methods.getGetAmount(i).call()
                if (KAP18Index.indexOf(Number(getIndex)) > -1) {
                    var getamount = await web3.utils.fromWei(getWei)
                    var txtget = Number(getamount).toFixed(4)
                } else if (getIndex == 32 || getIndex == 56) {
                    var getamount = getWei / (10**8)
                    var txtget = Number(getamount).toFixed(4)
                } else {
                    var getamount = getWei
                    var txtget = Number(getamount)
                }
                //** main noti building **//
                if (seller.toUpperCase() == myaddr.toUpperCase()) { //You are sender
                    peerAddr = buyer
                    if (await p2pContract.methods.getSold(i).call() == false) {
                        activeSend++
                        var soldStatus = 'Pending'
                        var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, i, offerIndex, getIndex]
                        dataorderTxbyindex.push(dataorderTx)
                        $("#noti-content").append("<button id='tx" + i + "' class='notibutt acS' onclick='switchpage(" + i + ")'></button>")
                        $("#tx" + i).append("<div id='notipeernftprofile" + i + "' class='notipeerprofile'></div>")
                        peerFaceNoti(i, 0)
                        $("#tx" + i).append("<div class='dealmsg'>DEAL#" + i + "<br>You offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>")
                        if (await knsContract.methods.getName(peerAddr).call() != '') {
                            var peername = await knsContract.methods.getName(peerAddr).call()
                            $("#tx" + i).append("<span class='dealbadgeKns Receiverdeal'>" + peername + "</span>")
                        } else {
                            var peername = buyer.slice(0, 4) + "..." + buyer.slice(-4)
                            $("#tx" + i).append("<span class='dealbadge Receiverdeal'>" + peername + "</span>")
                        }
                        if ((activeSend + activeReceive) == 3) {
                            indexAcSave = ii - 1
                        }
                    } else {
                        hxSend++;
                        var soldStatus = 'Deal Complete'
                        var status = '[Complete]'
                        if (await addFtContract.methods.getOptionOneDeal(i).call() == 1 || await addFtContract.methods.getOptionTwoDeal(i).call() == 1) {
                            status = '[Redeem Waiting]'
                        }
                        var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, i, offerIndex, getIndex]
                        dataorderTxbyindex.push(dataorderTx)
                        $("#history-content").append("<button id='tx" + i + "' class='notibutt hxS' onclick='switchpage(" + i + ")'></button>")
                        $("#tx" + i).append("<div id='notipeernftprofile" + i + "' class='notipeerprofile'></div>")
                        peerFaceNoti(i, 0)
                        $("#tx" + i).append("<div class='dealmsg'>DEAL#" + i + " " + status + "<br>You offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>")
                        if (await knsContract.methods.getName(peerAddr).call() != '') {
                            var peername = await knsContract.methods.getName(peerAddr).call()
                            $("#tx" + i).append("<span class='dealbadgeKns Receiverdeal'>" + peername + "</span>")
                        } else {
                            var peername = buyer.slice(0, 4) + "..." + buyer.slice(-4)
                            $("#tx" + i).append("<span class='dealbadge Receiverdeal'>" + peername + "</span>")
                        }
                        if ((hxSend + hxReceive) == 3) {
                            indexHxSave = ii - 1
                        }
                    }
                } else if (buyer.toUpperCase() == myaddr.toUpperCase()) { //You are receiver
                    peerAddr = seller
                    if (await p2pContract.methods.getSold(i).call() == false) {
                        activeReceive++
                        var soldStatus = 'Pending'
                        var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, i, offerIndex, getIndex]
                        dataorderTxbyindex.push(dataorderTx)
                        $("#noti-content").append("<button id='tx" + i + "' class='notibutt acR' onclick='switchpage(" + i + ")'></button>")
                        $("#tx" + i).append("<div id='notipeernftprofile" + i + "' class='notipeerprofile'></div>")
                        peerFaceNoti(i, 0)
                        $("#tx" + i).append("<div class='dealmsg'>DEAL#" + i + "<br>Dealer offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>")
                        if (await knsContract.methods.getName(peerAddr).call() != '') {
                            var peername = await knsContract.methods.getName(peerAddr).call()
                            $("#tx" + i).append("<span class='dealbadgeKns Senderdeal'>" + peername + "</span>")
                        } else {
                            var peername = seller.slice(0, 4) + "..." + seller.slice(-4)
                            $("#tx" + i).append("<span class='dealbadge Senderdeal'>" + peername + "</span>")
                        }
                        if ((activeSend + activeReceive) == 3) {
                            indexAcSave = ii - 1
                        }
                    } else {
                        hxReceive++
                        var soldStatus = 'Deal Complete'
                        var status = '[Complete]'
                        if (await addFtContract.methods.getOptionOneDeal(i).call() == 1 || await addFtContract.methods.getOptionTwoDeal(i).call() == 1) {
                            status = '[Redeem Waiting]'
                        }
                        var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, i, offerIndex, getIndex]
                        dataorderTxbyindex.push(dataorderTx)
                        $("#history-content").append("<button id='tx" + i + "' class='notibutt hxR' onclick='switchpage(" + i + ")'></button>")
                        $("#tx" + i).append("<div id='notipeernftprofile" + i + "' class='notipeerprofile'></div>")
                        peerFaceNoti(i, 0)
                        $("#tx" + i).append("<div class='dealmsg'>DEAL#" + i + " " + status + "<br>Dealer offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>")
                        if (await knsContract.methods.getName(peerAddr).call() != '') {
                            var peername = await knsContract.methods.getName(peerAddr).call()
                            $("#tx" + i).append("<span class='dealbadgeKns Senderdeal'>" + peername + "</span>")
                        } else {
                            var peername = seller.slice(0, 4) + "..." + seller.slice(-4)
                            $("#tx" + i).append("<span class='dealbadge Senderdeal'>" + peername + "</span>")
                        }
                        if ((hxSend + hxReceive) == 3) {
                            indexHxSave = ii - 1
                        }
                    }
                }
            }
        }
    }
    if (indexAcSave != 0) {
        $("#noti-content").append("<button id='loadmoreAc' class='loadmorebutton' onclick='loadmoreAc()'>SHOW MORE</button>")
    }
    if (indexHxSave != 0) {
        $("#history-content").append("<button id='loadmoreHx' class='loadmorebutton' onclick='loadmoreHx()'>SHOW MORE</button>")
    }
    //** no deal message on blank modal **//
    if (activeReceive == 0 && activeSend == 0 && myARDeals.length == 0) {
        $("#noti-content").append("<div class='dealstat'>NO ACTIVE DEAL</div>")
    }
    if (hxReceive == 0 && hxSend == 0) {
        $("#history-content").append("<div class='dealstat'>NO HISTORY</div>")
    }
    //** show noti badge **//
    if (activeReceive != 0 || myARDeals.length != 0) {
        $("#txnoti").append("<span id='notibadge' class='badge'>" + (activeReceive + myARDeals.length) + "</span>")
    }
    //** refresh your status **//
    var balanceGasWei = await web3.eth.getBalance(myaddr)
    var balanceGasEther = await web3.utils.fromWei(String(balanceGasWei))
    $(".gas").remove()
    $("#loginarg").append("<div id='status-content' class='gas'>Gas Balance : " + Number(balanceGasEther).toFixed(9) + " KUB</div>")
    //** search for active deal **//
    $("#searchtx-content").remove()
    $("#noti-content").before("<div id='searchtx-content' class='search-content'><div id='dealactive' class='titlebox'>ACTIVE DEALS</div><input id='searchtx' class='search' placeholder='Search deal number (e.g. DEAL#16)'></input></div>")
    jQuery(document).ready(function() {
        $("#searchtx").keypress(async function(e) {
            var key = e.which
            if (key == 13 && locksearch == 0) {
                locksearch = 1
                var rawid = ($(this).val()).toUpperCase()
                var splitid = rawid.split("#")
                if (splitid[0] != 'DEAL') {
                    var id = splitid[0]
                } else {
                    var id = splitid[1]
                }
                $(".RActive").removeClass("filterselect")
                $(".SActive").removeClass("filterselect")
                $("#searchtempTx").remove()
                $("#noti-content").before("<div id='searchloading' class='searchtemp'><div class='dealstat'>Loading...</div></div>")
                $("#noti-content").before("<div id='searchtempTx' class='searchtemp'></div>")
                $("#noti-content").css("visibility", "hidden")
                if (id.slice(0, 1) != 'A') {
                    try {
                        var seller = await p2pContract.methods.getSeller(id).call()
                        var buyer = await p2pContract.methods.getBuyer(id).call()
                        var offerIndex = await p2pContract.methods.getOfferToken(id).call()
                        var offerWei = await p2pContract.methods.getOfferAmount(id).call()
                        if (KAP18Index.indexOf(Number(offerIndex)) > -1) {
                            var offeramount = await web3.utils.fromWei(offerWei)
                            var txtoffer = Number(offeramount).toFixed(4)
                        } else if (offerIndex == 32 || offerIndex == 56) {
                            var offeramount = offerWei / (10**8)
                            var txtoffer = Number(offeramount).toFixed(4)
                        } else {
                            var offeramount = offerWei
                            var txtoffer = Number(offeramount)
                        }
                        var getIndex = await p2pContract.methods.getGetToken(id).call()
                        var getWei = await p2pContract.methods.getGetAmount(id).call()
                        if (KAP18Index.indexOf(Number(getIndex)) > -1) {
                            var getamount = await web3.utils.fromWei(getWei)
                            var txtget = Number(getamount).toFixed(4)
                        } else if (getIndex == 32 || getIndex == 56) {
                            var getamount = getWei / (10**8)
                            var txtget = Number(getamount).toFixed(4)
                        } else {
                            var getamount = getWei
                            var txtget = Number(getamount)
                        }
                        if (seller.toUpperCase() == myaddr.toUpperCase()) {
                            peerAddr = buyer
                            if (await p2pContract.methods.getSold(id).call() == false) {
                                var soldStatus = 'Pending'
                                var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, id, offerIndex, getIndex]
                                dataorderTxbyindex[id] = dataorderTx
                                $("#searchtempTx").append("<button id='txTemp" + id + "' class='notibutt' onclick='switchpage(" + id + ")'></button>")
                                $("#txTemp" + id).append("<div id='notipeernftprofileTemp" + id + "' class='notipeerprofile'></div>")
                                peerFaceNoti(id, 1)
                                $("#txTemp" + id).append("<div class='dealmsg'>DEAL#" + id + "<br>You offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>")
                                if (await knsContract.methods.getName(peerAddr).call() != '') {
                                    var peerdomain = await knsContract.methods.getName(peerAddr).call()
                                    $("#txTemp" + id).append("<span class='dealbadgeKns Receiverdeal'>" + peerdomain + "</span>")
                                } else {
                                    $("#txTemp" + id).append("<span class='dealbadge Receiverdeal'>" + buyer.slice(0, 4) + "..." + buyer.slice(-4) + "</span>")
                                }
                            } else {
                                $("#searchloading").remove()
                                $("#searchtempTx").append("<div class='dealstat'>DEAL#" + id + " WAS COMPLETE.</div>")
                                locksearch = 0
                            }
                        } else if (buyer.toUpperCase() == myaddr.toUpperCase()) {
                            peerAddr = seller;
                            if (await p2pContract.methods.getSold(id).call() == false) {
                                var soldStatus = 'Pending';
                                var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, id, offerIndex, getIndex];
                                dataorderTxbyindex[id] = dataorderTx;
                                $("#searchtempTx").append("<button id='txTemp" + id + "' class='notibutt' onclick='switchpage(" + id + ")'></button>");
                                $("#txTemp" + id).append("<div id='notipeernftprofileTemp" + id + "' class='notipeerprofile'></div>");
                                peerFaceNoti(id, 1);
                                $("#txTemp" + id).append("<div class='dealmsg'>DEAL#" + id + "<br>Dealer offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>");
                                if (await knsContract.methods.getName(peerAddr).call() != '') {
                                    var peerdomain = await knsContract.methods.getName(peerAddr).call();
                                    $("#txTemp" + id).append("<span class='dealbadgeKns Senderdeal'>" + peerdomain + "</span>");
                                } else {
                                    $("#txTemp" + id).append("<span class='dealbadge Senderdeal'>" + seller.slice(0, 4) + "..." + seller.slice(-4) + "</span>");
                                }
                            } else {
                                $("#searchloading").remove()
                                $("#searchtempTx").append("<div class='dealstat'>DEAL#" + id + " WAS COMPLETE.</div>")
                                locksearch = 0
                            }
                        } else {
                            $("#searchloading").remove()
                            $("#searchtempTx").append("<div class='dealstat'>DEAL#" + id + " IS NOT YOURS.</div>")
                            locksearch = 0
                        }
                    } catch {
                        $("#searchloading").remove()
                        $("#searchtempTx").append("<div class='dealstat'>DEAL#" + id + " IS NOT AVAILABLE.</div>")
                        locksearch = 0
                    }
                } else {
                    //****** new SC deal ******//
                    var splitId = id.split("A")
                    id = splitId[1]
                    var deal = await mainp2pContract.methods.getDeal(id).call()
                    if (deal.callIndex == 0) {
                        $("#searchtempTx").append("<div class='dealstat'>DEAL#A" + id + " IS NOT AVAILABLE.</div>")
                    } else if (deal.status == true) {
                        $("#searchtempTx").append("<div class='dealstat'>DEAL#A" + id + " WAS COMPLETE.</div>")
                    } else {
                        if (deal.offerNftIndex != 0) {
                            var nftipfs = await nftWiki[deal.offerNftIndex][4].methods.tokenURI(deal.offerNftId).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var offerNftImg = json.image
                            var offerNftName = json.name
                        }
                        if (KAP18Index.indexOf(Number(deal.getTokenIndex)) > -1) {
                            var getamount = await web3.utils.fromWei(deal.getTokenAmount)
                            var txtget = Number(getamount).toFixed(4)
                        } else if (deal.getTokenIndex == 32 || deal.getTokenIndex == 56) {
                            var getamount = deal.getTokenAmount / (10**8)
                            var txtget = Number(getamount).toFixed(4)
                        } else {
                            var getamount = deal.getTokenAmount
                            var txtget = Number(getamount)
                        }
                        if ((deal.sender).toUpperCase() == myaddr.toUpperCase()) { //You are sender
                            $("#searchtempTx").append("<button id='temptxN" + id + "' class='notibutt acS' onclick='switchDealPage(" + id + ")'></button>")
                            $("#temptxN" + id).append("<div id='offerpictxN" + id + "' class='notipeerprofile'></div>")
                            $("#offerpictxN" + id).append("<div id='offerpicInsidetxN" + id + "' class='nftmini'></div>")
                            $("#offerpicInsidetxN" + id).append("<img id='offerImg' class='miniprofile' src='" + offerNftImg + "' height='100' width='100'>")
                            $("#temptxN" + id).append("<div class='dealmsg'>DEAL#A" + id + "<br>You offered<br>" + offerNftName + "<br>To exchange with<br>" + txtget + " " + tokenWiki[deal.getTokenIndex][0] + "</div>")
                            if (await knsContract.methods.getName(deal.receiver).call() != '') {
                                var peername = await knsContract.methods.getName(deal.receiver).call()
                                $("#temptxN" + id).append("<span class='dealbadgeKns Receiverdeal'>" + peername + "</span>")
                            } else {
                                var peername = (deal.receiver).slice(0, 4) + "..." + (deal.receiver).slice(-4)
                                $("#temptxN" + id).append("<span class='dealbadge Receiverdeal'>" + peername + "</span>")
                            }
                            dealsData[id] = [deal.callIndex, deal.sender, deal.receiver, 0, 0, Number(deal.offerNftIndex), [deal.offerNftId, offerNftName, offerNftImg], Number(deal.getTokenIndex), [Number(deal.getTokenAmount), txtget], 0, 0, deal.offerTime, deal.status]
                        } else if ((deal.receiver).toUpperCase() == myaddr.toUpperCase()) { //You are receiver
                            $("#searchtempTx").append("<button id='temptxN" + id + "' class='notibutt acR' onclick='switchDealPage(" + id + ")'></button>")
                            $("#temptxN" + i).append("<div id='offerpictxN" + id + "' class='notipeerprofile'></div>")
                            $("#offerpictxN" + id).append("<div id='offerpicInsidetxN" + id + "' class='nftmini'></div>")
                            $("#offerpicInsidetxN" + id).append("<img id='offerImg' class='miniprofile' src='" + offerNftImg + "' height='100' width='100'>")
                            $("#temptxN" + i).append("<div class='dealmsg'>DEAL#A" + id + "<br>Dealer offered<br>" + offerNftName + "<br>To exchange with<br>" + txtget + " " + tokenWiki[deal.getTokenIndex][0] + "</div>")
                            if (await knsContract.methods.getName(deal.sender).call() != '') {
                                var peername = await knsContract.methods.getName(deal.sender).call()
                                $("#temptxN" + id).append("<span class='dealbadgeKns Senderdeal'>" + peername + "</span>")
                            } else {
                                var peername = (deal.sender).slice(0, 4) + "..." + (deal.sender).slice(-4)
                                $("#temptxN" + id).append("<span class='dealbadge Senderdeal'>" + peername + "</span>")
                            }
                            dealsData[id] = [deal.callIndex, deal.sender, deal.receiver, 0, 0, Number(deal.offerNftIndex), [deal.offerNftId, offerNftName, offerNftImg], Number(deal.getTokenIndex), [Number(deal.getTokenAmount), txtget], 0, 0, deal.offerTime, deal.status]
                        } else {
                            $("#searchtempTx").append("<div class='dealstat'>DEAL#A" + id + " IS NOT YOURS.</div>")
                        }
                    }
                    $("#searchloading").remove()
                    locksearch = 0
                }
                if (rawid == "") {
                    $("#searchtempTx").remove()
                    $("#noti-content").css("visibility", "visible")
                }
            }
        })
    })
    //** search for hx deal **//
    $("#searchhx-content").remove();
    $("#history-content").before("<div id='searchhx-content' class='search-content'><div id='dealhx' class='titlebox'>DEAL HISTORY</div><input id='searchhx' class='search' placeholder='Search deal number (e.g. DEAL#16)'></input></div>");
    jQuery(document).ready(function() {
        $("#searchhx").keypress(async function(e) {
            var key = e.which
            if (key == 13 && locksearch == 0) {
                locksearch = 1
                var rawid = ($(this).val()).toUpperCase()
                var splitid = rawid.split("#")
                if (splitid[0] != 'DEAL') {
                    var id = splitid[0]
                } else {
                    var id = splitid[1]
                }
                $(".Shx").removeClass("filterselect")
                $(".Rhx").removeClass("filterselect")
                $("#searchtempHx").remove()
                $("#history-content").before("<div id='searchloading' class='searchtemp'><div class='dealstat'>Loading...</div></div>")
                $("#history-content").before("<div id='searchtempHx' class='searchtemp'></div>")
                $("#history-content").css("visibility", "hidden")
                if (id.slice(0, 1) != 'A') {
                    try {
                        var seller = await p2pContract.methods.getSeller(id).call()
                        var buyer = await p2pContract.methods.getBuyer(id).call()
                        var offerIndex = await p2pContract.methods.getOfferToken(id).call()
                        var offeramountWei = await p2pContract.methods.getOfferAmount(id).call()
                        if (KAP18Index.indexOf(Number(offerIndex)) > -1) {
                            var offeramount = await web3.utils.fromWei(offeramountWei, 'ether')
                            var txtoffer = Number(offeramount).toFixed(4)
                        } else if (offerIndex == 32 || offerIndex == 56) {
                            var offeramount = offeramountWei/(10**8);
                            var txtoffer = Number(offeramount).toFixed(4)
                        } else {
                            var offeramount = offeramountWei
                            var txtoffer = Number(offeramount)
                        }
                        var getIndex = await p2pContract.methods.getGetToken(id).call()
                        var getamountWei = await p2pContract.methods.getGetAmount(id).call()
                        if (KAP18Index.indexOf(Number(getIndex)) > -1) {
                            var getamount = await web3.utils.fromWei(getamountWei, 'ether')
                            var txtget = Number(getamount).toFixed(4)
                        } else if (getIndex == 32 || getIndex == 56) {
                            var getamount = getamountWei/(10**8)
                            var txtget = Number(getamount).toFixed(4)
                        } else {
                            var getamount = getamountWei
                            var txtget = Number(getamountWei)
                        }
                        if (seller.toUpperCase() == myaddr.toUpperCase()) {
                            peerAddr = buyer
                            if (await p2pContract.methods.getSold(id).call() == false) {
                                $("#searchloading").remove()
                                $("#searchtempHx").append("<div class='dealstat'>DEAL#" + id + " IS ACTIVE.</div>")
                                locksearch = 0
                            } else {
                                var soldStatus = 'Deal Complete'
                                var status = '[Complete]'
                                if (await addFtContract.methods.getOptionOneDeal(id).call() == 1 || await addFtContract.methods.getOptionTwoDeal(id).call() == 1) {
                                    status = '[Redeem Waiting]'
                                }
                                var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, id, offerIndex, getIndex]
                                dataorderTxbyindex[id] = dataorderTx
                                $("#searchtempHx").append("<button id='hxTemp" + id + "' class='notibutt' onclick='switchpage(" + id + ")'></button>")
                                $("#hxTemp" + id).append("<div id='notipeernftprofileTemp" + id + "' class='notipeerprofile'></div>")
                                peerFaceNoti(id, 1)
                                $("#hxTemp" + id).append("<div class='dealmsg'>DEAL#" + id + " " + status + "<br>You offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>")
                                if (await knsContract.methods.getName(peerAddr).call() != '') {
                                    var peerdomain = await knsContract.methods.getName(peerAddr).call()
                                    $("#hxTemp" + id).append("<span class='dealbadgeKns Receiverdeal'>" + peerdomain + "</span>")
                                } else {
                                    $("#hxTemp" + id).append("<span class='dealbadge Receiverdeal'>" + buyer.slice(0, 4) + "..." + buyer.slice(-4) + "</span>")
                                }
                            }
                        } else if (buyer.toUpperCase() == myaddr.toUpperCase()) {
                            peerAddr = seller;
                            if (await p2pContract.methods.getSold(id).call() == false) {
                                $("#searchloading").remove();
                                $("#searchtempHx").append("<div class='dealstat'>DEAL#" + id + " IS ACTIVE.</div>");
                                locksearch = 0;
                            } else {
                                var soldStatus = 'Deal Complete';
                                var status = '[Complete]';
                                if (await addFtContract.methods.getOptionOneDeal(id).call() == 1 || await addFtContract.methods.getOptionTwoDeal(id).call() == 1) {
                                    status = '[Redeem Waiting]';
                                }
                                var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, id, offerIndex, getIndex];
                                dataorderTxbyindex[id] = dataorderTx;
                                $("#searchtempHx").append("<button id='hxTemp" + id + "' class='notibutt' onclick='switchpage(" + id + ")'></button>");
                                $("#hxTemp" + id).append("<div id='notipeernftprofileTemp" + id + "' class='notipeerprofile'></div>");
                                peerFaceNoti(id, 1);
                                $("#hxTemp" + id).append("<div class='dealmsg'>DEAL#" + id + " " + status + "<br>Dealer offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>");
                                if (await knsContract.methods.getName(peerAddr).call() != '') {
                                    var peerdomain = await knsContract.methods.getName(peerAddr).call();
                                    $("#hxTemp" + id).append("<span class='dealbadgeKns Senderdeal'>" + peerdomain + "</span>");
                                } else {
                                    $("#hxTemp" + id).append("<span class='dealbadge Senderdeal'>" + seller.slice(0, 4) + "..." + seller.slice(-4) + "</span>");
                                }
                            }
                        } else {
                            $("#searchloading").remove();
                            $("#searchtempHx").append("<div class='dealstat'>DEAL#" + id + " IS NOT YOUR DEAL.</div>");
                            locksearch = 0;
                        }
                    } catch {
                        $("#searchloading").remove()
                        $("#searchtempHx").append("<div class='dealstat'>DEAL#" + id + " IS NOT AVAILABLE.</div>")
                        locksearch = 0
                    }
                } else {
                    //****** new SC deal ******//
                    var splitId = id.split("A")
                    id = splitId[1]
                    var deal = await mainp2pContract.methods.getDeal(id).call()
                    if (deal.callIndex == 0) {
                        $("#searchtempHx").append("<div class='dealstat'>DEAL#A" + id + " IS NOT AVAILABLE.</div>")
                    } else if (deal.status == false) {
                        $("#searchtempHx").append("<div class='dealstat'>DEAL#A" + id + " IS ACTIVE.</div>")
                    } else {
                        if (deal.offerNftIndex != 0) {
                            var nftipfs = await nftWiki[deal.offerNftIndex][4].methods.tokenURI(deal.offerNftId).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var offerNftImg = json.image
                            var offerNftName = json.name
                        }
                        if (KAP18Index.indexOf(Number(deal.getTokenIndex)) > -1) {
                            var getamount = await web3.utils.fromWei(deal.getTokenAmount)
                            var txtget = Number(getamount).toFixed(4)
                        } else if (deal.getTokenIndex == 32 || deal.getTokenIndex == 56) {
                            var getamount = deal.getTokenAmount / (10**8)
                            var txtget = Number(getamount).toFixed(4)
                        } else {
                            var getamount = deal.getTokenAmount
                            var txtget = Number(getamount)
                        }
                        if ((deal.sender).toUpperCase() == myaddr.toUpperCase()) { //You are sender
                            $("#searchtempHx").append("<button id='temphxN" + id + "' class='notibutt hxS' onclick='switchDealPage(" + id + ")'></button>")
                            $("#temphxN" + id).append("<div id='offerpichxN" + id + "' class='notipeerprofile'></div>")
                            $("#offerpichxN" + id).append("<div id='offerpicInside" + id + "' class='nftmini'></div>")
                            $("#offerpicInsidehxN" + id).append("<img id='offerImghxN' class='miniprofile' src='" + offerNftImg + "' height='100' width='100'>")
                            $("#temphxN" + id).append("<div class='dealmsg'>DEAL#A" + id + " [COMPLETE]<br>You offered<br>" + offerNftName + "<br>To exchange with<br>" + txtget + " " + tokenWiki[deal.getTokenIndex][0] + "</div>")
                            if (await knsContract.methods.getName(deal.receiver).call() != '') {
                                var peername = await knsContract.methods.getName(deal.receiver).call()
                                $("#temphxN" + id).append("<span class='dealbadgeKns Receiverdeal'>" + peername + "</span>")
                            } else {
                                var peername = (deal.receiver).slice(0, 4) + "..." + (deal.receiver).slice(-4)
                                $("#temphxN" + id).append("<span class='dealbadge Receiverdeal'>" + peername + "</span>")
                            }
                            dealsData[id] = [deal.callIndex, deal.sender, deal.receiver, 0, 0, Number(deal.offerNftIndex), [deal.offerNftId, offerNftName, offerNftImg], Number(deal.getTokenIndex), [Number(deal.getTokenAmount), txtget], 0, 0, deal.offerTime, deal.status]
                        } else if ((deal.receiver).toUpperCase() == myaddr.toUpperCase()) { //You are receiver
                            $("#searchtempHx").append("<button id='temphxN" + id + "' class='notibutt hxR' onclick='switchDealPage(" + id + ")'></button>")
                            $("#temphxN" + id).append("<div id='offerpichxN" + id + "' class='notipeerprofile'></div>")
                            $("#offerpichxN" + id).append("<div id='offerpicInsidehxN" + id + "' class='nftmini'></div>")
                            $("#offerpicInsidehxN" + id).append("<img id='offerImg' class='miniprofile' src='" + offerNftImg + "' height='100' width='100'>")
                            $("#temphxN" + id).append("<div class='dealmsg'>DEAL#A" + id + " [COMPLETE]<br>Dealer offered<br>" + offerNftName + "<br>To exchange with<br>" + txtget + " " + tokenWiki[deal.getTokenIndex][0] + "</div>")
                            if (await knsContract.methods.getName(deal.sender).call() != '') {
                                var peername = await knsContract.methods.getName(deal.sender).call()
                                $("#temphxN" + id).append("<span class='dealbadgeKns Senderdeal'>" + peername + "</span>")
                            } else {
                                var peername = (deal.sender).slice(0, 4) + "..." + (deal.sender).slice(-4)
                                $("#temphxN" + id).append("<span class='dealbadge Senderdeal'>" + peername + "</span>")
                            }
                            dealsData[id] = [deal.callIndex, deal.sender, deal.receiver, 0, 0, Number(deal.offerNftIndex), [deal.offerNftId, offerNftName, offerNftImg], Number(deal.getTokenIndex), [Number(deal.getTokenAmount), txtget], 0, 0, deal.offerTime, deal.status]
                        } else {
                            $("#searchtempHx").append("<div class='dealstat'>DEAL#A" + id + " IS NOT YOURS.</div>")
                        }
                    }
                    $("#searchloading").remove()
                    locksearch = 0
                }
                if (rawid == "") {
                   $("#searchtempHx").remove()
                   $("#history-content").css("visibility", "visible")
                }
            }
        });
    });
    //** filter deal **//
    $("#searchtx-content").append("<div id='filteractive' class='filterdeal'></div>");
    $("#filteractive").append("<button id='switchfilter' class='RActive'>As Receiver</button>");
    jQuery(document).ready(function() {
        $(".RActive").click(function() {
            $(this).addClass(" filterselect");
            $(".SActive").removeClass("filterselect");
            $("#searchtempTx").remove();
            $("#noti-content").css("visibility", "");
            $(".acR").css("position", "relative");
            $(".acR").css("visibility", "");
            $(".acS").css("position", "absolute");
            $(".acS").css("top", "0");
            $(".acS").css("visibility", "hidden");
            $("#loadmoreAc").css("visibility", "hidden");
        });
    });
    $("#filteractive").append("<button id='switchfilter' class='SActive'>As Sender</button>");
    jQuery(document).ready(function() {
        $(".SActive").click(function() {
            $(this).addClass(" filterselect");
            $(".RActive").removeClass("filterselect");
            $("#searchtempTx").remove();
            $("#noti-content").css("visibility", "");
            $(".acS").css("position", "relative");
            $(".acS").css("visibility", "");
            $(".acR").css("position", "absolute");
            $(".acR").css("top", "0");
            $(".acR").css("visibility", "hidden");
            $("#loadmoreAc").css("visibility", "hidden");
        });
    });
    jQuery(document).ready(function() {
        $("#dealactive").click(function() {
            $(".SActive").removeClass("filterselect");
            $(".RActive").removeClass("filterselect");
            $("#searchtempTx").remove();
            $("#noti-content").css("visibility", "");
            $(".acR").css("position", "relative");
            $(".acR").css("visibility", "");
            $(".acS").css("position", "relative");
            $(".acS").css("visibility", "");
            $("#loadmoreAc").css("visibility", "");
        });
    });
    $("#searchhx-content").append("<div id='filterHx' class='filterdeal'></div>");
    $("#filterHx").append("<button id='switchfilter' class='Rhx'>As Receiver</button>");
    jQuery(document).ready(function() {
        $(".Rhx").click(function() {
            $(this).addClass(" filterselect");
            $(".Shx").removeClass("filterselect");
            $("#searchtempHx").remove();
            $("#history-content").css("visibility", "");
            $(".hxR").css("position", "relative");
            $(".hxR").css("visibility", "");
            $(".hxS").css("position", "absolute");
            $(".hxS").css("top", "0");
            $(".hxS").css("visibility", "hidden");
            $("#loadmoreHx").css("visibility", "hidden");
        });
    });
    $("#filterHx").append("<button id='switchfilter' class='Shx'>As Sender</button>");
    jQuery(document).ready(function() {
        $(".Shx").click(function() {
            $(this).addClass(" filterselect");
            $(".Rhx").removeClass("filterselect");
            $("#searchtempHx").remove();
            $("#history-content").css("visibility", "");
            $(".hxS").css("position", "relative");
            $(".hxS").css("visibility", "");
            $(".hxR").css("position", "absolute");
            $(".hxR").css("top", "0");
            $(".hxR").css("visibility", "hidden");
            $("#loadmoreHx").css("visibility", "hidden");
        });
    });
    jQuery(document).ready(function() {
        $("#dealhx").click(function() {
            $(".Shx").removeClass("filterselect");
            $(".Rhx").removeClass("filterselect");
            $("#searchtempHx").remove();
            $("#history-content").css("visibility", "");
            $(".hxR").css("position", "relative");
            $(".hxR").css("visibility", "");
            $(".hxS").css("position", "relative");
            $(".hxS").css("visibility", "");
            $("#loadmoreHx").css("visibility", "");
        });
    });

    $(".dropdown-box").css("visibility", "visible");
    $(".dropdown-content").css("visibility", "visible");
    $("#loadingmodal").css("display", "none");
    peerAddr = ''; // use for sending to jazzicon module, don't delele
    //** do something after NFT profile change ??? **//
    $(".nftinfo").remove();
    yourpeernftprofile = "<div id='yourpeernftprofile' class='mainprofile'></div>";
}

async function loadmoreAc() {
    $("#loadingmodal").css("display", "block");
    $(".search").empty(); //clear input on searchbox
    $(".searchtemp").remove(); //clear search deal window
    $("#loadmoreAc").remove();
    var acReceive = 0;
    var acSend = 0;
    var indexforNoti = await p2pContract.methods.getIndexforNoti(myaddr).call();
    for (var ii = indexAcSave; ii >= 0 && (acSend + acReceive) < 5; ii--) {
        if (indexforNoti[ii] != 0) {
            var i = indexforNoti[ii];
            var seller = await p2pContract.methods.getSeller(i).call();
            var buyer = await p2pContract.methods.getBuyer(i).call();
            var offerIndex = await p2pContract.methods.getOfferToken(i).call();
            var offeramountWei = await p2pContract.methods.getOfferAmount(i).call();
            if (KAP18Index.indexOf(Number(offerIndex)) > -1) {
                var offeramount = await web3.utils.fromWei(offeramountWei, 'ether');
                var txtoffer = Number(offeramount).toFixed(4);
            } else if (offerIndex == 32 || offerIndex == 56) {
                var offeramount = offeramountWei/(10**8);
                var txtoffer = Number(offeramount).toFixed(4);
            } else {
                var offeramount = offeramountWei;
                var txtoffer = Number(offeramount);
            }
            var getIndex = await p2pContract.methods.getGetToken(i).call();
            var getamountWei = await p2pContract.methods.getGetAmount(i).call();
            if (KAP18Index.indexOf(Number(getIndex)) > -1) {
                var getamount = await web3.utils.fromWei(getamountWei, 'ether');
                var txtget = Number(getamount).toFixed(4);
            } else if (getIndex == 32 || getIndex == 56) {
                var getamount = getamountWei/(10**8);
                var txtget = Number(getamount).toFixed(4);
            } else {
                var getamount = getamountWei;
                var txtget = Number(getamount);
            }
            //** load more noti building **//
            if (seller.toUpperCase() == myaddr.toUpperCase()) { //You are sender
                peerAddr = buyer;
                if (await p2pContract.methods.getSold(i).call() == false) {
                    acSend++;
                    var soldStatus = 'Pending';
                    var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, i, offerIndex, getIndex];
                    dataorderTxbyindex.push(dataorderTx);
                    $("#noti-content").append("<button id='tx" + i + "' class='notibutt acS' onclick='switchpage(" + i + ")'></button>");
                    $("#tx" + i).append("<div id='notipeernftprofile" + i + "' class='notipeerprofile'></div>");
                    peerFaceNoti(i, 0);
                    $("#tx" + i).append("<div class='dealmsg'>DEAL#" + i + "<br>You offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>");
                    if (await knsContract.methods.getName(peerAddr).call() != '') {
                        var peerdomain = await knsContract.methods.getName(peerAddr).call();
                        $("#tx" + i).append("<span class='dealbadgeKns Receiverdeal'>" + peerdomain + "</span>");
                    } else {
                        $("#tx" + i).append("<span class='dealbadge Receiverdeal'>" + buyer.slice(0, 4) + "..." + buyer.slice(-4) + "</span>");
                    }
                    if ((acSend + acReceive) == 5) {
                        indexAcSave = ii - 1;
                    }
                }
            } else if (buyer.toUpperCase() == myaddr.toUpperCase()) { //You are receiver
                peerAddr = seller;
                if (await p2pContract.methods.getSold(i).call() == false) {
                    acReceive++;
                    var soldStatus = 'Pending';
                    var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, i, offerIndex, getIndex];
                    dataorderTxbyindex.push(dataorderTx);
                    $("#noti-content").append("<button id='tx" + i + "' class='notibutt acR' onclick='switchpage(" + i + ")'></button>");
                    $("#tx" + i).append("<div id='notipeernftprofile" + i + "' class='notipeerprofile'></div>");
                    peerFaceNoti(i, 0);
                    $("#tx" + i).append("<div class='dealmsg'>DEAL#" + i + "<br>Dealer offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>");
                    if (await knsContract.methods.getName(peerAddr).call() != '') {
                        var peerdomain = await knsContract.methods.getName(peerAddr).call();
                        $("#tx" + i).append("<span class='dealbadgeKns Senderdeal'>" + peerdomain + "</span>");
                    } else {
                        $("#tx" + i).append("<span class='dealbadge Senderdeal'>" + seller.slice(0, 4) + "..." + seller.slice(-4) + "</span>");
                    }
                    if ((acSend + acReceive) == 5) {
                        indexAcSave = ii - 1;
                    }
                }
            }
        }
        if (ii == 0) {
            indexAcSave = 0;
            $("#noti-content").append("<button id='nomore'>NO MORE ACTIVE DEAL</button>");
        }
    }
    if (indexAcSave != 0) {
        $("#noti-content").append("<button id='loadmoreAc' class='loadmorebutton' onclick='loadmoreAc()'>SHOW MORE</button>");
    }
    var oldac = Number($("#notibadge").html());
    $("#notibadge").html(oldac + acReceive);
    $("#loadingmodal").css("display", "none");
}

async function loadmoreHx() {
    $("#loadingmodal").css("display", "block");
    $(".search").empty(); //clear input on searchbox
    $(".searchtemp").remove(); //clear search deal window
    $("#loadmoreHx").remove();
    var hxReceive = 0;
    var hxSend = 0;
    var indexforNoti = await p2pContract.methods.getIndexforNoti(myaddr).call();
    for (var ii = indexHxSave; ii >= 0 && (hxSend + hxReceive) < 5; ii--) {
        if (indexforNoti[ii] != 0) {
            var i = indexforNoti[ii];
            var seller = await p2pContract.methods.getSeller(i).call();
            var buyer = await p2pContract.methods.getBuyer(i).call();
            var offerIndex = await p2pContract.methods.getOfferToken(i).call();
            var offeramountWei = await p2pContract.methods.getOfferAmount(i).call();
            if (KAP18Index.indexOf(Number(offerIndex)) > -1) {
                var offeramount = await web3.utils.fromWei(offeramountWei, 'ether');
                var txtoffer = Number(offeramount).toFixed(4);
            } else if (offerIndex == 32 || offerIndex == 56) {
                var offeramount = offeramountWei/(10**8);
                var txtoffer = Number(offeramount).toFixed(4);
            } else {
                var offeramount = offeramountWei;
                var txtoffer = Number(offeramount);
            }
            var getIndex = await p2pContract.methods.getGetToken(i).call();
            var getamountWei = await p2pContract.methods.getGetAmount(i).call();
            if (KAP18Index.indexOf(Number(getIndex)) > -1) {
                var getamount = await web3.utils.fromWei(getamountWei, 'ether');
                var txtget = Number(getamount).toFixed(4);
            } else if (getIndex == 32 || getIndex == 56) {
                var getamount = getamountWei/(10**8);
                var txtget = Number(getamount).toFixed(4);
            } else {
                var getamount = getamountWei;
                var txtget = Number(getamount);
            }
            //** load more noti building **//
            if (seller.toUpperCase() == myaddr.toUpperCase()) { //You are sender
                peerAddr = buyer;
                if (await p2pContract.methods.getSold(i).call() == true) {
                    hxSend++;
                    var soldStatus = 'Deal Complete';
                    var status = '[Complete]';
                    if (await addFtContract.methods.getOptionOneDeal(i).call() == 1 || await addFtContract.methods.getOptionTwoDeal(i).call() == 1) {
                        status = '[Redeem Waiting]';
                    }
                    var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, i, offerIndex, getIndex];
                    dataorderTxbyindex.push(dataorderTx);
                    $("#history-content").append("<button id='tx" + i + "' class='notibutt hxS' onclick='switchpage(" + i + ")'></button>");
                    $("#tx" + i).append("<div id='notipeernftprofile" + i + "' class='notipeerprofile'></div>");
                    peerFaceNoti(i, 0);
                    $("#tx" + i).append("<div class='dealmsg'>DEAL#" + i + " " + status + "<br>You offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>");
                    if (await knsContract.methods.getName(peerAddr).call() != '') {
                        var peerdomain = await knsContract.methods.getName(peerAddr).call();
                        $("#tx" + i).append("<span class='dealbadgeKns Receiverdeal'>" + peerdomain + "</span>");
                    } else {
                        $("#tx" + i).append("<span class='dealbadge Receiverdeal'>" + buyer.slice(0, 4) + "..." + buyer.slice(-4) + "</span>");
                    }
                    if ((hxSend + hxReceive) == 5) {
                        indexHxSave = ii - 1;
                    }
                }
            } else if (buyer.toUpperCase() == myaddr.toUpperCase()) { //You are receiver
                peerAddr = seller;
                if (await p2pContract.methods.getSold(i).call() == true) {
                    hxReceive++;
                    var soldStatus = 'Deal Complete';
                    var status = '[Complete]';
                    if (await addFtContract.methods.getOptionOneDeal(i).call() == 1 || await addFtContract.methods.getOptionTwoDeal(i).call() == 1) {
                        status = '[Redeem Waiting]';
                    }
                    var dataorderTx = [offeramount, seller, buyer, getamount, soldStatus, i, offerIndex, getIndex];
                    dataorderTxbyindex.push(dataorderTx);
                    $("#history-content").append("<button id='tx" + i + "' class='notibutt hxR' onclick='switchpage(" + i + ")'></button>");
                    $("#tx" + i).append("<div id='notipeernftprofile" + i + "' class='notipeerprofile'></div>");
                    peerFaceNoti(i, 0);
                    $("#tx" + i).append("<div class='dealmsg'>DEAL#" + i + " " + status + "<br>Dealer offered<br>" + txtoffer + " " + tokenWiki[offerIndex][0] + "<br>To exchange with<br>" + txtget + " " + tokenWiki[getIndex][0] + "</div>");
                    if (await knsContract.methods.getName(peerAddr).call() != '') {
                        var peerdomain = await knsContract.methods.getName(peerAddr).call();
                        $("#tx" + i).append("<span class='dealbadgeKns Senderdeal'>" + peerdomain + "</span>");
                    } else {
                        $("#tx" + i).append("<span class='dealbadge Senderdeal'>" + seller.slice(0, 4) + "..." + seller.slice(-4) + "</span>");
                    }
                    if ((hxSend + hxReceive) == 5) {
                        indexHxSave = ii - 1;
                    }
                }
            }
        }
        if (ii == 0) {
            indexHxSave = 0;
            $("#history-content").append("<button id='nomore'>NO MORE DEAL IN HISTORY</button>");
        }
    }
    if (indexHxSave != 0) {
        $("#history-content").append("<button id='loadmoreHx' class='loadmorebutton' onclick='loadmoreHx()'>SHOW MORE</button>");
    }
    $("#loadingmodal").css("display", "none");
}

async function switchpage(ii) {
    $(".dropdown-box").css("display", "none")
    $("#loadingmodal").css("display", "block")
    for (a in dataorderTxbyindex) {
        if (dataorderTxbyindex[a][5] == ii) {
            var i = a;
        }
    }
    optionselect = 0;
    idselect = 0;
    $(".status").remove();
    $("#youraddr").attr("class", "addr");
    if (dataorderTxbyindex[i][4] == 'Deal Complete') {
        dealcomplete(i);
    } else {
        $("#tradearg").empty();
        $("#tradearg").append("<div id='dealnumber' class='compmsg'>DEAL#" + dataorderTxbyindex[i][5] + "</div>");
        $("#tradearg").append("<button id='copydeal' onclick='copydeal()'>Copy</button>");
        $("#tradearg").append("<div class='processmsg'>Confirm Waiting</div>");
        if (dataorderTxbyindex[i][1].toUpperCase() == myaddr.toUpperCase()) {
            peerAddr = dataorderTxbyindex[i][2];
            var yourbadge = "Senderdeal";
            var peerbadge = "Receiverdeal";
            var yourstatus = "<span class='dealsender'>Sender</span>";
            var peerstatus = "<span class='dealgetter'>Receiver</span>";
            if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][6])) > -1) {
                var textofferVal = Number(dataorderTxbyindex[i][0]).toFixed(9);
            } else if (dataorderTxbyindex[i][6] == 32 || dataorderTxbyindex[i][6] == 56) {
                var textofferVal = Number(dataorderTxbyindex[i][0]).toFixed(8);
            } else {
                var textofferVal = Number(dataorderTxbyindex[i][0]).toFixed(0);
            }
            if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][7])) > -1) {
                var getfee = (Number(dataorderTxbyindex[i][3])/40).toFixed(9);
                var textget = Number(dataorderTxbyindex[i][3]).toFixed(9);
                var textgetRes = (Number(dataorderTxbyindex[i][3]) - getfee).toFixed(9);
            } else if (dataorderTxbyindex[i][7] == 32 || dataorderTxbyindex[i][7] == 56) {
                var getfee = (Number(dataorderTxbyindex[i][3])/40).toFixed(8);
                var textget = Number(dataorderTxbyindex[i][3]).toFixed(8);
                var textgetRes = (Number(dataorderTxbyindex[i][3]) - getfee).toFixed(8);
            } else {
                var getfee = Math.floor(Number(dataorderTxbyindex[i][3])/40);
                var textget = Number(dataorderTxbyindex[i][3]).toFixed(0);
                var textgetRes = (Number(dataorderTxbyindex[i][3]) - getfee).toFixed(0);
            }
            if (getfee == 0) {
                var getfeeText = 'NO FEE FOR';
            } else {
                var getfeeText = 'FEE : ' + getfee;
            }
            $("#tradearg").append("<div class='tokenarg'><div id='tokenchose1' class='chooser'></div></div>");
            $("#tokenchose1").append("<img src=" + tokenWiki[dataorderTxbyindex[i][6]][1] + " height='40' width='40' />");
            $("#tokenchose1").append("<span class='inchooserName'>" + textofferVal + " " + tokenWiki[dataorderTxbyindex[i][6]][0] + "</span>");
            $("#tradearg").append("<div class='arrowdown'></div>");
            $("#tradearg").append("<div class='tokenarg'><div id='tokenchose2' class='chooser'></div></div>");
            $("#tokenchose2").append("<img src=" + tokenWiki[dataorderTxbyindex[i][7]][1] + " height='40' width='40' />");
            if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1) {
                $("#tokenchose2").append("<span class='inchooserName'>" + textget + " " + tokenWiki[dataorderTxbyindex[i][7]][0] + "</span>");
                $("#tradearg").append("<div id='feeGet' class='feespan'>FEE TOKEN IS USED ON YOUR SIDE</div>");
            } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) {
                $("#tokenchose2").append("<span class='inchooserName'>" + textget + " " + tokenWiki[dataorderTxbyindex[i][7]][0] + "</span>");
                $("#tradearg").append("<div id='feeGet' class='feespan'>FEE TOKEN IS USED ON BOTH SIDE</div>");
            } else {
                $("#tokenchose2").append("<span class='inchooserName'>" + textgetRes + " " + tokenWiki[dataorderTxbyindex[i][7]][0] + "</span>");
                $("#tradearg").append("<div id='feeGet' class='feespan'>" + getfeeText + " " + tokenWiki[dataorderTxbyindex[i][7]][0] + "</div>");
            }
            $("#tradearg").append("<button id='rejectdealtx' class='tradebutton'>REJECT OFFER</button>");
            $("#tradearg").append("<button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>");
            $("#tradearg").append("<br><div id='errormsg'></div>");
            jQuery(document).ready(function() {
                $("#rejectdealtx").click(async function() {
                    $("#errormsg").css("visibility", "hidden");
                    try {
                        $("#loadingmodal").css("display", "block");
                        if (await ethereum.request({ method: 'eth_chainId' }) != '0x60') {
                            $("#errormsg").css("visibility", "visible");
                            $("#errormsg").html("Invalid chain ID");
                        } else {
                            if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1 || await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) {
                                var data = addFtContract.methods.getbackFeeToken(dataorderTxbyindex[i][5]).encodeABI();
                                var getbacktx = await ethereum.request({
                                    method: 'eth_sendTransaction',
                                    params: [{
                                    from: myaddr,
                                    to: addFtAddr,
                                    data: data,
                                    },],
                                });
                                var isValidate = await web3.eth.getTransactionReceipt(getbacktx);
                                while (isValidate == null) {
                                    isValidate = await web3.eth.getTransactionReceipt(getbacktx);
                                }
                            }
                            var data = p2pContract.methods.removeDeal(dataorderTxbyindex[i][5]).encodeABI();
                            var rejecttx = await ethereum.request({
                                method: 'eth_sendTransaction',
                                params: [{
                                from: myaddr,
                                to: p2pAddr,
                                data: data,
                                },],
                            });
                            var isValidate = await web3.eth.getTransactionReceipt(rejecttx);
                            while (isValidate == null) {
                                isValidate = await web3.eth.getTransactionReceipt(rejecttx);
                            }
                            $("#tradearg").empty();
                            $("#tradearg").append("<br><div class='processmsg'>DEAL#" + dataorderTxbyindex[i][5] + " Rejected</div>");
                            $("#tradearg").append("<br><br><div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>");
                            $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + rejecttx);
                            if (getbacktx) {
                                jQuery(document).ready(function() {
                                    $(".exploreblockLink").click(function() {
                                        window.open("https://www.bkcscan.com/tx/" + getbacktx);
                                    });
                                });
                            }
                            $("#tradearg").append("<br><button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>");
                            $("#loadingmodal").css("display", "none");
                            notiupdate();
                        }
                    } catch {
                        $("#loadingmodal").css("display", "none");
                        $("#errormsg").css("visibility", "visible");
                        $("#errormsg").html("Transaction failed");
                    }
                });
            });
        } else {
            peerAddr = dataorderTxbyindex[i][1];
            var yourbadge = "Receiverdeal";
            var peerbadge = "Senderdeal";
            var yourstatus = "<span class='dealgetter'>Receiver</span>";
            var peerstatus = "<span class='dealsender'>Sender</span>";
            findGetofdeal(i);
            if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][7])) > -1) {
                var textsendVal = Number(dataorderTxbyindex[i][3]).toFixed(9);
            } else if (dataorderTxbyindex[i][7] == 32 || dataorderTxbyindex[i][7] == 56) {
                var textsendVal = Number(dataorderTxbyindex[i][3]).toFixed(8);
            } else {
                var textsendVal = Number(dataorderTxbyindex[i][3]).toFixed(0);
            }
            if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][6])) > -1) {
                var getfee = (Number(dataorderTxbyindex[i][0])/40).toFixed(9);
                var textget = Number(dataorderTxbyindex[i][0]).toFixed(9);
                var textgetRes = (Number(dataorderTxbyindex[i][0]) - getfee).toFixed(9);
            } else if (dataorderTxbyindex[i][6] == 32 || dataorderTxbyindex[i][6] == 56) {
                var getfee = (Number(dataorderTxbyindex[i][0])/40).toFixed(8);
                var textget = Number(dataorderTxbyindex[i][0]).toFixed(8);
                var textgetRes = (Number(dataorderTxbyindex[i][0]) - getfee).toFixed(8);
            } else {
                var getfee = Math.floor(Number(dataorderTxbyindex[i][0])/40);
                var textget = Number(dataorderTxbyindex[i][0]).toFixed(0);
                var textgetRes = (Number(dataorderTxbyindex[i][0]) - getfee).toFixed(0);
            }
            if (getfee == 0) {
                var getfeeText = 'NO FEE FOR';
            } else {
                var getfeeText = 'FEE : ' + getfee;
            }
            $("#tradearg").append("<div class='tokenarg'><div id='tokenchose1' class='chooser'></div></div>");
            $("#tokenchose1").append("<img src=" + tokenWiki[dataorderTxbyindex[i][7]][1] + " height='40' width='40' />");
            $("#tokenchose1").append("<span class='inchooserName'>" + textsendVal + " " + tokenWiki[dataorderTxbyindex[i][7]][0] + "</span>");
            $("#tradearg").append("<div class='arrowdown'></div>");
            $("#tradearg").append("<div class='tokenarg'><div id='tokenchose2' class='chooser'></div></div>");
            $("#tokenchose2").append("<img src=" + tokenWiki[dataorderTxbyindex[i][6]][1] + " height='40' width='40' />");
            $("#tradearg").append("<button id='addfeetoken' class='feetokenbutton'>ADD FEE TOKEN</button>");
            jQuery(document).ready(function() {
                $("#addfeetoken").click(function() {
                    displayChooser3(2, i);
                });
            });
            if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1) {
                $("#tokenchose2").append("<span class='inchooserName'>" + textgetRes + " " + tokenWiki[dataorderTxbyindex[i][6]][0] + "</span>");
                $("#tradearg").append("<div id='feeGet'> class='feespan'" + getfeeText  + " " + tokenWiki[dataorderTxbyindex[i][6]][0] + "</div>");
            } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) {
                $("#tokenchose2").append("<span class='inchooserName'>" + textget + " " + tokenWiki[dataorderTxbyindex[i][6]][0] + "</span>");
                $("#tradearg").append("<div id='feeGet' class='feespan'>FEE TOKEN IS USED ON BOTH SIDE</div>");
            } else {
                $("#tokenchose2").append("<span class='inchooserName'>" + textgetRes + " " + tokenWiki[dataorderTxbyindex[i][6]][0] + "</span>");
                $("#tradearg").append("<div id='feeGet' class='feespan'>" + getfeeText  + " " + tokenWiki[dataorderTxbyindex[i][6]][0] + "</div>");
            }
            $("#tradearg").append("<button id='gettx' class='tradebutton'>CONFIRM DEAL</button>");
            $("#tradearg").append("<button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>");
            $("#tradearg").append("<br><div id='errormsg'></div>");
            jQuery(document).ready(function() {
                $("#gettx").click(async function() {
                    $("#errormsg").css("visibility", "hidden");
                    try {
                        var addVal = await addFtContract.methods.getFtRate(1).call()/100000000;
                        var ftBalance = await tokenWiki[32][4].methods.balanceOf(myaddr).call()/100000000;
                        if (await ethereum.request({ method: 'eth_chainId' }) != '0x60') {
                            $("#errormsg").css("visibility", "visible");
                            $("#errormsg").html("Invalid chain ID");
                        } else if (await p2pContract.methods.getSold(dataorderTxbyindex[i][5]).call() == true) {
                            $("#errormsg").css("visibility", "visible");
                            $("#errormsg").html("Deal was complete");
                        } else if (Number(dataorderTxbyindex[i][3]) > Number(tokenGet[4])) {
                            $("#errormsg").css("visibility", "visible");
                            $("#errormsg").html("Insufficient send token");
                        } else if (await nftWiki[1][4].methods.freezed(myaddr).call() == true) {
                            $("#errormsg").css("visibility", "visible");
                            $("#errormsg").html("Your address is freezed");
                        } else if ((optionselect == 1 && ftBalance < addVal) || (optionselect == 2 && ftBalance < (addVal * 2))) {
                            $("#errormsg").css("visibility", "visible");
                            $("#errormsg").html("Insufficient fee token");
                        } else {
                            try {
                                $("#loadingmodal").css("display", "block");
                                if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][7])) > -1) {
                                    var getWei = await web3.utils.toWei(dataorderTxbyindex[i][3], 'ether');
                                    var getVal = Number(getWei);
                                } else if (dataorderTxbyindex[i][7] == 32 || dataorderTxbyindex[i][7] == 56) {
                                    var getVal = dataorderTxbyindex[i][3]*(10**8);
                                } else {
                                    var getVal = dataorderTxbyindex[i][3];
                                }
                                if (tokenGet[2] == tokenWiki[3][3]) {
                                    var allowgetWei = await tokenGet[3].methods.allowances(myaddr, p2pAddr).call();
                                } else {
                                    var allowgetWei = await tokenGet[3].methods.allowance(myaddr, p2pAddr).call();
                                }
                                if (getVal >= Number(allowgetWei)) {
                                    var approvegetWei = getVal * 10;
                                    var data = tokenGet[3].methods.approve(p2pAddr, approvegetWei.toLocaleString('en-US', {useGrouping:false})).encodeABI();
                                    var approvegettx = await ethereum.request({
                                        method: 'eth_sendTransaction',
                                        params: [{
                                        from: myaddr,
                                        to: tokenGet[2],
                                        data: data,
                                        },],
                                    });
                                    var isValidate = await web3.eth.getTransactionReceipt(approvegettx);
                                    while (isValidate == null) {
                                        isValidate = await web3.eth.getTransactionReceipt(approvegettx);
                                    }
                                }
                                var data = p2pContract.methods.buyDeal(dataorderTxbyindex[i][5]).encodeABI();
                                var sendgettx = await ethereum.request({
                                    method: 'eth_sendTransaction',
                                    params: [{
                                    from: myaddr,
                                    to: p2pAddr,
                                    data: data,
                                    },],
                                });
                                var isValidate = await web3.eth.getTransactionReceipt(sendgettx);
                                while (isValidate == null) {
                                    isValidate = await web3.eth.getTransactionReceipt(sendgettx);
                                }
                                try {
                                    if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1 && optionselect == 1) { //redeem to both
                                        var addVal = await addFtContract.methods.getFtRate(1).call();
                                        var allowget = await tokenWiki[32][4].methods.allowance(myaddr, addFtAddr).call();
                                        if (addVal >= Number(allowget)) {
                                            var approveget = addVal * 10;
                                            var data = tokenWiki[32][4].methods.approve(addFtAddr, approveget.toLocaleString('en-US', {useGrouping:false})).encodeABI();
                                            var approveget = await ethereum.request({
                                                method: 'eth_sendTransaction',
                                                params: [{
                                                from: myaddr,
                                                to: tokenWiki[32][3],
                                                data: data,
                                                },],
                                            });
                                            var isValidate = await web3.eth.getTransactionReceipt(approveget);
                                            while (isValidate == null) {
                                                isValidate = await web3.eth.getTransactionReceipt(approveget);
                                            }
                                        }
                                        var data = addFtContract.methods.buyDealbyFeeToken(idselect, dataorderTxbyindex[i][5], 1).encodeABI();
                                        var sendaddtx = await ethereum.request({
                                            method: 'eth_sendTransaction',
                                            params: [{
                                            from: myaddr,
                                            to: addFtAddr,
                                            data: data,
                                            },],
                                        });
                                        var isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        while (isValidate == null) {
                                            isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        }
                                    } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1) { //redeem to sender
                                        var ftselect = await addFtContract.methods.getFtUsedDeal(dataorderTxbyindex[i][5]).call();
                                        var data = addFtContract.methods.buyDealbyFeeToken(ftselect, dataorderTxbyindex[i][5], 0).encodeABI();
                                        var sendaddtx = await ethereum.request({
                                            method: 'eth_sendTransaction',
                                            params: [{
                                            from: myaddr,
                                            to: addFtAddr,
                                            data: data,
                                            },],
                                        });
                                        var isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        while (isValidate == null) {
                                            isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        }
                                    } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) { //redeem to both
                                        var ftselect = await addFtContract.methods.getFtUsedDeal(dataorderTxbyindex[i][5]).call();
                                        var data = addFtContract.methods.buyDealbyFeeToken(ftselect, dataorderTxbyindex[i][5], 0).encodeABI();
                                        var sendaddtx = await ethereum.request({
                                            method: 'eth_sendTransaction',
                                            params: [{
                                            from: myaddr,
                                            to: addFtAddr,
                                            data: data,
                                            },],
                                        });
                                        var isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        while (isValidate == null) {
                                            isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        }
                                    } else if (optionselect == 1) { //redeem to receiver
                                        var addVal = await addFtContract.methods.getFtRate(1).call();
                                        var allowget = await tokenWiki[32][4].methods.allowance(myaddr, addFtAddr).call();
                                        if (addVal >= Number(allowget)) {
                                            var approveget = addVal * 10;
                                            var data = tokenWiki[32][4].methods.approve(addFtAddr, approveget.toLocaleString('en-US', {useGrouping:false})).encodeABI();
                                            var approveget = await ethereum.request({
                                                method: 'eth_sendTransaction',
                                                params: [{
                                                from: myaddr,
                                                to: tokenWiki[32][3],
                                                data: data,
                                                },],
                                            });
                                            var isValidate = await web3.eth.getTransactionReceipt(approveget);
                                            while (isValidate == null) {
                                                isValidate = await web3.eth.getTransactionReceipt(approveget);
                                            }
                                        }
                                        var data = addFtContract.methods.buyDealbyFeeToken(idselect, dataorderTxbyindex[i][5], 1).encodeABI();
                                        var sendaddtx = await ethereum.request({
                                            method: 'eth_sendTransaction',
                                            params: [{
                                            from: myaddr,
                                            to: addFtAddr,
                                            data: data,
                                            },],
                                        });
                                        var isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        while (isValidate == null) {
                                            isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        }
                                    } else if (optionselect == 2) { //redeem to both
                                        var addVal = await addFtContract.methods.getFtRate(1).call();
                                        var allowget = await tokenWiki[32][4].methods.allowance(myaddr, addFtAddr).call()
                                        if ((addVal * 2) >= Number(allowget)) {
                                            var approveget = addVal * 20;
                                            var data = tokenWiki[32][4].methods.approve(addFtAddr, approveget.toLocaleString('en-US', {useGrouping:false})).encodeABI();
                                            var approveget = await ethereum.request({
                                                method: 'eth_sendTransaction',
                                                params: [{
                                                from: myaddr,
                                                to: tokenWiki[32][3],
                                                data: data,
                                                },],
                                            });
                                            var isValidate = await web3.eth.getTransactionReceipt(approveget);
                                            while (isValidate == null) {
                                                isValidate = await web3.eth.getTransactionReceipt(approveget);
                                            }
                                        }
                                        var data = addFtContract.methods.buyDealbyFeeToken(idselect, dataorderTxbyindex[i][5], 2).encodeABI();
                                        var sendaddtx = await ethereum.request({
                                            method: 'eth_sendTransaction',
                                            params: [{
                                            from: myaddr,
                                            to: addFtAddr,
                                            data: data,
                                            },],
                                        });
                                        var isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        while (isValidate == null) {
                                            isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                        }
                                    }
                                } catch {}
                                //switch to deal complete window
                                if (dataorderTxbyindex[i][1].toUpperCase() == myaddr.toUpperCase()) { // You offer
                                    var your = [7, 3];
                                    var peer = [6, 0, 2];
                                    var yourbadge = "Senderdeal";
                                    var peerbadge = "Receiverdeal";
                                } else { // You get
                                    var your = [6, 0];
                                    var peer = [7, 3, 1];
                                    var yourbadge = "Receiverdeal";
                                    var peerbadge = "Senderdeal";
                                }
                                var yougot = Number(dataorderTxbyindex[i][your[1]]);
                                if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][your[0]])) > -1) {
                                    var yourfee = Number(yougot)*(1/fee);
                                    var textYougotNofee = Number(yougot).toFixed(4);
                                    var textYougot = Number(yougot - yourfee).toFixed(4);
                                } else if (dataorderTxbyindex[i][your[0]] == 32 || dataorderTxbyindex[i][your[0]] == 56) {
                                    var yourfee = Number(yougot)*(1/fee);
                                    var textYougotNofee = Number(yougot).toFixed(4);
                                    var textYougot = Number(yougot - yourfee).toFixed(4);
                                } else {
                                    var yourfee = Math.floor(yougot*1/fee);
                                    var textYougotNofee = yougot;
                                    var textYougot = yougot - yourfee;
                                }
                                var peergot = Number(dataorderTxbyindex[i][peer[1]]);
                                if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][peer[0]])) > -1) {
                                    var peerfee = Number(peergot)*(1/fee);
                                    var textPeergotNofee = Number(peergot).toFixed(4);
                                    var textPeergot = Number(peergot - peerfee).toFixed(4);
                                } else if (dataorderTxbyindex[i][peer[0]] == 32 || dataorderTxbyindex[i][peer[0]] == 56) {
                                    var peerfee = Number(peergot)*(1/fee);
                                    var textPeergotNofee = Number(peergot).toFixed(4);
                                    var textPeergot = Number(peergot - peerfee).toFixed(4);
                                } else {
                                    var peerfee = Math.floor(peergot*1/fee);
                                    var textPeergotNofee = Number(peergot);
                                    var textPeergot = peergot - peerfee;
                                }
                                if (yourfee == 0) {
                                    var yourfeeText = 'NO FEE';
                                } else {
                                    var yourfeeText = 'FEE : ' + yourfee + ' TOKEN';
                                }
                                if (peerfee == 0) {
                                    var peerfeeText = 'NO FEE';
                                } else {
                                    var peerfeeText = 'FEE : ' + peerfee + ' TOKEN';
                                }
                                var resize = 0;
                                if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 2 && yourbadge == "Senderdeal") {
                                    var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
                                    var peerfeeText = Val + ' CM TOKEN IS USED BY DEALER';
                                    textPeergot = textPeergotNofee;
                                    resize = 2;
                                } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 2 && peerbadge == "Senderdeal") {
                                    var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
                                    var yourfeeText = Val + ' CM TOKEN IS USED BY YOU';
                                    textYougot = textYougotNofee;
                                    resize = 1;
                                } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 3 && yourbadge == "Senderdeal") {
                                    var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
                                    var yourfeeText = Val + ' CM TOKEN IS USED BY YOU';
                                    textYougot = textYougotNofee;
                                    resize = 1;
                                } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 3 && peerbadge == "Senderdeal") {
                                    var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
                                    var peerfeeText = Val + ' CM TOKEN IS USED BY DEALER';
                                    textPeergot = textPeergotNofee;
                                    resize = 2;
                                } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 4) {
                                    var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
                                    var yourfeeText = Val + ' CM TOKEN IS USED BY YOU';
                                    var peerfeeText = Val + ' CM TOKEN IS USED BY DEALER';
                                    textYougot = textYougotNofee;
                                    textPeergot = textPeergotNofee;
                                    resize = 3;
                                } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 2) {
                                    var Val = (await addFtContract.methods.getFtRate(1).call()*2)/100000000;
                                    var yourfeeText = Val + ' CM TOKEN IS USED BY YOU';
                                    var peerfeeText = Val + ' CM TOKEN IS USED BY YOU';
                                    textYougot = textYougotNofee;
                                    textPeergot = textPeergotNofee;
                                    resize = 3;
                                } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 3) {
                                    var Val = (await addFtContract.methods.getFtRate(1).call()*2)/100000000;
                                    var yourfeeText = Val + ' CM TOKEN IS USED BY DEALER';
                                    var peerfeeText = Val + ' CM TOKEN IS USED BY DEALER';
                                    textYougot = textYougotNofee;
                                    textPeergot = textPeergotNofee;
                                    resize = 3;
                                }
                                $("#tradearg").empty();
                                $("#tradearg").append("<div class='compmsg'>DEAL#" + dataorderTxbyindex[i][5] + "</div>")
                                $("#tradearg").append("<div class='processmsg'>Complete</div>")
                                $("#tradearg").append("<div class='showitem'><div id='showyour' class='showitem-content'></div><div id='showpeer' class='showitem-content'></div></div>");
                                $("#showyour").append("<img id='youritempic' width='100' height='100'>");
                                $("#showpeer").append("<img id='peeritempic' width='100' height='100'>");
                                $("#youritempic").attr("src", tokenWiki[dataorderTxbyindex[i][your[0]]][1]);
                                $("#peeritempic").attr("src", tokenWiki[dataorderTxbyindex[i][peer[0]]][1]);
                                $("#showyour").append("<span class='getbadge " + yourbadge + "'>YOU GOT</span>")
                                $("#showpeer").append("<span class='getbadge " + peerbadge + "'>DEALER GOT</span>");
                                $("#showyour").append("<span class='tokenbadge'>" + textYougot + "</span>");
                                $("#showpeer").append("<span class='tokenbadge'>" + textPeergot + "</span>");
                                $("#showyour").append("<div id='yourfee' class='feediv'>" + yourfeeText + "</div>");
                                $("#showpeer").append("<div id='peerfee' class='feediv'>" + peerfeeText + "</div>");
                                $("#tradearg").append("<br><button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>");
                                $("#back").before("<div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>");
                                $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + sendgettx);
                                if (sendaddtx) {
                                    jQuery(document).ready(function() {
                                        $(".exploreblockLink").click(function() {
                                            window.open("https://www.bkcscan.com/tx/" + sendaddtx);
                                        });
                                    });
                                }
                                if (resize == 1) {
                                    $("#yourfee").css("font-size", "8px");
                                } else if (resize == 2) {
                                    $("#peerfee").css("font-size", "8px");
                                } else if (resize == 3) {
                                    $(".feediv").css("font-size", "8px");
                                }
                                if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1) {
                                    var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
                                    $("#back").before("<button id='redeemfeenow' class='mainbutton'>" + Val + " CM TOKEN IS SUSPENDED : REDEEM FEE NOW</button>");
                                    jQuery(document).ready(function() {
                                        $("#redeemfeenow").click(async function() {
                                            $("#errormsg").css("visibility", "hidden");
                                            try {
                                                $("#loadingmodal").css("display", "block");
                                                var ftselect = await addFtContract.methods.getFtUsedDeal(dataorderTxbyindex[i][5]).call();
                                                var data = addFtContract.methods.buyDealbyFeeToken(ftselect, dataorderTxbyindex[i][5], 0).encodeABI();
                                                var sendaddtx = await ethereum.request({
                                                    method: 'eth_sendTransaction',
                                                    params: [{
                                                    from: myaddr,
                                                    to: addFtAddr,
                                                    data: data,
                                                    },],
                                                });
                                                var isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                                while (isValidate == null) {
                                                    isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                                }
                                                $(this).remove();
                                                $("#back").before("<div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>");
                                                $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + sendaddtx);
                                                $("#loadingmodal").css("display", "none");
                                            } catch {
                                                $("#loadingmodal").css("display", "none");
                                                $("#errormsg").css("visibility", "visible");
                                                $("#errormsg").html("Transaction failed");
                                            }
                                        });
                                    });
                                } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) {
                                    var Val = (await addFtContract.methods.getFtRate(1).call()*2)/100000000;
                                    $("#back").before("<button id='redeemfeenow' class='mainbutton'>" + Val + " CM TOKEN IS SUSPENDED : REDEEM FEE NOW</button>");
                                    jQuery(document).ready(function() {
                                        $("#redeemfeenow").click(async function() {
                                            $("#errormsg").css("visibility", "hidden");
                                            try {
                                                $("#loadingmodal").css("display", "block");
                                                var ftselect = await addFtContract.methods.getFtUsedDeal(dataorderTxbyindex[i][5]).call();
                                                var data = addFtContract.methods.buyDealbyFeeToken(ftselect, dataorderTxbyindex[i][5], 0).encodeABI();
                                                var sendaddtx = await ethereum.request({
                                                    method: 'eth_sendTransaction',
                                                    params: [{
                                                    from: myaddr,
                                                    to: addFtAddr,
                                                    data: data,
                                                    },],
                                                });
                                                var isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                                while (isValidate == null) {
                                                    isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                                                }
                                                $(this).remove();
                                                $("#back").before("<div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>");
                                                $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + sendaddtx);
                                                $("#loadingmodal").css("display", "none");
                                            } catch {
                                                $("#loadingmodal").css("display", "none");
                                                $("#errormsg").css("visibility", "visible");
                                                $("#errormsg").html("Transaction failed");
                                            }
                                        });
                                    });
                                }
                                $("#loadingmodal").css("display", "none");
                                showoffdeal();
                                notiupdate();
                            } catch {
                                $("#loadingmodal").css("display", "none");
                                $("#errormsg").css("visibility", "visible");
                                $("#errormsg").html("Transaction failed");
                            }
                        }
                    } catch {
                        $("#errormsg").css("visibility", "visible");
                        $("#errormsg").html("Deal was reject");
                    }
                });
            });
        }
        $("#dealerarg").empty();
        if (await knsContract.methods.getName(peerAddr).call() != '') {
            var peerdomain = await knsContract.methods.getName(peerAddr).call();
            $("#dealerarg").append("<button id='peeraddr' class='addr' onclick='copypeeraddr()'>" + peerdomain + "</button>");
        } else {
            $("#dealerarg").append("<button id='peeraddr' class='addr' onclick='copypeeraddr()'>" + peerAddr.slice(0, 4) + "..." + peerAddr.slice(-4) + "</button>");
        }
        $("#youraddr").after("<div id='status-content' class='status'>Status : " + yourstatus + "</div>");
        $("#peeraddr").after("<div id='status-content' class='status'>Status : " + peerstatus + "</div>");
        refreshpeerFace();
    }
}

async function switchDealPage(d) {
    $(".dropdown-box").css("display", "none")
    $("#loadingmodal").css("display", "block")
    var thedeal = dealsData[d]
    $(".status").remove()
    $("#youraddr").attr("class", "addr")
    if (thedeal[12] == 1) {
        completeDealPage(d)
    } else {
        payfeeoption = 0
        $("#tradearg").empty()
        $("#tradearg").append("<div id='dealnumber' class='compmsg'>DEAL#A" + d + "</div>")
        $("#tradearg").append("<button id='copydeal' onclick='copydeal()'>Copy</button>")
        $("#tradearg").append("<div class='processmsg'>Confirm Waiting</div>")
        if (thedeal[1].toUpperCase() == myaddr.toUpperCase()) { // You are sender
            peerAddr = thedeal[2]
            var yourbadge = 'Senderdeal'
            var peerbadge = 'Receiverdeal'
            var yourstatus = "<span class='dealsender'>Sender</span>"
            var peerstatus = "<span class='dealgetter'>Receiver</span>"
            var feeLock = await p2pcall1Contract.methods.feeLock(d).call()
            if (KAP18Index.indexOf(Number(feeLock.feeIndex)) > -1) {
                var feetoPay = await web3.utils.fromWei(feeLock.valueLock)
                var feeDisp = Number(feetoPay).toFixed(9)
            } else if (feeLock.feeIndex == 32 || feeLock.feeIndex == 56) {
                var feetoPay = feeLock.valueLock / (10**8)
                var feeDisp = Number(feetoPay).toFixed(8)
            }
            $("#tradearg").append("<div id='tokenarg1nft' class='tokenargnft'></div>")
            $("#tokenarg1nft").append("<img src=" + thedeal[6][2] + " height='85' width='85' />")
            $("#tokenarg1nft").append("<span id='offernftname' class='inchooserName'>" + thedeal[6][1] + "<span>")
            $("#tradearg").append("<div class='arrowdown'></div>")
            $("#tradearg").append("<div class='tokenarg'><div id='tokenchose2' class='chooser'></button></div>")
            $("#tokenchose2").append("<img src=" + tokenWiki[thedeal[7]][1] + " height='40' width='40' />")
            $("#tokenchose2").append("<span id='token2001' class='inchooserName'>" + thedeal[8][1] + " " +  tokenWiki[thedeal[7]][0] + "</span>")
            $("#tradearg").append("<div id='feespan1' class='feespan beforeTradeButt'>FEE LOCK : " + feeDisp + " " +  tokenWiki[thedeal[7]][0] + "</div>")
            $("#tradearg").append("<button id='rejectdealtx' class='tradebutton'>REJECT OFFER</button>")
            $("#tradearg").append("<button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>")
            $("#tradearg").append("<br><div id='errormsg'></div>")
            jQuery(document).ready(function() {
                $("#rejectdealtx").click(async function() {
                    $("#errormsg").css("visibility", "hidden")
                    try {
                        $("#loadingmodal").css("display", "block")
                        if (await ethereum.request({ method: 'eth_chainId' }) != '0x60') {
                            $("#errormsg").css("visibility", "visible")
                            $("#errormsg").html("Invalid chain ID")
                        } else {
                            var data = p2pcall1Contract.methods.callRejectDeal(d).encodeABI()
                            var rejecttx = await ethereum.request({
                                method: 'eth_sendTransaction',
                                params: [{
                                from: myaddr,
                                to: p2pcall1Addr,
                                data: data,
                                },],
                            });
                            var isValidate = await web3.eth.getTransactionReceipt(rejecttx)
                            while (isValidate == null) {
                                isValidate = await web3.eth.getTransactionReceipt(rejecttx)
                            }
                            $("#tradearg").empty();
                            $("#tradearg").append("<br><div class='processmsg'>DEAL#" + d + " Rejected</div>")
                            $("#tradearg").append("<br><br><div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>")
                            $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + rejecttx)
                            $("#tradearg").append("<br><button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>")
                            $("#loadingmodal").css("display", "none")
                            notiupdate();
                        }
                    } catch {
                        $("#loadingmodal").css("display", "none")
                        $("#errormsg").css("visibility", "visible")
                        $("#errormsg").html("Transaction failed")
                    }
                })
            })
            $("#loadingmodal").css("display", "none")
        } else {
            peerAddr = thedeal[1]
            var yourbadge = "Receiverdeal"
            var peerbadge = "Senderdeal"
            var yourstatus = "<span class='dealgetter'>Receiver</span>"
            var peerstatus = "<span class='dealsender'>Sender</span>"
            var feeLock = await p2pcall1Contract.methods.feeLock(d).call()
            if (feeLock.isFeeForBoth == false) {
                if (KAP18Index.indexOf(Number(feeLock.feeIndex)) > -1) {
                    var feetoPay = await web3.utils.fromWei(feeLock.valueLock)
                    var feeDisp = Number(feetoPay).toFixed(9)
                    var feeDisp2 = Number(feetoPay * 2).toFixed(9)
                } else if (feeLock.feeIndex == 32 || feeLock.feeIndex == 56) {
                    var feetoPay = feeLock.valueLock / (10**8)
                    var feeDisp = Number(feetoPay).toFixed(8)
                    var feeDisp2 = Number(feetoPay * 2).toFixed(9)
                }
                feeOptionText[0] = 'FEE : ' + feeDisp
                feeOptionText[1] = 'FEE : ' + feeDisp2
                var feeText = feeOptionText[0]
            } else {
                var feetoPay = 0
                var feeText = 'NO FEE FOR'
            }
            var balanceWei = await tokenWiki[thedeal[7]][4].methods.balanceOf(myaddr).call()
            if (KAP18Index.indexOf(Number(thedeal[7])) > -1) {
                var balanceDisp = await web3.utils.fromWei(balanceWei)
                var balanceText = Number(balanceDisp).toFixed(4)
            } else if (thedeal[7] == 32 || thedeal[7] == 56) {
                var balanceDisp = balanceWei / (10**8);
                var balanceText = Number(balanceDisp).toFixed(4)
            } else {
                var balanceDisp = balanceWei;
                var balanceText = Number(balanceDisp).toFixed(0)
            }
            $("#tradearg").append("<div id='tokenarg1nft' class='tokenargnft'></div>")
            $("#tokenarg1nft").append("<img src=" + thedeal[6][2] + " height='85' width='85' />")
            $("#tokenarg1nft").append("<span id='offernftname' class='inchooserName'>" + thedeal[6][1] + "<span>")
            $("#tradearg").append("<div class='arrowdown'></div>")
            $("#tradearg").append("<div id='remainGet2'>BALANCE : " + balanceText + " TOKEN</div>");
            $("#tradearg").append("<div class='tokenarg'><div id='tokenchose2' class='chooser'></button></div>")
            $("#tokenchose2").append("<img src=" + tokenWiki[thedeal[7]][1] + " height='40' width='40' />")
            $("#tokenchose2").append("<span id='token2001' class='inchooserName'>" + thedeal[8][1] + " " +  tokenWiki[thedeal[7]][0] + "</span>")
            if (feeLock.isFeeForBoth == false) {
                $("#tradearg").append("<button id='lockfee0' class='lockfeebutton1' onclick='changelockfeeoption(1, 1, " + d + ")'>PAY FEE ONE SIDE [2.5%]</button>")
            } else {
                payfeeoption = 3
                $("#tradearg").append("<button id='lockfee0' class='lockfeebutton1'>SENDER ALREADY PAY FEE FOU YOU</button>")
            }
            $("#tradearg").append("<div id='feespan1' class='feespan beforeTradeButt'>" + feeText + " " +  tokenWiki[thedeal[7]][0] + "</div>")
            $("#tradearg").append("<button id='gettx' class='tradebutton'>CONFIRM DEAL</button>")
            $("#tradearg").append("<button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>")
            $("#tradearg").append("<br><div id='errormsg'></div>")
            jQuery(document).ready(function() {
                $("#gettx").click(async function() {
                    $("#errormsg").css("visibility", "hidden")
                    try {
                        if (await ethereum.request({ method: 'eth_chainId' }) != '0x60') {
                            $("#errormsg").css("visibility", "visible")
                            $("#errormsg").html("Invalid chain ID")
                        } else if (await nftWiki[1][4].methods.freezed(myaddr).call() == true) {
                            $("#errormsg").css("visibility", "visible")
                            $("#errormsg").html("Your address is freezed")
                        } else if (await mainp2pContract.methods.getDeal(d).call() == true) {
                            $("#errormsg").css("visibility", "visible")
                            $("#errormsg").html("Deal was complete")
                        } else if (Number(thedeal[8][0]) + Number(feetoPay) > Number(balanceWei)) {
                            $("#errormsg").css("visibility", "visible")
                            $("#errormsg").html("Insufficient send token + fee")
                        } else {
                            try {
                                $("#loadingmodal").css("display", "block")
                                // approval get token
                                if (tokenWiki[thedeal[7]][3] == tokenWiki[3][3]) {
                                    var allowgetWei = await tokenWiki[thedeal[7]][4].methods.allowances(myaddr, mainp2pAddr).call()
                                } else {
                                    var allowgetWei = await tokenWiki[thedeal[7]][4].methods.allowance(myaddr, mainp2pAddr).call()
                                }
                                if (thedeal[8][0] >= Number(allowgetWei)) {
                                    var approvegetWei = thedeal[8][0] * 10
                                    var data = tokenWiki[thedeal[7]][4].methods.approve(mainp2pAddr, approvegetWei.toLocaleString('en-US', {useGrouping:false})).encodeABI()
                                    var approvegettx = await ethereum.request({
                                        method: 'eth_sendTransaction',
                                        params: [{
                                        from: myaddr,
                                        to: tokenWiki[thedeal[7]][3],
                                        data: data,
                                        },],
                                    });
                                    var isValidate = await web3.eth.getTransactionReceipt(approvegettx)
                                    while (isValidate == null) {
                                        isValidate = await web3.eth.getTransactionReceipt(approvegettx)
                                    }
                                }
                                // approval fee to pay
                                if (tokenWiki[feeLock.feeIndex][3] == tokenWiki[3][3]) {
                                    var allowfeeWei = await tokenWiki[feeLock.feeIndex][4].methods.allowances(myaddr, p2pcall1Addr).call()
                                } else {
                                    var allowfeeWei = await tokenWiki[feeLock.feeIndex][4].methods.allowance(myaddr, p2pcall1Addr).call()
                                }
                                if (payfeeoption == 0) {
                                    var feeforoption = Number(feeLock.valueLock)
                                } else if (payfeeoption == 1) {
                                    var feeforoption = Number(feeLock.valueLock) * 2
                                } else {
                                    payfeeoption = 0
                                    var feeforoption = 0
                                }
                                if (feeforoption >= Number(allowfeeWei)) {
                                    var approvefeeWei = feeforoption * 10
                                    var data = tokenWiki[feeLock.feeIndex][4].methods.approve(p2pcall1Addr, approvefeeWei.toLocaleString('en-US', {useGrouping:false})).encodeABI()
                                    var approvefeetx = await ethereum.request({
                                        method: 'eth_sendTransaction',
                                        params: [{
                                        from: myaddr,
                                        to: tokenWiki[feeLock.feeIndex][3],
                                        data: data,
                                        },],
                                    })
                                    var isValidate = await web3.eth.getTransactionReceipt(approvefeetx)
                                    while (isValidate == null) {
                                        isValidate = await web3.eth.getTransactionReceipt(approvefeetx)
                                    }
                                }
                                // main confirm deal
                                var data = p2pcall1Contract.methods.callConfirmDeal(d, payfeeoption).encodeABI()
                                var confirmdealtx = await ethereum.request({
                                    method: 'eth_sendTransaction',
                                    params: [{
                                    from: myaddr,
                                    to: p2pcall1Addr,
                                    data: data,
                                    },],
                                })
                                var isValidate = await web3.eth.getTransactionReceipt(confirmdealtx)
                                while (isValidate == null) {
                                    isValidate = await web3.eth.getTransactionReceipt(confirmdealtx)
                                }
                                //switch to deal complete window
                                $("#tradearg").empty()
                                $("#tradearg").append("<div class='compmsg'>DEAL#A" + d + "</div>")
                                $("#tradearg").append("<div class='processmsg'>Complete</div>")
                                $("#tradearg").append("<div class='showitem'><div id='showyour' class='showitem-content'></div><div id='showpeer' class='showitem-content'></div></div>")
                                $("#showyour").append("<img id='youritempic' src='" + tokenWiki[dealsData[d][7]][1] + "'width='100' height='100'>")
                                $("#showpeer").append("<img id='peeritempic' src='" + dealsData[d][6][2] + "' width='100' height='100'>")
                                $("#showyour").append("<span class='getbadge " + yourbadge + "'>YOU GOT</span>")
                                $("#showpeer").append("<span class='getbadge " + peerbadge + "'>DEALER GOT</span>")
                                $("#showyour").append("<span class='tokenbadge'>" + dealsData[d][8][1] + "</span>")
                                $("#showpeer").append("<span class='tokenbadge'>" + dealsData[d][6][1] + "</span>")
                                $("#tradearg").append("<br><button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>")
                                $("#back").before("<div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>")
                                $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + confirmdealtx)
                                $("#loadingmodal").css("display", "none")
                                showoffdeal()
                                notiupdate()
                            } catch {
                                $("#loadingmodal").css("display", "none")
                                $("#errormsg").css("visibility", "visible")
                                $("#errormsg").html("Transaction failed")
                            }
                        }
                    } catch {
                        $("#errormsg").css("visibility", "visible")
                        $("#errormsg").html("Deal was reject")
                    }
                })
            })
            $("#loadingmodal").css("display", "none")
        }
        // dealer status change when switchpage
        $("#dealerarg").empty()
        if (await knsContract.methods.getName(peerAddr).call() != '') {
            var peername = await knsContract.methods.getName(peerAddr).call()
        } else {
            var peername = peerAddr.slice(0, 4) + "..." + peerAddr.slice(-4)
        }
        $("#dealerarg").append("<button id='peeraddr' class='addr' onclick='copypeeraddr()'>" + peername + "</button>")
        $("#youraddr").after("<div id='status-content' class='status'>Status : " + yourstatus + "</div>")
        $("#peeraddr").after("<div id='status-content' class='status'>Status : " + peerstatus + "</div>")
        refreshpeerFace()
    }
}

async function completeDealPage(d) {
    if (dealsData[d][1].toUpperCase() == myaddr.toUpperCase()) { // You offer
        peerAddr = dealsData[d][2]
        var yourbadge = 'Senderdeal'
        var peerbadge = 'Receiverdeal'
        var yourstatus = "<span class='dealsender'>Sender</span>"
        var peerstatus = "<span class='dealgetter'>Receiver</span>"
        var yougot = Number(dealsData[d][8][1])
        var peergot = dealsData[d][6][1]
        var yougotImg = tokenWiki[dealsData[d][7]][1]
        var peergotImg = dealsData[d][6][2]
    } else { // You get
        peerAddr = dealsData[d][1]
        var yourbadge = 'Receiverdeal'
        var peerbadge = 'Senderdeal'
        var yourstatus = "<span class='dealgetter'>Receiver</span>"
        var peerstatus = "<span class='dealsender'>Sender</span>"
        var yougot = dealsData[d][6][1]
        var peergot = Number(dealsData[d][8][1])
        var yougotImg = dealsData[d][6][2]
        var peergotImg = tokenWiki[dealsData[d][7]][1]
    }
    $("#tradearg").empty()
    $("#tradearg").append("<div class='compmsg'>DEAL#A" + d + "</div>")
    $("#tradearg").append("<div class='processmsg'>Complete</div>")
    $("#tradearg").append("<div class='showitem'><div id='showyour' class='showitem-content'></div><div id='showpeer' class='showitem-content'></div></div>")
    $("#showyour").append("<img id='youritempic' width='100' height='100'>")
    $("#showpeer").append("<img id='peeritempic' width='100' height='100'>")
    $("#youritempic").attr("src", yougotImg)
    $("#peeritempic").attr("src", peergotImg)
    $("#showyour").append("<span class='getbadge " + yourbadge + "'>YOU GOT</span>")
    $("#showpeer").append("<span class='getbadge " + peerbadge + "'>DEALER GOT</span>")
    $("#showyour").append("<span class='tokenbadge'>" + yougot + "</span>");
    $("#showpeer").append("<span class='tokenbadge'>" + peergot + "</span>");
    $("#tradearg").append("<br><button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>")
    $("#loadingmodal").css("display", "none")
    $("#dealerarg").empty()
    if (await knsContract.methods.getName(peerAddr).call() != '') {
        var peername = await knsContract.methods.getName(peerAddr).call()
    } else {
        var peername = peerAddr.slice(0, 4) + "..." + peerAddr.slice(-4)
    }
    $("#dealerarg").append("<button id='peeraddr' class='addr' onclick='copypeeraddr()'>" + peername + "</button>")
    $("#youraddr").after("<div id='status-content' class='status'>Status : " + yourstatus + "</div>")
    $("#peeraddr").after("<div id='status-content' class='status'>Status : " + peerstatus + "</div>")
    refreshpeerFace()
}

async function dealcomplete(i) {
    if (dataorderTxbyindex[i][1].toUpperCase() == myaddr.toUpperCase()) { // You offer
        var your = [7, 3];
        var peer = [6, 0, 2];
        var yourstatus = "<span class='dealsender'>Sender</span>";
        var peerstatus = "<span class='dealgetter'>Receiver</span>";
        var yourbadge = "Senderdeal";
        var peerbadge = "Receiverdeal";
    } else { // You get
        var your = [6, 0];
        var peer = [7, 3, 1];
        var yourstatus = "<span class='dealgetter'>Receiver</span>";
        var peerstatus = "<span class='dealsender'>Sender</span>";
        var yourbadge = "Receiverdeal";
        var peerbadge = "Senderdeal";
    }
    var yougot = Number(dataorderTxbyindex[i][your[1]]);
    if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][your[0]])) > -1) {
        var yourfee = Number(yougot)*(1/fee);
        var textYougotNofee = Number(yougot).toFixed(4);
        var textYougot = Number(yougot - yourfee).toFixed(4);
    } else if (dataorderTxbyindex[i][your[0]] == 32 || dataorderTxbyindex[i][your[0]] == 56) {
        var yourfee = Number(yougot)*(1/fee);
        var textYougotNofee = Number(yougot).toFixed(4);
        var textYougot = Number(yougot - yourfee).toFixed(4);
    } else {
        var yourfee = Math.floor(yougot*1/fee);
        var textYougotNofee = yougot;
        var textYougot = yougot - yourfee;
    }
    var peergot = Number(dataorderTxbyindex[i][peer[1]]);
    if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][peer[0]])) > -1) {
        var peerfee = Number(peergot)*(1/fee);
        var textPeergotNofee = Number(peergot).toFixed(4);
        var textPeergot = Number(peergot - peerfee).toFixed(4);
    } else if (dataorderTxbyindex[i][peer[0]] == 32 || dataorderTxbyindex[i][peer[0]] == 56) {
        var peerfee = Number(peergot)*(1/fee);
        var textPeergotNofee = Number(peergot).toFixed(4);
        var textPeergot = Number(peergot - peerfee).toFixed(4);
    } else {
        var peerfee = Math.floor(peergot*1/fee);
        var textPeergotNofee = Number(peergot);
        var textPeergot = peergot - peerfee;
    }
    if (yourfee == 0) {
        var yourfeeText = 'NO FEE';
    } else {
        var yourfeeText = 'FEE : ' + yourfee + ' TOKEN';
    }
    if (peerfee == 0) {
        var peerfeeText = 'NO FEE';
    } else {
        var peerfeeText = 'FEE : ' + peerfee + ' TOKEN';
    }
    var resize = 0;
    if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 2 && yourbadge == "Senderdeal") {
        var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
        var peerfeeText = Val + ' CM TOKEN IS USED BY DEALER';
        textPeergot = textPeergotNofee;
        resize = 2;
    } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 2 && peerbadge == "Senderdeal") {
        var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
        var yourfeeText = Val + ' CM TOKEN IS USED BY YOU';
        textYougot = textYougotNofee;
        resize = 1;
    } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 3 && yourbadge == "Senderdeal") {
        var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
        var yourfeeText = Val + ' CM TOKEN IS USED BY YOU';
        textYougot = textYougotNofee;
        resize = 1;
    } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 3 && peerbadge == "Senderdeal") {
        var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
        var peerfeeText = Val + ' CM TOKEN IS USED BY DEALER';
        textPeergot = textPeergotNofee;
        resize = 2;
    } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 4) {
        var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
        var yourfeeText = Val + ' CM TOKEN IS USED BY YOU';
        var peerfeeText = Val + ' CM TOKEN IS USED BY DEALER';
        textYougot = textYougotNofee;
        textPeergot = textPeergotNofee;
        resize = 3;
    } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 2) {
        var Val = (await addFtContract.methods.getFtRate(1).call()*2)/100000000;
        var yourfeeText = Val + ' CM TOKEN IS USED BY YOU';
        var peerfeeText = Val + ' CM TOKEN IS USED BY YOU';
        textYougot = textYougotNofee;
        textPeergot = textPeergotNofee;
        resize = 3;
    } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 3) {
        var Val = (await addFtContract.methods.getFtRate(1).call()*2)/100000000;
        var yourfeeText = Val + ' CM TOKEN IS USED BY DEALER';
        var peerfeeText = Val + ' CM TOKEN IS USED BY DEALER';
        textYougot = textYougotNofee;
        textPeergot = textPeergotNofee;
        resize = 3;
    }
    peerAddr = dataorderTxbyindex[i][peer[2]];
    $("#dealerarg").empty();
    if (await knsContract.methods.getName(peerAddr).call() != '') {
        var peerdomain = await knsContract.methods.getName(peerAddr).call();
        $("#dealerarg").append("<button id='peeraddr' class='addr' onclick='copypeeraddr()'>" + peerdomain + "</button>");
    } else {
        $("#dealerarg").append("<button id='peeraddr' class='addr' onclick='copypeeraddr()'>" + peerAddr.slice(0, 4) + "..." + peerAddr.slice(-4) + "</button>");
    }
    $("#youraddr").after("<div id='status-content' class='status'>Status : " + yourstatus + "</div>");
    $("#peeraddr").after("<div id='status-content' class='status'>Status : " + peerstatus + "</div>");
    $("#tradearg").empty();
    $("#tradearg").append("<div class='compmsg'>DEAL#" + dataorderTxbyindex[i][5] + "</div>")
    $("#tradearg").append("<div class='processmsg'>Complete</div>")
    $("#tradearg").append("<div class='showitem'><div id='showyour' class='showitem-content'></div><div id='showpeer' class='showitem-content'></div></div>");
    $("#showyour").append("<img id='youritempic' width='100' height='100'>");
    $("#showpeer").append("<img id='peeritempic' width='100' height='100'>");
    $("#youritempic").attr("src", tokenWiki[dataorderTxbyindex[i][your[0]]][1]);
    $("#peeritempic").attr("src", tokenWiki[dataorderTxbyindex[i][peer[0]]][1]);
    $("#showyour").append("<span class='getbadge " + yourbadge + "'>YOU GOT</span>")
    $("#showpeer").append("<span class='getbadge " + peerbadge + "'>DEALER GOT</span>");
    $("#showyour").append("<span class='tokenbadge'>" + textYougot + "</span>");
    $("#showpeer").append("<span class='tokenbadge'>" + textPeergot + "</span>");
    $("#showyour").append("<div id='yourfee' class='feediv'>" + yourfeeText + "</div>");
    $("#showpeer").append("<div id='peerfee' class='feediv'>" + peerfeeText + "</div>");
    $("#tradearg").append("<br><button id='back' class='mainbutton' onclick='startertrade()'>BACK</button>");
    $("#tradearg").append("<br><div id='errormsg'></div>");
    if (resize == 1) {
        $("#yourfee").css("font-size", "8px");
    } else if (resize == 2) {
        $("#peerfee").css("font-size", "8px");
    } else if (resize == 3) {
        $(".feediv").css("font-size", "8px");
    }
    //** sender's suspend fee token action **//
    if ((await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1 || await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) && dataorderTxbyindex[i][1].toUpperCase() == myaddr.toUpperCase()) {
        if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1) {
            var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
        } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) {
            var Val = (await addFtContract.methods.getFtRate(1).call()*2)/100000000;
        }
        $("#back").before("<button id='withdrawft' class='mainbutton'>" + Val + " CM TOKEN IS SUSPENDED : WITHDRAW</button>");
        jQuery(document).ready(function() {
            $("#withdrawft").click(async function() {
                $("#errormsg").css("visibility", "hidden");
                try {
                    $("#loadingmodal").css("display", "block");
                    var data = addFtContract.methods.getbackFeeToken(dataorderTxbyindex[i][5]).encodeABI();
                    var getbacktx = await ethereum.request({
                        method: 'eth_sendTransaction',
                        params: [{
                        from: myaddr,
                        to: addFtAddr,
                        data: data,
                        },],
                    });
                    var isValidate = await web3.eth.getTransactionReceipt(getbacktx);
                    while (isValidate == null) {
                        isValidate = await web3.eth.getTransactionReceipt(getbacktx);
                    }
                    $(this).remove();
                    $("#back").before("<div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>");
                    $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + getbacktx);
                    $("#loadingmodal").css("display", "none");
                } catch {
                    $("#loadingmodal").css("display", "none");
                    $("#errormsg").css("visibility", "visible");
                    $("#errormsg").html("Transaction failed");
                }
            });
        });
    } else if (await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1) {
        var Val = await addFtContract.methods.getFtRate(1).call()/100000000;
        $("#back").before("<button id='redeemfeenow' class='mainbutton'>" + Val + " CM TOKEN IS SUSPENDED : REDEEM FEE NOW</button>");
        jQuery(document).ready(function() {
            $("#redeemfeenow").click(async function() {
                $("#errormsg").css("visibility", "hidden");
                try {
                    $("#loadingmodal").css("display", "block");
                    var ftselect = await addFtContract.methods.getFtUsedDeal(dataorderTxbyindex[i][5]).call();
                    var data = addFtContract.methods.buyDealbyFeeToken(ftselect, dataorderTxbyindex[i][5], 0).encodeABI();
                    var sendaddtx = await ethereum.request({
                        method: 'eth_sendTransaction',
                        params: [{
                        from: myaddr,
                        to: addFtAddr,
                        data: data,
                        },],
                    });
                    var isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                    while (isValidate == null) {
                        isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                    }
                    $(this).remove();
                    $("#back").before("<div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>");
                    $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + sendaddtx);
                    $("#loadingmodal").css("display", "none");
                } catch {
                    $("#loadingmodal").css("display", "none");
                    $("#errormsg").css("visibility", "visible");
                    $("#errormsg").html("Transaction failed");
                }
            });
        });
    } else if (await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) {
        var Val = (await addFtContract.methods.getFtRate(1).call()*2)/100000000;
        $("#back").before("<button id='redeemfeenow' class='mainbutton'>" + Val + " CM TOKEN IS SUSPENDED : REDEEM FEE NOW</button>");
        jQuery(document).ready(function() {
            $("#redeemfeenow").click(async function() {
                $("#errormsg").css("visibility", "hidden");
                try {
                    $("#loadingmodal").css("display", "block");
                    var ftselect = await addFtContract.methods.getFtUsedDeal(dataorderTxbyindex[i][5]).call();
                    var data = addFtContract.methods.buyDealbyFeeToken(ftselect, dataorderTxbyindex[i][5], 0).encodeABI();
                    var sendaddtx = await ethereum.request({
                        method: 'eth_sendTransaction',
                        params: [{
                        from: myaddr,
                        to: addFtAddr,
                        data: data,
                        },],
                    });
                    var isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                    while (isValidate == null) {
                        isValidate = await web3.eth.getTransactionReceipt(sendaddtx);
                    }
                    $(this).remove();
                    $("#back").before("<div id='exploreblock'><a class='exploreblockLink' target='_blank'>Tx Receipt on BKCSCAN</a></div>");
                    $(".exploreblockLink").attr("href", "https://www.bkcscan.com/tx/" + sendaddtx);
                    $("#loadingmodal").css("display", "none");
                } catch {
                    $("#loadingmodal").css("display", "none");
                    $("#errormsg").css("visibility", "visible");
                    $("#errormsg").html("Transaction failed");
                }
            });
        });
    }
    refreshpeerFace();
}

async function displayChooser3(a, i) {
    $("#modalchooser3").css("display", "block");
    $("#chooser3contain").empty();
    $("#feetokenmode").empty();
    $("#chooser3contain").append("<div id='feetokentitle'>CHOOSE FEE TOKEN</div>");
    $("#chooser3contain").append("<button id='" + tokenWiki[32][2] + "add' class='tokenselect Token'></button>");
    $("#" + tokenWiki[32][2] + "add").append("<img class='tokenimg' src='" + tokenWiki[32][1] + "' height='75' width='75'></img>");
    $("#" + tokenWiki[32][2] + "add").append("<span id='" + tokenWiki[32][2] + "' class='inchooserName'>" + tokenWiki[32][0] + "</span>");
    jQuery(document).ready(function() {
        $(".tokenselect").click(async function() {
            $(".notactive").removeClass("notactive");
            $(".active2").removeClass("active2");
            $(".tokenselect").addClass(" notactive");
            $(this).removeClass("notactive");
            $(this).addClass(" active2");
            if ($(this).attr("id") == 'token2004add') {
                var addVal = await addFtContract.methods.getFtRate(1).call()/100000000;
                var ftBalance = await tokenWiki[32][4].methods.balanceOf(myaddr).call()/100000000;
                var ftText1 = addVal + " CM TOKEN";
                var ftText2 = (addVal * 2) + " CM TOKEN";
                var ftBalance = ftBalance + " CM TOKEN";
            }
            if (a == 2 && await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) {
            } else if (a == 2 && await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1) {
                $("#chooser3contain").append("<div id='feetokentext1' class='feetokentext'>SPEND " + ftText1 + "</div>");
            } else {
                $("#chooser3contain").append("<div id='feetokentext1' class='feetokentext'>SPEND " + ftText1 + "</div>");
                $("#chooser3contain").append("<div id='feetokentext2' class='feetokentext'>SPEND " + ftText2 + "</div>");
            }
            $("#chooser3contain").append("<div id='feetokenbalance'>BALANCE : " + ftBalance + "</div>");
        });
    });
    if (a == 1 && (KAP18Index.indexOf(tokenGet[1]) == -1 && tokenGet[1] !== 32 && tokenGet[1] !== 56)) {
        $("#feetokenmode").append("<button id='onesidefeetoken' class='tradebuttonLock'>CANNOT REDEEM FEE FOR KAP20 ITEM</button>");
    } else if (a == 2 && await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) {
        $("#feetokenmode").append("<button id='onesidefeetoken' class='tradebuttonLock'>CANNOT REDEEM FEE FOR BOTH SIDE (YOUR DEALER HAS ALREADY REDEEM FOR YOU & HIMSELF)</button>");
    } else if (a == 2 && KAP18Index.indexOf(dataorderTxbyindex[i][6]) == -1) {
        $("#feetokenmode").append("<button id='onesidefeetoken' class='tradebuttonLock'>CANNOT REDEEM FEE FOR KAP20 ITEM</button>");
    } else {
        $("#feetokenmode").append("<button id='onesidefeetoken' class='tradebutton feetoken'>REDEEM FEE FOR " + (100/fee) + "% ONE SIDE (YOU)</button>");
        jQuery(document).ready(function() {
            $("#onesidefeetoken").click(async function() {
                if ($(".active2").attr("id") == 'token2004add') {
                    $("#modalchooser3").css("display", "none");
                    optionselect = 1;
                    idselect = 1;
                    var addVal = await addFtContract.methods.getFtRate(1).call()/100000000;
                    if (a == 2) {
                        copyvaltext = $("#tokenchose2").find(".inchooserName").html();
                        copyfeetext = $("#feeGet").html();
                        if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][6])) > -1) {
                            var textget = (Number(dataorderTxbyindex[i][0])).toFixed(9);
                        } else if (dataorderTxbyindex[i][6] == 32 || dataorderTxbyindex[i][6] == 56) {
                            var textget = (Number(dataorderTxbyindex[i][0])).toFixed(8);
                        } else {
                            var textget = (Number(dataorderTxbyindex[i][0])).toFixed(0);
                        }
                        $("#tokenchose2").find(".inchooserName").html(textget + " " + tokenWiki[dataorderTxbyindex[i][6]][0]);
                        $("#feeGet").html("SPEND " + addVal + " CM TOKEN TO REDEEM YOUR FEE");
                        $("#addfeetoken").after("<button id='removefeetoken' class='feetokenbutton'>REMOVE FEE TOKEN</button>");
                        jQuery(document).ready(function() {
                            $("#removefeetoken").click(async function() {
                                optionselect = 0;
                                idselect = 0;
                                $("#errormsg").css("visibility", "hidden");
                                $("#removefeetoken").after("<button id='addfeetoken' class='feetokenbutton'>ADD FEE TOKEN</button>");
                                jQuery(document).ready(function() {
                                    $("#addfeetoken").click(async function() {
                                        displayChooser3(2, i);
                                    });
                                });
                                $("#removefeetoken").remove();
                                $("#tokenchose2").find(".inchooserName").html(copyvaltext);
                                $("#feeGet").html(copyfeetext);
                            });
                        });
                        $("#addfeetoken").remove();
                    } else if (a == 1) {
                        copyvaltext = $("#tokenchose2").find(".inchooserName").html();
                        copyfeetext = $(".feespan").html();
                        if (KAP18Index.indexOf(Number(tokenGet[1])) > -1) {
                            var textget = Number(inputGet).toFixed(9);
                        } else if (tokenGet[1] == 32 || tokenGet[1] == 56) {
                            var textget = Number(inputGet).toFixed(8);
                        } else {
                            var textget = inputGet;
                        }
                        $("#tokenchose2").find(".inchooserName").html(textget + " " + tokenWiki[tokenGet[1]][0]);
                        $(".feespan").html("SPEND " + addVal + " CM TOKEN TO REDEEM YOUR FEE");
                        $("#addfeetoken").after("<button id='removefeetoken' class='feetokenbutton2'>REMOVE FEE TOKEN</button>");
                        jQuery(document).ready(function() {
                            $("#removefeetoken").click(async function() {
                                optionselect = 0;
                                idselect = 0;
                                $("#errormsg").css("visibility", "hidden");
                                $("#removefeetoken").after("<button id='addfeetoken' class='feetokenbutton2'>ADD FEE TOKEN</button>");
                                jQuery(document).ready(function() {
                                    $("#addfeetoken").click(async function() {
                                        displayChooser3(1, 0);
                                    });
                                });
                                $("#removefeetoken").remove();
                                $("#tokenchose2").find(".inchooserName").html(copyvaltext);
                                $(".feespan").html(copyfeetext);
                            });
                        });
                        $("#addfeetoken").remove();
                    }
                } else {}
            });
        });
    }
    if (a == 1 && (KAP18Index.indexOf(tokenGet[1]) == -1 && tokenGet[1] !== 32 && tokenGet[1] !== 56)) {
        $("#feetokenmode").append("<button id='exitmodal3' class='mainbutton feetoken'>EXIT MENU</button>");
        jQuery(document).ready(function() {
            $("#exitmodal3").click(async function() {
                idselect = 0;
                $("#modalchooser3").css("display", "none");
            });
        });
    } else if (a == 1 && (KAP18Index.indexOf(tokenOffer[1]) == -1 && tokenOffer[1] !== 32 && tokenOffer[1] !== 56)) {
        $("#feetokenmode").append("<button id='twosidefeetoken' class='tradebuttonLock'>CANNOT REDEEM FEE FOR BOTH SIDE (GET TOKEN CANNOT BE KAP20 ITEM)</button>");
    } else if (a == 2 && await addFtContract.methods.getOptionTwoDeal(dataorderTxbyindex[i][5]).call() == 1) {
        $("#feetokenmode").append("<button id='exitmodal3' class='mainbutton feetoken'>EXIT MENU</button>");
        jQuery(document).ready(function() {
            $("#exitmodal3").click(async function() {
                idselect = 0;
                $("#modalchooser3").css("display", "none");
            });
        });
    } else if (a == 2 && (KAP18Index.indexOf(dataorderTxbyindex[i][6]) == -1 && dataorderTxbyindex[i][6] !== 32 && dataorderTxbyindex[i][6] !== 56)) {
        $("#feetokenmode").append("<button id='exitmodal3' class='mainbutton feetoken'>EXIT MENU</button>");
        jQuery(document).ready(function() {
            $("#exitmodal3").click(async function() {
                idselect = 0;
                $("#modalchooser3").css("display", "none");
            });
        });
    } else if (a == 2 && await addFtContract.methods.getOptionOneDeal(dataorderTxbyindex[i][5]).call() == 1) {
        $("#feetokenmode").append("<button id='twosidefeetoken' class='tradebuttonLock'>CANNOT REDEEM FEE FOR BOTH SIDE (YOUR DEALER HAS ALREADY REDEEM FOR HIMSELF)</button>");
    } else if (a == 2 && (KAP18Index.indexOf(dataorderTxbyindex[i][7]) == -1 && dataorderTxbyindex[i][7] !== 32 && dataorderTxbyindex[i][7] !== 56)) {
        $("#feetokenmode").append("<button id='twosidefeetoken' class='tradebuttonLock'>CANNOT REDEEM FEE FOR BOTH SIDE (RECEIVE TOKEN CANNOT BE KAP20 ITEM)</button>");
    } else {
        $("#feetokenmode").append("<button id='twosidefeetoken' class='tradebutton feetoken'>REDEEM FEE FOR " + (100/fee)*2 + ".0% BOTH SIDE (YOU & DEALER)</button>");
        jQuery(document).ready(function() {
            $("#twosidefeetoken").click(async function() {
                if ($(".active2").attr("id") == 'token2004add') {
                    $("#modalchooser3").css("display", "none");
                    optionselect = 2;
                    idselect = 1;
                    var addVal = (await addFtContract.methods.getFtRate(1).call() * 2)/100000000;
                    if (a == 2) {
                        copyvaltext = $("#tokenchose2").find(".inchooserName").html();
                        copyfeetext = $("#feeGet").html();
                        if (KAP18Index.indexOf(Number(dataorderTxbyindex[i][6])) > -1) {
                            var textget = (Number(dataorderTxbyindex[i][0])).toFixed(9);
                        } else if (dataorderTxbyindex[i][6] == 32 || dataorderTxbyindex[i][6] == 56) {
                            var textget = (Number(dataorderTxbyindex[i][0])).toFixed(8);
                        } else {
                            var textget = (Number(dataorderTxbyindex[i][0])).toFixed(0);
                        }
                        $("#tokenchose2").find(".inchooserName").html(textget + " " + tokenWiki[dataorderTxbyindex[i][6]][0]);
                        $("#feeGet").html("SPEND " + addVal + " CM TOKEN TO REDEEM YOUR FEE & SENDER'S FEE");
                        $("#addfeetoken").after("<button id='removefeetoken' class='feetokenbutton'>REMOVE FEE TOKEN</button>");
                        jQuery(document).ready(function() {
                            $("#removefeetoken").click(async function() {
                                optionselect = 0;
                                idselect = 0;
                                $("#errormsg").css("visibility", "hidden");
                                $("#removefeetoken").after("<button id='addfeetoken' class='feetokenbutton'>ADD FEE TOKEN</button>");
                                jQuery(document).ready(function() {
                                    $("#addfeetoken").click(async function() {
                                        displayChooser3(2, i);
                                    });
                                });
                                $("#removefeetoken").remove();
                                $("#tokenchose2").find(".inchooserName").html(copyvaltext);
                                $("#feeGet").html(copyfeetext);
                            });
                        });
                        $("#addfeetoken").remove();
                    } else if (a == 1) {
                        copyvaltext = $("#tokenchose2").find(".inchooserName").html();
                        copyfeetext = $(".feespan").html();
                        if (KAP18Index.indexOf(Number(tokenGet[1])) > -1) {
                            var textget = Number(inputGet).toFixed(9);
                        } else if (tokenGet[1] == 32 || tokenGet[1] == 56) {
                            var textget = Number(inputGet).toFixed(8);
                        } else {
                            var textget = inputGet;
                        }
                        $("#tokenchose2").find(".inchooserName").html(textget + " " + tokenWiki[tokenGet[1]][0]);
                        $(".feespan").html("SPEND " + addVal + " CM TOKEN TO REDEEM YOUR FEE & SENDER'S FEE");
                        $("#addfeetoken").after("<button id='removefeetoken' class='feetokenbutton2'>REMOVE FEE TOKEN</button>");
                        jQuery(document).ready(function() {
                            $("#removefeetoken").click(async function() {
                                optionselect = 0;
                                idselect = 0;
                                $("#errormsg").css("visibility", "hidden");
                                $("#removefeetoken").after("<button id='addfeetoken' class='feetokenbutton2'>ADD FEE TOKEN</button>");
                                jQuery(document).ready(function() {
                                    $("#addfeetoken").click(async function() {
                                        displayChooser3(1, 0);
                                    });
                                });
                                $("#removefeetoken").remove();
                                $("#tokenchose2").find(".inchooserName").html(copyvaltext);
                                $(".feespan").html(copyfeetext);
                            });
                        });
                        $("#addfeetoken").remove();
                    }
                } else {}
            });
        });
    }
    $(window).click(function(e) {
        if (e.target == modalcenter3) {
            idselect = 0;
            $("#modalchooser3").css("display", "none");
        }
    });
    $(window).on("touchend", function(e) {
        if (e.target == modalcenter3) {
            idselect = 0;
            $("#modalchooser3").css("display", "none");
        }
    });
}

function copydeal() {
    var fulldeal = document.getElementById("dealnumber").innerHTML;
    navigator.clipboard.writeText(fulldeal);
    $("#copynum").remove();
    $("#copydeal").after("<span id='copynum' class='copytext'>Copied</span>");
    $("#copynum").addClass("hidden");
}

function copypeeraddr() {
    navigator.clipboard.writeText(peerAddr);
    $("#copyaddr").remove();
    $("#peeraddr").before("<span id='copyaddr' class='copytext'>Copied</span>");
    $("#copyaddr").addClass("hidden");
}

function copyyouraddr() {
    $("#usermodal").css("display", "none");
    navigator.clipboard.writeText(myaddr);
    $("#copyaddr").remove();
    $("#youraddr").before("<span id='copyaddr' class='copytext'>Copied</span>");
    $("#copyaddr").addClass("hidden");
}

function displayusermenu() {
    $("#menuUser").css("display", "block")
    if ('0x0Da584E836542Fc58E7c09725cF6dbDfeA22f427'.toUpperCase() == myaddr.toUpperCase() || '0xDbf3F413450E36DB7c264BFfeAf3881395031fcD'.toUpperCase() == myaddr.toUpperCase()) {
        $("#logout").before("<button id='approveforadmin' class='menuchoose' onclick='approveforadmin()'>**FEE-TOKEN APPROVE</button>");
    }
    $(document).mouseup(function(e) {
        var container = $("#menuUser")
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.css("display", "none")
        }
    })
}

function displayusermodal() {
    $(".dropdown-boxMenu").css("display", "none")
    $(".Nftmode").removeClass("Nftmode")
    $(".modal-content").empty()
    $("#usermodal").css("display", "block")
    $(window).click(function(e) {
        if (e.target == modalcenterUser) {
            $("#usermodal").css("display", "none")
            findtokenOffer()
            tokenOffer[0] = 0
        }
    })
    $(window).on("touchend", function(e) {
        if (e.target == modalcenterUser) {
            $("#usermodal").css("display", "none")
            findtokenOffer()
            tokenOffer[0] = 0
        }
    })
}

async function changeprofilepic() {
    displayusermodal()
    $(".modal-content").addClass(" Nftmode");
    $(".Nftmode").append("<div class='nftcontainer'></div>");
    $(".modal-content").append("<div class='menudownmodal'></div>");
    try {
        try { //MMV NFT
            var locknft = await p2pContract.methods.getProfileTokenId(myaddr).call();
            var allnft = await nftWiki[1][4].methods.tokenOfOwnerAll(myaddr).call();
            var allnftArr = String(allnft).split(",");
            for (var i = 0; i < allnftArr.length; i++) {
                var nftipfs = await nftWiki[1][4].methods.tokenURI(allnftArr[i]).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var start = res.indexOf("image") + 8;
                        var end = res.indexOf("hashtag") - 3;
                        var nftImg = res.slice(start, end);
                        if (locknft == allnftArr[i]) {
                            $(".nftcontainer").append("<div id='nftselect1_" + i + "' class='nftselected'></div>");
                            $("#nftselect" + i).append("<span id='nftused'>EQUIPPED</span>");
                        } else {
                            $(".nftcontainer").append("<button id='nftselect1_" + i + "' class='nftselect'></button>");
                        }
                        $("#nftselect1_" + i).append("<img id='1' class='" + allnftArr[i] + "' src='" + nftImg + "' height='150' width='150' />");
                        $("#nftselect1_" + i).append("<a class='nftinfo' href='https://www.bkcscan.com/tokens/0xd08ac40b3a0a7fb20b026a3b6cd5d7cfadc3d6f5/instance/" + allnftArr[i] + "/metadata' target='_blank'>i</a>");
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
        try { //CM NFT
            var locknft = await p2pContract.methods.getProfileTokenId(myaddr).call();
            var allnft = await nftWiki[2][4].methods.tokenOfOwnerAll(myaddr).call();
            var allnftArr = String(allnft).split(",");
            for (var i = 0; i < allnftArr.length; i++) {
                var nftipfs = await nftWiki[2][4].methods.tokenURI(allnftArr[i]).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var start = res.indexOf("_image") + 9;
                        var end = res.indexOf('"image') - 2;
                        var nftImg = res.slice(start, end);
                        if (locknft == allnftArr[i]) {
                            $(".nftcontainer").append("<div id='nftselect2_" + i + "' class='nftselected'></div>");
                            $("#nftselect" + i).append("<span id='nftused'>EQUIPPED</span>");
                        } else {
                            $(".nftcontainer").append("<button id='nftselect2_" + i + "' class='nftselect'></button>");
                        }
                        $("#nftselect2_" + i).append("<img id='2' class='" + allnftArr[i] + "' src='" + nftImg + "' height='150' width='150' />");
                        $("#nftselect2_" + i).append("<a class='nftinfo' href='https://www.bkcscan.com/tokens/0x2F022D4Ef37847304eCd167303aeaA9699F73663/instance/" + allnftArr[i] + "/metadata' target='_blank'>i</a>");
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
        try { // FC NFT
            var locknft = await p2pContract.methods.getProfileTokenId(myaddr).call();
            for (var i = 0; i < await nftWiki[3][4].methods.balanceOf(myaddr).call(); i++) {
                var nftid = await nftWiki[3][4].methods.tokenOfOwnerByIndex(myaddr, i).call();
                var nftipfs = await nftWiki[3][4].methods.tokenURI(nftid).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var start = res.indexOf('image') + 8;
                        var end = res.indexOf('attributes') - 3;
                        var nftImg = res.slice(start, end);
                        if (locknft == nftid) {
                            $(".nftcontainer").append("<div id='nftselect3_" + i + "' class='nftselected'></div>");
                            $("#nftselect" + i).append("<span id='nftused'>EQUIPPED</span>");
                        } else {
                            $(".nftcontainer").append("<button id='nftselect3_" + i + "' class='nftselect'></button>");
                        }
                        $("#nftselect3_" + i).append("<img id='3' class='" + nftid + "' src='" + nftImg + "' height='150' width='150' />");
                        $("#nftselect3_" + i).append("<a class='nftinfo' href='https://www.bkcscan.com/tokens/0x2F022D4Ef37847304eCd167303aeaA9699F73663/instance/" + allnftArr[i] + "/metadata' target='_blank'>i</a>");
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
        jQuery(document).ready(function() {
            $(".nftselect").click(function() {
                $(".notactive").removeClass("notactive");
                $(".active").removeClass("active");
                $(".nftselect").addClass(" notactive");
                $(this).removeClass("notactive");
                $(this).addClass(" active");
            });
        });
        $(".menudownmodal").append("<button id='approveprofilepic' class='tradebutton'>APPROVE CHANGE</button>");
        jQuery(document).ready(function() {
            $("#approveprofilepic").click(async function() {
                yournftpic = $(".active").html();
                var nftindex = $(yournftpic).attr("id");
                var tokenidLock = $(yournftpic).attr("class");
                var data = p2pContract.methods.approveProfile(nftindex, tokenidLock).encodeABI();
                var nftApprovetx = await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [{
                    from: myaddr,
                    to: p2pAddr,
                    data: data,
                    },],
                });
                var isValidate = await web3.eth.getTransactionReceipt(nftApprovetx);
                while (isValidate == null) {
                    $("#loadingmodal").css("display", "block");
                    isValidate = await web3.eth.getTransactionReceipt(nftApprovetx);
                }
                $("#loadingmodal").css("display", "none");
                $("#usermodal").css("display", "none");
                $("#yournftpic").remove();
                $("#youraddr").before(yournftpic);
                $("." + tokenidLock).addClass(" mainprofile");
                $("." + tokenidLock).attr("height", 145);
                $("." + tokenidLock).attr("width", 145);
                $(".nftinfo").remove();
                locknftId = tokenidLock;
                startertrade();
            });
        });
    } catch {
        $(".nftcontainer").append("<span class='nftstat'>YOU DON'T HAVE ANY NFT YET.</span>");
    }
}

async function tokentransfer() {
    displayusermodal()
    $(".modal-content").append("<div class='tokenarg'><button id='tokenchooser' class='chooser'></button></div>");
    $("#tokenchooser").append("<img src=" + tokenWiki[4][1] + " height='40' width='40' />");
    $("#tokenchooser").append("<span id='token1001' class='inchooserName'>TOMATO</span>");
    jQuery(document).ready(function() {
        $("#tokenchooser").click(function() {
            tokenSend = 1;
            tokenOffer[0] = 1;
            displayChooser1();
        });
    });
    tokenSend = 1;
    findtokenOffer();
    $(".modal-content").append("<input id='inputsend' class='parameterinput' placeholder='Token amount (to send)' />");
    $(".modal-content").append("<button id='maxbuttonSend' class='maxbutton'>MAX</button>");
    jQuery(document).ready(function() {
        $("#maxbuttonSend").click(function() {
            $("#inputsend").val(tokenOffer[4]);
        });
    });
    $(".modal-content").append("<div class='addrArgSend'></div>");
    $(".addrArgSend").append("<br><span id='receiverSend' class='inchooserName'>RECEIVER ADDRESS</span>");
    $(".modal-content").append("<input id='inputaddrSend' class='parameterinput' placeholder='0xb0B0B0B1B0B2B0B3...' />");
    $(".modal-content").append("<br><button id='sendtoken' class='tradebutton'>SEND (NO FEE)</button>");
    $(".modal-content").append("<div id='errorsend'></div>");
    jQuery(document).ready(function() {
        $("#sendtoken").click(async function() {
            $("#errorsend").css("visibility", "hidden");
            try {
                var inputSend = $("#inputsend").val();
                var inputAddr = $("#inputaddrSend").val();
                if (await ethereum.request({ method: 'eth_chainId' }) != '0x60') {
                    $("#errorsend").html("Invalid chain ID");
                    $("#errorsend").css("visibility", "visible");
                } else if (isNaN(Number(inputSend)) || inputSend <= 0) {
                    $("#errorsend").html("Invalid offer token");
                    $("#errorsend").css("visibility", "visible");
                } else if (Number(inputSend) > Number(tokenOffer[4])) {
                    $("#errorsend").html("Insufficient offer token");
                    $("#errorsend").css("visibility", "visible");
                } else if (inputAddr.length != 42 || inputAddr.slice(0,2) != '0x') {
                    $("#errorsend").html("Invalid address");
                    $("#errorsend").css("visibility", "visible");
                } else if (await web3.utils.isAddress(inputAddr) == false) {
                    $("#errorsend").html("Unavailable address");
                    $("#errorsend").css("visibility", "visible");
                } else if (await nftWiki[1][4].methods.freezed(myaddr).call() == true) {
                    $("#errorsend").html("Your address is freezed");
                    $("#errorsend").css("visibility", "visible");
                } else {
                    if (KAP18Index.indexOf(Number(tokenOffer[1])) > -1) {
                        var sendVal = await web3.utils.toWei(inputSend, 'ether');
                    } else if (tokenOffer[1] == 32 || tokenOffer[1] == 56) {
                        var sendVal = inputSend*(10**8);
                    } else {
                        var sendVal = inputSend;
                    }
                    var data = tokenOffer[3].methods.transfer(inputAddr, sendVal).encodeABI();
                    var sendtx = await ethereum.request({
                        method: 'eth_sendTransaction',
                        params: [{
                        from: myaddr,
                        to: tokenOffer[2],
                        data: data,
                        },],
                    });
                    var isValidate = await web3.eth.getTransactionReceipt(sendtx);
                    while (isValidate == null) {
                        $("#loadingmodal").css("display", "block");
                        isValidate = await web3.eth.getTransactionReceipt(sendtx);
                    }
                    $("#loadingmodal").css("display", "none");
                    $("#usermodal").css("display", "none");
                    startertrade();
                }
           } catch {}
        });
    });
}

async function wrapKUB() {
    if (await nftWiki[1][4].methods.freezed(myaddr).call() == true) {
        $("#wrapkub").html("WRAP KUB TO KKUB : Your address is freezed");
        $("#wrapkub").css("background-color", "#FC1960");
    } else {
        displayusermodal()
        $(".modal-content").append("<input id='inputkub' class='parameterinput' placeholder='KUB Amount (to wrap)'>");
        $(".modal-content").append("<br><br><button id='confirmwrap' class='tradebutton'>CONFIRM WRAP</button>");
        jQuery(document).ready(function() {
            $("#confirmwrap").click(async function() {
                var wrapInput = $("#inputkub").val();
                var wrapWei = await web3.utils.toWei(wrapInput, 'ether');
                var balanceGasWei = await web3.eth.getBalance(myaddr);
                var compare = wrapWei - balanceGasWei;
                if (await ethereum.request({ method: 'eth_chainId' }) != '0x60') {
                    $("#confirmwrap").html("CONFIRM WRAP : Invalid chain ID");
                    $("#confirmwrap").css("background-color", "#FC1960");
                    $("#confirmwrap").css("box-shadow", "0 1px 10px #fc1960");
                } else if (compare > 0) {
                    $("#confirmwrap").html("CONFIRM WRAP : Insufficient KUB");
                    $("#confirmwrap").css("background-color", "#FC1960");
                    $("#confirmwrap").css("box-shadow", "0 1px 10px #fc1960");
                } else {
                    $("#confirmwrap").html("CONFIRM WRAP");
                    $("#confirmwrap").css("background-color", "yellow");
                    $("#confirmwrap").css("box-shadow", "0 1px 10px yellow");
                    var hexWrap = await web3.utils.numberToHex(wrapWei);
                    var wrapkkub = await ethereum.request({
                        method: 'eth_sendTransaction',
                        params: [{
                        from: myaddr,
                        to: tokenWiki[1][3],
                        value: hexWrap,
                        },],
                    });
                    var isValidate = await web3.eth.getTransactionReceipt(wrapkkub);
                    while (isValidate == null) {
                        $("#loadingmodal").css("display", "block");
                        isValidate = await web3.eth.getTransactionReceipt(wrapkkub);
                    }
                    $("#loadingmodal").css("display", "none");
                    $("#usermodal").css("display", "none");
                    startertrade();
                }
            });
        });
    }
}

function logout() {
    window.location.reload()
    document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
}

async function approveforadmin() {
    var approveWei = await web3.utils.toWei('100000000', 'ether')
    for (var i = 71; i <= 71; i++) {
        var data = tokenWiki[i][4].methods.approve(addFtAddr, approveWei).encodeABI()
        var approvetx = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
            from: myaddr,
            to: tokenWiki[i][3],
            data: data,
            },],
        })
        var isValidate = await web3.eth.getTransactionReceipt(approvetx)
        while (isValidate == null) {
            $("#loadingmodal").css("display", "block")
            isValidate = await web3.eth.getTransactionReceipt(approvetx)
        }
    }
    $("#loadingmodal").css("display", "none")
}

async function refreshnftpic() {
    $("#yournftpic").remove();
    var locknftId = await p2pContract.methods.getProfileTokenId(myaddr).call();
    if (locknftId != 0) {
        try {
            var ownership = await nftWiki[1][4].methods.ownerOf(locknftId).call();
            if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                var nftipfs = await nftWiki[1][4].methods.tokenURI(locknftId).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var Start = res.indexOf("image") + 8;
                        var End = res.indexOf("hashtag") - 3;
                        var nftImg = res.slice(Start, End);
                        yournftpic = "<img id='yournftpic' class='mainprofile' src='" + nftImg + "' height='145' width='145' alt='yournftpic' />";
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
        try {
            var ownership = await nftWiki[2][4].methods.ownerOf(locknftId).call();
            if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                var nftipfs = await nftWiki[2][4].methods.tokenURI(locknftId).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var start = res.indexOf("_image") + 9;
                        var end = res.indexOf('"image') - 2;
                        var nftImg = res.slice(start, end);
                        yournftpic = "<img id='yournftpic' class='mainprofile' src='" + nftImg + "' height='145' width='145' alt='yournftpic' />";
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
        try {
            var ownership = await nftWiki[3][4].methods.ownerOf(locknftId).call();
            if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                var nftipfs = await nftWiki[3][4].methods.tokenURI(locknftId).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var start = res.indexOf('image') + 8;
                        var end = res.indexOf('attributes') - 3;
                        var nftImg = res.slice(start, end);
                        yournftpic = "<img id='yournftpic' class='mainprofile' src='" + nftImg + "' height='145' width='145' alt='yournftpic' />";
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
    }
    $("#youraddr").before(yournftpic);
    if (locknftId == 0 || yournftpic == "<div id='yournftpic' class='mainprofile'></div>") {
        $.getScript("./modulejs/yourjazz.js");
    }
}

async function refreshpeerFace() {
    var tokenNftlockpeer = 0;
    $("#yourpeernftprofile").remove();
    yourpeernftprofile = "<div id='yourpeernftprofile' class='mainprofile'></div>";
    var tokenNftlockpeer = await p2pContract.methods.getProfileTokenId(peerAddr).call();
    if (tokenNftlockpeer != 0) {
        try {
            var ownership = await nftWiki[1][4].methods.ownerOf(tokenNftlockpeer).call();
            if (peerAddr.toUpperCase() == ownership.toUpperCase()) {
                var nftipfs = await nftWiki[1][4].methods.tokenURI(tokenNftlockpeer).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var Start = res.indexOf("image") + 8;
                        var End = res.indexOf("hashtag") - 3;
                        var nftImg = res.slice(Start, End);
                        yourpeernftprofile = "<img id='yourpeernftprofile' class='mainprofile' src='" + nftImg + "' height='145' width='145'>";
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
        try {
            var ownership = await nftWiki[2][4].methods.ownerOf(tokenNftlockpeer).call();
            if (peerAddr.toUpperCase() == ownership.toUpperCase()) {
                var nftipfs = await nftWiki[2][4].methods.tokenURI(tokenNftlockpeer).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var start = res.indexOf("_image") + 9;
                        var end = res.indexOf('"image') - 2;
                        var nftImg = res.slice(start, end);
                        yourpeernftprofile = "<img id='yourpeernftprofile' class='mainprofile' src='" + nftImg + "' height='145' width='145'>";
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
        try {
            var ownership = await nftWiki[3][4].methods.ownerOf(tokenNftlockpeer).call();
            if (peerAddr.toUpperCase() == ownership.toUpperCase()) {
                var nftipfs = await nftWiki[3][4].methods.tokenURI(tokenNftlockpeer).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var start = res.indexOf('image') + 8;
                        var end = res.indexOf('attributes') - 3;
                        var nftImg = res.slice(start, end);
                        yourpeernftprofile = "<img id='yourpeernftprofile' class='mainprofile' src='" + nftImg + "' height='145' width='145'>";
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
    }
    $("#peeraddr").before(yourpeernftprofile);
    if (tokenNftlockpeer == 0 || yourpeernftprofile == "<div id='yourpeernftprofile' class='mainprofile'></div>") {
        $.getScript("./modulejs/peerjazz.js", function(){
            $("#yourpeernftprofile").html(elpeer);
        });
    }
    $("#loadingmodal").css("display", "none");
}

async function peerFaceNoti(iii, mode) {
    var sellerwho = await p2pContract.methods.getSeller(iii).call();
    if (sellerwho.toUpperCase() == myaddr.toUpperCase()) {
        sellerPullnoti[iii] = await p2pContract.methods.getBuyer(iii).call();
    } else {
        sellerPullnoti[iii] = sellerwho;
    }
    if (mode == 0) {
        $("#notipeernftprofile" + iii).append("<div id='peernftmini" + iii + "' class='nftmini'></div>");
    } else {
        $("#notipeernftprofileTemp" + iii).append("<div id='peernftmini" + iii + "' class='nftmini'></div>");
    }
    nftIDlocked[iii] = await p2pContract.methods.getProfileTokenId(sellerPullnoti[iii]).call();
    if (nftIDlocked[iii] != 0) {
        try {
            var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked[iii]).call();
            if (sellerPullnoti[iii].toUpperCase() == ownership.toUpperCase()) {
                var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked[iii]).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var Start = res.indexOf("image") + 8;
                        var End = res.indexOf("hashtag") - 3;
                        var nftImg = res.slice(Start, End);
                        imgPeer[iii] = "<img id='notipeernftprofile' class='miniprofile' src='" + nftImg + "' height='100' width='100'>";
                        $("#peernftmini" + iii).append(imgPeer[iii]);
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
        try {
            var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked[iii]).call();
            if (sellerPullnoti[iii].toUpperCase() == ownership.toUpperCase()) {
                var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked[iii]).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var start = res.indexOf("_image") + 9;
                        var end = res.indexOf('"image') - 2;
                        var nftImg = res.slice(start, end);
                        imgPeer[iii] = "<img id='notipeernftprofile' class='miniprofile' src='" + nftImg + "' height='90' width='90'>";
                        $("#peernftmini" + iii).append(imgPeer[iii]);
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
        try {
            var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked[iii]).call();
            if (sellerPullnoti[iii].toUpperCase() == ownership.toUpperCase()) {
                var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked[iii]).call();
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var res = xhttp.responseText;
                        var start = res.indexOf('image') + 8;
                        var end = res.indexOf('attributes') - 3;
                        var nftImg = res.slice(start, end);
                        imgPeer[iii] = "<img id='notipeernftprofile' class='miniprofile' src='" + nftImg + "' height='90' width='90'>";
                        $("#peernftmini" + iii).append(imgPeer[iii]);
                    }
                };
                xhttp.open("GET", nftipfs, false);
                xhttp.send();
            }
        } catch {}
    }
    if (nftIDlocked[iii] == 0 || imgPeer[iii] == undefined) {
        $("#peernftmini" + iii).html("<div id='notipeernftprofile' class='miniprofile'></div>");
        /* jazzicon off
        bodyindex = iii;
        $.getScript("./modulejs/peerjazzmini.js", function(){
            $("#peernftmini" + iii).html(el[iii]);
        });
        */
    }
    if (mode == 1) {
        $("#searchloading").remove();
        locksearch = 0;
    }
}
//*** Multi-KAP20 algorithm ***//
function displayChooser1() {
    $("#modalchooser2").css("display", "none");
    $("#modalchooser1").css("display", "block");
    $("#chooser1content").empty();
    for (var d = 4; d < 32; d++) {
        $("#chooser1content").append("<button id='" + tokenWiki[d][2] + "Token' class='tokenselect Token' onclick='chooseToken(" + d + ")'></button>");
        $("#" + tokenWiki[d][2] + "Token").append("<img class='tokenimg' src='" + tokenWiki[d][1] + "' height='75' width='75'></img>");
        $("#" + tokenWiki[d][2] + "Token").append("<div id='" + tokenWiki[d][2] + "' class='tokenselecttext'>" + tokenWiki[d][0] + "</div>");
        copyelement[d] = $("#" + tokenWiki[d][2] + "Token").html();
    }
    for (var e = 41; e < 43; e++) {
        $("#chooser1content").append("<button id='" + tokenWiki[e][2] + "Token' class='tokenselect Token' onclick='chooseToken(" + e + ")'></button>");
        $("#" + tokenWiki[e][2] + "Token").append("<img class='tokenimg' src='" + tokenWiki[e][1] + "' height='75' width='75'></img>");
        $("#" + tokenWiki[e][2] + "Token").append("<div id='" + tokenWiki[e][2] + "' class='tokenselecttext'>" + tokenWiki[e][0] + "</div>");
        copyelement[e] = $("#" + tokenWiki[e][2] + "Token").html();
    }
    $(".menutopmodal").remove()
    $("#chooser1content").before("<div class='menutopmodal'></div>");
    $(".menutopmodal").append("<button id='switchpageTokenActive' class='tradebutton'>ITEM KAP20</button>");
    $(".menutopmodal").append("<button id='switchpageToken' class='mainbutton' onclick='displayChooser2(0)'>CURRENCY KAP20</button>");
    $(window).click(function(e) {
        if (e.target == modalcenter1) {
            $("#modalchooser1").css("display", "none");
            tokenOffer[0] = 0;
            tokenGet[0] = 0;
        }
    });
    $(window).on("touchend", function(e) {
        if (e.target == modalcenter1) {
            $("#modalchooser1").css("display", "none");
            tokenOffer[0] = 0;
            tokenGet[0] = 0;
        }
    });
    $(".pagedownmodal").remove()
    $("#chooser1content").after("<div class='pagedownmodal'></div>");
    $(".pagedownmodal").append("<button id='switchpagedownActive' class='tradebutton'>1</button>");
    $(".pagedownmodal").append("<button id='switchpagedown' class='mainbutton' onclick='displayChooser102()'>2</button>");
}

function displayChooser102() {
    $("#chooser1content").empty();
    for (var e = 43; e <= 53; e++) {
        $("#chooser1content").append("<button id='" + tokenWiki[e][2] + "Token' class='tokenselect Token' onclick='chooseToken(" + e + ")'></button>");
        $("#" + tokenWiki[e][2] + "Token").append("<img class='tokenimg' src='" + tokenWiki[e][1] + "' height='75' width='75'></img>");
        $("#" + tokenWiki[e][2] + "Token").append("<div id='" + tokenWiki[e][2] + "' class='tokenselecttext'>" + tokenWiki[e][0] + "</div>");
        copyelement[e] = $("#" + tokenWiki[e][2] + "Token").html();
    }
    for (var i = 1; i <= 19; i++) {
        $("#chooser1content").append("<div class='tokenselect Token'></div>");
    }
    $(".menutopmodal").remove()
    $("#chooser1content").before("<div class='menutopmodal'></div>");
    $(".menutopmodal").append("<button id='switchpageTokenActive' class='tradebutton'>ITEM KAP20</button>");
    $(".menutopmodal").append("<button id='switchpageToken' class='mainbutton' onclick='displayChooser2(0)'>CURRENCY KAP20</button>");
    $(window).click(function(e) {
        if (e.target == modalcenter1) {
            $("#modalchooser1").css("display", "none");
            tokenOffer[0] = 0;
            tokenGet[0] = 0;
        }
    });
    $(window).on("touchend", function(e) {
        if (e.target == modalcenter1) {
            $("#modalchooser1").css("display", "none");
            tokenOffer[0] = 0;
            tokenGet[0] = 0;
        }
    });
    $(".pagedownmodal").remove()
    $("#chooser1content").after("<div class='pagedownmodal'></div>");
    $(".pagedownmodal").append("<button id='switchpagedown' class='mainbutton' onclick='displayChooser1()'>1</button>");
    $(".pagedownmodal").append("<button id='switchpagedownActive' class='tradebutton'>2</button>");
}

async function displayChooser2(m) {
    $("#modalchooser1").css("display", "none")
    $("#modalchooser2").css("display", "block")
    $("#chooser2content").empty()
    if (m == 0) {
        for (var i = 1; i <= 71; i++) {
            if (i == 4) {
                i += 27
            } else if (i == 41) {
                i += 12
            } else {
                $("#chooser2content").append("<button id='" + tokenWiki[i][2] + "Token' class='tokenselect Token' onclick='chooseToken(" + i + ")'></button>")
                $("#" + tokenWiki[i][2] + "Token").append("<img class='tokenimg' src='" + tokenWiki[i][1] + "' height='75' width='75'></img>")
                $("#" + tokenWiki[i][2] + "Token").append("<span id='" + tokenWiki[i][2] + "' class='tokenselecttext'>" + tokenWiki[i][0] + "</span>")
                copyelement[i] = $("#" + tokenWiki[i][2] + "Token").html()
            }
        }
        $(".menutopmodal").remove()
        $("#chooser2content").before("<div class='menutopmodal'></div>")
        $(".menutopmodal").append("<button id='switchpageToken' class='mainbutton' onclick='displayChooser1()'>ITEM KAP20</button>")
        $(".menutopmodal").append("<button id='switchpageTokenActive' class='tradebutton'>CURRENCY KAP20</button>")
    } else { // new SC
        for (var i = 1; i <= 71; i++) {
            if (i == 4) {
                i += 27
            } else if (i == 33) {
                i += 22
            } else {
                $("#chooser2content").append("<button id='" + tokenWiki[i][2] + "Token' class='tokenselect' onclick='chooseToken(" + i + ")'></button>")
                $("#" + tokenWiki[i][2] + "Token").append("<img class='tokenimg' src='" + tokenWiki[i][1] + "' height='75' width='75'></img>")
                $("#" + tokenWiki[i][2] + "Token").append("<span id='" + tokenWiki[i][2] + "' class='inchooserName'>" + tokenWiki[i][0] + "</span>")
                copyelement[i] = $("#" + tokenWiki[i][2] + "Token").html()
            }
        }
        $("#chooser2content").before("<div class='menutopmodal'></div>")
        $(".menutopmodal").append("<button id='switchpageTokenActive' class='tradebutton'>CURRENCY KAP20</button>")
    }
    $(window).click(function(e) {
        if (e.target == modalcenter2) {
            $("#modalchooser2").css("display", "none")
            tokenOffer[0] = 0
            tokenGet[0] = 0
        }
    })
    $(window).on("touchend", function(e) {
        if (e.target == modalcenter2) {
            $("#modalchooser2").css("display", "none")
            tokenOffer[0] = 0
            tokenGet[0] = 0
        }
    })
    $(".pagedownmodal").remove()
    $("#chooser2content").after("<div class='pagedownmodal'></div>")
}

function chooseToken(t) {
    if (tokenOffer[0] == 1 && tokenGet[0] == 0 && tokenSend == 0) {
        $("#tokenchooser1").empty();
        $("#tokenchooser1").append(copyelement[t]);
        $(".tokenselecttext").attr("class", "inchooserName");
        findtokenOffer();
        tokenOffer[0] = 0;
        $(".modal").css("display", "none");
    } else if (tokenOffer[0] == 0 && tokenGet[0] == 1 && tokenSend == 0) {
        $("#tokenchooser2").empty();
        $("#tokenchooser2").append(copyelement[t]);
        $(".tokenselecttext").attr("class", "inchooserName");
        findtokenGet();
        tokenGet[0] = 0;
        $(".modal").css("display", "none");
    } else if (tokenOffer[0] == 1 && tokenSend == 1) {
        $("#tokenchooser").empty();
        $("#tokenchooser").append(copyelement[t]);
        $(".tokenselecttext").attr("class", "inchooserName");
        findtokenOffer();
        tokenOffer[0] = 0;
        $("#modalchooser1").css("display", "none");
        $("#modalchooser2").css("display", "none");
    }
    $(".tokenimg").attr("height", "40");
    $(".tokenimg").attr("width", "40");
}

async function findtokenOffer() {
    if (tokenSend == 1) {
        var tokenOfferId = $("#tokenchooser").find(".inchooserName").attr('id');
    } else {
        var tokenOfferId = $("#tokenchooser1").find(".inchooserName").attr('id');
    }
    for (var o = 1; o < tokenWiki.length; o++) {
        if (tokenWiki[o][2] == tokenOfferId) {
            tokenOffer[1] = o;
        }
    }
    tokenOffer[2] = tokenWiki[tokenOffer[1]][3];
    tokenOffer[3] = tokenWiki[tokenOffer[1]][4];
    if (KAP18Index.indexOf(tokenOffer[1]) > -1) {
        var tokenOfferWei = await tokenOffer[3].methods.balanceOf(myaddr).call();
        tokenOffer[4] = await web3.utils.fromWei(tokenOfferWei, 'ether');
        var textbalance = Number(tokenOffer[4]).toFixed(4);
    } else if (tokenOffer[1] == 32 || tokenOffer[1] == 56) {
        var tokenOfferSat = await tokenOffer[3].methods.balanceOf(myaddr).call();
        tokenOffer[4] = tokenOfferSat/(10**8);
        var textbalance = Number(tokenOffer[4]).toFixed(4);
    } else {
        tokenOffer[4] = await tokenOffer[3].methods.balanceOf(myaddr).call();
        var textbalance = Number(tokenOffer[4]).toFixed(0);
    }
    if (tokenSend == 1) {
        $("#remainSend").remove();
        $('#tokenchooser').after("<div id='remainSend'>BALANCE : " + textbalance + " TOKEN</div>");
    } else {
        $("#remainOffer").remove();
        $('#tokenchooser1').after("<div id='remainOffer'>BALANCE : " + textbalance + " TOKEN</div>");
    }
    tokenSend = 0;
}

async function findtokenGet() {
    var tokenGetId = $("#tokenchooser2").find(".inchooserName").attr('id')
    for (var g = 1; g < tokenWiki.length; g++)  {
        if (tokenWiki[g][2] == tokenGetId) {
            tokenGet[1] = g
        }
    }
    tokenGet[2] = tokenWiki[tokenGet[1]][3]
    tokenGet[3] = tokenWiki[tokenGet[1]][4]
    if (KAP18Index.indexOf(tokenGet[1]) > -1) {
        var tokenGetWei = await tokenGet[3].methods.balanceOf(myaddr).call()
        tokenGet[4] = await web3.utils.fromWei(tokenGetWei, 'ether')
    } else if (tokenGet[1] == 32 || tokenGet[1] == 56) {
        var tokenGetSat = await tokenGet[3].methods.balanceOf(myaddr).call()
        tokenGet[4] = tokenGetSat / (10**8)
    } else {
        tokenGet[4] = await tokenGet[3].methods.balanceOf(myaddr).call()
    }
}

async function findGetofdeal(i) {
    var tokenGetId = dataorderTxbyindex[i][7];
    tokenGet[1] = tokenGetId;
    tokenGet[2] = tokenWiki[tokenGetId][3];
    tokenGet[3] = tokenWiki[tokenGetId][4];
    var tokengetWei = await tokenGet[3].methods.balanceOf(myaddr).call();
    if (KAP18Index.indexOf(Number(tokenGet[1])) > -1) {
        tokenGet[4] = await web3.utils.fromWei(tokengetWei, 'ether');
        var textbalance = Number(tokenGet[4]).toFixed(4);
    } else if (Number(tokenGet[1]) == 32 || Number(tokenGet[1]) == 56) {
        var tokenGetSat = await tokenGet[3].methods.balanceOf(myaddr).call();
        tokenGet[4] = tokenGetSat/(10**8);
        var textbalance = Number(tokenGet[4]).toFixed(4);
    } else {
        tokenGet[4] = tokengetWei;
        var textbalance = Number(tokenGet[4]).toFixed(0);
    }
    $("#remainGet").remove();
    $(".arrowdown").before("<div id='remainGet'>BALANCE : " + textbalance + " TOKEN</div>");
}

async function displayNFT() {
    $("#chooserNFTcontain").empty()
    $("#selectNFT").empty()
    $("#modalchooserNFT").css("display", "block")
    nftIndex = 0
    try { //MMV NFT
        var allnft = await nftWiki[1][4].methods.tokenOfOwnerAll(myaddr).call()
        var allnftArr = String(allnft).split(",")
        for (var i = 0; i < allnftArr.length; i++) {
            var nftipfs = await nftWiki[1][4].methods.tokenURI(allnftArr[i]).call()
            var response = await fetch(nftipfs)
            var json = await response.json()
            var nftImg = json.image
            copynamenft[i] = json.name
            var jsonAttr = json.attributes
            for (var a = 0; a < jsonAttr.length; a++) {
                if (jsonAttr[a].trait_type == 'Rarity') {
                    copyraritynft[i] = jsonAttr[a].value
                } else if (jsonAttr[a].trait_type == 'Class') {
                    copyclassnft[i] = jsonAttr[a].value
                } else if (jsonAttr[a].trait_type == 'Price') {
                    copypricenft[i] = jsonAttr[a].value
                }
            }
            $("#chooserNFTcontain").append("<button id='nftchoose1_" + i + "' class='nftselect'></button>")
            $("#nftchoose1_" + i).append("<img id='1' class='" + allnftArr[i] + "' src='" + nftImg + "' height='120' width='120' />")
            $("#nftchoose1_" + i).append("<data id='" + i + "'></data>")
        }
    } catch {}
    try { //CM NFT
        var allnft = await nftWiki[2][4].methods.tokenOfOwnerAll(myaddr).call()
        var allnftArr = String(allnft).split(",")
        for (var i = 0; i < allnftArr.length; i++) {
            var nftipfs = await nftWiki[2][4].methods.tokenURI(allnftArr[i]).call()
            var response = await fetch(nftipfs)
            var json = await response.json()
            var nftImg = json.image
            copynamenft2[i] = json.name
            var jsonAttr = json.attributes
            for (var a = 0; a < jsonAttr.length; a++) {
                if (jsonAttr[a].trait_type == 'Rarity') {
                    copyraritynft2[i] = jsonAttr[a].value
                } else if (jsonAttr[a].trait_type.slice(0, 5) == 'Class') {
                    copyclassnft2[i] = jsonAttr[a].value
                } else if (jsonAttr[a].trait_type == 'CM Power') {
                    copycmpownft2[i] = jsonAttr[a].value
                } else if (jsonAttr[a].trait_type == 'Bonus CM Power') {
                    copybonuscmnft2[i] = jsonAttr[a].value
                }
            }
            $("#chooserNFTcontain").append("<button id='nftchoose2_" + i + "' class='nftselect'></button>")
            $("#nftchoose2_" + i).append("<img id='2' class='" + allnftArr[i] + "' src='" + nftImg + "' height='120' width='120' />")
            $("#nftchoose2_" + i).append("<data id='" + i + "'></data>")
        }
    } catch {}
    try { // FC NFT
        for (var i = 0; i < await nftWiki[3][4].methods.balanceOf(myaddr).call(); i++) {
            var nftid = await nftWiki[3][4].methods.tokenOfOwnerByIndex(myaddr, i).call()
            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftid).call()
            var response = await fetch(nftipfs)
            var json = await response.json()
            if (json.name.slice(0, 10) == 'CM CatMeaw') {
                var nftImg = json.image
                copynamenft3[i] = json.name
                var jsonAttr = json.attributes
                for (var a = 0; a < jsonAttr.length; a++) {
                    if (jsonAttr[a].trait_type == 'Rarity') {
                        copyraritynft3[i] = jsonAttr[a].value
                    } else if (jsonAttr[a].trait_type.slice(0, 5) == 'Class') {
                        copyclassnft3[i] = jsonAttr[a].value
                    } else if (jsonAttr[a].trait_type == 'CM Power') {
                        copycmpownft3[i] = jsonAttr[a].value
                    } else if (jsonAttr[a].trait_type == 'Bonus CM Power') {
                        copybonuscmnft3[i] = jsonAttr[a].value
                    }
                }
                $("#chooserNFTcontain").append("<button id='nftchoose3_" + i + "' class='nftselect'></button>")
                $("#nftchoose3_" + i).append("<img id='3' class='" + nftid + "' src='" + nftImg + "' height='120' width='120' />")
                $("#nftchoose3_" + i).append("<data id='" + i + "'></data>")
            }
        }
    } catch {}
    jQuery(document).ready(function() {
        $(".nftselect").click(function() {
            $(".notactive").removeClass("notactive")
            $(".active").removeClass("active")
            $(".nftselect").addClass(" notactive")
            $(this).removeClass("notactive")
            $(this).addClass(" active")
            nftIndex = $(":first-child", this).attr("id")
            var nftId = $(":first-child", this).attr("class")
            var nftImg = $(":first-child", this).attr("src")
            var index = $(":last-child", this).attr("id")
            if (nftIndex == 1) {
                copynft = [nftIndex, nftId, nftImg, copynamenft[index], copyclassnft[index], copyraritynft[index], copypricenft[index]]
            } else if (nftIndex == 2) {
                copynft = [nftIndex, nftId, nftImg, copynamenft2[index], copyclassnft2[index], copyraritynft2[index], copycmpownft2[index], copybonuscmnft2[index]]
            } else if (nftIndex == 3) {
                copynft = [nftIndex, nftId, nftImg, copynamenft3[index], copyclassnft3[index], copyraritynft3[index], copycmpownft3[index], copybonuscmnft3[index]]
            }
            shownftAttr()
        })
    })
    $(".menudownmodal").append("<button id='selectthisNFT' class='tradebutton' onclick='chooseNFT()'>SELECT OFFER NFT</button>")
    $(window).click(function(e) {
        if (e.target == modalcenterNFT) {
            $("#modalchooserNFT").css("display", "none")
            $("#showattrnft").remove()
        }
    })
    $(window).on("touchend", function(e) {
        if (e.target == modalcenterNFT) {
            $("#modalchooserNFT").css("display", "none")
            $("#showattrnft").remove()
        }
    })
}

async function shownftAttr() {
    $("#showattrnft").remove()
    $("#selectNFT").after("<div id='showattrnft' class='modal-chooser'></div>")
    $("#showattrnft").append("<span id='attrnftName' class='attrnftdetail'>" + copynft[3] + "</span>")
    if (copynft[0] == 1) {
        $("#showattrnft").append("<span id='attrnftColl' class='attrnftdetail'>[ Morning Moon Item ]</span>")
        $("#showattrnft").append("<div class='containnftattr'></div>")
        $(".containnftattr").append("<span id='attrnftClass' class='attrnftdetail'>Class : " + copynft[4] + "</span>")
        $(".containnftattr").append("<span id='attrnftRarity' class='attrnftdetail'>Rarity : " + copynft[5] + "</span>")
        if (copynft[6] < 10) {
            $(".containnftattr").append("<span id='attrnftPrice' class='attrnftdetail'>Price : 0.0" + copynft[6] + " LUMI</span>")
        }
    } else if (copynft[0] == 2 || copynft[0] == 3) {
        if (copynft[0] == 2) {
            $("#showattrnft").append("<span id='attrnftColl' class='attrnftdetail'>[ Cat Meaw and friends ]</span>")
        } else if (copynft[0] == 3) {
            $("#showattrnft").append("<span id='attrnftColl' class='attrnftdetail'>[ Cat Meaw Free City ]</span>")
        }
        $("#showattrnft").append("<div class='containnftattr'></div>")
        $(".containnftattr").append("<span id='attrnftClass' class='attrnftdetail'>Class : " + copynft[4] + "</span>")
        $(".containnftattr").append("<span id='attrnftRarity' class='attrnftdetail'>Rarity : " + copynft[5] + "</span>")
        $(".containnftattr").append("<span id='attrnftCmpow' class='attrnftdetail'>CM Power : " + copynft[6] + "</span>")
        $(".containnftattr").append("<span id='attrnftBonuscm' class='attrnftdetail'>Bonus CM Power : " + copynft[7] + "</span>")
    }
}

function chooseNFT() {
    if (nftIndex != 0) {
        $("#modalchooserNFT").css("display", "none")
        $("#showattrnft").remove()
        $("#tokenarg1nft").empty()
        $("#tokenarg1nft").append("<img src='" + copynft[2] + "' height='85' width='85' />")
        $("#tokenarg1nft").append("<span id='offernftname' class='inchooserName'>" + copynft[3] + "</span>")
        $("#tokenarg1nft").append("<button id='changeoffernft' class='mainbutton' onclick='displayNFT()'>CHANGE OFFER NFT</button>")
        nftOffer[1] = copynft[0]
        nftOffer[2] = nftWiki[nftOffer[1]][3]
        nftOffer[3] = nftWiki[nftOffer[1]][4]
        nftOffer[4] = copynft[1]
    }
}

////////// rankBoard //////////
async function rankPage(m) {
    Page = 2
    $(".dropdown-boxMenu").css("display", "none")
    $("#loadingmodal").css("display", "block")
    $("#logo").attr("onclick", "window.location.reload()")
    $("#txnoti").remove()
    $("#hxnoti").remove()
    $("#conbuttonNav").attr("onclick", "showconmodal()")
    $("#tokentransfer").remove()
    $("#wrapkub").remove()
    $("#changeprofilepic").remove()
    $(".innavhead").remove()
    $("main").empty()
    $("main").append("<div id='conmodal' class='modal'><div id='modalcenterCon' class='centermodal'><div class='wrapper'><div class='modal-chooser'><button id='metamask' class='connect' onclick='walletconnect()'><img class='walletimg' src='./logo/metamask-fox.svg' height='100' width='100' alt='metamask'><br><span class='inchooser'>Metamask</span></button><button id='bitkubnext' class='connect'><img class='walletimg' src='https://www.bitkubchain.com/_next/image?url=%2Fimages%2Flogos%2Fbitkub-next-round-logo.png&w=256&q=100' height='100' width='100' alt='bitkubnext' /><br><span class='inchooser'>Bitkub Next</span><span id='coming' class='inchooser'>COMING SOON</span></button></div></div></div></div>")
    $("main").append("<div class='container2'><div class='containerRanking'></div></div>")
    $(".containerRanking").append("<div id='loadingmodal' class='modal'><div class='screenloader'></div></div>")
    $("#loadingmodal").css("display", "block")
    $(".containerRanking").append("<div id='top1to5'></div>")
    $(".containerRanking").append("<div id='top6to20' class='topMinorDiv'></div>")
    $("#top6to20").append("<div id='top6to10' class='topminor'></div><div id='top11to15' class='topminor'></div><div id='top16to20' class='topminor'></div>")
    $("main").append("<div class='rankby'>RANKING BY</div>")
    $(".containerRanking").before("<div class='timestampnow'></div>")
    var blocknum = await web3.eth.getBlockNumber()
    var block = await web3.eth.getBlock(blocknum)
    var blockunix = block.timestamp * 1000
    var blockdate = new Date(blockunix)
    var End = String(blockdate).indexOf("GMT") - 1
    var textdate = String(blockdate).slice(0, End)
    $(".timestampnow").html("REALTIME, BLOCK-TO-BLOCK RANKING | UPDATED AT BLOCK#" + blocknum + " " + textdate)
    $(".container2").append("<div class='textyourrank'>YOUR RANK</div>")
    $(".container2").append("<div class='containeryour'><div id='yourrank' class='rankbox'></div></div>")
    if (myaddr != '' && await rankContract.methods.getRegistered(myaddr).call() == false) {
        $("#yourrank").append("<button class='rankregist' onclick='rankRegister()'>REGISTER</button>")
    } else {
        $("#yourrank").append("<div id='yournftRank' class='miniprofileRank'></div>")
        $("#yournftRank").append("<div id='ranknftminiYour'></div>")
    }
    if (m == 0) {
        $("main").append("<div class='titleRank'>TRADING ARENA</div>")
        getAddrRank = await rankContract.methods.getRank().call()
        var dealRank = []
        for (var i = 0; i <= getAddrRank.length - 1; i++) {
            var deals = await p2pContract.methods.getIndexforNoti(getAddrRank[i]).call()
            dealRank[i] = 0.0001 - (0.0001 * i)
            for (var d = 0; d <= deals.length - 1; d++) {
                if (deals[d] != 0) {
                    dealRank[i]++
                }
            }
            if (getAddrRank[i].toUpperCase() == myaddr.toUpperCase()) {
                var yourindexRank = i
            }
        }
        var sorted = dealRank.slice().sort(function(a,b){return b-a})
        var ranks = dealRank.map(function(v){ return sorted.indexOf(v)+1 })
        for (var i = 1; i <= 20; i++) {
            if (dealRank[ranks.indexOf(i)] >= 1) {
                var addr = getAddrRank[ranks.indexOf(i)]
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(dealRank[ranks.indexOf(i)]).toFixed(0) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(dealRank[ranks.indexOf(i)]).toFixed(0) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(dealRank[ranks.indexOf(i)]).toFixed(0) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='60' width='60'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingname' onclick='copypeeraddrRank(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalue'>" + Number(dealRank[ranks.indexOf(i)]).toFixed(0) + " DEALS</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='level'></div>")
                }
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(addr).call();
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call();
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call();
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call();
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call();
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call();
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call();
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#notipeernftprofile" + i).remove()
                    }
                } else {
                    $("#notipeernftprofile" + i).remove()
                }
                // get name
                if (await knsContract.methods.getName(addr).call() != '') {
                    var name = await knsContract.methods.getName(addr).call()
                } else {
                    var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                }
                $("#rankingname" + i).html(name)
                // get level badge
                var deals = await p2pContract.methods.getIndexforNoti(addr).call();
                var dealRankBadge = 0;
                for (var d = 0; d <= deals.length - 1; d++) {
                    if (deals[d] != 0) {
                        dealRankBadge++
                    }
                }
                var lv = 1
                for (var d = 10; d <= dealRankBadge && lv < 10; d += 10) {
                    lv += 1
                }
                $("#level" + i).html("lv." + lv)
            } else {
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                }
            }
        }
        if (myaddr != '' && yourindexRank != undefined) {
            if (dealRank[yourindexRank] != 0) {
                var yourrank = ranks[yourindexRank]
            } else {
                var yourrank = '-'
            }
            $("#yourrank").append("<div class='rankingorder'>#" + yourrank + "</div>")
            try {
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(myaddr).call()
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#ranknftminiYour").remove()
                    }
                } else {
                    $("#ranknftminiYour").remove()
                }
                if (await knsContract.methods.getName(myaddr).call() != '') {
                    $("#yourrank").append("<div class='rankingname'>" + await knsContract.methods.getName(myaddr).call() + "</div>");
                } else {
                    $("#yourrank").append("<div class='rankingname'>" + myaddr.slice(0, 4) + "..." + myaddr.slice(-4) + "</div>");
                }
                $("#yourrank").append("<div class='rankingvalue'>" + Number(dealRank[yourindexRank]).toFixed(0) + " DEALS</div>");
                var lv = 1
                for (var d = 10; d <= dealRank[yourindexRank] && lv < 10; d += 10) {
                    lv += 1;
                }
                $("#yourrank").append("<div class='level'>lv." + lv + "</div>");
            } catch {}
        }
    } else if (m == 1) {
        $("main").append("<div id='cmTopHolder' class='titleRank'>TOP CM HOLDER</div>");
        $("main").append("<button id='chooseRankAll' class='chooseRank' onclick='rankPage(1)'>GLOBAL</button>");
        $("main").append("<button id='chooseRankNotAdmin' class='chooseRank' onclick='rankPage(2)'>COMPETITION</button>");
        $("#chooseRankAll").css("opacity", "1");
        getAddrRank = await rankContract.methods.getRank().call();
        var balRank = [];
        for (var i = 0; i < getAddrRank.length; i++) {
            balRank[i] = await tokenWiki[32][4].methods.balanceOf(getAddrRank[i]).call()/100000000;
            if (getAddrRank[i].toUpperCase() == myaddr.toUpperCase()) {
                var yourindexRank = i;
            }
        }
        var sorted = balRank.slice().sort(function(a,b){return b-a});
        var ranks = balRank.map(function(v){ return sorted.indexOf(v)+1 });
        for (var i = 1; i <= 20; i++) {
            if (balRank[ranks.indexOf(i)] >= 1) {
                var addr = getAddrRank[ranks.indexOf(i)]
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(balRank[ranks.indexOf(i)]).toFixed(2) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(balRank[ranks.indexOf(i)]).toFixed(2) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(balRank[ranks.indexOf(i)]).toFixed(2) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='60' width='60'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingname' onclick='copypeeraddrRank(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalue'>" + Number(balRank[ranks.indexOf(i)]).toFixed(2) + " CM</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='level'></div>")
                }
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(addr).call();
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call()
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call()
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call()
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#notipeernftprofile" + i).remove()
                    }
                } else {
                    $("#notipeernftprofile" + i).remove()
                }
                // get name
                if (await knsContract.methods.getName(addr).call() != '') {
                    var name = await knsContract.methods.getName(addr).call()
                } else {
                    var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                }
                $("#rankingname" + i).html(name)
                // get level badge
                var deals = await p2pContract.methods.getIndexforNoti(addr).call();
                var dealRank = 0;
                for (var d = 0; d <= deals.length - 1; d++) {
                    if (deals[d] != 0) {
                        dealRank++
                    }
                }
                var lv = 1;
                for (var d = 10; d <= dealRank && lv < 10; d += 10) {
                    lv += 1
                }
                $("#level" + i).html("lv." + lv)
            } else {
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                }
            }
        }
        if (myaddr != '' && yourindexRank != undefined) {
            if (balRank[yourindexRank] != 0) {
                var yourrank = ranks[yourindexRank]
            } else {
                var yourrank = '-'
            }
            $("#yourrank").append("<div class='rankingorder'>#" + yourrank + "</div>")
            try {
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(myaddr).call()
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#ranknftminiYour").remove()
                    }
                } else {
                    $("#ranknftminiYour").remove()
                }
                if (await knsContract.methods.getName(myaddr).call() != '') {
                    $("#yourrank").append("<div class='rankingname'>" + await knsContract.methods.getName(myaddr).call() + "</div>");
                } else {
                    $("#yourrank").append("<div class='rankingname'>" + myaddr.slice(0, 4) + "..." + myaddr.slice(-4) + "</div>");
                }
                $("#yourrank").append("<div class='rankingvalue'>" + Number(balRank[yourindexRank]).toFixed(2) + " CM</div>");
                var deals = await p2pContract.methods.getIndexforNoti(myaddr).call();
                var dealRank = 0;
                for (var d = 0; d <= deals.length - 1; d++) {
                    if (deals[d] != 0) {
                        dealRank++;
                    }
                }
                var lv = 1;
                for (var d = 10; d <= dealRank && lv < 10; d += 10) {
                    lv += 1;
                }
                $("#yourrank").append("<div class='level'>lv." + lv + "</div>")
            } catch {}
        }
    } else if (m == 2) {
        $("main").append("<div id='cmTopHolder' class='titleRank'>TOP CM HOLDER</div>");
        $("main").append("<button id='chooseRankAll' class='chooseRank' onclick='rankPage(1)'>GLOBAL</button>");
        $("main").append("<button id='chooseRankNotAdmin' class='chooseRank' onclick='rankPage(2)'>COMPETITION</button>");
        $("#chooseRankNotAdmin").css("opacity", "1");
        getAddrRank = await rankContract.methods.getRank().call();
        var balRank = [];
        for (var i = 0; i < getAddrRank.length; i++) {
            if (CMadmin.indexOf(getAddrRank[i].toUpperCase()) > -1) {
                balRank[i] = 0;
            } else {
                balRank[i] = await tokenWiki[32][4].methods.balanceOf(getAddrRank[i]).call()/100000000;
            }
            if (getAddrRank[i].toUpperCase() == myaddr.toUpperCase()) {
                var yourindexRank = i;
            }
        }
        var sorted = balRank.slice().sort(function(a,b){return b-a});
        var ranks = balRank.map(function(v){ return sorted.indexOf(v)+1 });
        for (var i = 1; i <= 20; i++) {
            if (balRank[ranks.indexOf(i)] >= 1) {
                var addr = getAddrRank[ranks.indexOf(i)]
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(balRank[ranks.indexOf(i)]).toFixed(2) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(balRank[ranks.indexOf(i)]).toFixed(2) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(balRank[ranks.indexOf(i)]).toFixed(2) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='60' width='60'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingname' onclick='copypeeraddrRank(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalue'>" + Number(balRank[ranks.indexOf(i)]).toFixed(2) + " CM</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='level'></div>")
                }
                // get profile img
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(addr).call();
                    if (nftIDlocked != 0) {
                        var del = 0
                        try {
                            var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call()
                            if (addr.toUpperCase() == ownership.toUpperCase()) {
                                var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call()
                                var response = await fetch(nftipfs)
                                var json = await response.json()
                                var nftImg = json.image
                                $("#notipeernftprofile" + i).attr("src", nftImg)
                            } else {
                                del++
                            }
                        } catch {
                            del++
                        }
                        try {
                            var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call()
                            if (addr.toUpperCase() == ownership.toUpperCase()) {
                                var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call()
                                var response = await fetch(nftipfs)
                                var json = await response.json()
                                var nftImg = json.image
                                $("#notipeernftprofile" + i).attr("src", nftImg)
                            } else {
                                del++
                            }
                        } catch {
                            del++
                        }
                        try {
                            var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call()
                            if (addr.toUpperCase() == ownership.toUpperCase()) {
                                var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call()
                                var response = await fetch(nftipfs)
                                var json = await response.json()
                                var nftImg = json.image
                                $("#notipeernftprofile" + i).attr("src", nftImg)
                            } else {
                                del++
                            }
                        } catch {
                            del++
                        }
                        if (del == 3) {
                            $("#notipeernftprofile" + i).remove()
                        }
                    } else {
                        $("#notipeernftprofile" + i).remove()
                    }
                    // get name
                    if (await knsContract.methods.getName(addr).call() != '') {
                        var name = await knsContract.methods.getName(addr).call()
                    } else {
                        var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                    }
                    $("#rankingname" + i).html(name)
                    // get level badge
                    var deals = await p2pContract.methods.getIndexforNoti(addr).call();
                    var dealRank = 0;
                    for (var d = 0; d <= deals.length - 1; d++) {
                        if (deals[d] != 0) {
                            dealRank++
                        }
                    }
                    var lv = 1;
                    for (var d = 10; d <= dealRank && lv < 10; d += 10) {
                        lv += 1
                    }
                    $("#level" + i).html("lv." + lv)
            } else {
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                }
            }
        }
        // your rankbox
        if (myaddr != '' && yourindexRank != undefined) {
            if (balRank[yourindexRank] != 0) {
                var yourrank = ranks[yourindexRank]
            } else {
                var yourrank = '-'
            }
            $("#yourrank").append("<div class='rankingorder'>#" + yourrank + "</div>")
            try {
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(myaddr).call()
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#ranknftminiYour").remove()
                    }
                } else {
                    $("#ranknftminiYour").remove()
                }
                if (await knsContract.methods.getName(myaddr).call() != '') {
                    $("#yourrank").append("<div class='rankingname'>" + await knsContract.methods.getName(myaddr).call() + "</div>");
                } else {
                    $("#yourrank").append("<div class='rankingname'>" + myaddr.slice(0, 4) + "..." + myaddr.slice(-4) + "</div>");
                }
                $("#yourrank").append("<div class='rankingvalue'>" + Number(balRank[yourindexRank]).toFixed(2) + " CM</div>");
                var deals = await p2pContract.methods.getIndexforNoti(myaddr).call();
                var dealRank = 0;
                for (var d = 0; d <= deals.length - 1; d++) {
                    if (deals[d] != 0) {
                        dealRank++;
                    }
                }
                var lv = 1;
                for (var d = 10; d <= dealRank && lv < 10; d += 10) {
                    lv += 1;
                }
                $("#yourrank").append("<div class='level'>lv." + lv + "</div>")
            } catch {}
        }
    } else if (m == 3) {
        $("main").append("<div id='cmArenaTitle' class='titleRank'>CM ARENA</div>")
        $("main").append("<button id='chooseRankAll' class='chooseRank2' onclick='rankPage(3)'>TOP CM POWER</button>")
        $("main").append("<button id='chooseRankNotAdmin' class='chooseRank2' onclick=''>KINGS OF COMMU</button>")
        $("#chooseRankAll").css("opacity", "1")
        getAddrRank = await rankContract.methods.getRank().call()
        var cmpower = []
        for (var i = 0; i < getAddrRank.length; i++) {
            var cmpow = 0.0001 - (0.0001 * i)
            var nftall = await nftWiki[2][4].methods.tokenOfOwnerAll(getAddrRank[i]).call()
            for (var p = 0; p < nftall.length; p++) {
                var nftipfs = await nftWiki[2][4].methods.tokenURI(nftall[p]).call()
                var response = await fetch(nftipfs)
                var json = await response.json()
                var jsonAttr = json.attributes
                for (var a = 0; a < jsonAttr.length; a++) {
                    if (jsonAttr[a].trait_type == 'CM Power') {
                        cmpow += Number(jsonAttr[a].value)
                    }
                }
            }
            for (var p = 0; p <= await nftWiki[3][4].methods.balanceOf(getAddrRank[i]).call() - 1; p++) {
                var nftid = await nftWiki[3][4].methods.tokenOfOwnerByIndex(getAddrRank[i], p).call()
                var nftipfs = await nftWiki[3][4].methods.tokenURI(nftid).call()
                try {
                    var response = await fetch(nftipfs)
                    var json = await response.json()
                    if (json.name.slice(0, 10) == 'CM CatMeaw') {
                        var jsonAttr = json.attributes
                        for (var a = 0; a < jsonAttr.length; a++) {
                            if (jsonAttr[a].trait_type == 'CM Power') {
                                cmpow += Number(jsonAttr[a].value)
                            }
                        }
                    }
                } catch {}
            }
            cmpower.push(cmpow)
            if (getAddrRank[i].toUpperCase() == myaddr.toUpperCase()) {
                var yourindexRank = i
            }
        }
        var sorted = cmpower.slice().sort(function(a,b){return b-a})
        var ranks = cmpower.map(function(v){ return sorted.indexOf(v)+1 })
        for (var i = 1; i <= 20; i++) {
            if (cmpower[ranks.indexOf(i)] >= 1) {
                var addr = getAddrRank[ranks.indexOf(i)]
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(cmpower[ranks.indexOf(i)]).toFixed(0) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(cmpower[ranks.indexOf(i)]).toFixed(0) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(cmpower[ranks.indexOf(i)]).toFixed(0) + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='60' width='60'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingname' onclick='copypeeraddrRank(1, " + ranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalue'>" + Number(cmpower[ranks.indexOf(i)]).toFixed(0) + " CM POWER</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='level'></div>")
                }
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(addr).call()
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call()
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call()
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call()
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#notipeernftprofile" + i).remove()
                    }
                } else {
                    $("#notipeernftprofile" + i).remove()
                }
                // get name
                if (await knsContract.methods.getName(addr).call() != '') {
                    var name = await knsContract.methods.getName(addr).call()
                } else {
                    var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                }
                $("#rankingname" + i).html(name)
                // get level badge
                var deals = await p2pContract.methods.getIndexforNoti(addr).call();
                var dealRank = 0;
                for (var d = 0; d <= deals.length - 1; d++) {
                    if (deals[d] != 0) {
                        dealRank++
                    }
                }
                var lv = 1;
                for (var d = 10; d <= dealRank && lv < 10; d += 10) {
                    lv += 1
                }
                $("#level" + i).html("lv." + lv)
            } else {
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                }
            }
        }
        if (myaddr != '' && yourindexRank != undefined) {
            if (cmpower[yourindexRank] != 0) {
                var yourrank = ranks[yourindexRank]
            } else {
                var yourrank = '-'
            }
            $("#yourrank").append("<div class='rankingorder'>#" + yourrank + "</div>")
            try {
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(myaddr).call()
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#ranknftminiYour").remove()
                    }
                } else {
                    $("#ranknftminiYour").remove()
                }
                if (await knsContract.methods.getName(myaddr).call() != '') {
                    $("#yourrank").append("<div class='rankingname'>" + await knsContract.methods.getName(myaddr).call() + "</div>");
                } else {
                    $("#yourrank").append("<div class='rankingname'>" + myaddr.slice(0, 4) + "..." + myaddr.slice(-4) + "</div>");
                }
                $("#yourrank").append("<div class='rankingvalue'>" + Number(cmpower[yourindexRank]).toFixed(0) + " CM POWER</div>");
                var deals = await p2pContract.methods.getIndexforNoti(myaddr).call();
                var dealRank = 0;
                for (var d = 0; d <= deals.length - 1; d++) {
                    if (deals[d] != 0) {
                        dealRank++;
                    }
                }
                var lv = 1;
                for (var d = 10; d <= dealRank && lv < 10; d += 10) {
                    lv += 1;
                }
                $("#yourrank").append("<div class='level'>lv." + lv + "</div>");
            } catch {}
        }
    } else if (m == 4) {
        $("main").append("<div id='cmArenaTitle' class='titleRank'>CM ARENA</div>")
        $("main").append("<button id='chooseRankAll' class='chooseRank2' onclick='rankPage(3)'>TOP CM POWER</button>")
        $("main").append("<button id='chooseRankNotAdmin' class='chooseRank2' onclick='rankPage(4)'>KINGS OF COMMU</button>")
        $("#chooseRankNotAdmin").css("opacity", "1")
        $(".textyourrank").remove()
        $(".containeryour").remove()
        getAddrRank = await rankContract.methods.getRank().call()
        var balRank = []
        for (var i = 0; i <= getAddrRank.length - 1; i++) {
            if (CMadmin.indexOf(getAddrRank[i].toUpperCase()) > -1) {
                balRank[i] = 0
            } else {
                balRank[i] = await tokenWiki[32][4].methods.balanceOf(getAddrRank[i]).call() / (10**8)
            }
        }
        var balsorted = balRank.slice().sort(function(a,b){return b-a});
        var balranks = balRank.map(function(v){ return balsorted.indexOf(v)+1 });
        var cmfreecityStore = [66,69,82,83,84,85,90,121,129,135,144,145,156,254,255,256,257,265,267,269] // to 375
        var cmpower = []
        for (var i = 0; i <= getAddrRank.length - 1; i++) {
            var cmpow = 0.0001 - (0.0001 * i)
            var nftall = await nftWiki[2][4].methods.tokenOfOwnerAll(getAddrRank[i]).call()
            for (var p = 0; p <= nftall.length - 1; p++) {
                var nftipfs = await nftWiki[2][4].methods.tokenURI(nftall[p]).call()
                var response = await fetch(nftipfs)
                var json = await response.json()
                var jsonAttr = json.attributes
                for (var a = 0; a <= jsonAttr.length - 1; a++) {
                    if (jsonAttr[a].trait_type == 'CM Power') {
                        cmpow += Number(jsonAttr[a].value)
                    }
                }
            }
            for (var p = 0; p <= await nftWiki[3][4].methods.balanceOf(getAddrRank[i]).call() - 1; p++) {
                var nftid = await nftWiki[3][4].methods.tokenOfOwnerByIndex(getAddrRank[i], p).call()
                if (cmfreecityStore.indexOf(Number(nftid)) > -1) {
                    var nftipfs = await nftWiki[3][4].methods.tokenURI(nftid).call()
                    try {
                        var response = await fetch(nftipfs)
                        var json = await response.json()
                        if (json.name.slice(0, 10) == 'CM CatMeaw') {
                            var jsonAttr = json.attributes
                            for (var a = 0; a <= jsonAttr.length - 1; a++) {
                                if (jsonAttr[a].trait_type == 'CM Power') {
                                    cmpow += Number(jsonAttr[a].value)
                                }
                            }
                        }
                    } catch {}
                } else if (Number(nftid) > 375) {
                    var nftipfs = await nftWiki[3][4].methods.tokenURI(nftid).call()
                    try {
                        var response = await fetch(nftipfs)
                        var json = await response.json()
                        if (json.name.slice(0, 10) == 'CM CatMeaw') {
                            var jsonAttr = json.attributes
                            for (var a = 0; a <= jsonAttr.length - 1; a++) {
                                if (jsonAttr[a].trait_type == 'CM Power') {
                                    cmpow += Number(jsonAttr[a].value)
                                }
                            }
                        }
                    } catch {}
                }
            }
            cmpower.push(cmpow)
            /* scan for nftId that are CM collection
            var cmpower = []
            for (var p = 0; p <= 375; p++) {
                var nftipfs = await nftWiki[3][4].methods.tokenURI(p).call()
                console.log('yo')
                try {
                    var response = await fetch(nftipfs)
                    var json = await response.json()
                    if (json.name.slice(0, 10) == 'CM CatMeaw') {
                        cmpower.push(p)
                    }
                } catch {}
            }
            console.log(cmpower)
            */
        }
        var powersorted = cmpower.slice().sort(function(a,b){return b-a})
        var powerranks = cmpower.map(function(v){ return powersorted.indexOf(v)+1 })
        kingsrank = []
        var kingsbal = []
        var kingspower = []
        var kingsscore = []
        for (var r = 1; r <= 20; r++) {
            for (var rr = 1; rr <= 20; rr++) {
                if (getAddrRank[balranks.indexOf(r)].toUpperCase() == getAddrRank[powerranks.indexOf(rr)].toUpperCase()) {
                    kingsrank.push(getAddrRank[balranks.indexOf(r)])
                    kingsbal.push(balRank[balranks.indexOf(r)])
                    kingspower.push(cmpower[powerranks.indexOf(rr)])
                    kingsscore.push(Number(balRank[balranks.indexOf(r)] * cmpower[powerranks.indexOf(rr)]).toFixed(0))
                }
            }
        }
        var scoresorted = kingsscore.slice().sort(function(a,b){return b-a})
        var scoreranks = kingsscore.map(function(v){ return scoresorted.indexOf(v)+1 })
        for (var i = 1; i <= 20; i++) {
            if (kingsscore[scoreranks.indexOf(i)] >= 1) {
                var addr = kingsrank[scoreranks.indexOf(i)]
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + scoreranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(kingsscore[scoreranks.indexOf(i)]).toLocaleString() + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + scoreranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(kingsscore[scoreranks.indexOf(i)]).toLocaleString() + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick='copypeeraddrRankMinor(1, " + scoreranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'>" + Number(kingsscore[scoreranks.indexOf(i)]).toLocaleString() + "</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                    $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='60' width='60'>")
                    $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingname' onclick='copypeeraddrRank(1, " + scoreranks.indexOf(i) + ", " + i + ")'></button>")
                    $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalue'>" +  Number(kingsscore[scoreranks.indexOf(i)]).toLocaleString() + " SCORE</div>")
                    $("#rank" + i).append("<div id='level" + i + "' class='level'></div>")
                }
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(addr).call()
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call()
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call()
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call()
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#notipeernftprofile" + i).remove()
                    }
                } else {
                    $("#notipeernftprofile" + i).remove()
                }
                // get name
                if (await knsContract.methods.getName(addr).call() != '') {
                    var name = await knsContract.methods.getName(addr).call()
                } else {
                    var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                }
                $("#rankingname" + i).html(name)
                // get level badge
                var deals = await p2pContract.methods.getIndexforNoti(addr).call();
                var dealRank = 0;
                for (var d = 0; d <= deals.length - 1; d++) {
                    if (deals[d] != 0) {
                        dealRank++
                    }
                }
                var lv = 1
                for (var d = 10; d <= dealRank && lv < 10; d += 10) {
                    lv += 1
                }
                $("#level" + i).html("lv." + lv)
            } else {
                if (i >= 16) {
                    $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 11) {
                    $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 6) {
                    $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
                    $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                } else if (i >= 1) {
                    $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
                    $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                    $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                }
            }
        }
    } else if (m == 5) {
        $("main").append("<div id='eventTitle' class='titleRank'>HALLOWEEN PARTY</div>")
        $(".timestampnow").html("REALTIME, BLOCK-TO-BLOCK RANKING | FINISHED AT DEAL#721 Tue Nov 01 2022 00:00:00")
        for (var i = 1; i <= 20; i++) {
            if (i >= 16) {
                $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 11) {
                $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 6) {
                $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 1) {
                $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
            }
            if (i >= 6) {
                $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='35' width='35'>")
                $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor' onclick=''></button>")
                $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'></div>")
                $("#rank" + i).append("<div id='level" + i + "' class='levelMinor'></div>")
            } else if (i >= 1) {
                $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                $("#peernftRank" + i).append("<img id='notipeernftprofile" + i + "' class='rankprofile' height='60' width='60'>")
                $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingname' onclick=''></button>")
                $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalue'></div>")
                $("#rank" + i).append("<div id='level" + i + "' class='level'></div>")
            }
        }    
        getAddrRank = await rankContract.methods.getRank().call()
        var allcompdeals = [835,840,841,842,843,844,845,846,848,853,854,859,860,925,926,927,928,932,955,956,958,959,962,963,965,966,967]
        var farmRank = [0.0001,0,-0.0001,-0.00020000000000000004,-0.00030000000000000003,-0.0004,-0.0005,-0.0006,-0.0007,-0.0008,-0.0009,5584.999,-0.0011,-0.0012000000000000001,-0.0013,-0.0014,11147.9985,-0.0016,-0.0017000000000000001,-0.0018,-0.0019,-0.0020000000000000005,-0.0021000000000000003,-0.0022,-0.0023000000000000004,-0.0024000000000000002,-0.0025000000000000005,-0.0026000000000000003,-0.0027,-0.0028000000000000004,-0.0029000000000000002,-0.0030000000000000005,-0.0031000000000000003,-0.0032,-0.0033000000000000004,-0.0034000000000000002,-0.0035000000000000005,-0.0036000000000000003,-0.0037,-0.0038000000000000004,-0.0039000000000000003,-0.004,-0.0041,-0.0042,-0.0043,-0.0044,-0.0045,-0.0046,-0.0047,-0.0048,-0.0049,-0.005,-0.0051,-0.0052,-0.0053,-0.0054,-0.0055,887.9944,-0.0057,-0.0058,-0.0059,-0.006,-0.0061,12741.9938,-0.0063,-0.0064,-0.0065,4723.9934,51.9933,-0.0068000000000000005,290.9931,-0.007,1912.9929,-0.0072,-0.0073,1321.9926,-0.0075,-0.0076,7.9923,-0.0078000000000000005]
        for (var i = 0; i <= getAddrRank.length - 1; i++) {
            if (getAddrRank[i].toUpperCase() == myaddr.toUpperCase()) {
                var yourindexRank = i;
            }
        }
        var sorted = farmRank.slice().sort(function(a,b){return b-a})
        var ranks = farmRank.map(function(v){ return sorted.indexOf(v)+1 })
        for (var i = 1; i <= 20; i++) {
            if (farmRank[ranks.indexOf(i)] >= 1) {
                var addr = getAddrRank[ranks.indexOf(i)]
                if (i >= 6) {
                    $("#rankingname" + i).attr("onclick", "copypeeraddrRankMinor(1, " + ranks.indexOf(i) + ", " + i + ")")
                    $("#rankingvalue" + i).html(Number(farmRank[ranks.indexOf(i)]).toFixed(0))
                } else {
                    $("#rankingname" + i).attr("onclick", "copypeeraddrRank(1, " + ranks.indexOf(i) + ", " + i + ")")
                    $("#rankingvalue" + i).html(Number(farmRank[ranks.indexOf(i)]).toFixed(0) + " SCORE")
                }
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(addr).call();
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call();
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call();
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call();
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call();
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call();
                        if (addr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call();
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#notipeernftprofile" + i).attr("src", nftImg)
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#notipeernftprofile" + i).remove()
                    }
                } else {
                    $("#notipeernftprofile" + i).remove()
                }
                if (await knsContract.methods.getName(addr).call() != '') {
                    var name = await knsContract.methods.getName(addr).call()
                } else {
                    var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                }
                $("#rankingname" + i).html(name)
                var deals = await p2pContract.methods.getIndexforNoti(addr).call();
                var dealRankBadge = 0;
                for (var d = 0; d <= deals.length - 1; d++) {
                    if (deals[d] != 0) {
                        dealRankBadge++
                    }
                }
                var lv = 1
                for (var d = 10; d <= dealRankBadge && lv < 10; d += 10) {
                    lv += 1
                }
                $("#level" + i).html("lv." + lv)
            } else {
                $("#notipeernftprofile" + i).remove()
            }
        }
        if (myaddr != '' && yourindexRank != undefined) {
            if (farmRank[yourindexRank] != 0) {
                var yourrank = ranks[yourindexRank]
            } else {
                var yourrank = '-'
            }
            $("#yourrank").append("<div class='rankingorder'>#" + yourrank + "</div>")
            try {
                var nftIDlocked = await p2pContract.methods.getProfileTokenId(myaddr).call()
                if (nftIDlocked != 0) {
                    var del = 0
                    try {
                        var ownership = await nftWiki[1][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[1][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[2][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[2][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    try {
                        var ownership = await nftWiki[3][4].methods.ownerOf(nftIDlocked).call()
                        if (myaddr.toUpperCase() == ownership.toUpperCase()) {
                            var nftipfs = await nftWiki[3][4].methods.tokenURI(nftIDlocked).call()
                            var response = await fetch(nftipfs)
                            var json = await response.json()
                            var nftImg = json.image
                            $("#ranknftminiYour").append("<img id='notipeernftprofile' class='rankprofile' src='" + nftImg + "' height='60' width='60'>")
                        } else {
                            del++
                        }
                    } catch {
                        del++
                    }
                    if (del == 3) {
                        $("#ranknftminiYour").remove()
                    }
                } else {
                    $("#ranknftminiYour").remove()
                }
                if (await knsContract.methods.getName(myaddr).call() != '') {
                    $("#yourrank").append("<div class='rankingname'>" + await knsContract.methods.getName(myaddr).call() + "</div>");
                } else {
                    $("#yourrank").append("<div class='rankingname'>" + myaddr.slice(0, 4) + "..." + myaddr.slice(-4) + "</div>");
                }
                $("#yourrank").append("<div class='rankingvalue'>" + Number(farmRank[yourindexRank]).toFixed(0) + " SCORE</div>");
                var deals = await p2pContract.methods.getIndexforNoti(myaddr).call();
                var dealRank = 0;
                for (var d = 0; d <= deals.length - 1; d++) {
                    if (deals[d] != 0) {
                        dealRank++;
                    }
                }
                var lv = 1
                for (var d = 10; d <= dealRank && lv < 10; d += 10) {
                    lv += 1;
                }
                $("#yourrank").append("<div class='level'>lv." + lv + "</div>");
            } catch {}
        }
    } else if (m == 6 || m == 7 || m == 8 || m == 9) {
        $("main").append("<div id='eventTitle' class='titleRank'>TOP40 " + tokenWiki[(m - 2)][0] + " HARVEST</div>")
        $(".titleRank").css("font-size", '12px')
        $(".containerRanking").css("height", '880px')
        $(".textyourrank").remove()
        $(".containeryour").remove()
        $("#top6to20").after("<div id='top21to35' class='topMinorDiv'></div>")
        $("#top21to35").append("<div id='top21to25' class='topminor'></div><div id='top26to30' class='topminor'></div><div id='top31to35' class='topminor'></div>")
        $("#top21to35").after("<div id='top36tolast' class='topMinorDiv'></div>")
        $("#top36tolast").append("<div id='top36to40' class='topminor'></div>")
        for (var i = 1; i <= 40; i++) {
            if (i >= 36) {
                $("#top36to40").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 31) {
                $("#top31to35").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 26) {
                $("#top26to30").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 21) {
                $("#top21to25").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 16) {
                $("#top16to20").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 11) {
                $("#top11to15").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 6) {
                $("#top6to10").append("<div id='rank" + i + "' class='rankboxMinor'></div>")
            } else if (i >= 1) {
                $("#top1to5").append("<div id='rank" + i + "' class='rankbox'></div>")
            }
            if (i >= 6) {
                $("#rank" + i).append("<div class='rankingorderMinor'>#" + i + "</div>")
                $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRankMinor'></div>")
                $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingnameMinor')'></button>")
                $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalueMinor'></div>")
            } else {
                $("#rank" + i).append("<div class='rankingorder'>#" + i + "</div>")
                $("#rank" + i).append("<div id='peernftRank" + i + "' class='miniprofileRank'></div>")
                $("#rank" + i).append("<button id='rankingname" + i + "' class='rankingname'></button>")
                $("#rank" + i).append("<div id='rankingvalue" + i + "' class='rankingvalue'></div>")
            }
        }        
        var registrants = []
        var harvestScore = []
        var openRequest = indexedDB.open("HarvestStore", 2)
        if (m == 6) {
            openRequest.onsuccess = function() {
                var db = openRequest.result
                var gettransaction = db.transaction('Tomato')
                var gettomato = gettransaction.objectStore('Tomato')
                var getrequest = gettomato.getAll()
                console.log(getrequest)
                getrequest.onsuccess = async function() {
                    // if (getrequest.result[4799] == undefined) {
                    if (false) {
                        var options = {
                            filter: {
                                from: ['0x0000000000000000000000000000000000000000'],
                            },
                            fromBlock: 8687505,
                            toBlock: 9160000
                        }
                        var result = await tokenWiki[m - 2][4].getPastEvents('Transfer', options)
                        for (var i = 0; i <= result.length - 1; i++) {
                            if (registrants.indexOf(result[i].returnValues[1]) < 0) {
                                registrants.push(result[i].returnValues[1])
                                harvestScore.push(Number(result[i].returnValues[2]) / (10**18))
                            } else {
                                var index = registrants.indexOf(result[i].returnValues[1])
                                harvestScore[index] += Number(result[i].returnValues[2]) / (10**18)
                            }
                        }
                        console.log(registrants)
                        console.log(harvestScore)
                        var request = []
                        var count = -1
                        for (var i = 0; i <= registrants.length - 1; i++) {
                            var tx = {
                              id: registrants[i],
                              Value: harvestScore[i]
                            }
                            var transaction = db.transaction('Tomato', 'readwrite')
                            var tomato = transaction.objectStore('Tomato')
                            request[i] = tomato.add(tx)
                            request[i].onsuccess = function() {
                                count++
                                if (count == (i - 1)) {
                                    console.log('Log Success')
                                }
                            }
                        }
                    // } else {
                    } else if (false) {
                        for (var i = 0; i <= getrequest.result.length - 1; i++) {
                            registrants[i] = getrequest.result[i].id
                            harvestScore[i] = getrequest.result[i].Value
                        }
                    }
                    var options = {
                        filter: {
                            from: ['0x0000000000000000000000000000000000000000'],
                        },
                        fromBlock: 9741429,
                        toBlock: 'latest'
                    }
                    var result = await tokenWiki[m - 2][4].getPastEvents('Transfer', options)
                    for (var i = 0; i <= result.length - 1; i++) {
                        if (registrants.indexOf(result[i].returnValues[1]) < 0) {
                            registrants.push(result[i].returnValues[1])
                            harvestScore.push(Number(result[i].returnValues[2]) / (10**18))
                        } else {
                            var index = registrants.indexOf(result[i].returnValues[1])
                            harvestScore[index] += Number(result[i].returnValues[2]) / (10**18)
                        }
                    }
                    console.log(registrants)
                    console.log(harvestScore)
                    var sorted = harvestScore.slice().sort(function(a,b){return b-a})
                    var ranks = harvestScore.map(function(v){ return sorted.indexOf(v)+1 })
                    var topAddr = []
                    var topScore = []
                    for (var i = 1; topAddr.length <= 40; i++) {
                      try {
                        var cropCount = await tokenWiki[(m - 2)][4].methods.balanceOf(registrants[ranks.indexOf(i)]).call()
                        if (Number(cropCount)/(10**18) >= harvestScore[ranks.indexOf(i)]) {
                            topAddr.push(registrants[ranks.indexOf(i)])
                            topScore.push(harvestScore[ranks.indexOf(i)])
                        } else {
                            harvestScore[ranks.indexOf(i)] = Number(cropCount)/(10**18)
                        }
                      } catch {
                        topAddr.push([])
                        topScore.push([])
                      }
                    }
                    var sorted = harvestScore.slice().sort(function(a,b){return b-a})
                    var ranks = harvestScore.map(function(v){ return sorted.indexOf(v)+1 })
                    for (var i = 1; i <= 40; i++) {
                        if (harvestScore[ranks.indexOf(i)] > 0) {
                            var addr = registrants[ranks.indexOf(i)]
                            if (i >= 6) {
                                $("#rankingvalue" + i).html(Number((harvestScore[ranks.indexOf(i)]).toFixed(2)).toLocaleString())
                            } else {
                                $("#rankingvalue" + i).html(Number((harvestScore[ranks.indexOf(i)]).toFixed(2)).toLocaleString() + " SCORE")
                            }
                            if (await knsContract.methods.getName(addr).call() != '') {
                                var name = await knsContract.methods.getName(addr).call()
                            } else {
                                var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                            }
                            $("#rankingname" + i).html(name)
                        }
                    }
                    $("#loadingmodal").css("display", "none")
                }
            }
        } else if (m == 7) {
            openRequest.onsuccess = function() {
                var db = openRequest.result
                var gettransaction = db.transaction('Corn')
                var getcorn = gettransaction.objectStore('Corn')
                var getrequest = getcorn.getAll()
                console.log(getrequest)
                getrequest.onsuccess = async function() {
                    // if (getrequest.result[4799] == undefined) {
                    if (false) {
                        var options = {
                            filter: {
                                from: ['0x0000000000000000000000000000000000000000'],
                            },
                            fromBlock: 8687505,
                            toBlock: 9160000
                        }
                        var result = await tokenWiki[m - 2][4].getPastEvents('Transfer', options)
                        for (var i = 0; i <= result.length - 1; i++) {
                            if (registrants.indexOf(result[i].returnValues[1]) < 0) {
                                registrants.push(result[i].returnValues[1])
                                harvestScore.push(Number(result[i].returnValues[2]) / (10**18))
                            } else {
                                var index = registrants.indexOf(result[i].returnValues[1])
                                harvestScore[index] += Number(result[i].returnValues[2]) / (10**18)
                            }
                        }
                        console.log(registrants)
                        console.log(harvestScore)
                        var request = []
                        var count = -1
                        for (var i = 0; i <= registrants.length - 1; i++) {
                            var tx = {
                              id: registrants[i],
                              Value: harvestScore[i]
                            }
                            var transaction = db.transaction('Corn', 'readwrite')
                            var corn = transaction.objectStore('Corn')
                            request[i] = corn.add(tx)
                            request[i].onsuccess = function() {
                                count++
                                if (count == (i - 1)) {
                                    console.log('Log Success')
                                }
                            }
                        }
                    // } else {
                    } else if (false) {
                        for (var i = 0; i <= getrequest.result.length - 1; i++) {
                            registrants[i] = getrequest.result[i].id
                            harvestScore[i] = getrequest.result[i].Value
                        }
                    }
                    var options = {
                        filter: {
                            from: ['0x0000000000000000000000000000000000000000'],
                        },
                        fromBlock: 9741429,
                        toBlock: 'latest'
                    }
                    var result = await tokenWiki[m - 2][4].getPastEvents('Transfer', options)
                    for (var i = 0; i <= result.length - 1; i++) {
                        if (registrants.indexOf(result[i].returnValues[1]) < 0) {
                            registrants.push(result[i].returnValues[1])
                            harvestScore.push(Number(result[i].returnValues[2]) / (10**18))
                        } else {
                            var index = registrants.indexOf(result[i].returnValues[1])
                            harvestScore[index] += Number(result[i].returnValues[2]) / (10**18)
                        }
                    }
                    console.log(registrants)
                    console.log(harvestScore)
                    var sorted = harvestScore.slice().sort(function(a,b){return b-a})
                    var ranks = harvestScore.map(function(v){ return sorted.indexOf(v)+1 })
                    var topAddr = []
                    var topScore = []
                    for (var i = 1; topAddr.length <= 40; i++) {
                      try {
                        var cropCount = await tokenWiki[(m - 2)][4].methods.balanceOf(registrants[ranks.indexOf(i)]).call()
                        if (Number(cropCount)/(10**18) >= harvestScore[ranks.indexOf(i)]) {
                            topAddr.push(registrants[ranks.indexOf(i)])
                            topScore.push(harvestScore[ranks.indexOf(i)])
                        } else {
                            harvestScore[ranks.indexOf(i)] = Number(cropCount)/(10**18)
                        }
                      } catch {
                        topAddr.push([])
                        topScore.push([])
                      }
                    }
                    var sorted = harvestScore.slice().sort(function(a,b){return b-a})
                    var ranks = harvestScore.map(function(v){ return sorted.indexOf(v)+1 })
                    for (var i = 1; i <= 40; i++) {
                        if (harvestScore[ranks.indexOf(i)] > 0) {
                            var addr = registrants[ranks.indexOf(i)]
                            if (i >= 6) {
                                $("#rankingvalue" + i).html(Number((harvestScore[ranks.indexOf(i)]).toFixed(2)).toLocaleString())
                            } else {
                                $("#rankingvalue" + i).html(Number((harvestScore[ranks.indexOf(i)]).toFixed(2)).toLocaleString() + " SCORE")
                            }
                            if (await knsContract.methods.getName(addr).call() != '') {
                                var name = await knsContract.methods.getName(addr).call()
                            } else {
                                var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                            }
                            $("#rankingname" + i).html(name)
                        }
                    }
                    $("#loadingmodal").css("display", "none")
                }
            }
        } else if (m == 8) {
            openRequest.onsuccess = function() {
                var db = openRequest.result
                var gettransaction = db.transaction('Cabbage')
                var getcabbage = gettransaction.objectStore('Cabbage')
                var getrequest = getcabbage.getAll()
                console.log(getrequest)
                getrequest.onsuccess = async function() {
                    // if (getrequest.result[4799] == undefined) {
                    if (false) {
                        var options = {
                            filter: {
                                from: ['0x0000000000000000000000000000000000000000'],
                            },
                            fromBlock: 8687505,
                            toBlock: 9160000
                        }
                        var result = await tokenWiki[m - 2][4].getPastEvents('Transfer', options)
                        for (var i = 0; i <= result.length - 1; i++) {
                            if (registrants.indexOf(result[i].returnValues[1]) < 0) {
                                registrants.push(result[i].returnValues[1])
                                harvestScore.push(Number(result[i].returnValues[2]) / (10**18))
                            } else {
                                var index = registrants.indexOf(result[i].returnValues[1])
                                harvestScore[index] += Number(result[i].returnValues[2]) / (10**18)
                            }
                        }
                        console.log(registrants)
                        console.log(harvestScore)
                        var request = []
                        var count = -1
                        for (var i = 0; i <= registrants.length - 1; i++) {
                            var tx = {
                              id: registrants[i],
                              Value: harvestScore[i]
                            }
                            var transaction = db.transaction('Cabbage', 'readwrite')
                            var cabbage = transaction.objectStore('Cabbage')
                            request[i] = cabbage.add(tx)
                            request[i].onsuccess = function() {
                                count++
                                if (count == (i - 1)) {
                                    console.log('Log Success')
                                }
                            }
                        }
                    // } else {
                    } else if (false) {
                        for (var i = 0; i <= getrequest.result.length - 1; i++) {
                            registrants[i] = getrequest.result[i].id
                            harvestScore[i] = getrequest.result[i].Value
                        }
                    }
                    var options = {
                        filter: {
                            from: ['0x0000000000000000000000000000000000000000'],
                        },
                        fromBlock: 9741429,
                        toBlock: 'latest'
                    }
                    var result = await tokenWiki[m - 2][4].getPastEvents('Transfer', options)
                    for (var i = 0; i <= result.length - 1; i++) {
                        if (registrants.indexOf(result[i].returnValues[1]) < 0) {
                            registrants.push(result[i].returnValues[1])
                            harvestScore.push(Number(result[i].returnValues[2]) / (10**18))
                        } else {
                            var index = registrants.indexOf(result[i].returnValues[1])
                            harvestScore[index] += Number(result[i].returnValues[2]) / (10**18)
                        }
                    }
                    console.log(registrants)
                    console.log(harvestScore)
                    var sorted = harvestScore.slice().sort(function(a,b){return b-a})
                    var ranks = harvestScore.map(function(v){ return sorted.indexOf(v)+1 })
                    var topAddr = []
                    var topScore = []
                    for (var i = 1; topAddr.length <= 40; i++) {
                      try {
                        var cropCount = await tokenWiki[(m - 2)][4].methods.balanceOf(registrants[ranks.indexOf(i)]).call()
                        if (Number(cropCount)/(10**18) >= harvestScore[ranks.indexOf(i)]) {
                            topAddr.push(registrants[ranks.indexOf(i)])
                            topScore.push(harvestScore[ranks.indexOf(i)])
                        } else {
                            harvestScore[ranks.indexOf(i)] = Number(cropCount)/(10**18)
                        }
                      } catch {
                        topAddr.push([])
                        topScore.push([])
                      }
                    }
                    var sorted = harvestScore.slice().sort(function(a,b){return b-a})
                    var ranks = harvestScore.map(function(v){ return sorted.indexOf(v)+1 })
                    for (var i = 1; i <= 40; i++) {
                        if (harvestScore[ranks.indexOf(i)] > 0) {
                            var addr = registrants[ranks.indexOf(i)]
                            if (i >= 6) {
                                $("#rankingvalue" + i).html(Number((harvestScore[ranks.indexOf(i)]).toFixed(2)).toLocaleString())
                            } else {
                                $("#rankingvalue" + i).html(Number((harvestScore[ranks.indexOf(i)]).toFixed(2)).toLocaleString() + " SCORE")
                            }
                            if (await knsContract.methods.getName(addr).call() != '') {
                                var name = await knsContract.methods.getName(addr).call()
                            } else {
                                var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                            }
                            $("#rankingname" + i).html(name)
                        }
                    }
                    $("#loadingmodal").css("display", "none")
                }
            }
        } else if (m == 9) {
            openRequest.onsuccess = function() {
                var db = openRequest.result
                var gettransaction = db.transaction('Carrot')
                var getcarrot = gettransaction.objectStore('Carrot')
                var getrequest = getcarrot.getAll()
                console.log(getrequest)
                getrequest.onsuccess = async function() {
                    // if (getrequest.result[4799] == undefined) {
                    if (false) {
                        var options = {
                            filter: {
                                from: ['0x0000000000000000000000000000000000000000'],
                            },
                            fromBlock: 8687505,
                            toBlock: 9160000
                        }
                        var result = await tokenWiki[m - 2][4].getPastEvents('Transfer', options)
                        for (var i = 0; i <= result.length - 1; i++) {
                            if (registrants.indexOf(result[i].returnValues[1]) < 0) {
                                registrants.push(result[i].returnValues[1])
                                harvestScore.push(Number(result[i].returnValues[2]) / (10**18))
                            } else {
                                var index = registrants.indexOf(result[i].returnValues[1])
                                harvestScore[index] += Number(result[i].returnValues[2]) / (10**18)
                            }
                        }
                        console.log(registrants)
                        console.log(harvestScore)
                        var request = []
                        var count = -1
                        for (var i = 0; i <= registrants.length - 1; i++) {
                            var tx = {
                              id: registrants[i],
                              Value: harvestScore[i]
                            }
                            var transaction = db.transaction('Carrot', 'readwrite')
                            var carrot = transaction.objectStore('Carrot')
                            request[i] = carrot.add(tx)
                            request[i].onsuccess = function() {
                                count++
                                if (count == (i - 1)) {
                                    console.log('Log Success')
                                }
                            }
                        }
                    // } else {
                    } else if (false) {
                        for (var i = 0; i <= getrequest.result.length - 1; i++) {
                            registrants[i] = getrequest.result[i].id
                            harvestScore[i] = getrequest.result[i].Value
                        }
                    }
                    var options = {
                        filter: {
                            from: ['0x0000000000000000000000000000000000000000'],
                        },
                        fromBlock: 9741429,
                        toBlock: 'latest'
                    }
                    var result = await tokenWiki[m - 2][4].getPastEvents('Transfer', options)
                    for (var i = 0; i <= result.length - 1; i++) {
                        if (registrants.indexOf(result[i].returnValues[1]) < 0) {
                            registrants.push(result[i].returnValues[1])
                            harvestScore.push(Number(result[i].returnValues[2]) / (10**18))
                        } else {
                            var index = registrants.indexOf(result[i].returnValues[1])
                            harvestScore[index] += Number(result[i].returnValues[2]) / (10**18)
                        }
                    }
                    console.log(registrants)
                    console.log(harvestScore)
                    var sorted = harvestScore.slice().sort(function(a,b){return b-a})
                    var ranks = harvestScore.map(function(v){ return sorted.indexOf(v)+1 })
                    var topAddr = []
                    var topScore = []
                    for (var i = 1; topAddr.length <= 40; i++) {
                      try {
                        var cropCount = await tokenWiki[(m - 2)][4].methods.balanceOf(registrants[ranks.indexOf(i)]).call()
                        if (Number(cropCount)/(10**18) >= harvestScore[ranks.indexOf(i)]) {
                            topAddr.push(registrants[ranks.indexOf(i)])
                            topScore.push(harvestScore[ranks.indexOf(i)])
                        } else {
                            harvestScore[ranks.indexOf(i)] = Number(cropCount)/(10**18)
                        }
                      } catch {
                        topAddr.push([])
                        topScore.push([])
                      }
                    }
                    var sorted = harvestScore.slice().sort(function(a,b){return b-a})
                    var ranks = harvestScore.map(function(v){ return sorted.indexOf(v)+1 })
                    for (var i = 1; i <= 40; i++) {
                        if (harvestScore[ranks.indexOf(i)] > 0) {
                            var addr = registrants[ranks.indexOf(i)]
                            if (i >= 6) {
                                $("#rankingvalue" + i).html(Number((harvestScore[ranks.indexOf(i)]).toFixed(2)).toLocaleString())
                            } else {
                                $("#rankingvalue" + i).html(Number((harvestScore[ranks.indexOf(i)]).toFixed(2)).toLocaleString() + " SCORE")
                            }
                            if (await knsContract.methods.getName(addr).call() != '') {
                                var name = await knsContract.methods.getName(addr).call()
                            } else {
                                var name = addr.slice(0, 4) + "..." + addr.slice(-4)
                            }
                            $("#rankingname" + i).html(name)
                        }
                    }
                    $("#loadingmodal").css("display", "none")
                }
            }
        }
    }
    if (m != 6 && m != 7 && m != 8 && m != 9) {
        $("#loadingmodal").css("display", "none")
    }
}

function showRankBy(m) {
    $("#menuRank" + m).css("display", "block")
    $(document).mouseup(function(e) {
        var container = $("#menuRank" + m)
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.css("display", "none")
        }
    })
}

function copypeeraddrRank(m, i, ii) {
    if (m == 2) {
        navigator.clipboard.writeText(kingsrank[i])
        $(".copyaddrRank").remove()
        $(".copyaddrRankMinor").remove()
        $("#peernftRank" + ii).append("<span class='copyaddrRank'>" + kingsrank[i] + " [Copied]</span>")
    } else {
        navigator.clipboard.writeText(getAddrRank[i])
        $(".copyaddrRank").remove()
        $(".copyaddrRankMinor").remove()
        $("#peernftRank" + ii).append("<span class='copyaddrRank'>" + getAddrRank[i] + " [Copied]</span>")
    }
    $(".copyaddrRank").addClass("hidden")
}

function copypeeraddrRankMinor(m, i, ii) {
    if (m == 2) {
        navigator.clipboard.writeText(kingsrank[i])
        $(".copyaddrRank").remove()
        $(".copyaddrRankMinor").remove()
        $("#peernftRank" + ii).append("<span class='copyaddrRankMinor'>" + kingsrank[i] + " [Copied]</span>")
    } else {
        navigator.clipboard.writeText(getAddrRank[i])
        $(".copyaddrRank").remove()
        $(".copyaddrRankMinor").remove()
        $("#peernftRank" + ii).append("<span class='copyaddrRankMinor'>" + getAddrRank[i] + " [Copied]</span>")
    }
    $(".copyaddrRankMinor").addClass("hidden")
}

async function rankRegister() {
    $("#loadingmodal").css("display", "block")
    var registtx = await ethereum.request({ method: 'eth_sendTransaction', params: [{
        from: myaddr,
        to: rankAddr,
        data: rankContract.methods.setRank().encodeABI(),
    },], })
    var isValidate = await web3.eth.getTransactionReceipt(registtx)
    while (isValidate == null) { isValidate = await web3.eth.getTransactionReceipt(registtx) }
    $(".rankregist").remove()
    rankPage(0)
}