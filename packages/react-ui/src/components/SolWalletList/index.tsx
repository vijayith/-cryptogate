import WalletListing from "./WalletListing";
import { SolWallets, useSolana } from "@cryptogate/react-providers";
import {
  PhantomWalletAdapter,
  PhantomWalletName,
  SolflareWalletAdapter,
  SolongWalletAdapter,
  SolflareWalletName,
} from "@solana/wallet-adapter-wallets";

const SolWalletListComp = ({ wallets, closeWallet }: { wallets: SolWallets[]; closeWallet: () => void; }) => {
  const { select } = useSolana();

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      {(wallets.indexOf(SolWallets.ALL) > -1 ||
        wallets.indexOf(SolWallets.PHANTOM) > -1) && (
        <WalletListing
          heading="Phantom"
          wallet={new PhantomWalletAdapter()}
          onWalletCall={() => {
            select(PhantomWalletName);
            closeWallet();
          }}
        />
      )}

      {(wallets.indexOf(SolWallets.ALL) > -1 ||
        wallets.indexOf(SolWallets.SOLFLARE) > -1) && (
        <WalletListing
          heading="Solflare"
          wallet={new SolflareWalletAdapter()}
          onWalletCall={() => {
            select(SolflareWalletName);
            closeWallet();
          }}
        />
      )}

      {(wallets.indexOf(SolWallets.ALL) > -1 ||
        wallets.indexOf(SolWallets.SOLFLARE) > -1) && (
        <WalletListing
          heading="Solong"
          wallet={new SolongWalletAdapter()}
          onWalletCall={() => {
            select(SolflareWalletName);
            closeWallet();
          }}
        />
      )}
    </div>
  );
};

export default SolWalletListComp;
