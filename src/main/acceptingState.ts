import {ContractState} from "./contractState";
import {Contract} from "./contract";

export class AcceptingState implements ContractState{
    approve(contract: Contract, shouldBeVerified: boolean): void {
    }

    confirm(contract: Contract): void {
    }

}