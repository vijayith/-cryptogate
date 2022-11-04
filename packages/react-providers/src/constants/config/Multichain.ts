import { MultiChainProviderConfigProps } from "../../providers"

export const DEFAULT_NODE_URLS = {
    pocket: "-",
    ankr: "-"
}

export const DEFAULT_ETH_CONFIG = {
    readOnlyUrls: {}
}

export const DEFAULT_MULTICHAIN_CONFIG: MultiChainProviderConfigProps = {
    ethConfig: DEFAULT_ETH_CONFIG
}