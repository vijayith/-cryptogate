import React from "react";
import { EvmAddress } from "../../models/types";
import { WalletContext } from "./context";

interface Props {
  children: React.ReactNode;
}

export type WalletDataType = {
  account: EvmAddress | undefined;
};
/**

Provider component for managing wallet-related data.
@component
@param {Props} props - The component props.
@param {React.ReactNode} props.children - The child components.
@returns {JSX.Element} The rendered component.
@example
<WalletProvider>
<App />
</WalletProvider>
*/
export function WalletProvider({ children }: Props) {
  const [walletData, setWalletData]: [
    WalletDataType,
    React.Dispatch<React.SetStateAction<WalletDataType>>
  ] = React.useState({
    account: undefined,
  } as WalletDataType);
  return (
    <WalletContext.Provider
      value={{
        walletData,
        setWalletData,
      }}
      children={children}
    />
  );
}
