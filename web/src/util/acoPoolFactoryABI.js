export const acoPoolFactoryABI = 
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "underlying",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "strikeAsset",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "isCall",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "acoPool",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "acoPoolImplementation",
				"type": "address"
			}
		],
		"name": "NewAcoPool",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousAcoFactory",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAcoFactory",
				"type": "address"
			}
		],
		"name": "SetAcoFactory",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "previousAcoFee",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "newAcoFee",
				"type": "uint256"
			}
		],
		"name": "SetAcoPoolFee",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousAcoPoolFeeDestination",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAcoPoolFeeDestination",
				"type": "address"
			}
		],
		"name": "SetAcoPoolFeeDestination",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousAcoPoolImplementation",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAcoPoolImplementation",
				"type": "address"
			}
		],
		"name": "SetAcoPoolImplementation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "oldLendingPool",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newLendingPool",
				"type": "address"
			}
		],
		"name": "SetAcoPoolLendingPool",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "oldLendingPoolReferral",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "newLendingPoolReferral",
				"type": "uint256"
			}
		],
		"name": "SetAcoPoolLendingPoolReferral",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "previousMaximumOpenAco",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "newMaximumOpenAco",
				"type": "uint256"
			}
		],
		"name": "SetAcoPoolMaximumOpenAco",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "poolAdmin",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "previousPermission",
				"type": "bool"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "SetAcoPoolPermission",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "previousUnderlyingPriceAdjustPercentage",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "newUnderlyingPriceAdjustPercentage",
				"type": "uint256"
			}
		],
		"name": "SetAcoPoolUnderlyingPriceAdjustPercentage",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "previousWithdrawOpenPositionPenalty",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "newWithdrawOpenPositionPenalty",
				"type": "uint256"
			}
		],
		"name": "SetAcoPoolWithdrawOpenPositionPenalty",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousAssetConverterHelper",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAssetConverterHelper",
				"type": "address"
			}
		],
		"name": "SetAssetConverterHelper",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "acoCreator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "previousPermission",
				"type": "bool"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "SetAuthorizedAcoCreator",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousChiToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newChiToken",
				"type": "address"
			}
		],
		"name": "SetChiToken",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousDefaultStrategy",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newDefaultStrategy",
				"type": "address"
			}
		],
		"name": "SetDefaultStrategy",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousFactoryAdmin",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newFactoryAdmin",
				"type": "address"
			}
		],
		"name": "SetFactoryAdmin",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "acoCreator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "previousStatus",
				"type": "bool"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "newStatus",
				"type": "bool"
			}
		],
		"name": "SetForbiddenAcoCreator",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "previousPermission",
				"type": "bool"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "SetOperator",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousPoolProxyAdmin",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newPoolProxyAdmin",
				"type": "address"
			}
		],
		"name": "SetPoolProxyAdmin",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "strategy",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "previousPermission",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "SetStrategyPermission",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "strikeAsset",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "previousPermission",
				"type": "bool"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "SetStrikeAssetPermission",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "acoFactory",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "acoPoolBasicData",
		"outputs": [
			{
				"internalType": "address",
				"name": "underlying",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "strikeAsset",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isCall",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "acoPoolFee",
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
		"inputs": [],
		"name": "acoPoolFeeDestination",
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
		"inputs": [],
		"name": "acoPoolImplementation",
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
		"inputs": [],
		"name": "acoPoolMaximumOpenAco",
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
		"inputs": [],
		"name": "acoPoolUnderlyingPriceAdjustPercentage",
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
		"inputs": [],
		"name": "acoPoolWithdrawOpenPositionPenalty",
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
		"inputs": [],
		"name": "assetConverterHelper",
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
		"inputs": [],
		"name": "chiToken",
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
				"internalType": "address",
				"name": "underlying",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "strikeAsset",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isCall",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "baseVolatility",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "poolAdmin",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "strategy",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isPrivate",
				"type": "bool"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "tolerancePriceBelowMin",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "tolerancePriceBelowMax",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "tolerancePriceAboveMin",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "tolerancePriceAboveMax",
						"type": "int256"
					},
					{
						"internalType": "uint256",
						"name": "minStrikePrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxStrikePrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minExpiration",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxExpiration",
						"type": "uint256"
					}
				],
				"internalType": "struct IACOPool2.PoolAcoPermissionConfigV2",
				"name": "acoPermissionConfig",
				"type": "tuple"
			}
		],
		"name": "createAcoPool",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "creators",
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
		"inputs": [],
		"name": "defaultStrategy",
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
		"inputs": [],
		"name": "factoryAdmin",
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
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getAcoCreatorAuthorized",
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
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getAcoCreatorForbidden",
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
		"inputs": [],
		"name": "getNumberOfAcoCreatorsAuthorized",
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
		"inputs": [],
		"name": "getNumberOfAcoCreatorsForbidden",
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
				"internalType": "address",
				"name": "_factoryAdmin",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_acoPoolImplementation",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_acoFactory",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_assetConverterHelper",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_chiToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_acoPoolFee",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_acoPoolFeeDestination",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_acoPoolWithdrawOpenPositionPenalty",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_acoPoolUnderlyingPriceAdjustPercentage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_acoPoolMaximumOpenAco",
				"type": "uint256"
			}
		],
		"name": "init",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lendingPool",
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
		"inputs": [],
		"name": "lendingPoolReferral",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "underlying",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "strikeAsset",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isCall",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "baseVolatility",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "poolAdmin",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "tolerancePriceBelowMin",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "tolerancePriceBelowMax",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "tolerancePriceAboveMin",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "tolerancePriceAboveMax",
						"type": "int256"
					},
					{
						"internalType": "uint256",
						"name": "minStrikePrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxStrikePrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minExpiration",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxExpiration",
						"type": "uint256"
					}
				],
				"internalType": "struct IACOPool2.PoolAcoPermissionConfigV2",
				"name": "acoPermissionConfig",
				"type": "tuple"
			}
		],
		"name": "newAcoPool",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "operators",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "poolAdminPermission",
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
		"name": "poolCount",
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
		"inputs": [],
		"name": "poolProxyAdmin",
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
				"internalType": "address",
				"name": "newAcoFactory",
				"type": "address"
			}
		],
		"name": "setAcoFactory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tolerancePricesBelow",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "tolerancePricesAbove",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "minExpirations",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "maxExpirations",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setAcoPermissionDataOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newAcoPoolFee",
				"type": "uint256"
			}
		],
		"name": "setAcoPoolFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAcoPoolFeeDestination",
				"type": "address"
			}
		],
		"name": "setAcoPoolFeeDestination",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAcoPoolImplementation",
				"type": "address"
			}
		],
		"name": "setAcoPoolImplementation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newLendingPool",
				"type": "address"
			}
		],
		"name": "setAcoPoolLendingPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "newLendingPoolReferral",
				"type": "uint16"
			}
		],
		"name": "setAcoPoolLendingPoolReferral",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newMaximumOpenAco",
				"type": "uint256"
			}
		],
		"name": "setAcoPoolMaximumOpenAco",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "poolAdmin",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "setAcoPoolPermission",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "strategy",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "setAcoPoolStrategyPermission",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newUnderlyingPriceAdjustPercentage",
				"type": "uint256"
			}
		],
		"name": "setAcoPoolUnderlyingPriceAdjustPercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newWithdrawOpenPositionPenalty",
				"type": "uint256"
			}
		],
		"name": "setAcoPoolWithdrawOpenPositionPenalty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newAssetConverterHelper",
				"type": "address"
			}
		],
		"name": "setAssetConverterHelper",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "assetConverters",
				"type": "address[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setAssetConverterOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "acoCreator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "setAuthorizedAcoCreator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "baseVolatilities",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setBaseVolatilityOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newChiToken",
				"type": "address"
			}
		],
		"name": "setChiToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newFactoryAdmin",
				"type": "address"
			}
		],
		"name": "setFactoryAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "feeDestinations",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "fees",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setFeeDataOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "feeDestinations",
				"type": "address[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setFeeDestinationOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "fees",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setFeeOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "acoCreator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "newStatus",
				"type": "bool"
			}
		],
		"name": "setForbiddenAcoCreator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "acoCreator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setForbiddenAcoCreatorOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "lendingPoolReferrals",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setLendingPoolReferralOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "maxExpirations",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setMaxExpirationOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "maximumOpenAcos",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setMaximumOpenAcoOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "minExpirations",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setMinExpirationOnAcoPool",
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
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "setOperator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newDefaultStrategy",
				"type": "address"
			}
		],
		"name": "setPoolDefaultStrategy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newPoolProxyAdmin",
				"type": "address"
			}
		],
		"name": "setPoolProxyAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "lendingPoolReferral",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "withdrawOpenPositionPenalty",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "underlyingPriceAdjustPercentage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maximumOpenAco",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "feeDestination",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "assetConverter",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setProtocolConfigOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "strategy",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setStrategyOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "strikeAsset",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "newPermission",
				"type": "bool"
			}
		],
		"name": "setStrikeAssetPermission",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tolerancePricesAbove",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setTolerancePriceAboveOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tolerancePricesBelow",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setTolerancePriceBelowOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "underlyingPriceAdjustPercentages",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setUnderlyingPriceAdjustPercentageOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "acoCreator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "permission",
				"type": "bool"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setValidAcoCreatorOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "withdrawOpenPositionPenalties",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "setWithdrawOpenPositionPenaltyOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "strategyPermitted",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "strikeAssets",
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
				"name": "newPoolProxyAdmin",
				"type": "address"
			},
			{
				"internalType": "address payable[]",
				"name": "pools",
				"type": "address[]"
			}
		],
		"name": "transferPoolProxyAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable[]",
				"name": "pools",
				"type": "address[]"
			},
			{
				"internalType": "bytes",
				"name": "initData",
				"type": "bytes"
			}
		],
		"name": "updatePoolsImplementation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "asset",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "destination",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "acoPools",
				"type": "address[]"
			}
		],
		"name": "withdrawStuckAssetOnAcoPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]