import { useConfig } from "@cryptogate/react-providers";
import EvmWalletListComp from "../EthWalletList";
import SolWalletListComp from "../SolWalletList";
import ShabakatComp from "../Shabakat";

/**

ConnectWalletList is a React component that displays a list of available wallet providers for connecting a wallet.
@param {Object} props - The component props.
@param {boolean} props.openOptions - A boolean indicating whether the options should be open or closed.
@param {function} props.setOpenOptions - A function to update the openOptions state.
@returns {React.ReactNode} The rendered ConnectWalletList component.
*/
export const ConnectWalletList = ({
  openOptions,
  setOpenOptions,
}: {
  openOptions: boolean;
  setOpenOptions: any;
}) => {
  const { ethConfig, solConfig } = useConfig();

  return (
    <>
      <div
        style={{
          width: 270,
          top: 0,
          backgroundColor: "white",
          transition: "0.5s",
          zIndex: 10001,
          position: "fixed",
          right: !openOptions ? -270 : 0,
          maxHeight: "100%",
          overflowY: "auto",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          boxShadow: "1px 1px 2px 2px #888888",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "10px",
            maxHeight: "100%",
            overflowY: "auto",
          }}
          onClick={() => setOpenOptions(false)}
        >
          <div style={{ marginRight: 10 }}>
            <p
              style={{
                fontSize: "14px",
                color: "black",
              }}
            >
              Connect with one of the available wallet providers.
            </p>
            <br />
            {ethConfig?.wallets && (
              <EvmWalletListComp wallets={ethConfig.wallets} />
            )}
            {solConfig?.wallets && (
              <SolWalletListComp wallets={solConfig.wallets} />
            )}
            <ShabakatComp />
          </div>
        </div>
      </div>
      {openOptions && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            zIndex: 10000,
            position: "fixed",
            left: 0,
          }}
          onClick={() => setOpenOptions(false)}
        />
      )}
    </>
  );
};
