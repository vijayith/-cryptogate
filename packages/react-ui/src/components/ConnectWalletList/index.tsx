import { EthWallets, SolWallets } from "../ConnectWalletComponent";
import EthWalletListComp from "../EthWalletList";
import SolWalletListComp from "../SolWalletList";

const ConnectWalletList = ({
  openOptions,
  setOpenOptions,
  EthWalletList,
  SolWalletList,
}: {
  openOptions: boolean;
  setOpenOptions: any;
  EthWalletList: EthWallets[];
  SolWalletList: SolWallets[];
}) => {
  return (
    <>
      <div
        style={{
          width: 270,
          backgroundColor: "white",
          transition: "0.5s",
          zIndex: 10001,
          position: "fixed",
          right: !openOptions ? -270 : 0,
          marginTop: 50,
          height: "auto",
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
            {EthWalletList.length > 0 && <EthWalletListComp EthWalletList={EthWalletList} />}
            <br />
            {SolWalletList.length > 0 && <SolWalletListComp SolWalletList={SolWalletList} />}
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

export default ConnectWalletList;
