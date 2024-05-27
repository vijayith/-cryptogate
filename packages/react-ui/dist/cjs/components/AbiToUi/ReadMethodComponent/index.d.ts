import { ContractABIUnit, EvmAddress } from "ith-react-providers";
import "./ReadMethodComponent.module.css";
declare const ReadMethodComponent: ({ method, contractObj, methodData, }: {
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
}) => import("react/jsx-runtime").JSX.Element;
export default ReadMethodComponent;
