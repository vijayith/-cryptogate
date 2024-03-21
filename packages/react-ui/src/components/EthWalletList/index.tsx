import WalletListing from "./WalletListing";
import { EvmWallets, useEvm } from "@cryptogate/react-providers";
import Shabakat from "../wallets/Shabakat";
import Metamask from "../wallets/Metamask";
import Brave from "../wallets/Brave";
import Coinbase from "../wallets/Coinbase";
import WalletConnect from "../wallets/WalletConnect";

const EvmWalletListComp = ({ wallets, closeWallet }: { wallets: EvmWallets[]; closeWallet: () => void; }) => {
  const {
    activateBraveWallet,
    activateMetamaskWallet,
    activateCoinbaseWallet,
    activateWalletConnect,
    activateShabakatWallet,
  } = useEvm();

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.SHABAKAT) > -1) && (
          <WalletListing
            heading="Shabakat"
            Icon={<Shabakat />}
            onWalletCall={() => {
              activateShabakatWallet();
              closeWallet();
            }}
          />
        )}

      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.METAMASK) > -1) && (
          <WalletListing
            heading="Metamask"
            Icon={<Metamask />}
            onWalletCall={() => {
              activateMetamaskWallet();
              closeWallet();
            }}
          />
        )}

      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.BRAVEWALLET) > -1) && (
          <WalletListing
            heading="Brave Wallet"
            Icon={<Brave />}
            onWalletCall={() => {
              activateBraveWallet();
              closeWallet();
            }}
          />
        )}

      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.COINBASE) > -1) && (
          <WalletListing
            heading="Coinbase"
            Icon={<Coinbase />}
            onWalletCall={() => {
              activateCoinbaseWallet();
              closeWallet();
            }}
          />
        )}

      {(wallets.indexOf(EvmWallets.ALL) > -1 ||
        wallets.indexOf(EvmWallets.WALLETCONNECT) > -1) && (
          <WalletListing
            heading="Wallet Connect"
            Icon={<WalletConnect />}
            onWalletCall={() => {
              activateWalletConnect();
              closeWallet();
            }}
          />
        )}
    </div>
  );
};

export default EvmWalletListComp;
