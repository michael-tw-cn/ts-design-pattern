import {ContractState} from "./contractState";
import {Contract} from "./contract";

export class VerifyingState implements ContractState{
    approve(contract: Contract, shouldBeVerified: boolean): void {
    }

    confirm(contract: Contract): void {
    }

}