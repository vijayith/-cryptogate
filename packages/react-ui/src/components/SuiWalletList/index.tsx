import WalletListing from "./WalletListing";
import { SuiWallets, useSui } from "ith-react-providers";
import Suiet from "../wallets/Suiet";
import Ethos from "../wallets/Ethos";
import Sui from "../wallets/Sui";

const SuiWalletListComp = ({ wallets, closeWallet }: { wallets: SuiWallets[]; closeWallet: () => void; }) => {
  const { select } = useSui();

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      {(wallets.indexOf(SuiWallets.ALL) > -1 ||
        wallets.indexOf(SuiWallets.SUIET) > -1) && (
          <WalletListing
            heading="Suiet"
            Icon={<Suiet />}
            onWalletCall={() => {
              select("Suiet");
              closeWallet();
            }}
          />
        )}

      {/* {(wallets.indexOf(SuiWallets.ALL) > -1 ||
        wallets.indexOf(SuiWallets.SUI) > -1) && (
          <WalletListing
            heading="Sui Wallet"
            Icon={<Sui />}
            onWalletCall={() => {
              select("Sui Wallet");
              closeWallet();
            }}
          />
        )} */}

      {(wallets.indexOf(SuiWallets.ALL) > -1 ||
        wallets.indexOf(SuiWallets.ETHOS) > -1) && (
          <WalletListing
            heading="Ethos"
            Icon={<Ethos />}
            onWalletCall={() => {
              select("Ethos Wallet");
              closeWallet();
            }}
          />
        )}
    </div>
  );
};

export default SuiWalletListComp;
