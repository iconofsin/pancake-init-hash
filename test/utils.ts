import { ethers } from "hardhat";
import { PancakeFactory, PancakeFactory__factory } from "../typechain";
import { PancakePair, PancakePair__factory } from "../typechain"
import { PancakeRouter, PancakeRouter__factory } from "../typechain"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { providers } from 'ethers'

interface PancakeFactoryDeployProps {
    setter: string,
    deployer: SignerWithAddress | providers.JsonRpcSigner;
}

interface PancakePairDeployProps {
    deployer: SignerWithAddress | providers.JsonRpcSigner
}

interface PancakeRouterDeployProps {
    deployer: SignerWithAddress | providers.JsonRpcSigner,
    factory: string,
    weth: string
}

export const deployPancakeRouter = 
    async (deployProps: PancakeRouterDeployProps): Promise<PancakeRouter> => {
        const prFactory =
            (await ethers.getContractFactory('PancakeRouter', deployProps.deployer)) as PancakeRouter__factory

        const pr = await prFactory.deploy(deployProps.factory, deployProps.weth)

        await pr.deployed()

        return pr
    }

export const deployPancakeFactory = 
    async (deployProps: PancakeFactoryDeployProps): Promise<PancakeFactory> => {
        const pfFactory =
            (await ethers.getContractFactory('PancakeFactory', deployProps.deployer)) as PancakeFactory__factory

        const pf = await pfFactory.deploy(deployProps.setter)

        await pf.deployed()

        return pf
    }

export const deployPancakePair =
    async (deployProps: PancakePairDeployProps): Promise<PancakePair> => {
        const ppFactory =
            (await ethers.getContractFactory('PancakePair', deployProps.deployer)) as PancakePair__factory

        const pp = await ppFactory.deploy()

        await pp.deployed()

        return pp
    }
