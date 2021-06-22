import { getWeb3, sendTransactionWithNonce, sendTransaction } from '../web3Methods'
import { isBaseAsset } from '../constants'
import { erc20ABI } from './erc20ABI'
import { baseAsset } from '../network'


export const getERC20AssetInfo = (assetAddress) => {
    return new Promise((resolve, reject) => {
        if (isBaseAsset(assetAddress)) {
            var base = baseAsset()
            resolve({address: assetAddress, name: (base.symbol === "ETH" ? "Ethereum" : base.symbol), symbol: base.symbol, decimals: base.decimals})
        }
        else {
            var _web3 = getWeb3()
            var assetContract = new _web3.eth.Contract(erc20ABI, assetAddress)
            var promises = []
            promises.push(assetContract.methods.name().call())
            promises.push(assetContract.methods.symbol().call())
            promises.push(assetContract.methods.decimals().call())
            Promise.all(promises).then(result => {
                resolve({address: assetAddress, name: result[0], symbol: result[1], decimals: result[2]})
            })
            .catch(err => reject(err))
        }
    })
}

export function allowDeposit(from, value, token, to, nonce) {
    const _web3 = getWeb3()
    const tokenContract = new _web3.eth.Contract(erc20ABI, token)
    var data = tokenContract.methods.approve(to, value).encodeABI()
    if (nonce != null) {
        return sendTransactionWithNonce(null, null, from, token, null, data, null, nonce)
    }
    else {
        return sendTransaction(null, null, from, token, null, data, null)
    }
}

export function allowance(from, token, to) {
    const _web3 = getWeb3()
    const tokenContract = new _web3.eth.Contract(erc20ABI, token)
    return tokenContract.methods.allowance(from, to).call()
}

export function balanceOf(erc20Address, userAddress) {
    const _web3 = getWeb3()
    const erc20Contract = new _web3.eth.Contract(erc20ABI, erc20Address)
    return erc20Contract.methods.balanceOf(userAddress).call()
}