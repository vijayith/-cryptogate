/// <reference types="react" />
import { EvmWallets } from "@cryptogate/react-providers";
declare const EvmWalletListComp: ({ wallets, closeWallet }: {
    wallets: EvmWallets[];
    closeWallet: () => void;
}) => JSX.Element;
export default EvmWalletListComp;
