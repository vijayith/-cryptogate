import React from "react";
import {
  useEvm,
  useConfig,
  SolAddress,
  EvmAddress,
  useSolana,
  useSui,
} from "ith-react-providers";
import { ConnectedMenu } from "../ConnectMenu";
import { ethSignMessage } from "@cryptogate/core";
import { setWithExpiry } from "../../localStorage/setWithExpire";
import { getWithExpiry } from "../../localStorage/getWithExpire";
import { ConnectedMenuOptions } from "../ConnectWalletComponent";
import forge from "node-forge";
import { 
  useWallet,
} from "@suiet/wallet-kit";

let pubkey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt+hiFLmuUfqAVEnFb+MQ
SRu5mVQFq2Xhucy/axtxhlxlvbJi9yPKpgbBXusyAVIMnqArZwejBtMTonVus+8f
OS7ncYsm2zLY5MDsWHF0qdO1Zn+HyJOPodkW6wQXbkgowQGtbeb2Au5R12odznxo
jZqyMbBH/j4v8D6KMIB4qkvEe4XFF9/LhOyqqyaQwZRXeMyW5JiGIHXM9h68+jfz
l53IbvrWcBreIi6vAHRZSFxKr5Hmo2xavEyZVf4pgtqAcq5GVBx1Z8368mDpDbSM
1Jrgfbjx3E/GPULEY9YfRwZEi5f06+oRkX9KL8T92scXhhmY4NwQxhy/dX2ll11b
YwIDAQAB
-----END PUBLIC KEY-----`;

const signingEvmMessage = async (
  account: EvmAddress,
  provider: any,
  SignatureMessage: string,
  LocalStorage: boolean,
  isSmart: boolean
) => {
  return new Promise((resolve, reject) => {
    ethSignMessage({
      account,
      provider: provider,
      message: SignatureMessage,
    })
      .then((sig: any) => {
        if (isSmart) {
          const rsa = forge.pki.publicKeyFromPem(pubkey);
          const encrypted = rsa.encrypt(
            sig?.address?.toLowerCase(),
            "RSA-OAEP"
          );
          let encrypted_data = forge.util.encode64(encrypted);
          sig = {
            address: sig?.address,
            signature: encrypted_data,
            message: encrypted_data,
            issmart: true,
          };
        } else {
          sig.issmart = false;
        }
        LocalStorage &&
          setWithExpiry(`sig-${account.toLowerCase()}`, sig, 43200000);
        resolve(sig);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const signingSolMessage = async (
  fn: any,
  pubK: SolAddress,
  SignatureMessage: string,
  LocalStorage: boolean
) => {
  return new Promise((resolve, reject) => {
    const message = new TextEncoder().encode(SignatureMessage);
    fn(message)
      .then((sig: any) => {
        const sigObj = {
          message: new TextDecoder().decode(message),
          signature: JSON.stringify(sig),
          address: pubK.toString(),
        };
        LocalStorage &&
          setWithExpiry(`sig-${pubK.toString()}`, sigObj, 43200000);
        resolve(sigObj);
      })
      .catch((e: any) => {
        reject(e);
      });
  });
};

const signingSuiMessage = async (
  fn: any,
  address: string,
  SignatureMessage: string,
  LocalStorage: boolean,
  isZKLogin: boolean
) => {
  return new Promise((resolve, reject) => {
    const message = new TextEncoder().encode(SignatureMessage);
    fn({ message })
      .then((result: any) => {
        let sigObj = {};
        if (isZKLogin) {
          const rsa = forge.pki.publicKeyFromPem(pubkey);
          const encrypted = rsa.encrypt(address?.toLowerCase(), "RSA-OAEP");
          let encrypted_data = forge.util.encode64(encrypted);
          sigObj = {
            message: encrypted_data,
            signature: encrypted_data,
            address: address.toString(),
            iszkl: true,
          };
        } else {
          sigObj = {
            message: new TextDecoder().decode(message),
            signature: result.messageBytes + "." + result.signature,
            address: address.toString(),
            iszkl: false,
          };
        }
        LocalStorage &&
          setWithExpiry(`sig-${address.toString()}`, sigObj, 43200000);
        resolve(sigObj);
      })
      .catch((e: any) => {
        reject(e);
      });
  });
};

export const ConnectWalletButton = ({
  ActiveComponent,
  DisabledComponent,
  ConnectedComponent,
  SignatureMessage,
  NetworkAlertMessage,
  ChosenConnectedMenu,
  onSign,
  Store,
  setOpenOptions,
  LocalStorage,
}: {
  ActiveComponent: React.ReactNode;
  DisabledComponent: React.ReactNode;
  ConnectedComponent: React.ReactNode;
  SignatureMessage: { msg: string; address: boolean; timestamp: boolean };
  NetworkAlertMessage: string;
  ChosenConnectedMenu: ConnectedMenuOptions;
  Store: { Tokens?: string[]; NFTs?: string[] };
  onSign?: (key: {
    address: string;
    message: string;
    signature: string;
  }) => void;
  LocalStorage: boolean;
  setOpenOptions: any;
}) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [keyValue, setKeyValue] = React.useState(null as unknown as object);

  const { ethConfig, solConfig, suiConfig } = useConfig();
  const {
    account,
    network,
    provider,
    deactivate,
  }: {
    account: any;
    network: any;
    provider: any;
    deactivate: any;
  } = useEvm();
  const {
    publicKey,
    connected: solConnected,
    wallet: { signMessage: signSolMessage },
  } = useSolana();
  const {
    address,
    connected: suiConnected,
    signMessage: signSuiMessage
  } = useSui();

   // Get access to the connected wallet
   const wallet = useWallet();
  

  React.useEffect(() => {
    if (ethConfig && account && provider) {
      const signFunction = () => {
        if (onSign) {
          let key = getWithExpiry(`sig-${account?.toLowerCase()}`);
          if (key) {
            setKeyValue(key);
            onSign(key);
          } else {
            // return message , signature & address
            signingEvmMessage(
              account,
              provider,
              `${SignatureMessage.msg.trim()}${
                SignatureMessage.address ? account.toString().toLowerCase() : ""
              }${SignatureMessage.timestamp ? "ts-" + Date.now() : ""}`.trim(),
              LocalStorage,
              provider.isCoinbaseWallet || provider?.provider?.isCoinbaseWallet
            )
              .then((key) => {
                setKeyValue(key as any);
                onSign(key as any);
              })
              .catch((err: any) => {
                console.log(err);
              });
          }
        } else {
          setKeyValue({ address: account });
        }
      };

      if (
        ethConfig.allowedNetworks &&
        ethConfig.allowedNetworks.length &&
        ethConfig.allowedNetworks.filter(
          (chain) => chain?.chainId == network.chainId
        ).length
      ) {
        if (provider.isCoinbaseWallet || provider?.provider?.isCoinbaseWallet) {
          setKeyValue({ address: account });
          setTimeout(() => {
            signFunction();
          }, 2000);
        } else {
          signFunction();
        }
      } else {
        alert(NetworkAlertMessage);
        deactivate();
      }
    }
  }, [ethConfig, account, provider]);

  React.useEffect(() => {
    if (solConfig && publicKey && solConnected) {
      if (onSign) {
        let key = getWithExpiry(`sig-${publicKey.toString()}`);
        if (key) {
          setKeyValue(key);
          onSign(key);
        } else {
          signingSolMessage(
            signSolMessage,
            publicKey as SolAddress,
            `${SignatureMessage.msg.trim()}${
              SignatureMessage.address ? publicKey.toString().toLowerCase() : ""
            }${SignatureMessage.timestamp ? "ts-" + Date.now() : ""}`.trim(),
            LocalStorage
          ).then((key) => {
            setKeyValue(key as any);
            onSign(key as any);
          });
        }
      } else {
        setKeyValue({ address: account });
      }
    }
  }, [solConfig, publicKey, solConnected]);

  React.useEffect(() => {
    if (suiConfig && address && suiConnected) {
      if (onSign) {
        let key = getWithExpiry(`sig-${address.toString()}`);
        if (key) {
          setKeyValue(key);
          onSign(key);
        } else {
          signingSuiMessage(
            signSuiMessage,
            address,
            `${SignatureMessage.msg.trim()}${
              SignatureMessage.address ? address.toString().toLowerCase() : ""
            }${SignatureMessage.timestamp ? "ts-" + Date.now() : ""}`.trim(),
            LocalStorage,
            wallet.name === 'Sui Wallet'
          ).then((key) => {
            setKeyValue(key as any);
            onSign(key as any);
          });
        }
      } else {
        setKeyValue({ address: address });
      }
    }
  }, [suiConfig, address, suiConnected]);

  return (account && provider) ||
    (address && suiConnected) ||
    (publicKey && solConnected) ? (
    <>
      {keyValue ? (
        <div onClick={() => setOpenMenu(!openMenu)}>{ConnectedComponent}</div>
      ) : (
        <>{DisabledComponent}</>
      )}
      <ConnectedMenu
        ChosenConnectedMenu={ChosenConnectedMenu}
        Store={Store}
        onClose={() => {
          setOpenMenu(false);
        }}
        isOpen={openMenu}
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
