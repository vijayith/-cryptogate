import { SuiWallets } from "ith-react-providers";
declare const SuiWalletListComp: ({ wallets, closeWallet }: {
    wallets: SuiWallets[];
    closeWallet: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export default SuiWalletListComp;
