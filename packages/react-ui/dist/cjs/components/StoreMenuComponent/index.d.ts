declare const index: ({ onDisconnect, Store, }: {
    onDisconnect: any;
    Store?: {
        Tokens?: string[];
        NFTs?: string[];
    };
}) => import("react/jsx-runtime").JSX.Element;
export default index;
