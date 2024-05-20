import { ContractABIUnit, EvmAddress } from "ith-react-providers";
import "./WriteMethodComponent.module.css";
declare const WriteMethodComponent: ({ method, contractObj, methodData, gasPrice, gasLimit, }: {
    method: ContractABIUnit;
    contractObj: {
        address: EvmAddress;
        abi: ContractABIUnit[];
    };
    methodData?: {
        [name: string]: {
            description: string;
            gasLimit: number;
        };
    };
    gasPrice?: string;
    gasLimit?: number;
}) => import("react/jsx-runtime").JSX.Element;
export default WriteMethodComponent;
