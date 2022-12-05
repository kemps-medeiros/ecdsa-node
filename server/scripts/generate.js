const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils")



const privateKey = secp.utils.randomPrivateKey();

const publicKey = secp.getPublicKey(privateKey)

console.log("privte key: ", toHex(privateKey))
console.log("public key: ", toHex(publicKey))

//public key
// 04503ed8c28106d066e8446821545551f6bd87bb1fa2d7ab5730d6a8b77a0ea79489d0fe020f162a3ec69c195f4e2437fe868ba337f1d720a415f0e91d5ac934b2
// private key 
// 2dde4c24162e2659a161ac0b1c228fd870b99d4379bd89aefe45bcd628a3a8a8

//public key
// 04c462699a4a03897700fa46c06e9f50e025b41d35b68d47c7fb5a37e6314e7424f09b80be0d2343a71aeb205e5ad24f22c268e0d1bdf6760b6e79bddda42f486d
// private key 
// 7ddda16cd973d44ce538756ad6e69c823f1493167e17da765774602f4a2e3b8c

//public key
// 0442ed08ff93f3439d922025e0ce351010363ef2eb2dac5f7a9854eaea741f4330d15b8f709ac05a0dbb5fbaed0de43eaeb65b0f62f1c9efd11fa2ed75fff71f24
// private key 
// f35e9cab3209c2ed0f59c6184080f7c4b0df6254c434329d589fb8cade2f02b9


