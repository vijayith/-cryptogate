import ConnectWalletButton from "../ConnectWalletButton";
import ConnectWalletList from "../ConnectWalletList";
import { useState } from "react";

const ConnectWalletComponent = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const EthWallets = {
    metamask: true,
    coinbase: true,
    fortmatic: true,
    walletConnect: true,
  };
  const SolWallets = {
    phantom: true,
    slope: true,
    solflare: true,
  };

  return (
    <>
      <ConnectWalletButton setOpenOptions={setOpenOptions} />
      {openOptions ? (
        <ConnectWalletList
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          EthWallets={EthWallets}
          SolWallets={SolWallets}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default ConnectWalletComponent;
