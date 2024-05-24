import { useConfig } from "ith-react-providers";
import EvmWalletListComp from "../EthWalletList";
import SolWalletListComp from "../SolWalletList";
import SuiWalletListComp from "../SuiWalletList";

export const ConnectWalletList = ({
  openOptions,
  setOpenOptions,
}: {
  openOptions: boolean;
  setOpenOptions: any;
}) => {
  const { ethConfig, solConfig, suiConfig } = useConfig();

  const handleWalletClick = () => {
    setOpenOptions(false);
  };

  return (
    <div
      style={{
        display: openOptions ? "block" : "none",
        position: "fixed",
        zIndex: 1000,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        overflow: "auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#fefefe",
          margin: "10% auto",
          padding: "20px 0",
          border: "1px solid #888",
          width: "80%",
          maxWidth: "500px",
          borderRadius: "16px",
          position: "relative",
        }}
      >
        <div style={{ padding: "10px 15px", borderBottom: "1px solid #ddd", position: "relative" }}>
          <h2 style={{ color: "black", fontWeight: "bold", display: "inline-block" }}>
            Connect a Wallet
          </h2>
          <span
            style={{
              color: "#aaa",
              position: "absolute",
              top: "10px",
              right: "15px",
              fontSize: "28px",
              fontWeight: "bold",
              cursor: "pointer",
              lineHeight: "24px"
            }}
            onClick={() => setOpenOptions(false)}
          >
            &times;
          </span>
        </div>
        <div style={{ padding: "15px", maxHeight: "300px", overflowY: "auto" }}>
          {ethConfig?.wallets && (
            <EvmWalletListComp wallets={ethConfig.wallets} closeWallet={handleWalletClick} />
          )}
          {solConfig?.wallets && (
            <SolWalletListComp wallets={solConfig.wallets} closeWallet={handleWalletClick} />
          )}
          {suiConfig?.wallets && (
            <SuiWalletListComp wallets={suiConfig.wallets} closeWallet={handleWalletClick} />
          )}
        </div>
        <div
          style={{
            padding: "10px 15px",
            borderTop: "1px solid #ddd",
            textAlign: "left",
            fontSize: "13px",
            lineHeight: "16px",
          }}
        >
          By Connecting your wallet you agree to our{" "}
          <span style={{ color: "black", fontWeight: "bold" }}>terms and conditions and our privacy policy</span>
        </div>
      </div>
    </div>
  );
};
