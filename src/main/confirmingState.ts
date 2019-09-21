import {ContractState} from "./contractState";
import {Contract} from "./contract";
import {ApprovingState} from "./approvingState";

export class ConfirmingState implements ContractState{
    confirm(contract: Contract): void {
        contract.setState(new ApprovingState());
        contract.recordAction("confirm contract");
    }

    approve(contract: Contract, shouldBeVerified: boolean): void {
    }

}