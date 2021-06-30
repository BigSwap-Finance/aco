export const ropsten = {
    name: "ROPSTEN",
    prodNet: "ETHEREUM",
    iconUrl: "/images/eth_icon.png",
    CHAIN_ID: 3,
    customRpc: null,
    apiUrl: "https://bl37dtsnsc.execute-api.us-east-1.amazonaws.com/dev/",
    subgraphUrl: "https://api.thegraph.com/subgraphs/name/auctusproject/auctus-options-ropsten",
    rpcWssUrl: "wss://ropsten.infura.io/ws/v3/8d03fea006b64542ab9c26af741965b2",
    rpcApiUrl: "https://ropsten.infura.io/v3/8d03fea006b64542ab9c26af741965b2",
    zrxApiUrl: "https://ropsten.api.0x.org/",
    zrxWSSUrl: "wss://ropsten.api.0x.org/sra/v4",
    zrxRequestPerSecond: 3,
    explorerUrl: "https://ropsten.etherscan.io/address/",
    explorerTxUrl: "https://ropsten.etherscan.io/tx/",
    swapUrl: "https://uniswap.exchange/swap?outputCurrency=",
    gasApiUrl: "https://ethgasstation.info/json/ethgasAPI.json",
    gasPriceType: "safeLow",
    defaultGasPrice: 21000000000,
    hasAave: true,
    acoFactoryAddress: "0xf44e41ef2487dff9db6449e299ac8f7c07f7f3ca",
    acoPoolFactoryAddress: "0x7fec33c33a9b9a3a3521ee2eed7196372edb5f00",
    acoFlashExerciseAddress: "0xfa832466086fafb1b9b18ffe462a0998343b75dc",
    acoWriterAddress: "0x6abfce87d849ea772244ebb2cdbc6410d3796baf",
    zrxExchangeAddress: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    multicallAddress: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
    allAcoOtcAddresses: ["0x122fbb55c8cdda2a9f2d5b68a7f84bf6041c57fc"],
    acoBuyerAddress: "0x313c2658574626b75b58b4b2948e7d14c6226f4f",
    acoDistributorAddress: "0xb46ec1f5d9b5a4f53120a0cfb77f59c5abaf5e1b",
    acoRewardAddress: "0x7f9a42b8cff1bfb294917dfeb1c1e177d87d66e7",
    airdropClaimStart: 1617386400,
    acoAssetConverterHelperAddress: "0x3c358fad0d0e0cf0cddc400355d733e715c37ed0",
    auctusAddress: "0xdbb4f48b103e68273efd4a653949f020bda0aeaf",
    usdAddress: "0x0f3aaa63538ea7098d0778264d6d136821c3ca1e",
    wrapperAddress: "0xc778417e063141139fce010982780140aa0cd5ab",
    btcAddress: "0xb52beb1e2d4edb5867f9e051af2ec64a7017426d",
    ethAddress: "0x0000000000000000000000000000000000000000",
    baseAddress: "0x0000000000000000000000000000000000000000",
    usdSymbol: "T06D",
    btcSymbol: "T08D",
    ethSymbol: "ETH",
    baseSymbol: "ETH",
    deprecatedPoolImplementation: [],
    acoVaults: null,
    acoVaultsV2: {"0x258f4b8c6b93221fb9f035d4c8d0cb010f56674c":{"name":"CRV3POOL","img":"logo_crv3pool.svg"}},
    defaultPoolAdmin: "0xf791a034c20fc9cadc1dec0d4a5f9449a88f64a4",
    defaultAcoCreators: ["0xf791a034c20fc9cadc1dec0d4a5f9449a88f64a4"],
    optionsToIgnore: [],
    acoRewardsPools: [{"pid":0,"name":"AUC-ETH UNISWAP LP","image":["/images/pools/eth.png","/images/pools/auc.png"],"address":"0x3a8c3c8Bdcf841A4ee6Fc57222108307d0a7E882","decimals":18,"totalLocked":0,"monthly1kReward":600000,"currentAco":{"aco":"0xbd5e21d2651089a87a70beebcdc0c1a2e96d574e","expiryTime":1632481200,"underlying":"0xDbB4F48B103E68273eFD4a653949f020Bda0aEAf","strikeAsset":"0x0F3aaA63538EA7098D0778264d6D136821C3ca1e","strikePrice":"1000000","isCall":true}},{"pid":1,"name":"WRITE ETH CALL POOL","image":["/images/pools/eth.png"],"address":"0xC16830aE570F1D768D82354A921C4a5e2c8B768E","decimals":18,"totalLocked":2144.38,"monthly1kReward":419701,"currentAco":{"aco":"0xbd5e21d2651089a87a70beebcdc0c1a2e96d574e","expiryTime":1632481200,"underlying":"0xDbB4F48B103E68273eFD4a653949f020Bda0aEAf","strikeAsset":"0x0F3aaA63538EA7098D0778264d6D136821C3ca1e","strikePrice":"1000000","isCall":true}},{"pid":2,"name":"WRITE ETH PUT POOL","image":["/images/pools/eth.png"],"address":"0x73cECF99E49a897396962275230528e7a96d257B","decimals":6,"totalLocked":0,"monthly1kReward":600000,"currentAco":{"aco":"0xbd5e21d2651089a87a70beebcdc0c1a2e96d574e","expiryTime":1632481200,"underlying":"0xDbB4F48B103E68273eFD4a653949f020Bda0aEAf","strikeAsset":"0x0F3aaA63538EA7098D0778264d6D136821C3ca1e","strikePrice":"1000000","isCall":true}},{"pid":3,"name":"WRITE WBTC CALL POOL","image":["/images/pools/wbtc.png"],"address":"0xba257dFb4a621642A3d20C8FF179CD444E31495F","decimals":8,"totalLocked":0,"monthly1kReward":600000,"currentAco":{"aco":"0xbd5e21d2651089a87a70beebcdc0c1a2e96d574e","expiryTime":1632481200,"underlying":"0xDbB4F48B103E68273eFD4a653949f020Bda0aEAf","strikeAsset":"0x0F3aaA63538EA7098D0778264d6D136821C3ca1e","strikePrice":"1000000","isCall":true}},{"pid":4,"name":"WRITE WBTC PUT POOL","image":["/images/pools/wbtc.png"],"address":"0xfE95Bb068Fadc79CE55E096Bb3dcd62204Aa9fe0","decimals":6,"totalLocked":0,"monthly1kReward":300000,"currentAco":{"aco":"0xbd5e21d2651089a87a70beebcdc0c1a2e96d574e","expiryTime":1632481200,"underlying":"0xDbB4F48B103E68273eFD4a653949f020Bda0aEAf","strikeAsset":"0x0F3aaA63538EA7098D0778264d6D136821C3ca1e","strikePrice":"1000000","isCall":true}}],
    acoAirdropAmounts: [{"aco":"0xbd5e21d2651089a87a70beebcdc0c1a2e96d574e","amount":"1000000000000000000000000"}],
    coingeckoPlataform: "ethereum",
    coingeckoBaseAsset: "ethereum",
    menuConfig: { hasAdvanced: true, hasVaults: true, hasOtc: true, hasFarm: true, hasCreateOption: true, hasPoolHistory: true }
}