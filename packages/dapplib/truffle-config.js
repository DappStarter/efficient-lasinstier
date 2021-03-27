require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn pulse gesture opera fortune tragic'; 
let testAccounts = [
"0x5e65aece4f2b58dc3ba5a6156390cb996d0eb2ab567c5f9b4e621b31319ac854",
"0xb8be07b0116cd4692a35d023c5de5a544802b1ffd2cd81c6477d3706643d1d25",
"0x687249fbbbeeed11735ddc7e8aa24eff4321cf1067bfcc0b1deb3508cd962db8",
"0xb6910f0944b2ddcee706df8926be50e35304bbe3320ce3b729d063ea647764da",
"0x648422d93ea011e96f904ae4c9cb2ce69b210c5f9c2931a5f70823f3869ed4c8",
"0xcdaf03b0e478d6c443f90b7059ab66c6e7948611be6308d914d3538a1e8a1d11",
"0x3dfdfa833a665bc14a9efa6e0179fc005afaa77c70797b61de7f97d18279c1aa",
"0xe7112eae4f29f4a4080eb98e2196fe3867fc6f8a4e5ebd60948ae5d34f31ad57",
"0xe1ba6f9e4b82a0840318993ef7a95b3cd0d6ff9b3b7b0f14edd8d8884e58433e",
"0x89f4015ca4e313b9a4f326d031a1c9bde08bc56832268e72623191776f713fd7"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
