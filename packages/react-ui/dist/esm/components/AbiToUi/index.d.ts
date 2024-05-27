import { ContractABIUnit, EvmAddress } from "ith-react-providers";
export declare const AbiToUi: ({ contract, address, abi, methodData, gasPrice, gasLimit, }: {
    contract?: string;
    address?: EvmAddress;
    abi?: ContractABIUnit[];
    methodData?: {
        [name: string]: {
            description: string;
            gasLimit: number;
        };
    };
    gasPrice?: string;
    gasLimit?: number;
}) => import("react/jsx-runtime").JSX.Element;
