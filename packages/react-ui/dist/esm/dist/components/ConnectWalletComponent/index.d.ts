import React from "react";
import { useDapp } from "@cryptogate/react-providers";
export declare enum EthWallets {
    all = 0,
    metamask = 1,
    walletConnect = 2,
    coinbase = 3
}
export declare enum SolWallets {
    all = 0,
    phantom = 1,
    slope = 2,
    solflare = 3
}
export declare const ConnectWalletComponent: ({ activeComponent, diabledComponent, connectedComponent, networkChainId, message, onSign, EthWalletList, SolWalletList, WalletListStyle, ConnectWalletButtonClass, ConnectWalletButtonText, ConnectMenu, }: {
    activeComponent?: React.ReactNode;
    diabledComponent?: React.ReactNode;
    connectedComponent?: React.ReactNode;
    networkChainId?: number[] | undefined;
    message?: string | undefined;
    onSign?: ((key: {
        address: string;
        message: string;
        signature: string;
        chain: typeof useDapp.ChainId;
    }) => void) | undefined;
    EthWalletList?: EthWallets[] | undefined;
    SolWalletList?: SolWallets[] | undefined;
    WalletListStyle?: {
        top?: any;
        background?: string | undefined;
    } | undefined;
    ConnectWalletButtonClass?: string | undefined;
    ConnectWalletButtonText?: string | undefined;
    ConnectMenu?: boolean | undefined;
}) => JSX.Element;
