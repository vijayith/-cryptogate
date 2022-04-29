import { useMultichain } from "@cryptogate/react-providers";
import { useState, useEffect } from "react";
import Identicon from "../Identicon";
import ConnectMenu from "../ConnectMenu";
import { ethSignMessage } from "@cryptogate/core";
import { setWithExpiry } from "../../localStorage/setWithExpire";
import { getWithExpiry } from "../../localStorage/getWithExpire";

const defaultStyle = {
  backgroundColor: "#0d0d0d",
  color: "white",
  padding: "4px 10px",
  borderWidth: 1,
  borderRadius: "5px",
  height: "auto",
};

const signingMessage = async (account: any, signer: any, message: string) => {
  return new Promise((resolve, reject) => {
    ethSignMessage({
      account,
      signer,
      message,
    })
      .then((sig) => {
        setWithExpiry(`sig-${account.toLowerCase()}`, sig, 43200000);
        resolve(getWithExpiry(`sig-${account.toLowerCase()}`));
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const index = ({
  setOpenOptions,
  onSign,
  message,
}: {
  setOpenOptions: any;
  onSign: any;
  message: string;
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { ethereum } = useMultichain();
  const { account, library } = ethereum;

  useEffect(() => {
    if (account && library) {
      if (onSign) {
        let key = getWithExpiry(`sig-${account.toLowerCase()}`);
        if (key) {
          onSign(key);
        } else {
          signingMessage(account, library, message).then((key) => onSign(key));
        }
      }
    }
  }, [account, library]);

  return account ? (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: "15px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            border: "2px solid #fff",
            height: "45px",
            width: "46px",
            paddingLeft: "0.05rem",
            paddingTop: "0.03rem",
          }}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Identicon />
        </div>
      </div>
      <ConnectMenu
        onClose={() => {
          setOpenMenu(false);
        }}
        isOpen={openMenu}
      />
    </>
  ) : (
    <button
      style={defaultStyle}
      onClick={() => {
        setOpenOptions(true);
      }}
    >
      Connect Wallet
    </button>
  );
};

export default index;
