import React from "react";
export declare enum ConnectedMenuOptions {
    NOMENU = "nomenu",
    WALLETINFORMATION = "walletinformation",
    STORE = "store"
}
export declare const ConnectWalletComponent: ({ ActiveComponent, DisabledComponent, ConnectedComponent, SignatureMessage, NetworkAlertMessage, ConnectedMenuChosen, Store, onSign, LocalStorage, }: {
    ActiveComponent?: React.ReactNode;
    DisabledComponent?: React.ReactNode;
    ConnectedComponent?: React.ReactNode;
    SignatureMessage?: {
        msg: string;
        address: boolean;
        timestamp: boolean;
    };
    NetworkAlertMessage?: string;
    ConnectedMenuChosen?: ConnectedMenuOptions;
    Store?: {
        Tokens?: string[];
        NFTs?: string[];
    };
    onSign?: (key: {
        address: string;
        message: string;
        signature: string;
    }) => void;
    LocalStorage?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
