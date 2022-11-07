import { Chain } from "./Chain";
import { EvmAddress } from "./common";

export type NodeUrls = {
    [chainId: number]: string
}

export type ContractIO = {
    internalType: string,
    name: string,
    type: string
}

export type ContractABIUnit = {
    inputs: ContractIO[],
    name: string,
    outputs: ContractIO[],
    stateMutability: string,
    type: string
}

export type EthContract = {
    name: string,
    abi: ContractABIUnit[];
    addresses: { [chainId: number]: EvmAddress }
}

export type EthConfig = {
    allowedNetworks?: (Chain | undefined)[];
    readOnlyUrls: NodeUrls;
    contractList?: EthContract[];
}
