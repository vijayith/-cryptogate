import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import { EvmAddress, ContractABIUnit } from 'ith-react-providers';

declare enum ConnectedMenuOptions {
    NOMENU = "nomenu",
    WALLETINFORMATION = "walletinformation",
    STORE = "store"
}
declare const ConnectWalletComponent: ({ ActiveComponent, DisabledComponent, ConnectedComponent, SignatureMessage, NetworkAlertMessage, ConnectedMenuChosen, Store, onSign, LocalStorage, }: {
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
}) => react_jsx_runtime.JSX.Element;

declare const Identicon: ({ walletAddress, diameter, }: {
    walletAddress?: string;
    diameter?: number;
}) => react_jsx_runtime.JSX.Element;

declare const ConnectedMenu: ({ ChosenConnectedMenu, onClose, onDisconnect, isOpen, Store, }: {
    ChosenConnectedMenu: ConnectedMenuOptions;
    onClose: any;
    isOpen: boolean;
    onDisconnect?: any;
    Store?: {
        Tokens?: string[];
        NFTs?: string[];
    };
}) => react_jsx_runtime.JSX.Element;

declare const AbiToUi: ({ contract, address, abi, methodData, gasPrice, gasLimit, }: {
    contract?: string;
    address?: EvmAddress;
    abi?: ContractABIUnit[];
    methodData?: {
        [name: string]: {
            description: string;
            gasLimit: number;
        };
    };
    gasPrice?: string;
    gasLimit?: number;
}) => react_jsx_runtime.JSX.Element;

declare const getWithExpiry: (key: any) => any;

declare const setWithExpiry: (key: any, value: any, ttl: any) => void;

export { AbiToUi, ConnectWalletComponent, ConnectedMenu, ConnectedMenuOptions, Identicon, getWithExpiry, setWithExpiry };
