/// <reference types="react" />
import { SuiWallets } from "@cryptogate/react-providers";
declare const SuiWalletListComp: ({ wallets, closeWallet }: {
    wallets: SuiWallets[];
    closeWallet: () => void;
}) => JSX.Element;
export default SuiWalletListComp;
