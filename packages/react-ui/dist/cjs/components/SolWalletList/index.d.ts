/// <reference types="react" />
import { SolWallets } from "@cryptogate/react-providers";
declare const SolWalletListComp: ({ wallets, closeWallet }: {
    wallets: SolWallets[];
    closeWallet: () => void;
}) => JSX.Element;
export default SolWalletListComp;
