import { EvmWallets } from "ith-react-providers";
declare const EvmWalletListComp: ({ wallets, closeWallet }: {
    wallets: EvmWallets[];
    closeWallet: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export default EvmWalletListComp;
