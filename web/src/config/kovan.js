export const kovan = {
    name: "KOVAN",
    prodNet: "ETHEREUM",
    iconUrl: "/images/eth_icon.png",
    CHAIN_ID: 42,
    customRpc: null,
    apiUrl: "https://bl37dtsnsc.execute-api.us-east-1.amazonaws.com/dev/",
    subgraphUrl: "https://api.thegraph.com/subgraphs/name/auctusproject/auctus-options-kovan",
    rpcWssUrl: "wss://kovan.infura.io/ws/v3/8d03fea006b64542ab9c26af741965b2",
    rpcApiUrl: "https://kovan.infura.io/v3/8d03fea006b64542ab9c26af741965b2",
    zrxApiUrl: "https://kovan.api.0x.org/",
    zrxWSSUrl: null,
    zrxRequestPerSecond: 3,
    explorerUrl: "https://kovan.etherscan.io/address/",
    explorerTxUrl: "https://kovan.etherscan.io/tx/",
    swapUrl: "https://uniswap.exchange/swap?outputCurrency=",
    gasApiUrl: "https://ethgasstation.info/json/ethgasAPI.json",
    gasPriceType: "safeLow",
    defaultGasPrice: 21000000000,
    hasAave: true,
    acoFactoryAddress: "0x53661cec8d21b1c5f362b05f682070f3f6116c55",
    acoPoolFactoryAddress: "0xd5f37ae12385184752a9cecdbe57f12253c973b9",
    acoFlashExerciseAddress: "0x9c8362ab1c13c083bafc2451158eb16fc0567499",
    acoWriterAddress: "0x817020d326ac4ab9e17f228879b3b4aabe0685b3",
    zrxExchangeAddress: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    multicallAddress: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
    allAcoOtcAddresses: ["0x17ee535ede5495c48116030f7e09c09c49ab03fc","0xd81d59562f6564db5d31e9fb0ce7209d8977b83c"],
    acoBuyerAddress: "0x57830677a9221fd2eaf53d4fe9e10cdc89fa584b",
    acoDistributorAddress: "0x28aee9950b9c57bc7f6320289386a267a555ca63",
    acoRewardAddress: "0x65a110347947f5e0f6a2cb29e49c630deb3c00b4",
    airdropClaimStart: 1617386400,
    acoAssetConverterHelperAddress: "0x17cfa4985c2eae700a5a2e8634e3d2ca0d240a24",
    auctusAddress: "0xa24cbf0e7596b3601b01045791a73897b39068e4",
    usdAddress: "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    wrapperAddress: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
    btcAddress: "0x4000132b399b6c85e465b60c9d897b6745149fee",
    ethAddress: "0x0000000000000000000000000000000000000000",
    baseAddress: "0x0000000000000000000000000000000000000000",
    usdSymbol: "USDC",
    btcSymbol: "T08D",
    ethSymbol: "ETH",
    baseSymbol: "ETH",
    deprecatedPoolImplementation: ["0xf77fc0c2a21cf44047fdf45115901389eab9240a","0x77ad4ffe20f32b88d3bf915450c0b4a2ede59a81","0x65b83b913d0f0a4f6d82d0903de09c31f5e2e56c","0xea0c6266863209d045de9dfee1b5438e595e739b"],
    acoVaults: {"0x0e76b8cc3b16a3f1dd286550d05d489b5cf00456":{"name":"CRV3POOL","img":"logo_crv3pool.svg"}},
    acoVaultsV2: {"0x49a98a7547fcae51744e14fbe23cc60520a9fff5":{"name":"CRV3POOL","img":"logo_crv3pool.svg"}},
    defaultPoolAdmin: "0xf791a034c20fc9cadc1dec0d4a5f9449a88f64a4",
    defaultAcoCreators: ["0xf791a034c20fc9cadc1dec0d4a5f9449a88f64a4"],
    optionsToIgnore: [],
    acoRewardsPools: [{"pid":0,"name":"AUC-ETH UNISWAP LP","image":["/images/pools/eth.png","/images/pools/auc.png"],"address":"0x8044dA67E8c813d83F2205229027CBB2655C0979","decimals":18,"totalLocked":0,"monthly1kReward":600000,"currentAco":{"aco":"0xD036F35507533Ac5caFd71B34E9fFD833d7B732A","expiryTime":1632481200,"underlying":"0xA24CbF0e7596B3601b01045791a73897B39068E4","strikeAsset":"0xe22da380ee6B445bb8273C81944ADEB6E8450422","strikePrice":"750000","isCall":true}},{"pid":1,"name":"WRITE ETH CALL POOL","image":["/images/pools/eth.png"],"address":"0xC16830aE570F1D768D82354A921C4a5e2c8B768E","decimals":18,"totalLocked":2144.38,"monthly1kReward":419701,"currentAco":{"aco":"0xD036F35507533Ac5caFd71B34E9fFD833d7B732A","expiryTime":1632481200,"underlying":"0xA24CbF0e7596B3601b01045791a73897B39068E4","strikeAsset":"0xe22da380ee6B445bb8273C81944ADEB6E8450422","strikePrice":"750000","isCall":true}},{"pid":2,"name":"WRITE ETH PUT POOL","image":["/images/pools/eth.png"],"address":"0x73cECF99E49a897396962275230528e7a96d257B","decimals":6,"totalLocked":0,"monthly1kReward":600000,"currentAco":{"aco":"0xD036F35507533Ac5caFd71B34E9fFD833d7B732A","expiryTime":1632481200,"underlying":"0xA24CbF0e7596B3601b01045791a73897B39068E4","strikeAsset":"0xe22da380ee6B445bb8273C81944ADEB6E8450422","strikePrice":"750000","isCall":true}},{"pid":3,"name":"WRITE WBTC CALL POOL","image":["/images/pools/wbtc.png"],"address":"0xba257dFb4a621642A3d20C8FF179CD444E31495F","decimals":8,"totalLocked":0,"monthly1kReward":600000,"currentAco":{"aco":"0xD036F35507533Ac5caFd71B34E9fFD833d7B732A","expiryTime":1632481200,"underlying":"0xA24CbF0e7596B3601b01045791a73897B39068E4","strikeAsset":"0xe22da380ee6B445bb8273C81944ADEB6E8450422","strikePrice":"750000","isCall":true}},{"pid":4,"name":"WRITE WBTC PUT POOL","image":["/images/pools/wbtc.png"],"address":"0xfE95Bb068Fadc79CE55E096Bb3dcd62204Aa9fe0","decimals":6,"totalLocked":0,"monthly1kReward":300000,"currentAco":{"aco":"0xD036F35507533Ac5caFd71B34E9fFD833d7B732A","expiryTime":1632481200,"underlying":"0xA24CbF0e7596B3601b01045791a73897B39068E4","strikeAsset":"0xe22da380ee6B445bb8273C81944ADEB6E8450422","strikePrice":"750000","isCall":true}}],
    acoAirdropAmounts: [{"aco":"0xd036f35507533ac5cafd71b34e9ffd833d7b732a","amount":"1000000000000000000000000"},{"aco":"0x3ed41d263dd947783709cd80e08727d085f3ff91","amount":"7000000000000000000000000"},{"aco":"0x81d048a3ab3617d07c93e48214b641f314d2c14f","amount":"2000000000000000000000000"},{"aco":"0x55cffc43cff76e4541cb0a875232ee628f11db3c","amount":"1000000000000000000000000"}],
    coingeckoPlataform: "ethereum",
    coingeckoBaseAsset: "ethereum",
    menuConfig: { hasAdvanced: true, hasVaults: true, hasOtc: true, hasFarm: true, hasCreateOption: true, hasPoolHistory: true }
}