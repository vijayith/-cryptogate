import { ConnectedMenuOptions } from "../ConnectWalletComponent";
export declare const ConnectedMenu: ({ ChosenConnectedMenu, onClose, onDisconnect, isOpen, Store, }: {
    ChosenConnectedMenu: ConnectedMenuOptions;
    onClose: any;
    isOpen: boolean;
    onDisconnect?: any;
    Store?: {
        Tokens?: string[];
        NFTs?: string[];
    };
}) => import("react/jsx-runtime").JSX.Element;
