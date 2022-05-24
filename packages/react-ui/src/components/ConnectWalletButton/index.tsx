import React from "react";
import { useMultichain } from "@cryptogate/react-providers";
import { useState, useEffect } from "react";
import ConnectMenu from "../ConnectMenu";
import { ethSignMessage } from "@cryptogate/core";
import { setWithExpiry } from "../../localStorage/setWithExpire";
import { getWithExpiry } from "../../localStorage/getWithExpire";
import { useDapp } from "@cryptogate/react-providers";

const { ChainId } = useDapp;

const signingMessage = async (
  account: any,
  library: any,
  SignatureMessage: string
) => {
  return new Promise((resolve, reject) => {
    ethSignMessage({
      account,
      provider: library,
      message: SignatureMessage + "Wallet Address: " + account,
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

export const ConnectWalletButton = ({
  ActiveComponent,
  DiabledComponent,
  ConnectedComponent,
  SignatureMessage,
  NetworkChainIds = [],
  NetworkAlertMessage,
  ConnectMenuFlag,
  onSign,
  setOpenOptions,
}: {
  ActiveComponent: React.ReactNode;
  DiabledComponent?: React.ReactNode;
  ConnectedComponent?: React.ReactNode;
  SignatureMessage: string;
  NetworkChainIds?: number[];
  NetworkAlertMessage: string;
  ConnectMenuFlag: boolean;
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
    chain: typeof ChainId;
  }) => void;
  setOpenOptions: any;
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [keyValue, setKeyValue] = useState(null as unknown as object);
  const { ethereum, network } = useMultichain();
  const { account, library, deactivate } = ethereum;

  useEffect(() => {
    if (account && library) {
      if (
        NetworkChainIds.length == 0 ||
        (NetworkChainIds.length > 0 &&
          (network.network.chainId
            ? NetworkChainIds.includes(network.network.chainId)
            : false))
      ) {
        if (onSign) {
          let key = getWithExpiry(`sig-${account?.toLowerCase()}`);
          if (key) {
            setKeyValue(key);
            onSign(key);
          } else {
            signingMessage(account, library, SignatureMessage).then((key) => {
              setKeyValue(key as any);
              onSign(key as any);
            });
          }
        } else {
          setKeyValue({ address: account });
        }
      } else {
        alert(NetworkAlertMessage);
        deactivate();
      }
    }
  }, [account, library]);

  return account ? (
    <>
      {keyValue && keyValue != {} ? (
        <div onClick={() => setOpenMenu(!openMenu)}>{ConnectedComponent}</div>
      ) : (
        <>{DiabledComponent}</>
      )}
      <ConnectMenu
        onClose={() => {
          setOpenMenu(false);
        }}
        isOpen={ConnectMenuFlag && openMenu}
      />
    </>
  ) : (
    <div
      onClick={() => {
        setOpenOptions(true);
      }}
    >
      {ActiveComponent}
    </div>
  );
};
