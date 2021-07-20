require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rifle magic concert grace inhale flock solid'; 
let testAccounts = [
"0x6db22607292417146c83461676904180739a9284d9dcd4b7be53a0723aa46247",
"0xa08a813f2c276980838f863a8db75fd6c2e81e7bf10290b9872fd0fc0d8689bd",
"0xe68ba2554ec939833bde973aa49b2bfcc1854705eaecf5a5385cd0925c42aa1e",
"0x346c436d054e6b46aea0dcf04c19c44cd42bdd49f02e0bcafdf6d778a77110c3",
"0xb16738d1b84230fe284198c0533da4158b65a3866da71f8a05ae49d92b43b2d8",
"0x40dd66142f7a4473cdd5480ed0e6e8f980fa95445cad848dc8381d920115a3e2",
"0x39f397a69b109fb2340bd9c2a1f2d3e786436ff62646dc40d9df783fd29eab26",
"0x752697b21aa2e6dfd63b48619462f2096ae27a94f8089100e2c5be20559c7ac2",
"0xc678529f85c907b76b401760f3ec3d4d7d06e1c41ea5ea563625020852609ab8",
"0xd9a059b4f0105e54ddd62369a7f9446126bf82c97216f26a3f0e154d4bc218cc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

