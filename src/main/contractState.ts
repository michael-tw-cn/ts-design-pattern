import {Contract} from "./contract";

export interface ContractState {
    confirm(contract: Contract): void;

    approve(contract: Contract, shouldBeVerified: boolean): void;
}