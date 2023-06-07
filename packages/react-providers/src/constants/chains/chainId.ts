import {
  Sepolia,
  Goerli,
  Mainnet,
  BSC,
  BSCTestnet,
  Polygon,
  Mumbai,
  Avalanche,
  AvalancheTestnet,
  SolanaMainnet,
  SolanaDevnet,
  SolanaTestnet,
  BaseGoerli,
  Arbitrum,
  XinFin,
  Apothem,
} from "../../models/chains";
import { Chain, SolChain } from "../../models/types";

/**
 * @array
 * @description The Default Chains Supported By Cryptogate
 */
export const DEFAULT_SUPPORTED_CHAINS: Chain[] = [
  Sepolia,
  Goerli,
  Mainnet,
  BSC,
  BSCTestnet,
  Polygon,
  Mumbai,
  Avalanche,
  AvalancheTestnet,
  BaseGoerli,
  Arbitrum,
  XinFin,
  Apothem,
];

/**
 * @array
 * @description The Default Chains Supported By Cryptogate
 */
export const DEFAULT_SUPPORTED_SOL_CHAINS: SolChain[] = [
  SolanaMainnet,
  SolanaDevnet,
  SolanaTestnet,
];

/**
 * @enum
 * @description ChainIds Of The Default Chains Supported By Cryptogate
 */
export enum ChainId {
  Mainnet = 1,
  Goerli = 5,
  Sepolia = 11155111,
  BSC = 56,
  BSCTestnet = 97,
  Polygon = 137,
  Mumbai = 80001,
  Avalanche = 43114,
  AvalancheTestnet = 43113,
  BaseGoerli = 84531,
  Arbitrum = 42161,
  XinFin = 50,
  Apothem = 51,
}
