import chai from 'chai'
import { solidity } from 'ethereum-waffle'
import { PancakeFactory, PancakeRouter } from '../typechain'
import { deployPancakeFactory, deployPancakeRouter } from './utils'
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from 'hardhat'
import { BigNumber, Contract } from "ethers";
import { utils } from 'ethers'
import { isCallTrace } from 'hardhat/internal/hardhat-network/stack-traces/message-trace';

chai.use(solidity)
const { expect } = chai

describe('INIT', () => {
    let pancakeFactory: PancakeFactory
    let pancakeRouter: PancakeRouter
    // pancake beneficiary
    let pancakeSetter: SignerWithAddress
    // pancake deployer
    let pancaker: SignerWithAddress

    let owner: SignerWithAddress

    before(async () => {
        [owner, pancaker, pancakeSetter] = await ethers.getSigners()

        pancakeFactory = await deployPancakeFactory({ deployer: pancaker, setter: pancakeSetter.address })
    })

    it('returns factory init code pair hash', async () => {
        console.log("Factory Init Code Pair Hash: ", await pancakeFactory.callStatic.INIT_CODE_PAIR_HASH())
    })
})
